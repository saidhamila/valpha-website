"use client";


import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/layout/Container";

const stats = [
  { value: 500, suffix: "+", label: "Members Transformed" },
  { value: 15, suffix: "+", label: "Expert Coaches" },
  { value: 24, suffix: "/7", label: "Gym Access" },
  { value: 98, suffix: "%", label: "Success Rate" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky/5 via-transparent to-transparent" />
      
      <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-medium uppercase tracking-wider text-sky mb-3">
              Our Impact
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold font-heading text-foreground tracking-tight">
              Creativity measured in results
            </h2>
          </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="text-center p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-sky/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-sky/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="relative text-4xl sm:text-5xl font-bold font-heading text-foreground mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="relative text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
