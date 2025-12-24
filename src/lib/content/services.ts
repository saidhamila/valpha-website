import { Code2, Rocket, Brain, Layers, Globe, Smartphone } from "lucide-react";
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
    shortDescription: "Bespoke, high-performance web applications built for speed and conversion.",
    description: "High-performance, accessible, and scalable web applications built with modern technologies.",
    heroDescription: "We craft stunning, high-performance websites that convert visitors into customers. Using cutting-edge technologies like React and Next.js, we build blazing-fast experiences.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    pricing: "Starts at $1k",
    features: [
      { title: "Custom React/Next.js Applications", description: "Tailored solutions built with modern frameworks for optimal performance and developer experience." },
      { title: "Performance Optimization", description: "Lightning-fast load times through code splitting, lazy loading, and advanced caching strategies." },
      { title: "Headless CMS Integration", description: "Flexible content management with Sanity, Contentful, or Strapi for easy updates." },
      { title: "Progressive Web Apps (PWA)", description: "App-like experiences that work offline and can be installed on any device." }
    ],
    deliverables: [
      "Responsive website design",
      "SEO optimization",
      "Performance testing",
      "Cross-browser compatibility",
      "Documentation & training"
    ],
    process: [
      { step: "Discovery", description: "Understanding your business goals, target audience, and project requirements." },
      { step: "Design", description: "Creating wireframes and visual designs that align with your brand identity." },
      { step: "Development", description: "Building your website with clean, maintainable code and modern best practices." },
      { step: "Testing & Launch", description: "Rigorous testing across devices followed by a smooth deployment." }
    ]
  },
  {
    id: "saas-development",
    slug: "saas-development",
    title: "SaaS Development",
    shortDescription: "Scalable product architecture designed to grow with your user base.",
    description: "End-to-end product development from initial architecture to scalable cloud deployment.",
    heroDescription: "Transform your vision into a market-ready SaaS product. We handle everything from architecture design to deployment, ensuring your platform can scale with your success.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366991?q=80&w=2070&auto=format&fit=crop",
    pricing: "Starts at $8k",
    features: [
      { title: "Multi-tenant Architecture", description: "Efficient data isolation and resource sharing for cost-effective scaling." },
      { title: "Subscription Management", description: "Integrated billing with Stripe, usage tracking, and plan management." },
      { title: "API Design & Development", description: "RESTful or GraphQL APIs with comprehensive documentation." },
      { title: "Real-time Dashboards", description: "Live analytics and monitoring for both admins and end-users." }
    ],
    deliverables: [
      "Full-stack application",
      "User authentication system",
      "Admin dashboard",
      "API documentation",
      "Deployment pipeline"
    ],
    process: [
      { step: "Architecture Planning", description: "Designing a scalable system that grows with your user base." },
      { step: "MVP Development", description: "Building core features to validate your product-market fit." },
      { step: "Iteration", description: "Refining based on user feedback and analytics." },
      { step: "Scale & Optimize", description: "Performance optimization and infrastructure scaling." }
    ]
  },
  {
    id: "ai-solutions",
    slug: "ai-solutions",
    title: "AI Integration",
    shortDescription: "Automate complex workflows with custom LLM and AI agent implementations.",
    description: "Integrating advanced AI capabilities to automate workflows and enhance user experiences.",
    heroDescription: "Harness the power of artificial intelligence to automate workflows, enhance user experiences, and unlock new possibilities for your business with custom AI solutions.",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    pricing: "Starts at $5k",
    features: [
      { title: "LLM Implementation", description: "Custom integrations with OpenAI, Anthropic, or open-source models." },
      { title: "Custom AI Agents", description: "Autonomous agents that handle complex tasks and decision-making." },
      { title: "Natural Language Processing", description: "Text analysis, sentiment detection, and content generation." },
      { title: "Automated Workflows", description: "AI-powered automation that saves time and reduces errors." }
    ],
    deliverables: [
      "AI model integration",
      "Custom prompt engineering",
      "API endpoints",
      "Usage analytics",
      "Performance optimization"
    ],
    process: [
      { step: "Use Case Analysis", description: "Identifying opportunities where AI can add the most value." },
      { step: "Model Selection", description: "Choosing the right AI models for your specific requirements." },
      { step: "Integration", description: "Seamlessly connecting AI capabilities with your existing systems." },
      { step: "Fine-tuning", description: "Optimizing performance and accuracy for your domain." }
    ]
  },
  {
    id: "systems-integration",
    slug: "systems-integration",
    title: "Systems Integration",
    shortDescription: "Connect your digital ecosystem with robust, secure API integrations.",
    description: "Connecting disparate systems into a unified, high-performance digital ecosystem.",
    heroDescription: "Streamline your operations by connecting all your business systems. We create robust integrations that enable seamless data flow and automated processes.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    pricing: "Starts at $4k",
    features: [
      { title: "Legacy System Modernization", description: "Breathing new life into existing systems with modern interfaces." },
      { title: "Third-party API Integration", description: "Connecting with payment processors, CRMs, ERPs, and more." },
      { title: "Database Optimization", description: "Query optimization, indexing, and migration strategies." },
      { title: "Security Audits", description: "Comprehensive security review and vulnerability assessment." }
    ],
    deliverables: [
      "Integration architecture",
      "API connectors",
      "Data migration",
      "Testing suite",
      "Monitoring setup"
    ],
    process: [
      { step: "System Audit", description: "Mapping your current systems and identifying integration points." },
      { step: "Architecture Design", description: "Planning secure and efficient data flows between systems." },
      { step: "Implementation", description: "Building robust connectors with error handling and retry logic." },
      { step: "Monitoring", description: "Setting up alerts and dashboards for ongoing reliability." }
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
