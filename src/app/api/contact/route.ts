import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFormSchema } from "@/lib/validations/contact";

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

    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        { error: "Validation failed", details: errors },
        { status: 400 }
      );
    }

    const { name, email, company, budget, message, honeypot } = result.data;

    if (honeypot && honeypot.length > 0) {
      return NextResponse.json(
        { error: "Invalid submission" },
        { status: 400 }
      );
    }

    const sanitizedData = {
      name: sanitize(name),
      email: sanitize(email),
      company: company ? sanitize(company) : undefined,
      budget: budget ? sanitize(budget) : undefined,
      message: sanitize(message),
      submittedAt: new Date().toISOString(),
    };

    const emailTo = process.env.CONTACT_EMAIL || process.env.SMTP_USER;
    
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log("SMTP not configured. Contact form submission:", JSON.stringify(sanitizedData, null, 2));
      return NextResponse.json({
        success: true,
        message: "Thank you for your message. We'll be in touch soon!",
      });
    }

    await transporter.sendMail({
      from: `"vAlpha Contact" <${process.env.SMTP_USER}>`,
      to: emailTo,
      replyTo: sanitizedData.email,
      subject: `New Contact from ${sanitizedData.name}${sanitizedData.company ? ` (${sanitizedData.company})` : ""}`,
      text: `
Name: ${sanitizedData.name}
Email: ${sanitizedData.email}
Company: ${sanitizedData.company || "Not provided"}
Budget: ${sanitizedData.budget || "Not specified"}

Message:
${sanitizedData.message}

---
Submitted at: ${sanitizedData.submittedAt}
      `.trim(),
      html: `
<div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #020617;">New Contact Form Submission</h2>
  <table style="width: 100%; border-collapse: collapse;">
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong>Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">${sanitizedData.name}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong>Company:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">${sanitizedData.company || "Not provided"}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong>Budget:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">${sanitizedData.budget || "Not specified"}</td></tr>
  </table>
  <h3 style="color: #020617; margin-top: 24px;">Message:</h3>
  <p style="background: #f8fafc; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${sanitizedData.message}</p>
  <p style="color: #64748b; font-size: 12px; margin-top: 24px;">Submitted at: ${sanitizedData.submittedAt}</p>
</div>
      `.trim(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for your message. We'll be in touch soon!",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}