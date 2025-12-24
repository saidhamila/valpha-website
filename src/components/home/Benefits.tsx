"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, MousePointer2, Zap, Eye, Heart } from "lucide-react";
import { Section } from "@/components/layout/Section";

const benefits = [
  {
    title: "Technical Excellence",
    description: "Deep expertise in modern web architectures and performance optimization.",
    icon: Sparkles,
  },
  {
    title: "Strategic Partner",
    description: "We don't just build; we help you navigate the digital landscape.",
    icon: Target,
  },
  {
    title: "User-Centric Design",
    description: "Interfaces that don't just look good, but feel intuitive and purposeful.",
    icon: MousePointer2,
  },
  {
    title: "Scalable Solutions",
    description: "Systems designed to grow with your business, from MVP to enterprise.",
    icon: Zap,
  },
  {
    title: "Data-Driven Approach",
    description: "Leveraging analytics and user feedback to inform every decision.",
    icon: Eye,
  },
  {
    title: "Ongoing Support",
    description: "Continuous monitoring and updates to keep your project ahead.",
    icon: Heart,
  },
];

export function Benefits() {
  return (
    <Section className="bg-muted/30">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-3 mb-8">
          <p className="text-sm font-medium uppercase tracking-wider text-sky mb-3">
            Creative Edge
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-foreground tracking-tight max-w-3xl">
            Why Partner with <span className="text-sky">vAlpha?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            We bridge the gap between complex engineering and human-centered design.
          </p>
        </div>

        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group p-8 rounded-3xl border border-border bg-card hover:border-sky/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky/5"
          >
            <div className="w-12 h-12 rounded-2xl bg-sky/10 flex items-center justify-center text-sky mb-6 group-hover:bg-sky group-hover:text-primary transition-colors">
              <benefit.icon size={24} />
            </div>
            <h3 className="text-xl font-bold font-heading text-foreground mb-3">
              {benefit.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
