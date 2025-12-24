"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Palette, Zap, Eye, Heart, MessageSquare, Globe, Fingerprint } from "lucide-react";
import { Section } from "@/components/layout/Section";

const benefits = [
  {
    title: "Narrative Excellence",
    description: "We don't just design; we build stories that resonate and endure in the cultural zeitgeist.",
    icon: MessageSquare,
  },
  {
    title: "Strategic Partner",
    description: "We align creative output with your business objectives to drive meaningful growth.",
    icon: Target,
  },
  {
    title: "Immersive Design",
    description: "Bespoke digital experiences that blend aesthetic beauty with seamless functionality.",
    icon: Palette,
  },
  {
    title: "Brand Coherence",
    description: "Ensuring every touchpoint reflects your brand's unique essence and values.",
    icon: Fingerprint,
  },
  {
    title: "Cultural Relevance",
    description: "Keeping your brand at the forefront of trends while maintaining timeless appeal.",
    icon: Globe,
  },
  {
    title: "Emotional Connection",
    description: "Creating designs that evoke feelings and build lasting loyalty with your audience.",
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
              We bridge the gap between strategic brand storytelling and human-centered design.
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
