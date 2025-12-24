"use client";

import Link from "next/link";
import NextImage from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Globe, Shield, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

const cards = [
  { icon: Zap, label: "Performance", stat: "100 Score" },
  { icon: Globe, label: "Reach", stat: "Global Edge" },
  { icon: Shield, label: "Security", stat: "Enterprise" },
];

const floatingShapes = [
  { size: 80, x: "10%", y: "20%", delay: 0, duration: 20 },
  { size: 60, x: "85%", y: "15%", delay: 2, duration: 25 },
  { size: 40, x: "75%", y: "70%", delay: 4, duration: 18 },
  { size: 100, x: "5%", y: "75%", delay: 1, duration: 22 },
  { size: 50, x: "90%", y: "45%", delay: 3, duration: 20 },
  { size: 30, x: "40%", y: "85%", delay: 5, duration: 15 },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none"
          style={{ left: shape.x, top: shape.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            y: [0, -30, 0],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="border border-sky/20 rounded-2xl"
            style={{ width: shape.size, height: shape.size }}
          />
        </motion.div>
      ))}

      <motion.div
        className="absolute left-1/4 top-1/3 w-2 h-2 rounded-full bg-sky/40"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute right-1/3 bottom-1/4 w-3 h-3 rounded-full bg-sky/30"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
      
      <Container className="relative z-10 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky/10 border border-sky/20 mb-6">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-sky"></span>
                    </span>
                    <span className="text-xs font-semibold text-sky tracking-wide uppercase">Open for Q1 2025</span>
                  </div>
                    <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold font-heading tracking-tight text-foreground leading-[1.05]">
                      Building the future of <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-sky via-blue-500 to-indigo-600 animate-gradient-x drop-shadow-[0_0_15px_rgba(14,165,233,0.3)]">Digital</span>.
                    </h1>
                  <p className="mt-8 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
                    High-performance software and immersive digital experiences for the next generation of brands.
                  </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-sky text-primary hover:bg-sky/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-sky/20"
                  >
                    Get a Quote
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/work"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full border border-border text-foreground hover:bg-muted/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    View our work
                  </Link>
                </div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              {/* Main App Frame */}
              <div className="relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-3xl shadow-2xl aspect-[4/3] overflow-hidden group">
                {/* Decorative Window Buttons */}
                <div className="absolute top-4 left-4 flex gap-1.5 z-20">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                </div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />

                {/* Animated Gradient Glow */}
                <motion.div 
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-20 -right-20 w-64 h-64 bg-sky/30 rounded-full blur-[80px]" 
                />

                  {/* Tech Image / Background */}
                  <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                    <NextImage 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                      alt="Tech Architecture"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                    />
                  </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/5 pt-6">
                    {cards.map((card, index) => (
                      <motion.div
                        key={card.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="flex items-center gap-3 group/item"
                      >
                        <div className="relative">
                          <card.icon size={14} className="text-sky/40 group-hover/item:text-sky transition-colors duration-300" />
                          <div className="absolute -inset-2 bg-sky/10 rounded-full blur-md opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[8px] text-white/20 uppercase tracking-[0.3em] font-bold transition-colors group-hover/item:text-white/40">
                            {card.label}
                          </span>
                          <span className="text-[11px] font-mono text-white/60 group-hover/item:text-white transition-colors">
                            {card.stat}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                    <div className="ml-auto hidden xl:flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-sky animate-pulse" />
                      <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em]">Network Active</span>
                    </div>
                  </div>
                </div>

                {/* Reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
              </div>

              </motion.div>
          </div>
        </Container>
      </section>
    );
  }
