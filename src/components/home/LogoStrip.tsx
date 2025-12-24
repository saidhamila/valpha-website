"use client";


import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

const logos = [
  "Figma",
  "Adobe CC",
  "Framer",
  "Sanity",
  "Webflow",
  "Shopify",
  "Next.js",
];

export function LogoStrip() {
  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <Container>
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
          The stack behind our creative visions
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-xl font-bold font-heading text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
