/**
 * Input Validation & Sanitization Utilities
 * 
 * Provides secure input validation using allowlisting approach
 * rather than blacklisting dangerous characters.
 */

// ============================================
// REGEX PATTERNS (ALLOWLISTING)
// ============================================

export const patterns = {
    // Names: letters, spaces, hyphens, apostrophes (international support)
    name: /^[\p{L}\p{M}'\-\s]{1,100}$/u,

    // Email: standard email pattern
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

    // Phone: digits, spaces, hyphens, parentheses, plus sign
    phone: /^[\d\s\-+()]{7,20}$/,

    // Alphanumeric with spaces
    alphanumericSpaces: /^[\p{L}\p{N}\s]{1,500}$/u,

    // URL-safe slug
    slug: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,

    // UUID
    uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,

    // Positive integer
    positiveInt: /^[1-9]\d*$/,

    // Safe text: letters, numbers, common punctuation
    safeText: /^[\p{L}\p{N}\p{P}\p{Z}]{0,5000}$/u,
};

// ============================================
// VALIDATION FUNCTIONS
// ============================================

/**
 * Validate input against a pattern
 */
export function isValid(input: string, pattern: keyof typeof patterns): boolean {
    return patterns[pattern].test(input);
}

/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
    if (!email || email.length > 254) return false;
    return patterns.email.test(email);
}

/**
 * Validate name (international support)
 */
export function isValidName(name: string): boolean {
    if (!name || name.length > 100) return false;
    return patterns.name.test(name);
}

/**
 * Validate phone number
 */
export function isValidPhone(phone: string): boolean {
    if (!phone || phone.length > 20) return false;
    return patterns.phone.test(phone);
}

/**
 * Validate URL slug
 */
export function isValidSlug(slug: string): boolean {
    if (!slug || slug.length > 100) return false;
    return patterns.slug.test(slug);
}

// ============================================
// SANITIZATION FUNCTIONS
// ============================================

/**
 * HTML encode special characters
 */
export function htmlEncode(str: string): string {
    const entities: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;',
    };
    return str.replace(/[&<>"'`=/]/g, (char) => entities[char] || char);
}

/**
 * Remove all HTML tags
 */
export function stripHtml(str: string): string {
    return str.replace(/<[^>]*>/g, '');
}

/**
 * Remove control characters (except newlines and tabs)
 */
export function removeControlChars(str: string): string {
    return str.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
}

/**
 * Normalize whitespace
 */
export function normalizeWhitespace(str: string): string {
    return str.replace(/\s+/g, ' ').trim();
}

/**
 * Full sanitization pipeline for user input
 */
export function sanitizeInput(str: string, maxLength = 5000): string {
    if (!str) return '';

    return removeControlChars(str)
        .trim()
        .slice(0, maxLength);
}

/**
 * Sanitize for display in HTML
 */
export function sanitizeForHtml(str: string, maxLength = 5000): string {
    if (!str) return '';

    return htmlEncode(
        removeControlChars(str)
            .trim()
            .slice(0, maxLength)
    );
}

/**
 * Sanitize URL (prevent javascript: and data: URLs)
 */
export function sanitizeUrl(url: string): string {
    if (!url) return '';

    const trimmed = url.trim().toLowerCase();

    // Block dangerous protocols
    if (
        trimmed.startsWith('javascript:') ||
        trimmed.startsWith('data:') ||
        trimmed.startsWith('vbscript:')
    ) {
        return '';
    }

    return url.trim();
}

// ============================================
// RATE LIMITING HELPERS
// ============================================

/**
 * Simple in-memory rate limiter (for development/single instance)
 * For production, use Redis-backed solution
 */
export class RateLimiter {
    private requests = new Map<string, { count: number; resetAt: number }>();

    constructor(
        private maxRequests: number,
        private windowMs: number
    ) { }

    /**
     * Check if a key is rate limited
     * Returns { allowed: boolean, remaining: number, resetIn: number }
     */
    check(key: string): { allowed: boolean; remaining: number; resetIn: number } {
        const now = Date.now();
        const record = this.requests.get(key);

        // No record or expired window
        if (!record || now > record.resetAt) {
            this.requests.set(key, { count: 1, resetAt: now + this.windowMs });
            return { allowed: true, remaining: this.maxRequests - 1, resetIn: this.windowMs };
        }

        // Check if limit exceeded
        if (record.count >= this.maxRequests) {
            return { allowed: false, remaining: 0, resetIn: record.resetAt - now };
        }

        // Increment count
        record.count++;
        return {
            allowed: true,
            remaining: this.maxRequests - record.count,
            resetIn: record.resetAt - now
        };
    }

    /**
     * Clean up expired entries (call periodically)
     */
    cleanup(): void {
        const now = Date.now();
        for (const [key, record] of this.requests.entries()) {
            if (now > record.resetAt) {
                this.requests.delete(key);
            }
        }
    }
}
