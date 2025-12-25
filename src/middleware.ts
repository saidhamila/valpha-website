import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Comprehensive Security Middleware for vAlpha Website
 * 
 * Implements hardcore security headers to protect against:
 * - XSS attacks (CSP, X-XSS-Protection)
 * - Clickjacking (X-Frame-Options)
 * - MIME sniffing (X-Content-Type-Options)
 * - Information leakage (Referrer-Policy)
 * - Protocol downgrade (HSTS)
 * - Feature abuse (Permissions-Policy)
 */

// Trusted domains for CSP
const TRUSTED_DOMAINS = {
    scripts: [
        "'self'",
        "'unsafe-inline'", // Required for Next.js inline scripts
        "'unsafe-eval'", // Required for development, consider removing in production
        "https://slelguoygbfzlpylpxfs.supabase.co",
    ],
    styles: [
        "'self'",
        "'unsafe-inline'", // Required for styled-components/emotion/tailwind
        "https://fonts.googleapis.com",
    ],
    images: [
        "'self'",
        "data:",
        "blob:",
        "https://images.unsplash.com",
        "https://*.supabase.co",
    ],
    fonts: [
        "'self'",
        "https://fonts.gstatic.com",
    ],
    connect: [
        "'self'",
        "https://slelguoygbfzlpylpxfs.supabase.co",
        "https://*.supabase.co",
        "wss://*.supabase.co", // WebSocket connections
    ],
    frames: ["'none'"], // Prevent embedding in iframes
    objects: ["'none'"], // Block Flash/plugins
    base: ["'self'"], // Restrict <base> tag
    formAction: ["'self'"], // Restrict form submissions
};

// Build CSP header
function buildCSP(): string {
    const directives = [
        `default-src 'self'`,
        `script-src ${TRUSTED_DOMAINS.scripts.join(" ")}`,
        `style-src ${TRUSTED_DOMAINS.styles.join(" ")}`,
        `img-src ${TRUSTED_DOMAINS.images.join(" ")}`,
        `font-src ${TRUSTED_DOMAINS.fonts.join(" ")}`,
        `connect-src ${TRUSTED_DOMAINS.connect.join(" ")}`,
        `frame-ancestors ${TRUSTED_DOMAINS.frames.join(" ")}`,
        `object-src ${TRUSTED_DOMAINS.objects.join(" ")}`,
        `base-uri ${TRUSTED_DOMAINS.base.join(" ")}`,
        `form-action ${TRUSTED_DOMAINS.formAction.join(" ")}`,
        `upgrade-insecure-requests`, // Auto-upgrade HTTP to HTTPS
    ];

    return directives.join("; ");
}

// Security headers configuration
const securityHeaders: Record<string, string> = {
    // Prevent XSS attacks by controlling resource loading
    "Content-Security-Policy": buildCSP(),

    // Prevent clickjacking - deny all iframe embedding
    "X-Frame-Options": "DENY",

    // Prevent MIME type sniffing
    "X-Content-Type-Options": "nosniff",

    // Control referrer information sent with requests
    "Referrer-Policy": "strict-origin-when-cross-origin",

    // Restrict browser features and APIs
    "Permissions-Policy": [
        "accelerometer=()",
        "camera=()",
        "geolocation=()",
        "gyroscope=()",
        "magnetometer=()",
        "microphone=()",
        "payment=()",
        "usb=()",
        "interest-cohort=()", // Block FLoC tracking
    ].join(", "),

    // Force HTTPS for 1 year (31536000 seconds), include subdomains
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",

    // Legacy XSS protection for older browsers
    "X-XSS-Protection": "1; mode=block",

    // Prevent DNS prefetching for privacy
    "X-DNS-Prefetch-Control": "off",

    // Prevent IE from downloading files automatically
    "X-Download-Options": "noopen",

    // Disable content type sniffing for scripts
    "X-Permitted-Cross-Domain-Policies": "none",
};

export function middleware(request: NextRequest) {
    // Get the response
    const response = NextResponse.next();

    // Apply all security headers
    Object.entries(securityHeaders).forEach(([key, value]) => {
        response.headers.set(key, value);
    });

    // Add request ID for tracing (useful for debugging and security audits)
    const requestId = crypto.randomUUID();
    response.headers.set("X-Request-Id", requestId);

    // Cache control for static assets
    const pathname = request.nextUrl.pathname;

    // Immutable cache for static assets with hash in filename
    if (pathname.match(/\/_next\/static\/.+/)) {
        response.headers.set(
            "Cache-Control",
            "public, max-age=31536000, immutable"
        );
    }

    // Cache for images
    if (pathname.match(/\.(ico|png|jpg|jpeg|gif|webp|avif|svg)$/i)) {
        response.headers.set(
            "Cache-Control",
            "public, max-age=86400, stale-while-revalidate=604800"
        );
    }

    // Cache for fonts
    if (pathname.match(/\.(woff|woff2|ttf|otf|eot)$/i)) {
        response.headers.set(
            "Cache-Control",
            "public, max-age=31536000, immutable"
        );
    }

    return response;
}

// Configure which routes the middleware applies to
export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder files
         */
        {
            source: "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
            missing: [
                { type: "header", key: "next-router-prefetch" },
                { type: "header", key: "purpose", value: "prefetch" },
            ],
        },
    ],
};
