"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";

const technologies = [
  {
    category: "Frontend",
    items: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#FFFFFF" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind CSS", color: "#06B6D4" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", color: "#339933" },
      { name: "Python", color: "#3776AB" },
      { name: "PostgreSQL", color: "#4169E1" },
      { name: "Redis", color: "#DC382D" },
    ],
  },
  {
    category: "AI & ML",
    items: [
      { name: "OpenAI", color: "#412991" },
      { name: "LangChain", color: "#1C3C3C" },
      { name: "Pinecone", color: "#000000" },
      { name: "Hugging Face", color: "#FFD21E" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", color: "#FF9900" },
      { name: "Vercel", color: "#FFFFFF" },
      { name: "Docker", color: "#2496ED" },
      { name: "GitHub Actions", color: "#2088FF" },
    ],
  },
];

export function TechStack() {
  return (
    <Section
      eyebrow="Technology"
      title="Built with modern tools"
      description="We use cutting-edge technologies to deliver fast, scalable, and maintainable solutions."
      className="bg-muted/30"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {technologies.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="p-6 rounded-2xl border border-border bg-card"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sky mb-4">
              {category.category}
            </h3>
            <div className="space-y-3">
              {category.items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: categoryIndex * 0.1 + index * 0.05 }}
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-2 h-2 rounded-full transition-transform group-hover:scale-150"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-foreground font-medium group-hover:text-sky transition-colors">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
