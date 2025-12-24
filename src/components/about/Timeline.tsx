"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { timeline } from "@/lib/content/team";

export function Timeline() {
  return (
    <Section
      eyebrow="Our Journey"
      title="From startup to scale"
      className="bg-muted/30"
    >
      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-1/2" />

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative flex items-center gap-8 ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              <div className="hidden sm:block sm:w-1/2" />
              
              <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-sky border-4 border-background sm:-translate-x-1/2" />

                <div className="ml-10 sm:ml-0 sm:w-1/2 p-6 rounded-2xl border border-border bg-card">
                <span className="text-sm font-bold text-sky">{item.year}</span>
                <h3 className="text-lg font-semibold font-heading text-foreground mt-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
