import { z } from "zod";

export const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  budget: z.string().min(1, "Please select a budget range"),
  service: z.string().min(1, "Please select a service of interest"),
  timeline: z.string().min(1, "Please select a target timeline"),
  message: z.string().min(10, "Project description must be at least 10 characters"),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
  honeypot: z.string().max(0, "Bot detected"),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

export const budgetOptions = [
  { value: "", label: "Select a budget range" },
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-15k", label: "$5,000 - $15,000" },
  { value: "15k-30k", label: "$15,000 - $30,000" },
  { value: "30k-50k", label: "$30,000 - $50,000" },
  { value: "over-50k", label: "Over $50,000" },
];

export const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "web-development", label: "Web Development" },
  { value: "saas-development", label: "SaaS Development" },
  { value: "ai-assistance", label: "AI Assistance" },
  { value: "api-integration", label: "API & Systems Integration" },
  { value: "other", label: "Other / Multiple" },
];

export const timelineOptions = [
  { value: "", label: "Select a timeline" },
  { value: "urgent", label: "Urgent ( < 1 month)" },
  { value: "1-3-months", label: "1-3 months" },
  { value: "3-6-months", label: "3-6 months" },
  { value: "flexible", label: "Flexible" },
];
