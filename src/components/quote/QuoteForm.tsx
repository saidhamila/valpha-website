"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle, AlertCircle, ChevronDown } from "lucide-react";
import { quoteFormSchema, type QuoteFormData, budgetOptions, serviceOptions, timelineOptions } from "@/lib/validations/quote";
import { cn } from "@/lib/utils";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      consent: false,
      honeypot: "",
    }
  });

  const onSubmit = async (data: QuoteFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send request");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-12 rounded-3xl border border-border bg-card text-center shadow-xl">
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold font-heading text-foreground mb-3">
          Quote Request Received!
        </h3>
        <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
          Thank you for reaching out. Our team will review your project details and get back to you with a personalized quote within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full bg-sky text-primary hover:bg-sky/90 transition-colors"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <div className="p-1 rounded-3xl bg-gradient-to-br from-sky/20 via-border to-transparent">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card p-6 sm:p-10 rounded-[1.4rem]">
        <input
          type="text"
          {...register("honeypot")}
          className="absolute -left-[9999px] opacity-0"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className={cn(
                "w-full px-4 py-3 rounded-xl border bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sky transition-all",
                errors.name ? "border-red-500" : "border-border"
              )}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={cn(
                "w-full px-4 py-3 rounded-xl border bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sky transition-all",
                errors.email ? "border-red-500" : "border-border"
              )}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
              Company (Optional)
            </label>
            <input
              id="company"
              type="text"
              {...register("company")}
              className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sky transition-all"
              placeholder="Acme Inc."
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
              Service of Interest <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="service"
                {...register("service")}
                className={cn(
                  "w-full px-4 py-3 rounded-xl border bg-muted/30 text-foreground focus:outline-none focus:ring-2 focus:ring-sky transition-all appearance-none cursor-pointer",
                  errors.service ? "border-red-500" : "border-border"
                )}
              >
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
            {errors.service && (
              <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
              Estimated Budget <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="budget"
                {...register("budget")}
                className={cn(
                  "w-full px-4 py-3 rounded-xl border bg-muted/30 text-foreground focus:outline-none focus:ring-2 focus:ring-sky transition-all appearance-none cursor-pointer",
                  errors.budget ? "border-red-500" : "border-border"
                )}
              >
                {budgetOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
            {errors.budget && (
              <p className="mt-1 text-sm text-red-500">{errors.budget.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
              Target Timeline <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="timeline"
                {...register("timeline")}
                className={cn(
                  "w-full px-4 py-3 rounded-xl border bg-muted/30 text-foreground focus:outline-none focus:ring-2 focus:ring-sky transition-all appearance-none cursor-pointer",
                  errors.timeline ? "border-red-500" : "border-border"
                )}
              >
                {timelineOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
            {errors.timeline && (
              <p className="mt-1 text-sm text-red-500">{errors.timeline.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Project Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message")}
            className={cn(
              "w-full px-4 py-3 rounded-xl border bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sky transition-all resize-none",
              errors.message ? "border-red-500" : "border-border"
            )}
            placeholder="Tell us about your goals, specific requirements, and any questions you have..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              {...register("consent")}
              className="mt-1 w-4 h-4 rounded border-border text-sky focus:ring-sky bg-muted/30 cursor-pointer"
            />
            <label htmlFor="consent" className="text-sm text-muted-foreground leading-snug cursor-pointer">
              I acknowledge that the information provided will be used to contact me regarding my request. vAlpha respects your privacy.
            </label>
          </div>
          {errors.consent && (
            <p className="text-sm text-red-500">{errors.consent.message}</p>
          )}
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500">
            <AlertCircle size={20} />
            <p className="text-sm">{errorMessage}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-xl bg-sky text-primary hover:bg-sky/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-sky/20"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Processing...
            </>
          ) : (
            "Request My Quote"
          )}
        </button>
      </form>
    </div>
  );
}
