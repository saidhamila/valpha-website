"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { services } from "@/lib/content/services";

export function ServicesOverview() {
  return (
    <Section
      eyebrow="What we do"
      title="Services"
      description="From concept to deployment, we deliver end-to-end solutions that drive real business outcomes."
    >
      <div className="grid sm:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link
              href={`/services/${service.slug}`}
              className="group block p-6 sm:p-8 rounded-2xl border border-border bg-card hover:border-sky/50 transition-all h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-sky/10">
                  <service.icon className="w-6 h-6 text-sky" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-sky transition-colors" />
              </div>
              <h3 className="text-xl font-semibold font-heading text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.shortDescription}
              </p>
              <p className="text-sm font-medium text-sky">
                {service.pricing}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}