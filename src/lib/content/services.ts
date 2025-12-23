import { Globe, Bot, Plug } from "lucide-react";

export const services = [
  {
    id: "web-saas",
    slug: "web-saas",
    icon: Globe,
    title: "Web & SaaS Development",
    shortDescription: "Custom web applications and SaaS platforms built for scale.",
    description: "We design and build high-performance web applications and SaaS products using modern technologies. From MVPs to enterprise-grade platforms, we deliver solutions that grow with your business.",
    deliverables: [
      "Full-stack web application development",
      "SaaS platform architecture & implementation",
      "Progressive web apps (PWA)",
      "API design and development",
      "Database design and optimization",
      "Cloud infrastructure setup"
    ],
    pricing: "from $2,000",
    heroDescription: "Transform your vision into a scalable, production-ready web application. We build custom SaaS platforms and web apps that drive business growth.",
    features: [
      {
        title: "Custom Web Applications",
        description: "Tailored solutions built from scratch to meet your exact requirements, using modern frameworks like Next.js, React, and Node.js."
      },
      {
        title: "SaaS Platform Development",
        description: "Multi-tenant architectures, subscription management, user authentication, and all the infrastructure needed for a successful SaaS business."
      },
      {
        title: "Performance Optimized",
        description: "Every application we build is optimized for speed, with server-side rendering, code splitting, and efficient data fetching patterns."
      },
      {
        title: "Scalable Architecture",
        description: "Designed to grow with your business, from your first 100 users to millions, without major rewrites."
      }
    ],
    process: [
      { step: "Discovery", description: "We dive deep into your requirements, user needs, and business goals." },
      { step: "Architecture", description: "Design the technical foundation that will support your growth." },
      { step: "Development", description: "Iterative development with regular demos and feedback cycles." },
      { step: "Launch & Support", description: "Smooth deployment and ongoing maintenance to ensure success." }
    ]
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    icon: Bot,
    title: "AI Assistants & Automation",
    shortDescription: "Intelligent chatbots and workflow automation powered by AI.",
    description: "We build custom AI assistants and automation systems that transform how your team works. From customer support bots to internal workflow automation, we leverage the latest AI capabilities to drive efficiency.",
    deliverables: [
      "Custom AI chatbot development",
      "LLM integration (GPT, Claude, etc.)",
      "Workflow automation systems",
      "Document processing & analysis",
      "Knowledge base creation",
      "AI-powered analytics"
    ],
    pricing: "from $1,500",
    heroDescription: "Harness the power of AI to automate repetitive tasks, provide 24/7 customer support, and unlock insights from your data.",
    features: [
      {
        title: "Custom AI Chatbots",
        description: "Intelligent assistants trained on your data, integrated with your systems, and designed to handle real customer interactions."
      },
      {
        title: "Workflow Automation",
        description: "Eliminate manual processes with smart automation that learns and improves over time."
      },
      {
        title: "Document Intelligence",
        description: "Extract, analyze, and act on information from documents, emails, and unstructured data."
      },
      {
        title: "LLM Integration",
        description: "Seamless integration with GPT-4, Claude, and other leading language models, with proper guardrails and cost optimization."
      }
    ],
    process: [
      { step: "Use Case Analysis", description: "Identify the highest-impact opportunities for AI in your workflow." },
      { step: "Data Preparation", description: "Organize and prepare your knowledge base for AI training." },
      { step: "Development & Training", description: "Build and fine-tune AI systems specific to your domain." },
      { step: "Deployment & Iteration", description: "Launch with monitoring and continuous improvement based on real usage." }
    ]
  },
  {
    id: "api-integration",
    slug: "api-integration",
    icon: Plug,
    title: "API & Systems Integration",
    shortDescription: "Connect your tools and systems for seamless data flow.",
    description: "We specialize in connecting disparate systems and building robust API integrations. Whether you need to sync your CRM with your database or build a custom middleware solution, we make your systems work together.",
    deliverables: [
      "Third-party API integrations",
      "Custom middleware development",
      "Data synchronization solutions",
      "Legacy system modernization",
      "Webhook implementations",
      "ETL pipeline development"
    ],
    pricing: "from $1,000",
    heroDescription: "Break down data silos and create seamless workflows by connecting all your business systems into a unified, efficient operation.",
    features: [
      {
        title: "API Development",
        description: "RESTful and GraphQL APIs designed for performance, security, and developer experience."
      },
      {
        title: "Third-Party Integrations",
        description: "Connect with any service—CRMs, payment processors, marketing tools, ERPs, and more."
      },
      {
        title: "Data Synchronization",
        description: "Real-time and batch sync solutions that keep your data consistent across all systems."
      },
      {
        title: "Legacy Modernization",
        description: "Wrap legacy systems with modern APIs to extend their life and enable new capabilities."
      }
    ],
    process: [
      { step: "Systems Audit", description: "Map your current systems and identify integration points." },
      { step: "Architecture Design", description: "Design robust, scalable integration patterns." },
      { step: "Implementation", description: "Build integrations with proper error handling and monitoring." },
      { step: "Maintenance", description: "Ongoing support to handle API changes and new requirements." }
    ]
  }
];

export const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. A typical MVP takes 6-10 weeks, while larger enterprise projects can span 3-6 months. We provide detailed timelines during our discovery phase."
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes, we offer flexible maintenance and support packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements based on your needs."
  },
  {
    question: "What technologies do you work with?",
    answer: "We specialize in modern web technologies including React, Next.js, Node.js, Python, and various AI/ML frameworks. We also work with cloud platforms like AWS, GCP, and Azure."
  },
  {
    question: "How do you handle project communication?",
    answer: "We believe in transparent, frequent communication. You'll have a dedicated project manager, weekly progress updates, and access to our project management tools for real-time visibility."
  },
  {
    question: "Can you work with our existing team?",
    answer: "Absolutely. We often collaborate with in-house teams, providing additional expertise and capacity. We adapt our workflow to integrate seamlessly with your existing processes."
  }
];