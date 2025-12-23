"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Shield, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { QuoteForm } from "./QuoteForm";

const benefits = [
  {
    icon: Clock,
    title: "Quick turnaround",
    description: "Receive a detailed proposal and quote within 24 hours of your request."
  },
  {
    icon: Shield,
    title: "Secure & private",
    description: "Your project details and data are protected by strict privacy protocols."
  },
  {
    icon: MessageSquare,
    title: "Expert consultation",
    description: "Discuss your goals directly with our lead developers and founders."
  }
];

export function QuoteSection() {
  return (
    <Section className="bg-muted/30">
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <QuoteForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 space-y-8"
        >
          <div>
            <h3 className="text-xl font-bold font-heading text-foreground mb-6">
              Why work with vAlpha?
            </h3>
            <div className="space-y-4">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-card shadow-sm"
                >
                  <div className="p-2.5 rounded-xl bg-sky/10">
                    <item.icon className="w-5 h-5 text-sky" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-sky text-primary shadow-xl shadow-sky/20">
            <Mail className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold font-heading mb-2">Prefer email?</h3>
            <p className="text-primary/80 mb-6">
              You can reach us directly at <a href="mailto:contact@valpha.dev" className="underline font-medium hover:text-white transition-colors">contact@valpha.dev</a> for any specific inquiries.
            </p>
            <div className="pt-6 border-t border-primary/20">
              <p className="text-xs font-medium uppercase tracking-wider opacity-60">Domain</p>
              <p className="text-lg font-bold">valpha.dev</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
