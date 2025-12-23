"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

export function BlogHero() {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-sky mb-3">
            Blog
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-foreground tracking-tight">
            Ideas and insights
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            Technical deep-dives, industry perspectives, and lessons learned from building software at scale.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
