/**
 * Service Worker for vAlpha PWA
 *
 * Implements caching strategies:
 * - Cache-first for static assets
 * - Network-first for API calls
 * - Stale-while-revalidate for pages
 */

const STATIC_CACHE = "valpha-static-v1";
const DYNAMIC_CACHE = "valpha-dynamic-v1";

// Assets to cache immediately on install
const STATIC_ASSETS = ["/", "/offline", "/favicon.svg", "/manifest.json"];

// API routes that should not be cached
const API_ROUTES = ["/api/"];

// Install event - cache static assets
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then((cache) => {
            console.log("[SW] Caching static assets");
            return cache.addAll(STATIC_ASSETS);
        })
    );
    // Activate immediately
    self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== STATIC_CACHE && name !== DYNAMIC_CACHE)
                    .map((name) => {
                        console.log("[SW] Deleting old cache:", name);
                        return caches.delete(name);
                    })
            );
        })
    );
    // Take control immediately
    self.clients.claim();
});

// Fetch event - implement caching strategies
self.addEventListener("fetch", (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== "GET") return;

    // Skip API routes - always go to network
    if (API_ROUTES.some((route) => url.pathname.startsWith(route))) {
        event.respondWith(
            fetch(request).catch(() => {
                return new Response(JSON.stringify({ error: "Offline" }), {
                    status: 503,
                    headers: { "Content-Type": "application/json" },
                });
            })
        );
        return;
    }

    // Static assets - cache first
    if (isStaticAsset(url.pathname)) {
        event.respondWith(cacheFirst(request));
        return;
    }

    // Pages - stale while revalidate
    event.respondWith(staleWhileRevalidate(request));
});

// Check if URL is a static asset
function isStaticAsset(pathname) {
    const staticExtensions = [
        ".js",
        ".css",
        ".png",
        ".jpg",
        ".jpeg",
        ".gif",
        ".svg",
        ".webp",
        ".avif",
        ".ico",
        ".woff",
        ".woff2",
        ".ttf",
        ".otf",
    ];
    return staticExtensions.some((ext) => pathname.endsWith(ext));
}

// Cache-first strategy
async function cacheFirst(request) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
        return cachedResponse;
    }

    try {
        const networkResponse = await fetch(request);
        const cache = await caches.open(STATIC_CACHE);
        cache.put(request, networkResponse.clone());
        return networkResponse;
    } catch {
        return new Response("Offline", { status: 503 });
    }
}

// Stale-while-revalidate strategy
async function staleWhileRevalidate(request) {
    const cachedResponse = await caches.match(request);

    const networkResponsePromise = fetch(request)
        .then((response) => {
            if (response.ok) {
                const cache = caches.open(DYNAMIC_CACHE);
                cache.then((c) => c.put(request, response.clone()));
            }
            return response;
        })
        .catch(() => null);

    // Return cached response immediately if available
    if (cachedResponse) {
        // Update cache in background
        networkResponsePromise;
        return cachedResponse;
    }

    // Wait for network if no cache
    const networkResponse = await networkResponsePromise;
    if (networkResponse) {
        return networkResponse;
    }

    // Fallback to offline page
    const offlineResponse = await caches.match("/offline");
    if (offlineResponse) {
        return offlineResponse;
    }

    return new Response("Offline", { status: 503 });
}
