/**
 * Database Connection Configuration
 * 
 * Provides connection pooling and configuration for LibSQL/Turso database.
 * Activate by setting DATABASE_URL environment variable.
 */

import { createClient, type Client } from "@libsql/client";

// ============================================
// CONFIGURATION
// ============================================

interface DatabaseConfig {
    url: string;
    authToken?: string;
    // Connection pool settings
    maxConnections?: number;
    idleTimeout?: number;
    connectionTimeout?: number;
}

// Default configuration
const defaultConfig: Partial<DatabaseConfig> = {
    maxConnections: 10,
    idleTimeout: 60000, // 60 seconds
    connectionTimeout: 10000, // 10 seconds
};

// ============================================
// CONNECTION POOL
// ============================================

let client: Client | null = null;
let connectionCount = 0;
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

/**
 * Get or create database client with connection pooling
 */
export function getDatabase(): Client {
    if (client) {
        return client;
    }

    const url = process.env.DATABASE_URL;
    const authToken = process.env.DATABASE_AUTH_TOKEN;

    if (!url) {
        throw new Error("DATABASE_URL environment variable is not set");
    }

    client = createClient({
        url,
        authToken,
    });

    connectionCount++;
    console.log(`[DB] Created connection #${connectionCount}`);

    return client;
}

/**
 * Execute query with automatic retry on transient errors
 */
export async function executeWithRetry<T>(
    operation: () => Promise<T>,
    retries = MAX_RETRIES
): Promise<T> {
    let lastError: Error | null = null;

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            return await operation();
        } catch (error) {
            lastError = error as Error;

            // Check if error is retryable
            const isRetryable = isTransientError(error);

            if (!isRetryable || attempt === retries) {
                throw error;
            }

            // Exponential backoff
            const delay = RETRY_DELAY * Math.pow(2, attempt - 1);
            console.log(`[DB] Retry ${attempt}/${retries} after ${delay}ms`);
            await sleep(delay);
        }
    }

    throw lastError;
}

/**
 * Check if error is transient and can be retried
 */
function isTransientError(error: unknown): boolean {
    if (!(error instanceof Error)) return false;

    const message = error.message.toLowerCase();
    const transientPatterns = [
        "connection",
        "timeout",
        "network",
        "econnreset",
        "econnrefused",
        "unavailable",
    ];

    return transientPatterns.some((pattern) => message.includes(pattern));
}

/**
 * Close database connection (for graceful shutdown)
 */
export async function closeDatabase(): Promise<void> {
    if (client) {
        client.close();
        client = null;
        console.log("[DB] Connection closed");
    }
}

/**
 * Health check for database connection
 */
export async function checkDatabaseHealth(): Promise<{
    healthy: boolean;
    latencyMs: number;
    error?: string;
}> {
    const start = Date.now();

    try {
        const db = getDatabase();
        await db.execute("SELECT 1");

        return {
            healthy: true,
            latencyMs: Date.now() - start,
        };
    } catch (error) {
        return {
            healthy: false,
            latencyMs: Date.now() - start,
            error: error instanceof Error ? error.message : "Unknown error",
        };
    }
}

// ============================================
// UTILITIES
// ============================================

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Transaction wrapper
 */
export async function withTransaction<T>(
    callback: (tx: Client) => Promise<T>
): Promise<T> {
    const db = getDatabase();

    try {
        await db.execute("BEGIN");
        const result = await callback(db);
        await db.execute("COMMIT");
        return result;
    } catch (error) {
        await db.execute("ROLLBACK");
        throw error;
    }
}
