"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { values } from "@/lib/content/team";
import { Shield, Sparkles, Zap, Heart } from "lucide-react";

const icons = [Shield, Sparkles, Zap, Heart];

export function CoreValues() {
  return (
    <Section
      eyebrow="Our Principles"
      title="Values that drive our work"
      className="bg-muted/30"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl border border-border bg-card hover:border-sky/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky/5"
            >
              <div className="w-12 h-12 rounded-xl bg-sky/10 flex items-center justify-center mb-6 group-hover:bg-sky group-hover:text-white transition-colors duration-300">
                <Icon className="w-6 h-6 text-sky group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
