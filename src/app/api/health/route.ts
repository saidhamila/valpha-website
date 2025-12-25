/**
 * Health Check API Endpoint
 * 
 * Provides health status for load balancers, monitoring, and orchestration.
 * Returns 200 for healthy, 503 for unhealthy.
 * 
 * Edge Runtime for lowest latency.
 */

import { NextResponse } from "next/server";

export const runtime = "edge";

// Version info from package.json or env
const VERSION = process.env.npm_package_version || "1.0.0";
const NODE_ENV = process.env.NODE_ENV || "development";

interface HealthStatus {
    status: "healthy" | "degraded" | "unhealthy";
    version: string;
    environment: string;
    timestamp: string;
    uptime: number;
    checks: {
        name: string;
        status: "pass" | "fail";
        latencyMs?: number;
        message?: string;
    }[];
}

// Track service start time
const startTime = Date.now();

export async function GET(): Promise<NextResponse<HealthStatus>> {
    const timestamp = new Date().toISOString();
    const uptime = Math.floor((Date.now() - startTime) / 1000);

    const checks: HealthStatus["checks"] = [];
    let overallStatus: HealthStatus["status"] = "healthy";

    // Check 1: Memory usage
    if (typeof process !== "undefined" && process.memoryUsage) {
        const memory = process.memoryUsage();
        const heapUsedMB = Math.round(memory.heapUsed / 1024 / 1024);
        const heapTotalMB = Math.round(memory.heapTotal / 1024 / 1024);
        const heapPercent = Math.round((memory.heapUsed / memory.heapTotal) * 100);

        checks.push({
            name: "memory",
            status: heapPercent < 90 ? "pass" : "fail",
            message: `${heapUsedMB}MB / ${heapTotalMB}MB (${heapPercent}%)`,
        });

        if (heapPercent >= 90) {
            overallStatus = "degraded";
        }
    }

    // Check 2: Response time (self-check)
    const responseStart = Date.now();
    checks.push({
        name: "response",
        status: "pass",
        latencyMs: Date.now() - responseStart,
    });

    // Build response
    const healthStatus: HealthStatus = {
        status: overallStatus,
        version: VERSION,
        environment: NODE_ENV,
        timestamp,
        uptime,
        checks,
    };

    // Return appropriate status code
    const statusCode = overallStatus === "healthy" ? 200 :
        overallStatus === "degraded" ? 200 : 503;

    return NextResponse.json(healthStatus, {
        status: statusCode,
        headers: {
            "Cache-Control": "no-store, no-cache, must-revalidate",
            "Content-Type": "application/json",
        },
    });
}

// HEAD request for simple uptime checks
export async function HEAD(): Promise<NextResponse> {
    return new NextResponse(null, {
        status: 200,
        headers: {
            "Cache-Control": "no-store",
        },
    });
}
