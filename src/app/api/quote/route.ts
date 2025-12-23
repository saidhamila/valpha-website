import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { quoteFormSchema } from "@/lib/validations/quote";

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS = 5;

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";
  return ip;
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now - record.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(key, { count: 1, lastReset: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS) {
    return true;
  }

  record.count++;
  return false;
}

function sanitize(str: string): string {
  return str
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, 5000);
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const key = getRateLimitKey(request);
    if (isRateLimited(key)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    const result = quoteFormSchema.safeParse(body);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        { error: "Validation failed", details: errors },
        { status: 400 }
      );
    }

    const { name, email, company, budget, service, timeline, message, honeypot } = result.data;

    if (honeypot && honeypot.length > 0) {
      return NextResponse.json(
        { error: "Invalid submission" },
        { status: 400 }
      );
    }

    const sanitizedData = {
      name: sanitize(name),
      email: sanitize(email),
      company: company ? sanitize(company) : "Not provided",
      budget: sanitize(budget),
      service: sanitize(service),
      timeline: sanitize(timeline),
      message: sanitize(message),
      submittedAt: new Date().toISOString(),
    };

    const emailTo = process.env.CONTACT_EMAIL || process.env.SMTP_USER;
    
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log("SMTP not configured. Quote request submission:", JSON.stringify(sanitizedData, null, 2));
      return NextResponse.json({
        success: true,
        message: "Thank you for your request. We'll be in touch soon!",
      });
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

    return NextResponse.json({
      success: true,
      message: "Thank you for your request. We'll be in touch soon!",
    });
  } catch (error) {
    console.error("Quote form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
