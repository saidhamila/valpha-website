"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

export function AboutHero() {
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
            About Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-foreground tracking-tight">
            Building the future of software, one project at a time.
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            We&apos;re a team of engineers, designers, and strategists who believe in the power of well-crafted software to transform businesses. Since 2020, we&apos;ve helped companies across industries build products that actually work.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
