"use client";


import { motion } from "framer-motion";
import { Sparkles, Target, MousePointer2, Zap, Eye, Heart } from "lucide-react";
import { Section } from "@/components/layout/Section";

const benefits = [
  {
    title: "Visionary Design",
    description: "Award-winning aesthetics that capture attention and build lasting brand equity.",
    icon: Sparkles,
  },
  {
    title: "Strategic Impact",
    description: "Design decisions backed by deep market research and brand psychology.",
    icon: Target,
  },
  {
    title: "Immersive UX",
    description: "User-centric storytelling that creates deep emotional connections with your audience.",
    icon: MousePointer2,
  },
  {
    title: "Creative Agility",
    description: "Fast-moving, high-impact workflows tailored to the pace of modern brands.",
    icon: Zap,
  },
  {
    title: "Absolute Clarity",
    description: "Transparent communication and collaborative creative processes every step of the way.",
    icon: Eye,
  },
  {
    title: "Brand Evolution",
    description: "We don't just launch and leave; we help your brand grow and adapt long-term.",
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
            We design for impact, not just aesthetics.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            A specialized collective of designers, strategists, and creators focused on elevating your digital presence through visionary thinking.
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
