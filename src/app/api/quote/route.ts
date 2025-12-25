import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { quoteFormSchema } from "@/lib/validations/quote";

// ============================================
// SECURITY CONFIGURATION
// ============================================

// Rate limiting configuration
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // Reduced from 5 for more aggressive protection

// Request body size limit (in bytes)
const MAX_BODY_SIZE = 10 * 1024; // 10KB

// Allowed origins for CORS (add your production domain)
const ALLOWED_ORIGINS = [
  process.env.NEXT_PUBLIC_APP_URL,
  "http://localhost:3000",
  "http://localhost:3001",
].filter(Boolean) as string[];

// ============================================
// SECURITY UTILITIES
// ============================================

function getRateLimitKey(request: NextRequest): string {
  // Combine IP with User-Agent for better fingerprinting
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";
  const userAgent = request.headers.get("user-agent") || "unknown";
  // Create a simple hash of the fingerprint
  return `${ip}:${userAgent.slice(0, 50)}`;
}

function isRateLimited(key: string): { limited: boolean; remaining: number; resetIn: number } {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now - record.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(key, { count: 1, lastReset: now });
    return { limited: false, remaining: MAX_REQUESTS - 1, resetIn: RATE_LIMIT_WINDOW };
  }

  if (record.count >= MAX_REQUESTS) {
    const resetIn = RATE_LIMIT_WINDOW - (now - record.lastReset);
    return { limited: true, remaining: 0, resetIn };
  }

  record.count++;
  return {
    limited: false,
    remaining: MAX_REQUESTS - record.count,
    resetIn: RATE_LIMIT_WINDOW - (now - record.lastReset)
  };
}

// Enhanced sanitization with HTML entity encoding
function sanitize(str: string): string {
  return str
    // Remove potentially dangerous characters
    .replace(/[<>'"]/g, (char) => {
      const entities: Record<string, string> = {
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
      };
      return entities[char] || char;
    })
    // Remove null bytes and other control characters
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    // Trim and limit length
    .trim()
    .slice(0, 5000);
}

// Validate origin for CORS
function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false;
  return ALLOWED_ORIGINS.some(allowed => origin === allowed || origin.startsWith(allowed));
}

// Add security headers to response
function addSecurityHeaders(response: NextResponse, origin: string | null): NextResponse {
  // CORS headers
  if (origin && isAllowedOrigin(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  response.headers.set("Access-Control-Max-Age", "86400");

  // Security headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");

  return response;
}

// ============================================
// SMTP CONFIGURATION
// ============================================

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  // Connection timeout settings
  connectionTimeout: 10000, // 10 seconds
  greetingTimeout: 10000,
  socketTimeout: 30000,
});

// ============================================
// ROUTE HANDLERS
// ============================================

// Handle CORS preflight requests
export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get("origin");
  const response = new NextResponse(null, { status: 204 });
  return addSecurityHeaders(response, origin);
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");

  try {
    // ==== RATE LIMITING ====
    const key = getRateLimitKey(request);
    const rateLimit = isRateLimited(key);

    if (rateLimit.limited) {
      const response = NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil(rateLimit.resetIn / 1000)),
            "X-RateLimit-Limit": String(MAX_REQUESTS),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": String(Date.now() + rateLimit.resetIn),
          }
        }
      );
      return addSecurityHeaders(response, origin);
    }

    // ==== REQUEST SIZE VALIDATION ====
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > MAX_BODY_SIZE) {
      const response = NextResponse.json(
        { error: "Request body too large." },
        { status: 413 }
      );
      return addSecurityHeaders(response, origin);
    }

    // ==== CONTENT-TYPE VALIDATION ====
    const contentType = request.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      const response = NextResponse.json(
        { error: "Invalid content type. Expected application/json." },
        { status: 415 }
      );
      return addSecurityHeaders(response, origin);
    }

    // ==== PARSE AND VALIDATE BODY ====
    let body;
    try {
      body = await request.json();
    } catch {
      const response = NextResponse.json(
        { error: "Invalid JSON in request body." },
        { status: 400 }
      );
      return addSecurityHeaders(response, origin);
    }

    const result = quoteFormSchema.safeParse(body);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      const response = NextResponse.json(
        { error: "Validation failed", details: errors },
        { status: 400 }
      );
      return addSecurityHeaders(response, origin);
    }

    const { name, email, company, budget, service, timeline, message, honeypot } = result.data;

    // ==== HONEYPOT CHECK (Anti-Bot) ====
    if (honeypot && honeypot.length > 0) {
      // Log suspicious activity but return success to confuse bots
      console.warn(`[SECURITY] Honeypot triggered from ${key}`);
      const response = NextResponse.json({
        success: true,
        message: "Thank you for your request. We'll be in touch soon!",
      });
      return addSecurityHeaders(response, origin);
    }

    // ==== SANITIZE INPUT ====
    const sanitizedData = {
      name: sanitize(name),
      email: sanitize(email),
      company: company ? sanitize(company) : "Not provided",
      budget: sanitize(budget),
      service: sanitize(service),
      timeline: sanitize(timeline),
      message: sanitize(message),
      submittedAt: new Date().toISOString(),
      ip: getRateLimitKey(request).split(":")[0], // Log IP for security
    };

    // ==== SEND EMAIL ====
    const emailTo = process.env.CONTACT_EMAIL || process.env.SMTP_USER;

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log("[INFO] SMTP not configured. Quote request:", JSON.stringify(sanitizedData, null, 2));
      const response = NextResponse.json({
        success: true,
        message: "Thank you for your request. We'll be in touch soon!",
      });
      return addSecurityHeaders(response, origin);
    }

    await transporter.sendMail({
      from: `"vAlpha Quote" <${process.env.SMTP_USER}>`,
      to: emailTo,
      replyTo: sanitizedData.email,
      subject: `New Quote Request: ${sanitizedData.service} from ${sanitizedData.name}`,
      text: `
New Quote Request

Name: ${sanitizedData.name}
Email: ${sanitizedData.email}
Company: ${sanitizedData.company}
Service: ${sanitizedData.service}
Budget: ${sanitizedData.budget}
Timeline: ${sanitizedData.timeline}

Project Description:
${sanitizedData.message}

---
Submitted at: ${sanitizedData.submittedAt}
IP Address: ${sanitizedData.ip}
      `.trim(),
      html: `
<div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
  <div style="background: #0ea5e9; padding: 24px; color: white;">
    <h2 style="margin: 0;">New Quote Request</h2>
  </div>
  <div style="padding: 24px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;"><strong>Name</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">${sanitizedData.name}</td></tr>
      <tr><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;"><strong>Email</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></td></tr>
      <tr><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;"><strong>Company</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">${sanitizedData.company}</td></tr>
      <tr><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;"><strong>Service</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">${sanitizedData.service}</td></tr>
      <tr><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;"><strong>Budget</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">${sanitizedData.budget}</td></tr>
      <tr><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;"><strong>Timeline</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">${sanitizedData.timeline}</td></tr>
    </table>
    <h3 style="color: #020617; margin-top: 24px;">Project Description:</h3>
    <p style="background: #f8fafc; padding: 16px; border-radius: 8px; white-space: pre-wrap; color: #334155;">${sanitizedData.message}</p>
    <p style="color: #64748b; font-size: 12px; margin-top: 24px; text-align: center;">Submitted at: ${sanitizedData.submittedAt}</p>
  </div>
</div>
      `.trim(),
    });

    const response = NextResponse.json({
      success: true,
      message: "Thank you for your request. We'll be in touch soon!",
    }, {
      headers: {
        "X-RateLimit-Limit": String(MAX_REQUESTS),
        "X-RateLimit-Remaining": String(rateLimit.remaining),
      }
    });
    return addSecurityHeaders(response, origin);

  } catch (error) {
    console.error("[ERROR] Quote form error:", error);
    const response = NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
    return addSecurityHeaders(response, origin);
  }
}

