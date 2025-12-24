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
                Crafting narratives that define the future.
              </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                We&apos;re a collective of designers, storytellers, and creative strategists dedicated to building brands that resonate. Since 2020, we&apos;ve helped visionary companies translate their essence into immersive experiences.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-border shadow-2xl"
            >
              <NextImage 
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop"
                alt="Creative Studio Collective"
                fill
                className="object-cover"
              />
            </motion.div>
        </div>
      </Container>
    </section>
  );
}
