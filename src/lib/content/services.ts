import { Code2, Rocket, Brain, Layers, Globe, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  image: string;
  pricing: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    shortDescription: "Bespoke, high-performance web applications built for speed and conversion.",
    description: "High-performance, accessible, and scalable web applications built with modern technologies.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    pricing: "Starts at $5k",
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
    shortDescription: "Scalable product architecture designed to grow with your user base.",
    description: "End-to-end product development from initial architecture to scalable cloud deployment.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366991?q=80&w=2070&auto=format&fit=crop",
    pricing: "Starts at $10k",
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
    shortDescription: "Automate complex workflows with custom LLM and AI agent implementations.",
    description: "Integrating advanced AI capabilities to automate workflows and enhance user experiences.",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    pricing: "Starts at $8k",
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
    shortDescription: "Connect your digital ecosystem with robust, secure API integrations.",
    description: "Connecting disparate systems into a unified, high-performance digital ecosystem.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    pricing: "Starts at $6k",
    features: [
      "Legacy System Modernization",
      "Third-party API Integration",
      "Database Optimization",
      "Security Audits",
      "Continuous Integration/Deployment"
    ]
  }
];
