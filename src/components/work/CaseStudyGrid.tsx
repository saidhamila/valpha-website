"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { caseStudies, industries } from "@/lib/content/case-studies";
import { cn } from "@/lib/utils";

export function CaseStudyGrid() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? caseStudies
    : caseStudies.filter((cs) => cs.tags.includes(filter) || cs.industry === filter);

  return (
    <Section className="bg-muted/30">
      <div className="flex flex-wrap gap-2 mb-12">
        {industries.map((industry) => (
          <button
            key={industry}
            onClick={() => setFilter(industry)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-full transition-colors",
              filter === industry
                ? "bg-sky text-primary"
                : "bg-card border border-border text-muted-foreground hover:text-foreground"
            )}
          >
            {industry}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((study, index) => (
            <motion.div
              key={study.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="rounded-2xl border border-border bg-card overflow-hidden group"
            >
              <Link href={`/work/${study.id}`} className="block p-6 sm:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-sky/10 text-sky"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-foreground mb-2 group-hover:text-sky transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {study.client}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {study.shortDescription}
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <p className="text-2xl font-bold font-heading text-sky">
                        {metric.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <span className="inline-flex items-center gap-2 text-sm font-medium text-sky group-hover:gap-3 transition-all">
                  Read case study
                  <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}