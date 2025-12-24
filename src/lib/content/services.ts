import { Layout, Globe, Smartphone, Sparkles, MessageSquare, Target, Zap, Bot, Database, Code2, Cpu } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ProcessStep {
  step: string;
  description: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  heroDescription: string;
  icon: LucideIcon;
  image: string;
  pricing: string;
  features: ServiceFeature[];
  deliverables: string[];
  process: ProcessStep[];
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
    shortDescription: "High-performance websites and web applications built with modern technologies.",
    description: "We build fast, responsive, and SEO-optimized websites that convert visitors into customers.",
    heroDescription: "Our web development service focuses on creating high-performance digital experiences. We use the latest frameworks like Next.js to ensure your site is lightning fast and scales with your business.",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    pricing: "Starts at $5k",
    features: [
      { title: "Next.js & React", description: "Modern, high-performance frontend frameworks for the best user experience." },
      { title: "Responsive Design", description: "Websites that look and function perfectly on every device." },
      { title: "SEO Optimization", description: "Built-in best practices to ensure high visibility on search engines." },
      { title: "CMS Integration", description: "Easy-to-use content management systems so you can update your site easily." }
    ],
    deliverables: [
      "Custom UI/UX Design",
      "Production-ready Website",
      "CMS Implementation",
      "Performance Optimization",
      "Technical Documentation"
    ],
    process: [
      { step: "Discovery", description: "Understanding your goals, audience, and technical requirements." },
      { step: "Design", description: "Crafting a unique visual identity and user interface." },
      { step: "Development", description: "Coding the website with a focus on performance and quality." },
      { step: "Launch", description: "Deploying and testing to ensure a flawless experience." }
    ]
  },
  {
    id: "saas-development",
    slug: "saas-development",
    title: "SaaS Development",
    shortDescription: "End-to-end development of scalable, secure, and intuitive SaaS platforms.",
    description: "We turn your software ideas into powerful SaaS products that users love.",
    heroDescription: "From MVP to enterprise solutions, we build SaaS platforms that are designed for growth. Our focus is on scalability, security, and a seamless user experience.",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop",
    pricing: "Starts at $15k",
    features: [
      { title: "Scalable Architecture", description: "Built to handle thousands of users without breaking a sweat." },
      { title: "Secure Authentication", description: "Robust security measures to protect user data and privacy." },
      { title: "Subscription Management", description: "Seamless integration with Stripe or other payment processors." },
      { title: "Real-time Analytics", description: "Dashboards that provide valuable insights into your product's performance." }
    ],
    deliverables: [
      "MVP Development",
      "User Authentication System",
      "Payment Integration",
      "Admin Dashboard",
      "API Documentation"
    ],
    process: [
      { step: "Architecture", description: "Planning the technical stack and database structure." },
      { step: "Prototyping", description: "Designing the core user flows and interface." },
      { step: "Core Dev", description: "Building the essential features for your product launch." },
      { step: "Deployment", description: "Setting up CI/CD pipelines and production environment." }
    ]
  },
  {
    id: "ai-assistance",
    slug: "ai-assistance",
    title: "AI Assistance",
    shortDescription: "Intelligent AI features and custom LLM integrations to automate your business.",
    description: "We help you leverage the power of AI to improve efficiency and enhance customer experiences.",
    heroDescription: "Transform your business with custom AI solutions. We specialize in integrating Large Language Models (LLMs) into existing workflows to automate tasks and provide intelligent insights.",
    icon: Bot,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    pricing: "Starts at $8k",
    features: [
      { title: "LLM Integration", description: "Adding intelligent chat and automation features using OpenAI or Anthropic." },
      { title: "Custom Training", description: "Fine-tuning models on your specific business data for better results." },
      { title: "Process Automation", description: "Using AI to automate repetitive tasks and save valuable time." },
      { title: "Smart Analytics", description: "AI-driven insights to help you make better business decisions." }
    ],
    deliverables: [
      "AI Chatbot/Assistant",
      "Custom Model Integration",
      "Workflow Automations",
      "Data Processing Pipelines",
      "Prompt Engineering"
    ],
    process: [
      { step: "AI Audit", description: "Identifying opportunities for AI integration in your business." },
      { step: "PoC", description: "Building a Proof of Concept to validate the AI solution." },
      { step: "Implementation", description: "Developing and integrating the AI features into your platform." },
      { step: "Optimization", description: "Refining prompts and model performance for accuracy." }
    ]
  },
  {
    id: "api-integration",
    slug: "api-integration",
    title: "API & Systems Integration",
    shortDescription: "Connecting your software ecosystem for seamless data flow and efficiency.",
    description: "We ensure all your tools work together perfectly with custom API and database integrations.",
    heroDescription: "Eliminate data silos and manual entry. We build custom integrations between your CRM, ERP, and web applications to create a unified and efficient software ecosystem.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop",
    pricing: "Starts at $6k",
    features: [
      { title: "Custom API Dev", description: "Building secure and well-documented APIs for your applications." },
      { title: "Data Migration", description: "Safe and efficient movement of data between different systems." },
      { title: "CRM/ERP Integration", description: "Connecting your business tools to your web platform." },
      { title: "Database Architecture", description: "Designing optimized databases for high-speed data access." }
    ],
    deliverables: [
      "Custom API Endpoints",
      "Integration Middleware",
      "Automated Data Sync",
      "System Documentation",
      "Maintenance Plan"
    ],
    process: [
      { step: "Mapping", description: "Auditing your systems and mapping data flows." },
      { step: "Design", description: "Designing the integration architecture and endpoints." },
      { step: "Implementation", description: "Building and testing the connections between systems." },
      { step: "Monitoring", description: "Setting up logs and alerts to ensure reliability." }
    ]
  }
];

export const faqs: FAQ[] = [
  {
    question: "What technologies do you use?",
    answer: "We primarily use modern web technologies like Next.js, React, and TypeScript. For backend and APIs, we work with Node.js, Python, and various database systems like PostgreSQL and MongoDB. We also specialize in AI integrations using OpenAI and Anthropic APIs."
  },
  {
    question: "How long does a typical project take?",
    answer: "A custom website usually takes 4-8 weeks, while complex SaaS platforms or AI integrations can take 3-6 months. We work in phases to ensure you get value as quickly as possible, starting with an MVP."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we offer ongoing maintenance and support packages to ensure your software remains secure, up-to-date, and continues to perform at its best as your business grows."
  },
  {
    question: "Can you work with our existing team?",
    answer: "Absolutely. We often work alongside internal development or product teams to provide specialized expertise in AI, SaaS architecture, or API integrations."
  },
  {
    question: "How do you handle project management?",
    answer: "We use agile methodologies with weekly check-ins and progress reports. You'll have access to a dedicated project board where you can track the status of all tasks and deliverables in real-time."
  }
];

export const pricingDetails: PricingDetails = {
  initial: "Every software project is unique. We begin with a technical discovery session to understand your requirements, providing a transparent proposal with clearly defined milestones and fixed pricing for each phase.",
  recurring: [
    { label: "Maintenance & Support", price: "From $1,500/mo" },
    { label: "Ongoing Development", price: "From $150/hr" }
  ]
};
