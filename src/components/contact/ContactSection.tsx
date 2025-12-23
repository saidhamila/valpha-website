"use client";

import { motion } from "framer-motion";
import { Mail, Calendar, Github, Linkedin, Twitter } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { ContactForm } from "./ContactForm";

const contactInfo = [
  {
    icon: Mail,
    label: "Email us",
    value: "hello@valpha.io",
    href: "mailto:hello@valpha.io",
  },
  {
    icon: Calendar,
    label: "Schedule a call",
    value: "Book a 30-min chat",
    href: "#",
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/valpha", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/company/valpha", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/valpha", label: "Twitter" },
];

export function ContactSection() {
  return (
    <Section className="bg-muted/30">
      <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <ContactForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-lg font-semibold font-heading text-foreground mb-4">
              Other ways to reach us
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:border-sky/50 transition-all"
                >
                  <div className="p-2 rounded-lg bg-sky/10">
                    <item.icon className="w-5 h-5 text-sky" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold font-heading text-foreground mb-4">
              Follow us
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border bg-card hover:border-sky/50 hover:text-sky transition-all"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-sky/10 to-sky/5 border border-sky/20">
            <h3 className="font-semibold font-heading text-foreground mb-2">
              Quick response guarantee
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We respond to all inquiries within 24 hours during business days. For urgent matters, email us directly.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
