"use client";


import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code2, Rocket } from "lucide-react";
import { Section } from "@/components/layout/Section";

const steps = [
  {
    icon: MessageSquare,
    title: "Discovery",
    description: "We dive deep into your goals, challenges, and vision to understand exactly what you need.",
    duration: "1-2 weeks",
  },
  {
    icon: PenTool,
    title: "Design & Architecture",
    description: "We craft the technical blueprint and user experience that will bring your vision to life.",
    duration: "1-2 weeks",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Agile sprints with regular demos. You see progress every week and can course-correct early.",
    duration: "4-12 weeks",
  },
  {
    icon: Rocket,
    title: "Launch & Iterate",
    description: "We deploy to production and provide ongoing support as you gather real user feedback.",
    duration: "Ongoing",
  },
];

export function Process() {
  return (
    <Section
      eyebrow="How we work"
      title="From idea to launch"
      description="A proven process that delivers results on time and on budget."
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