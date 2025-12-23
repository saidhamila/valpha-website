"use client";


import Link from "next/link";
import NextImage from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Shield } from "lucide-react";
import { Container } from "@/components/layout/Container";

const cards = [
  { icon: Zap, label: "AI Automation", stat: "+40% efficiency" },
  { icon: TrendingUp, label: "Scalable SaaS", stat: "10x throughput" },
  { icon: Shield, label: "Enterprise Security", stat: "100% compliant" },
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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-sky/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
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
      
      <Container className="relative z-10 py-20 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-foreground leading-[1.1]">
              Build smarter products with{" "}
              <span className="text-gradient">AI-powered</span> engineering.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              We design and build custom web applications, AI assistants, and automation systems that help businesses scale faster and work smarter.
            </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium rounded-full bg-sky text-primary hover:bg-sky/90 transition-colors"
                >
                  Get a Quote
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium rounded-full border border-border text-foreground hover:bg-muted transition-colors"
                >
                  View our work
                </Link>
              </div>
          </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative hidden lg:block"
            >
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl aspect-[4/3]">
                  <NextImage 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                    alt="Tech Hero"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                  {cards.map((card, index) => (
                    <motion.div
                      key={card.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="p-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <card.icon className="w-4 h-4 text-sky" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/70">
                          {card.label}
                        </span>
                      </div>
                      <p className="text-lg font-bold text-white">
                        {card.stat}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-sky to-sky/50 rounded-full blur-2xl opacity-40" />
            </motion.div>
        </div>
      </Container>
    </section>
  );
}