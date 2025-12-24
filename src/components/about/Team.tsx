"use client";

import { motion } from "framer-motion";
import NextImage from "next/image";
import { Section } from "@/components/layout/Section";
import { team } from "@/lib/content/team";
import { Linkedin, Twitter, Github } from "lucide-react";

export function Team() {
  return (
    <Section
      eyebrow="Our Team"
      title="The people behind vAlpha"
      className="bg-muted/30"
    >
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-border bg-card hover:border-sky/30 transition-all group"
          >
            <div className="p-8 sm:p-10">
                <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start text-center lg:text-left">
                <div className="relative shrink-0">
                  <div className="absolute -inset-2 bg-gradient-to-br from-sky/30 to-sky/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-sky/10 group-hover:ring-sky/30 transition-all">
                    <NextImage
                      src={member.image!}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div>
                  <span className="inline-block text-sky text-xs font-semibold tracking-wider uppercase mb-2">
                    {index === 0 ? "Founder" : "Sales"}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground font-medium mb-4 text-sm">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                    {member.bio}
                  </p>

                  <div className="flex gap-6 mb-6 justify-center sm:justify-start">
                    {member.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 justify-center sm:justify-start">
                    <a href="#" className="p-2 rounded-lg bg-muted hover:bg-sky/10 hover:text-sky transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="p-2 rounded-lg bg-muted hover:bg-sky/10 hover:text-sky transition-colors">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="p-2 rounded-lg bg-muted hover:bg-sky/10 hover:text-sky transition-colors">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
