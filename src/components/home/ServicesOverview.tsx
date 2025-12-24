"use client";


import Link from "next/link";
import NextImage from "next/image";
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="group block rounded-3xl border border-border bg-card hover:border-sky/50 transition-all duration-300 h-full overflow-hidden hover:shadow-2xl hover:shadow-sky/10 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <NextImage 
                    src={service.image!}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-sky/20 backdrop-blur-md border border-sky/30">
                      <p className="text-[10px] font-bold text-sky uppercase tracking-widest">
                        {service.pricing}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold font-heading text-foreground group-hover:text-sky transition-colors">
                      {service.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-sky group-hover:text-primary transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed line-clamp-2">
                    {service.shortDescription}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-sky group-hover:gap-3 transition-all">
                    <span>Explore Service</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>

        ))}
      </div>
    </Section>
  );
}