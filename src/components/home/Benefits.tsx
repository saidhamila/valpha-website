"use client";


import { motion } from "framer-motion";
import { Sparkles, Target, MousePointer2, Zap, Eye, Heart } from "lucide-react";
import { Section } from "@/components/layout/Section";

const benefits = [
  {
    title: "Expert Trainers",
    description: "Certified professionals dedicated to your success and safety.",
    icon: Sparkles,
  },
  {
    title: "24/7 Access",
    description: "Work out on your schedule with round-the-clock gym access.",
    icon: Target,
  },
  {
    title: "Elite Community",
    description: "Train alongside like-minded individuals who push you to be better.",
    icon: MousePointer2,
  },
  {
    title: "Modern Facilities",
    description: "State-of-the-art equipment and clean, spacious workout zones.",
    icon: Zap,
  },
  {
    title: "Proven Results",
    description: "Scientific training methods that deliver measurable transformations.",
    icon: Eye,
  },
  {
    title: "Supportive Culture",
    description: "A welcoming environment for all fitness levels and backgrounds.",
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
              Why Choose <span className="text-sky">EliteGYM?</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We provide more than just a place to workout. We provide the tools, the knowledge, and the community you need to succeed.
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
