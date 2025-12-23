"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

export function WorkHero() {
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
            Our Work
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-foreground tracking-tight">
            Projects that drive results
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            Real outcomes for real businesses. From trading platforms to AI support systems, explore how we&apos;ve helped companies transform their operations.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
