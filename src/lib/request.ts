/**
 * Request Utilities
 * 
 * Provides timeout handling, request queuing, and graceful shutdown.
 */

// ============================================
// TIMEOUT UTILITIES
// ============================================

export class TimeoutError extends Error {
    constructor(message = "Request timed out") {
        super(message);
        this.name = "TimeoutError";
    }
}

/**
 * Wrap a promise with a timeout
 */
export async function withTimeout<T>(
    promise: Promise<T>,
    timeoutMs: number,
    errorMessage = "Operation timed out"
): Promise<T> {
    let timeoutId: NodeJS.Timeout;

    const timeoutPromise = new Promise<never>((_, reject) => {
        timeoutId = setTimeout(() => {
            reject(new TimeoutError(errorMessage));
        }, timeoutMs);
    });

    try {
        const result = await Promise.race([promise, timeoutPromise]);
        clearTimeout(timeoutId!);
        return result;
    } catch (error) {
        clearTimeout(timeoutId!);
        throw error;
    }
}

/**
 * Fetch with timeout
 */
export async function fetchWithTimeout(
    url: string,
    options: RequestInit & { timeout?: number } = {}
): Promise<Response> {
    const { timeout = 30000, ...fetchOptions } = options;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, {
            ...fetchOptions,
            signal: controller.signal,
        });
        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        clearTimeout(timeoutId);
        if (error instanceof Error && error.name === "AbortError") {
            throw new TimeoutError(`Request to ${url} timed out after ${timeout}ms`);
        }
        throw error;
    }
}

// ============================================
// REQUEST QUEUE
// ============================================

interface QueuedRequest<T> {
    execute: () => Promise<T>;
    resolve: (value: T) => void;
    reject: (error: Error) => void;
}

/**
 * Request queue for rate limiting and concurrency control
 */
export class RequestQueue {
    private queue: QueuedRequest<unknown>[] = [];
    private running = 0;
    private readonly maxConcurrent: number;
    private readonly delayMs: number;

    constructor(options: { maxConcurrent?: number; delayMs?: number } = {}) {
        this.maxConcurrent = options.maxConcurrent || 5;
        this.delayMs = options.delayMs || 0;
    }

    async add<T>(execute: () => Promise<T>): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            this.queue.push({
                execute,
                resolve: resolve as (value: unknown) => void,
                reject,
            });
            this.process();
        });
    }

    private async process(): Promise<void> {
        if (this.running >= this.maxConcurrent || this.queue.length === 0) {
            return;
        }

        this.running++;
        const request = this.queue.shift()!;

        try {
            if (this.delayMs > 0) {
                await sleep(this.delayMs);
            }
            const result = await request.execute();
            request.resolve(result);
        } catch (error) {
            request.reject(error as Error);
        } finally {
            this.running--;
            this.process();
        }
    }

    get pending(): number {
        return this.queue.length;
    }

    get active(): number {
        return this.running;
    }

    clear(): void {
        this.queue.forEach((request) => {
            request.reject(new Error("Queue cleared"));
        });
        this.queue = [];
    }
}

// ============================================
// GRACEFUL SHUTDOWN
// ============================================

type ShutdownHandler = () => Promise<void>;

const shutdownHandlers: ShutdownHandler[] = [];
let isShuttingDown = false;

/**
 * Register a handler to be called during graceful shutdown
 */
export function onShutdown(handler: ShutdownHandler): void {
    shutdownHandlers.push(handler);
}

/**
 * Initialize graceful shutdown handling
 */
export function initGracefulShutdown(): void {
    if (typeof process === "undefined") return;

    const shutdown = async (signal: string) => {
        if (isShuttingDown) return;
        isShuttingDown = true;

        console.log(`[Shutdown] Received ${signal}, starting graceful shutdown...`);

        // Run all shutdown handlers
        for (const handler of shutdownHandlers) {
            try {
                await withTimeout(handler(), 10000, "Shutdown handler timed out");
            } catch (error) {
                console.error("[Shutdown] Handler error:", error);
            }
        }

        console.log("[Shutdown] Complete");
        process.exit(0);
    };

    process.on("SIGTERM", () => shutdown("SIGTERM"));
    process.on("SIGINT", () => shutdown("SIGINT"));
}

/**
 * Check if shutdown is in progress
 */
export function isShutdownInProgress(): boolean {
    return isShuttingDown;
}

// ============================================
// RETRY UTILITIES
// ============================================

interface RetryOptions {
    maxRetries?: number;
    delayMs?: number;
    backoffMultiplier?: number;
    maxDelayMs?: number;
    retryOn?: (error: Error) => boolean;
}

/**
 * Retry a function with exponential backoff
 */
export async function retry<T>(
    fn: () => Promise<T>,
    options: RetryOptions = {}
): Promise<T> {
    const {
        maxRetries = 3,
        delayMs = 1000,
        backoffMultiplier = 2,
        maxDelayMs = 30000,
        retryOn = () => true,
    } = options;

    let lastError: Error | null = null;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error as Error;

            if (attempt === maxRetries || !retryOn(lastError)) {
                throw lastError;
            }

            const delay = Math.min(
                delayMs * Math.pow(backoffMultiplier, attempt - 1),
                maxDelayMs
            );
            console.log(`[Retry] Attempt ${attempt}/${maxRetries} failed, retrying in ${delay}ms`);
            await sleep(delay);
        }
    }

    throw lastError;
}

// ============================================
// UTILITIES
// ============================================

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
