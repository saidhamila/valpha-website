import { Globe, Layout, Bot, Plug } from "lucide-react";

export const services = [
  {
    id: "web-development",
    slug: "web-development",
    icon: Globe,
    title: "Web Development",
    shortDescription: "High-performance websites and immersive digital experiences built with modern tech.",
    description: "We craft lightning-fast, SEO-optimized websites that serve as the cornerstone of your digital presence. From creative portfolios to complex corporate sites, we ensure your brand stands out with absolute clarity and impact.",
    deliverables: [
      "Custom React & Next.js Development",
      "Responsive & Adaptive Design",
      "Performance Optimization",
      "SEO & Metadata Strategy",
      "Content Management Systems",
      "Maintenance & Support"
    ],
    pricing: "Projects starting from $5,000",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    heroDescription: "Elevate your online presence with a website that doesn't just look good, but performs flawlessly.",
    features: [
      {
        title: "Performance First",
        description: "Sub-second load times and perfect Core Web Vitals scores."
      },
      {
        title: "Scalable Architecture",
        description: "Built to grow with your business, from launch to global scale."
      },
      {
        title: "Inclusive Design",
        description: "Accessibility-first approach ensuring everyone can use your product."
      },
      {
        title: "Modern Tech Stack",
        description: "Leveraging Next.js, Tailwind, and Framer Motion for premium feel."
      }
    ],
    process: [
      { step: "Strategy", description: "Defining goals, user personas, and technical requirements." },
      { step: "Design", description: "Crafting a unique visual language and user experience." },
      { step: "Build", description: "Translating designs into high-performance, clean code." },
      { step: "Deploy", description: "Rigorous testing and seamless launch to production." }
    ]
  },
  {
    id: "saas-development",
    slug: "saas-development",
    icon: Layout,
    title: "SaaS Development",
    shortDescription: "End-to-end development of scalable, secure, and user-friendly software products.",
    description: "Transform your vision into a robust SaaS product. We handle everything from database architecture to complex state management, ensuring your application is ready for the modern market.",
    deliverables: [
      "Product Strategy & MVP Scoping",
      "Scalable Backend Architecture",
      "Complex State Management",
      "Multi-tenant Systems",
      "Subscription & Payment Integration",
      "Cloud Infrastructure Setup"
    ],
    pricing: "MVP packages from $15,000",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    heroDescription: "Build a product that solves real problems. We bridge the gap between idea and market-ready SaaS.",
    features: [
      {
        title: "Security by Design",
        description: "Industry-standard authentication and data protection protocols."
      },
      {
        title: "Automated Workflows",
        description: "Continuous integration and deployment for rapid iterations."
      },
      {
        title: "Data Visualization",
        description: "Turn complex data into actionable insights for your users."
      },
      {
        title: "API-First Approach",
        description: "Ensuring your product plays well with the entire ecosystem."
      }
    ],
    process: [
      { step: "Discovery", description: "Validating the concept and defining the core value proposition." },
      { step: "Blueprint", description: "Architecting the technical foundation and user flow." },
      { step: "Iteration", description: "Agile development with continuous feedback loops." },
      { step: "Scale", description: "Monitoring performance and expanding features based on data." }
    ]
  },
  {
    id: "ai-assistance",
    slug: "ai-assistance",
    icon: Bot,
    title: "AI Assistance",
    shortDescription: "Integrating intelligent AI features that automate tasks and enhance user value.",
    description: "Bring the power of Large Language Models and Machine Learning to your application. We help you implement AI features that actually add value, from smart search to automated content generation.",
    deliverables: [
      "LLM Integration (OpenAI, Anthropic)",
      "Vector Database Setup (Pinecone, Supabase)",
      "Custom RAG Implementation",
      "Prompt Engineering & Optimization",
      "AI Agent Development",
      "Data Processing Pipelines"
    ],
    pricing: "Implementation from $8,000",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    heroDescription: "Future-proof your brand with intelligent features that set you apart from the competition.",
    features: [
      {
        title: "Natural Interactions",
        description: "Enable users to talk to your data in plain language."
      },
      {
        title: "Smart Automation",
        description: "Reduce manual work with AI that learns and adapts."
      },
      {
        title: "Contextual Awareness",
        description: "Features that understand user intent and provide better results."
      },
      {
        title: "Ethical Integration",
        description: "Focus on data privacy and responsible AI practices."
      }
    ],
    process: [
      { step: "Audit", description: "Identifying the high-impact AI opportunities in your workflow." },
      { step: "Prototype", description: "Testing AI concepts quickly to validate feasibility." },
      { step: "Integration", description: "Deeply embedding AI into your existing application logic." },
      { step: "Refinement", description: "Tuning prompts and models for maximum accuracy." }
    ]
  },
  {
    id: "api-integration",
    slug: "api-integration",
    icon: Plug,
    title: "API & Systems Integration",
    shortDescription: "Connecting your digital ecosystem for seamless data flow and automation.",
    description: "Make your software work harder by connecting it to the tools you already use. We specialize in complex third-party integrations, custom API development, and data synchronization.",
    deliverables: [
      "Custom API Development",
      "Third-party Service Integration",
      "Webhook Architecture",
      "Legacy System Connectivity",
      "Data Migration & Sync",
      "ERP/CRM Integration"
    ],
    pricing: "Custom quotes available",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop",
    heroDescription: "A unified ecosystem is a powerful one. We make your systems talk to each other seamlessly.",
    features: [
      {
        title: "Reliability",
        description: "Built-in error handling and retry logic for zero data loss."
      },
      {
        title: "Efficiency",
        description: "Optimized data transfer to reduce latency and costs."
      },
      {
        title: "Visibility",
        description: "Comprehensive logging and monitoring for all integrations."
      },
      {
        title: "Security",
        description: "Secure credential management and encrypted data transit."
      }
    ],
    process: [
      { step: "Mapping", description: "Identifying all data touchpoints and system requirements." },
      { step: "Connection", description: "Establishing secure bridges between disparate platforms." },
      { step: "Validation", description: "Ensuring data integrity across all integrated systems." },
      { step: "Monitoring", description: "Setting up alerts to ensure continuous, healthy flow." }
    ]
  }
];

export const pricingDetails = {
  initial: "We offer flexible engagement models tailored to your project's scope and complexity.",
  recurring: [
    { label: "Fixed Scope", price: "Project-based" },
    { label: "Dedicated Team", price: "Retainer-based" }
  ]
};

export const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Websites usually take 4-8 weeks, while complex SaaS platforms can range from 3 to 6 months for an MVP. We focus on delivering high-quality results as efficiently as possible."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we provide maintenance packages to ensure your software remains secure, up-to-date, and continues to perform at its peak long after launch."
  },
  {
    question: "Can you work with our existing team?",
    answer: "Absolutely. We often collaborate with in-house creative and technical teams to provide specialized expertise or extra bandwidth for critical projects."
  },
  {
    question: "What is your tech stack?",
    answer: "We primarily use Next.js, TypeScript, and Tailwind CSS for the frontend, with Supabase or Node.js for the backend. We choose the best tools for each specific project's needs."
  },
  {
    question: "Do you handle design as well as development?",
    answer: "Yes, we are a full-service agency. We believe design and development are inseparable and provide end-to-end creative and technical services."
  },
  {
    question: "How do we get started?",
    answer: "The best way is to request a quote. We'll schedule a discovery call to understand your needs and provide a detailed proposal and timeline."
  }
];
