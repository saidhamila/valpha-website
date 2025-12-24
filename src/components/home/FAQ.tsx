"use client";


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { faqs } from "@/lib/content/services";

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
