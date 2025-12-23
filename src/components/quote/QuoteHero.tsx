"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

export function QuoteHero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-sky/10 to-transparent">
      <Container>
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase rounded-full bg-sky/10 text-sky">
              Get Started
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6 leading-[1.1]">
              Tell us about your next <span className="text-sky">big project</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to take your business to the next level? Fill out the form below and we&apos;ll provide a tailored quote for your specific needs.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
