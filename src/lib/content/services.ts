import { Code2, Rocket, Brain, Layers, Globe, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export const services: Service[] = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    description: "High-performance, accessible, and scalable web applications built with modern technologies.",
    icon: Globe,
    features: [
      "Custom React/Next.js Applications",
      "Performance Optimization",
      "Headless CMS Integration",
      "Progressive Web Apps (PWA)",
      "Accessibility (a11y) Compliance"
    ]
  },
  {
    id: "saas-development",
    slug: "saas-development",
    title: "SaaS Development",
    description: "End-to-end product development from initial architecture to scalable cloud deployment.",
    icon: Rocket,
    features: [
      "Multi-tenant Architecture",
      "Subscription Management",
      "API Design & Development",
      "Real-time Dashboards",
      "Cloud Infrastructure Setup"
    ]
  },
  {
    id: "ai-solutions",
    slug: "ai-solutions",
    title: "AI Integration",
    description: "Integrating advanced AI capabilities to automate workflows and enhance user experiences.",
    icon: Brain,
    features: [
      "LLM Implementation",
      "Custom AI Agents",
      "Natural Language Processing",
      "Automated Workflows",
      "Data Analysis & Visualization"
    ]
  },
  {
    id: "systems-integration",
    slug: "systems-integration",
    title: "Systems Integration",
    description: "Connecting disparate systems into a unified, high-performance digital ecosystem.",
    icon: Layers,
    features: [
      "Legacy System Modernization",
      "Third-party API Integration",
      "Database Optimization",
      "Security Audits",
      "Continuous Integration/Deployment"
    ]
  }
];
