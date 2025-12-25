/**
 * Environment Variable Validation
 * 
 * Validates all required environment variables at startup.
 * Throws an error if required variables are missing.
 */

// Define required and optional environment variables
const requiredEnvVars = [
    // No strictly required vars for the app to run in development
    // Add production-required vars here as needed
] as const;

const optionalEnvVars = [
    'SMTP_HOST',
    'SMTP_PORT',
    'SMTP_USER',
    'SMTP_PASS',
    'SMTP_SECURE',
    'CONTACT_EMAIL',
    'NEXT_PUBLIC_APP_URL',
    'NEXT_PUBLIC_GA_ID', // Google Analytics
] as const;

interface EnvValidationResult {
    valid: boolean;
    missing: string[];
    warnings: string[];
}

/**
 * Validates environment variables and returns a result object
 */
export function validateEnv(): EnvValidationResult {
    const missing: string[] = [];
    const warnings: string[] = [];

    // Check required variables
    for (const envVar of requiredEnvVars) {
        if (!process.env[envVar]) {
            missing.push(envVar);
        }
    }

    // Check optional variables and warn if missing
    for (const envVar of optionalEnvVars) {
        if (!process.env[envVar]) {
            warnings.push(`Optional env var ${envVar} is not set`);
        }
    }

    return {
        valid: missing.length === 0,
        missing,
        warnings,
    };
}

/**
 * Throws an error if required environment variables are missing
 * Call this at application startup
 */
export function ensureEnv(): void {
    const result = validateEnv();

    if (!result.valid) {
        throw new Error(
            `Missing required environment variables: ${result.missing.join(', ')}`
        );
    }

    // Log warnings in development
    if (process.env.NODE_ENV === 'development' && result.warnings.length > 0) {
        console.warn('[ENV] Warnings:');
        result.warnings.forEach((warning) => console.warn(`  - ${warning}`));
    }
}

/**
 * Get a typed environment variable with a default value
 */
export function getEnv<T extends string>(
    key: string,
    defaultValue?: T
): T {
    const value = process.env[key];
    if (value === undefined) {
        if (defaultValue !== undefined) {
            return defaultValue;
        }
        throw new Error(`Environment variable ${key} is not defined`);
    }
    return value as T;
}

/**
 * Get a boolean environment variable
 */
export function getEnvBool(key: string, defaultValue = false): boolean {
    const value = process.env[key];
    if (value === undefined) return defaultValue;
    return value.toLowerCase() === 'true' || value === '1';
}

/**
 * Get a numeric environment variable
 */
export function getEnvNumber(key: string, defaultValue: number): number {
    const value = process.env[key];
    if (value === undefined) return defaultValue;
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? defaultValue : parsed;
}
