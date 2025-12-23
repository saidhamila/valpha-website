"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function CTAStrip() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-r from-[#075985] to-[#0369A1]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Ready to build something great?
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
            Let&apos;s discuss how we can help you ship faster and scale smarter.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 text-base font-medium rounded-full bg-white text-blue-900 hover:bg-white/90 transition-colors"
          >
            Get in touch
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}