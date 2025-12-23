"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { team } from "@/lib/content/team";
import { Linkedin, Twitter, Github } from "lucide-react";

export function Team() {
  const founder = team[0];
  
  return (
    <Section
      eyebrow="Our Team"
      title="The people behind vAlpha"
      className="bg-muted/30"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-sky/5"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky/10 via-transparent to-transparent" />
        
        <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-sky/30 to-sky/10 rounded-full blur-2xl" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-sky/20 ring-offset-4 ring-offset-background">
                <Image
                  src={founder.image!}
                  alt={founder.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <span className="inline-block text-sky text-sm font-medium tracking-wider uppercase mb-2">
              Founder
            </span>
            <h3 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-2">
              {founder.name}
            </h3>
            <p className="text-lg text-sky font-medium mb-6">
              {founder.role}
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              {founder.bio}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-sky">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-sky">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-sky">100%</div>
                <div className="text-sm text-muted-foreground">Client Focused</div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3 justify-center md:justify-start">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-sky/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-sky/20 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5 text-muted-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-sky/20 flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}