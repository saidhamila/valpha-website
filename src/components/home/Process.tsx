"use client";

import { motion } from "framer-motion";
import { Search, Palette, Zap, Rocket } from "lucide-react";
import { Section } from "@/components/layout/Section";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "Deep dive into your goals, audience, and technical requirements.",
    duration: "1-2 Weeks",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Crafting the visual identity and user experience for your product.",
    duration: "2-3 Weeks",
  },
  {
    icon: Zap,
    title: "Development",
    description: "Agile engineering with continuous feedback and testing.",
    duration: "4-12 Weeks",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Deployment, monitoring, and ongoing optimization for scale.",
    duration: "Continuous",
  },
];

export function Process() {
  return (
    <Section
      eyebrow="Our Workflow"
      title="Crafting your brand story"
      description="A methodical approach to creativity that ensures consistent, high-quality results."
    >
      <div className="relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky to-sky/70 flex items-center justify-center shadow-lg shadow-sky/25"
                  >
                    <step.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-sky flex items-center justify-center text-sm font-bold font-heading text-sky">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="mt-6 text-xl font-semibold font-heading text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-sky">
                  {step.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
