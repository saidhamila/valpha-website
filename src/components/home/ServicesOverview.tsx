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
        title="Software Solutions"
        description="We build high-performance software that solves real business problems and drives growth."
      >
      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            <Link
              href={`/services/${service.slug}`}
              className="relative flex flex-col sm:flex-row h-full rounded-3xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-sky/50 hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.15)] group-hover:-translate-y-1.5"
            >
              {/* Background Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-br from-sky/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image Section */}
              <div className="relative w-full sm:w-[45%] aspect-[16/11] sm:aspect-auto overflow-hidden">
                {service.image && (
                  <NextImage 
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                )}
                
                {/* Image Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Floating Badges */}
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-sky/10 backdrop-blur-xl border border-sky/30 shadow-lg">
                    <p className="text-[10px] font-bold text-sky uppercase tracking-widest whitespace-nowrap">
                      {service.pricing}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="relative flex-1 p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold font-heading text-foreground group-hover:text-sky transition-colors duration-300 leading-tight mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-sky uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                    <span>Learn More</span>
                    <div className="h-[1px] w-4 bg-sky transition-all duration-300 group-hover:w-8" />
                  </div>
                  <div className="w-10 h-10 rounded-full border border-border bg-background/50 flex items-center justify-center group-hover:bg-sky group-hover:border-sky group-hover:text-primary transition-all duration-500 group-hover:rotate-12">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}