"use client";


import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { caseStudies } from "@/lib/content/case-studies";

export function FeaturedCaseStudy() {
  const featured = caseStudies.find((cs) => cs.featured);
  if (!featured) return null;

  return (
    <Section
      eyebrow="Case study"
      title="Featured work"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-8 sm:p-12"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10 max-w-2xl">
          <div className="flex flex-wrap gap-2 mb-6">
            {featured.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-4">
            {featured.title}
          </h3>
          <p className="text-white/70 leading-relaxed mb-8">
            {featured.outcome}
          </p>

          <div className="flex flex-wrap gap-6 mb-8">
            {featured.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-3xl font-bold font-heading text-sky">
                  {metric.value}
                </p>
                <p className="text-sm text-white/60">{metric.label}</p>
              </div>
            ))}
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-white font-medium hover:text-sky transition-colors"
          >
            See all case studies
            <ArrowRight size={18} />
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}