"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { values } from "@/lib/content/team";

export function Values() {
  return (
    <Section
      eyebrow="Our Values"
      title="What we believe in"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 sm:p-8 rounded-2xl border border-border bg-card"
          >
            <h3 className="text-xl font-semibold font-heading text-foreground mb-3">
              {value.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
