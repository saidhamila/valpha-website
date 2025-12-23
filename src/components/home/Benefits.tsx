"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Section } from "@/components/layout/Section";

const benefits = [
  "Senior engineers with 10+ years of experience",
  "Proven track record with Fortune 500 clients",
  "Full-stack capabilities from design to deployment",
  "AI-first approach to problem solving",
  "Transparent pricing and communication",
  "Long-term partnership mindset",
];

export function Benefits() {
  return (
    <Section className="bg-muted/30">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium uppercase tracking-wider text-sky mb-3">
            Why vAlpha
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-foreground tracking-tight">
            We build software that actually works.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            No bloated teams, no endless meetings. Just experienced engineers who understand your business and deliver results. We&apos;ve helped startups and enterprises alike ship products that scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.li
                key={benefit}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                className="flex items-start gap-3"
              >
                <div className="mt-1 p-1 rounded-full bg-sky/10">
                  <Check className="w-4 h-4 text-sky" />
                </div>
                <span className="text-foreground">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
