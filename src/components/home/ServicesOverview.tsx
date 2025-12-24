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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <Link
                href={`/services/${service.slug}`}
                className="relative block h-full rounded-3xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-sky/50 hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.15)] group-hover:-translate-y-1.5"
              >
                {/* Background Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-br from-sky/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Image Section */}
                <div className="relative aspect-[16/11] overflow-hidden">
                  <NextImage 
                    src={service.image!}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Image Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Floating Badges */}
                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="p-2.5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
                    >
                      <service.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <div className="px-3 py-1.5 rounded-full bg-sky/10 backdrop-blur-xl border border-sky/30 shadow-lg">
                      <p className="text-[10px] font-bold text-sky uppercase tracking-widest whitespace-nowrap">
                        {service.pricing}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative p-7">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold font-heading text-foreground group-hover:text-sky transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <div className="mt-1 w-8 h-8 rounded-full border border-border bg-background/50 flex items-center justify-center group-hover:bg-sky group-hover:border-sky group-hover:text-primary transition-all duration-500 group-hover:rotate-12">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                    {service.shortDescription}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-bold text-sky uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                    <span>Learn More</span>
                    <div className="h-[1px] w-4 bg-sky transition-all duration-300 group-hover:w-8" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
    </Section>
  );
}