"use client";

import { motion } from "framer-motion";
import NextImage from "next/image";
import { Container } from "@/components/layout/Container";

export function AboutHero() {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-border shadow-2xl"
          >
            <NextImage 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Our Team Workspace"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
