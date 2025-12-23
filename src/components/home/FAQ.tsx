"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/layout/Section";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Most MVPs take 6-10 weeks from kickoff to launch. Larger enterprise projects typically span 3-6 months. We provide detailed timelines during our discovery phase based on your specific requirements.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer both fixed-price and time & materials engagements depending on project scope. Fixed-price works well for well-defined projects, while T&M provides flexibility for evolving requirements. All projects start with a paid discovery phase.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer flexible maintenance and support packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements. We're committed to long-term partnerships, not just one-time deliveries.",
  },
  {
    question: "What makes vAlpha different from other agencies?",
    answer: "We're a senior-only team with 10+ years of experience each. No hand-offs to junior developers. We specialize in AI-powered applications and have a proven track record with both startups and Fortune 500 companies.",
  },
  {
    question: "Can you work with our existing team?",
    answer: "Absolutely. We often collaborate with in-house teams, providing additional expertise and capacity. We adapt our workflow to integrate seamlessly with your existing processes, tools, and communication channels.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section
      eyebrow="FAQ"
      title="Common questions"
      description="Everything you need to know before we start working together."
    >
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="border-b border-border"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full py-5 flex items-center justify-between text-left group"
            >
              <span className="text-lg font-medium text-foreground group-hover:text-sky transition-colors pr-8">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
