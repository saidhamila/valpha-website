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
  deliverables: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PricingDetails {
  initial: string;
  recurring: { label: string; price: string }[];
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
    ],
    deliverables: [
      "Responsive website design",
      "SEO optimization",
      "Performance testing",
      "Cross-browser compatibility",
      "Documentation & training"
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
    ],
    deliverables: [
      "Full-stack application",
      "User authentication system",
      "Admin dashboard",
      "API documentation",
      "Deployment pipeline"
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
    ],
    deliverables: [
      "AI model integration",
      "Custom prompt engineering",
      "API endpoints",
      "Usage analytics",
      "Performance optimization"
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
    ],
    deliverables: [
      "Integration architecture",
      "API connectors",
      "Data migration",
      "Testing suite",
      "Monitoring setup"
    ]
  }
];

export const faqs: FAQ[] = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A standard website takes 4-8 weeks, while SaaS platforms typically require 3-6 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile methodology with regular check-ins and iterative development. This includes discovery, design, development, testing, and deployment phases with your feedback integrated at each stage."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer flexible maintenance and support packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements based on your needs."
  },
  {
    question: "What technologies do you use?",
    answer: "We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and various cloud platforms. We choose the best tools for each project's specific requirements."
  },
  {
    question: "How do you handle project communication?",
    answer: "We use collaborative tools like Slack and project management platforms for transparent communication. You'll have regular updates, access to progress tracking, and direct communication with the development team."
  }
];

export const pricingDetails: PricingDetails = {
  initial: "All projects begin with a discovery phase to understand your needs and provide accurate estimates. Pricing is transparent with no hidden fees.",
  recurring: [
    { label: "Maintenance", price: "From $500/mo" },
    { label: "Support Hours", price: "From $150/hr" }
  ]
};
