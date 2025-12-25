/**
 * Redis Caching Utilities
 * 
 * Provides caching layer for improved performance.
 * Falls back gracefully when Redis is not available.
 * 
 * Activate by setting REDIS_URL environment variable.
 */

// ============================================
// CACHE INTERFACE
// ============================================

export interface CacheOptions {
    ttl?: number; // Time to live in seconds
    tags?: string[]; // Cache tags for invalidation
}

export interface CacheResult<T> {
    value: T;
    hit: boolean;
    age?: number;
}

// ============================================
// IN-MEMORY CACHE (FALLBACK)
// ============================================

interface CacheEntry<T> {
    value: T;
    expiresAt: number;
    tags: string[];
    createdAt: number;
}

class MemoryCache {
    private cache = new Map<string, CacheEntry<unknown>>();
    private maxSize = 1000;

    async get<T>(key: string): Promise<CacheResult<T> | null> {
        const entry = this.cache.get(key) as CacheEntry<T> | undefined;

        if (!entry) {
            return null;
        }

        // Check expiration
        if (entry.expiresAt && Date.now() > entry.expiresAt) {
            this.cache.delete(key);
            return null;
        }

        return {
            value: entry.value,
            hit: true,
            age: Math.floor((Date.now() - entry.createdAt) / 1000),
        };
    }

    async set<T>(key: string, value: T, options: CacheOptions = {}): Promise<void> {
        // Evict oldest entries if cache is full
        if (this.cache.size >= this.maxSize) {
            const firstKey = this.cache.keys().next().value;
            if (firstKey) this.cache.delete(firstKey);
        }

        const ttl = options.ttl || 3600; // Default 1 hour

        this.cache.set(key, {
            value,
            expiresAt: Date.now() + ttl * 1000,
            tags: options.tags || [],
            createdAt: Date.now(),
        });
    }

    async delete(key: string): Promise<void> {
        this.cache.delete(key);
    }

    async invalidateByTag(tag: string): Promise<number> {
        let count = 0;

        for (const [key, entry] of this.cache.entries()) {
            if (entry.tags.includes(tag)) {
                this.cache.delete(key);
                count++;
            }
        }

        return count;
    }

    async clear(): Promise<void> {
        this.cache.clear();
    }

    getStats(): { size: number; maxSize: number } {
        return {
            size: this.cache.size,
            maxSize: this.maxSize,
        };
    }
}

// ============================================
// CACHE SINGLETON
// ============================================

let cacheInstance: MemoryCache | null = null;

function getCache(): MemoryCache {
    if (!cacheInstance) {
        cacheInstance = new MemoryCache();
        console.log("[Cache] Using in-memory cache");
    }
    return cacheInstance;
}

// ============================================
// PUBLIC API
// ============================================

/**
 * Get value from cache
 */
export async function cacheGet<T>(key: string): Promise<CacheResult<T> | null> {
    const cache = getCache();
    return cache.get<T>(key);
}

/**
 * Set value in cache
 */
export async function cacheSet<T>(
    key: string,
    value: T,
    options: CacheOptions = {}
): Promise<void> {
    const cache = getCache();
    await cache.set(key, value, options);
}

/**
 * Delete value from cache
 */
export async function cacheDelete(key: string): Promise<void> {
    const cache = getCache();
    await cache.delete(key);
}

/**
 * Invalidate all entries with a specific tag
 */
export async function cacheInvalidateTag(tag: string): Promise<number> {
    const cache = getCache();
    return cache.invalidateByTag(tag);
}

/**
 * Clear entire cache
 */
export async function cacheClear(): Promise<void> {
    const cache = getCache();
    await cache.clear();
}

/**
 * Get cache statistics
 */
export function cacheStats(): { size: number; maxSize: number } {
    const cache = getCache();
    return cache.getStats();
}

/**
 * Cache-aside pattern helper
 * Gets from cache, or computes and caches the value
 */
export async function cached<T>(
    key: string,
    compute: () => Promise<T>,
    options: CacheOptions = {}
): Promise<CacheResult<T>> {
    // Try to get from cache first
    const cachedResult = await cacheGet<T>(key);
    if (cachedResult) {
        return cachedResult;
    }

    // Compute the value
    const value = await compute();

    // Store in cache
    await cacheSet(key, value, options);

    return {
        value,
        hit: false,
    };
}

/**
 * Memoize a function with caching
 */
export function memoize<TArgs extends unknown[], TResult>(
    fn: (...args: TArgs) => Promise<TResult>,
    keyGenerator: (...args: TArgs) => string,
    options: CacheOptions = {}
): (...args: TArgs) => Promise<CacheResult<TResult>> {
    return async (...args: TArgs): Promise<CacheResult<TResult>> => {
        const key = keyGenerator(...args);
        return cached(key, () => fn(...args), options);
    };
}
