import Link from "next/link";
import Image from "next/image";
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
              className="group block rounded-2xl border border-border bg-card hover:border-sky/50 transition-all h-full overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image 
                  src={service.image!}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute top-4 left-4 p-2 rounded-lg bg-white/10 backdrop-blur-md">
                  <service.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold font-heading text-foreground">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-sky transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {service.shortDescription}
                </p>
                <p className="text-xs font-semibold text-sky uppercase tracking-wider">
                  {service.pricing}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}