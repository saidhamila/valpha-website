"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { services } from "@/lib/content/services";

export function ServicesList() {
  return (
    <Section className="bg-muted/30">
      <div className="space-y-16">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="scroll-mt-32"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-sky/10">
                    <service.icon className="w-6 h-6 text-sky" />
                  </div>
                  <span className="text-sm font-medium text-sky">
                    {service.pricing}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Deliverables
                </h3>
                <ul className="space-y-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sky mt-0.5 shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
