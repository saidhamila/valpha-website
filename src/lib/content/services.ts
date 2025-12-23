import { Globe, Layout, Bot, Plug } from "lucide-react";

export const services = [
  {
    id: "web-development",
    slug: "web-development",
    icon: Globe,
    title: "Web Development",
    shortDescription: "Marketing websites, landing pages, and business sites built for performance and SEO.",
    description: "We build modern, responsive, and SEO-optimized websites that help your business stand out. From high-converting landing pages to comprehensive business sites, we handle everything from design to deployment.",
    deliverables: [
      "Modern responsive UI/UX design",
      "SEO fundamentals & metadata optimization",
      "High-performance architecture",
      "Security best practices (HTTPS, secure headers)",
      "Deployment & launch support",
      "Bundled API add-ons available"
    ],
      pricing: "Free domain + 6 months free hosting",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      heroDescription: "Get a professional web presence that converts visitors into customers. We build fast, secure, and SEO-ready websites tailored to your business needs.",
    features: [
      {
        title: "Conversion-Focused Design",
        description: "Every pixel is placed with intent to guide your visitors towards your goals."
      },
      {
        title: "SEO Optimized",
        description: "Built-in SEO best practices to ensure your site is discoverable and ranks well on search engines."
      },
      {
        title: "Lightning Fast",
        description: "Optimized performance for better user experience and higher search engine rankings."
      },
      {
        title: "Mobile First",
        description: "Seamless experience across all devices, from smartphones to large desktop screens."
      }
    ],
    process: [
      { step: "Discovery", description: "Understand your brand, audience, and business objectives." },
      { step: "Design", description: "Create a visual identity that resonates with your customers." },
      { step: "Build", description: "Develop your site using modern, reliable technologies." },
      { step: "Launch", description: "Rigorous testing and smooth deployment to your new domain." }
    ]
  },
  {
    id: "saas-development",
    slug: "saas-development",
    icon: Layout,
    title: "SaaS Development",
    shortDescription: "Custom MVPs, dashboards, and subscription platforms built to scale.",
    description: "We build complex web applications and SaaS products designed for scalability and user engagement. From authentication to payments, we handle the full stack of your product development.",
    deliverables: [
      "Scalable system architecture",
      "Authentication & role-based access",
      "Payments & subscription integration",
      "Custom dashboards & internal tools",
      "Observability & error handling",
      "AI & API optional add-ons"
    ],
    pricing: "Free domain + 6 months free hosting",
    heroDescription: "Turn your product idea into a scalable SaaS platform. We handle the complexity of building modern web applications so you can focus on your business.",
    features: [
      {
        title: "Scalable Architecture",
        description: "Systems designed to grow with your user base without performance degradation."
      },
      {
        title: "Secure Authentication",
        description: "Robust user management and secure access controls for your sensitive data."
      },
      {
        title: "Payment Integration",
        description: "Seamless billing and subscription management with Stripe and other providers."
      },
      {
        title: "Data Insights",
        description: "Powerful dashboards and reporting tools to help you make data-driven decisions."
      }
    ],
    process: [
      { step: "Discovery", description: "Deep dive into your product vision and technical requirements." },
      { step: "Architecture", description: "Design a robust foundation for your scalable application." },
      { step: "Build", description: "Agile development with regular milestones and feedback loops." },
      { step: "QA & Launch", description: "Thorough testing and managed deployment to production." }
    ]
  },
  {
    id: "ai-assistance",
    slug: "ai-assistance",
    icon: Bot,
    title: "AI Assistance",
    shortDescription: "Intelligent AI features integrated into your web and SaaS products.",
    description: "We embed powerful AI capabilities directly into your products to automate tasks and enhance user experience. From intelligent chatbots to content summarization, we make your software smarter.",
    deliverables: [
      "Embedded AI chat/helpdesk assistants",
      "AI content drafting & summarization",
      "Knowledge base & RAG integration",
      "Privacy-first secure integration",
      "Custom LLM fine-tuning options",
      "Automated customer Q&A systems"
    ],
    pricing: "Custom integration available",
    heroDescription: "Supercharge your software with modern AI capabilities. We integrate intelligent features that provide real value to your users and save time for your team.",
    features: [
      {
        title: "Intelligent Chat",
        description: "AI assistants that understand your business and provide accurate support to your users."
      },
      {
        title: "Content Automation",
        description: "Save hours of work with AI-powered drafting, summarization, and translation features."
      },
      {
        title: "Privacy First",
        description: "Secure integrations that protect your data and respect user privacy."
      },
      {
        title: "RAG Integration",
        description: "Connect AI to your specific business knowledge for accurate, contextual responses."
      }
    ],
    process: [
      { step: "Audit", description: "Identify where AI can provide the most value in your product." },
      { step: "Integration", description: "Seamlessly connect AI models to your existing systems." },
      { step: "Testing", description: "Extensive testing for accuracy, safety, and performance." },
      { step: "Support", description: "Ongoing monitoring and refinement of AI interactions." }
    ]
  },
  {
    id: "api-integration",
    slug: "api-integration",
    icon: Plug,
    title: "API & Systems Integration",
    shortDescription: "Reliable connections between your tools and third-party systems.",
    description: "We specialize in making your tools talk to each other. Whether it's syncing data between platforms or building custom middleware, we ensure your systems work in harmony.",
    deliverables: [
      "Third-party API integrations",
      "Webhooks & real-time data sync",
      "Secure OAuth & API key management",
      "Robust retry & rate-limit handling",
      "ETL-lite & data transformation",
      "Input validation & error logging"
    ],
    pricing: "Custom quotes based on complexity",
    heroDescription: "Eliminate data silos and manual work by connecting your business tools. We build secure, reliable integrations that keep your data moving.",
    features: [
      {
        title: "Reliable Sync",
        description: "Robust data synchronization that handles failures and rate limits gracefully."
      },
      {
        title: "Secure Methods",
        description: "Industry-standard authentication and secure management of sensitive API keys."
      },
      {
        title: "Custom Middleware",
        description: "Bespoke code to transform and route data exactly where it needs to go."
      },
      {
        title: "Real-time Updates",
        description: "Webhook implementations for instant data flow between your business tools."
      }
    ],
    process: [
      { step: "Analysis", description: "Map out your systems and identify necessary data flows." },
      { step: "Design", description: "Create a secure and efficient integration architecture." },
      { step: "Implementation", description: "Build and deploy reliable connections between your tools." },
      { step: "Monitoring", description: "Automated alerts and logs to ensure ongoing reliability." }
    ]
  }
];

export const pricingDetails = {
  initial: "Free domain included + 6 months free hosting at the start.",
  recurring: [
    { label: "Hosting", price: "$60/month" },
    { label: "Maintenance", price: "$150/month" }
  ]
};

export const faqs = [
  {
    question: "What is included in the free domain and hosting offer?",
    answer: "For all new web and SaaS development projects, we include one year of domain registration and six months of high-performance hosting at no extra cost to help you get started."
  },
  {
    question: "What are the costs after the first 6 months?",
    answer: "After the initial 6-month period, hosting is $60/month and maintenance is $150/month. This covers server costs, security updates, and regular backups."
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes, our maintenance package includes regular bug fixes, security updates, performance monitoring, and small enhancements to keep your software running smoothly."
  },
  {
    question: "What technologies do you work with?",
    answer: "We specialize in modern web technologies including React, Next.js, Node.js, and Python. We use cloud infrastructure like AWS and Vercel to ensure scalability and reliability."
  },
  {
    question: "Can you integrate AI into my existing website?",
    answer: "Absolutely. Our AI Assistance service is designed to be embedded into both new and existing products, whether it's a simple website or a complex SaaS dashboard."
  },
  {
    question: "How do you handle data security?",
    answer: "Security is built into every layer. We use secure headers, encrypted connections, and follow industry best practices for authentication and data management."
  }
];
import { Globe, Layout, Bot, Plug } from "lucide-react";

export const services = [
  {
    id: "web-development",
    slug: "web-development",
    icon: Globe,
    title: "Web Development",
    shortDescription: "Marketing websites, landing pages, and business sites built for performance and SEO.",
    description: "We build modern, responsive, and SEO-optimized websites that help your business stand out. From high-converting landing pages to comprehensive business sites, we handle everything from design to deployment.",
    deliverables: [
      "Modern responsive UI/UX design",
      "SEO fundamentals & metadata optimization",
      "High-performance architecture",
      "Security best practices (HTTPS, secure headers)",
      "Deployment & launch support",
      "Bundled API add-ons available"
    ],
      pricing: "Free domain + 6 months free hosting",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      heroDescription: "Get a professional web presence that converts visitors into customers. We build fast, secure, and SEO-ready websites tailored to your business needs.",
    features: [
      {
        title: "Conversion-Focused Design",
        description: "Every pixel is placed with intent to guide your visitors towards your goals."
      },
      {
        title: "SEO Optimized",
        description: "Built-in SEO best practices to ensure your site is discoverable and ranks well on search engines."
      },
      {
        title: "Lightning Fast",
        description: "Optimized performance for better user experience and higher search engine rankings."
      },
      {
        title: "Mobile First",
        description: "Seamless experience across all devices, from smartphones to large desktop screens."
      }
    ],
    process: [
      { step: "Discovery", description: "Understand your brand, audience, and business objectives." },
      { step: "Design", description: "Create a visual identity that resonates with your customers." },
      { step: "Build", description: "Develop your site using modern, reliable technologies." },
      { step: "Launch", description: "Rigorous testing and smooth deployment to your new domain." }
    ]
  },
  {
    id: "saas-development",
    slug: "saas-development",
    icon: Layout,
    title: "SaaS Development",
    shortDescription: "Custom MVPs, dashboards, and subscription platforms built to scale.",
    description: "We build complex web applications and SaaS products designed for scalability and user engagement. From authentication to payments, we handle the full stack of your product development.",
    deliverables: [
      "Scalable system architecture",
      "Authentication & role-based access",
      "Payments & subscription integration",
      "Custom dashboards & internal tools",
      "Observability & error handling",
      "AI & API optional add-ons"
    ],
    pricing: "Free domain + 6 months free hosting",
    heroDescription: "Turn your product idea into a scalable SaaS platform. We handle the complexity of building modern web applications so you can focus on your business.",
    features: [
      {
        title: "Scalable Architecture",
        description: "Systems designed to grow with your user base without performance degradation."
      },
      {
        title: "Secure Authentication",
        description: "Robust user management and secure access controls for your sensitive data."
      },
      {
        title: "Payment Integration",
        description: "Seamless billing and subscription management with Stripe and other providers."
      },
      {
        title: "Data Insights",
        description: "Powerful dashboards and reporting tools to help you make data-driven decisions."
      }
    ],
    process: [
      { step: "Discovery", description: "Deep dive into your product vision and technical requirements." },
      { step: "Architecture", description: "Design a robust foundation for your scalable application." },
      { step: "Build", description: "Agile development with regular milestones and feedback loops." },
      { step: "QA & Launch", description: "Thorough testing and managed deployment to production." }
    ]
  },
  {
    id: "ai-assistance",
    slug: "ai-assistance",
    icon: Bot,
    title: "AI Assistance",
    shortDescription: "Intelligent AI features integrated into your web and SaaS products.",
    description: "We embed powerful AI capabilities directly into your products to automate tasks and enhance user experience. From intelligent chatbots to content summarization, we make your software smarter.",
    deliverables: [
      "Embedded AI chat/helpdesk assistants",
      "AI content drafting & summarization",
      "Knowledge base & RAG integration",
      "Privacy-first secure integration",
      "Custom LLM fine-tuning options",
      "Automated customer Q&A systems"
    ],
    pricing: "Custom integration available",
    heroDescription: "Supercharge your software with modern AI capabilities. We integrate intelligent features that provide real value to your users and save time for your team.",
    features: [
      {
        title: "Intelligent Chat",
        description: "AI assistants that understand your business and provide accurate support to your users."
      },
      {
        title: "Content Automation",
        description: "Save hours of work with AI-powered drafting, summarization, and translation features."
      },
      {
        title: "Privacy First",
        description: "Secure integrations that protect your data and respect user privacy."
      },
      {
        title: "RAG Integration",
        description: "Connect AI to your specific business knowledge for accurate, contextual responses."
      }
    ],
    process: [
      { step: "Audit", description: "Identify where AI can provide the most value in your product." },
      { step: "Integration", description: "Seamlessly connect AI models to your existing systems." },
      { step: "Testing", description: "Extensive testing for accuracy, safety, and performance." },
      { step: "Support", description: "Ongoing monitoring and refinement of AI interactions." }
    ]
  },
  {
    id: "api-integration",
    slug: "api-integration",
    icon: Plug,
    title: "API & Systems Integration",
    shortDescription: "Reliable connections between your tools and third-party systems.",
    description: "We specialize in making your tools talk to each other. Whether it's syncing data between platforms or building custom middleware, we ensure your systems work in harmony.",
    deliverables: [
      "Third-party API integrations",
      "Webhooks & real-time data sync",
      "Secure OAuth & API key management",
      "Robust retry & rate-limit handling",
      "ETL-lite & data transformation",
      "Input validation & error logging"
    ],
      pricing: "Custom quotes based on complexity",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2070&auto=format&fit=crop",
      heroDescription: "Eliminate data silos and manual work by connecting your business tools. We build secure, reliable integrations that keep your data moving.",
    features: [
      {
        title: "Reliable Sync",
        description: "Robust data synchronization that handles failures and rate limits gracefully."
      },
      {
        title: "Secure Methods",
        description: "Industry-standard authentication and secure management of sensitive API keys."
      },
      {
        title: "Custom Middleware",
        description: "Bespoke code to transform and route data exactly where it needs to go."
      },
      {
        title: "Real-time Updates",
        description: "Webhook implementations for instant data flow between your business tools."
      }
    ],
    process: [
      { step: "Analysis", description: "Map out your systems and identify necessary data flows." },
      { step: "Design", description: "Create a secure and efficient integration architecture." },
      { step: "Implementation", description: "Build and deploy reliable connections between your tools." },
      { step: "Monitoring", description: "Automated alerts and logs to ensure ongoing reliability." }
    ]
  }
];

export const pricingDetails = {
  initial: "Free domain included + 6 months free hosting at the start.",
  recurring: [
    { label: "Hosting", price: "$60/month" },
    { label: "Maintenance", price: "$150/month" }
  ]
};

export const faqs = [
  {
    question: "What is included in the free domain and hosting offer?",
    answer: "For all new web and SaaS development projects, we include one year of domain registration and six months of high-performance hosting at no extra cost to help you get started."
  },
  {
    question: "What are the costs after the first 6 months?",
    answer: "After the initial 6-month period, hosting is $60/month and maintenance is $150/month. This covers server costs, security updates, and regular backups."
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes, our maintenance package includes regular bug fixes, security updates, performance monitoring, and small enhancements to keep your software running smoothly."
  },
  {
    question: "What technologies do you work with?",
    answer: "We specialize in modern web technologies including React, Next.js, Node.js, and Python. We use cloud infrastructure like AWS and Vercel to ensure scalability and reliability."
  },
  {
    question: "Can you integrate AI into my existing website?",
    answer: "Absolutely. Our AI Assistance service is designed to be embedded into both new and existing products, whether it's a simple website or a complex SaaS dashboard."
  },
  {
    question: "How do you handle data security?",
    answer: "Security is built into every layer. We use secure headers, encrypted connections, and follow industry best practices for authentication and data management."
  }
];
import { Globe, Layout, Bot, Plug } from "lucide-react";

export const services = [
  {
    id: "web-development",
    slug: "web-development",
    icon: Globe,
    title: "Web Development",
    shortDescription: "Marketing websites, landing pages, and business sites built for performance and SEO.",
    description: "We build modern, responsive, and SEO-optimized websites that help your business stand out. From high-converting landing pages to comprehensive business sites, we handle everything from design to deployment.",
    deliverables: [
      "Modern responsive UI/UX design",
      "SEO fundamentals & metadata optimization",
      "High-performance architecture",
      "Security best practices (HTTPS, secure headers)",
      "Deployment & launch support",
      "Bundled API add-ons available"
    ],
      pricing: "Free domain + 6 months free hosting",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      heroDescription: "Get a professional web presence that converts visitors into customers. We build fast, secure, and SEO-ready websites tailored to your business needs.",
    features: [
      {
        title: "Conversion-Focused Design",
        description: "Every pixel is placed with intent to guide your visitors towards your goals."
      },
      {
        title: "SEO Optimized",
        description: "Built-in SEO best practices to ensure your site is discoverable and ranks well on search engines."
      },
      {
        title: "Lightning Fast",
        description: "Optimized performance for better user experience and higher search engine rankings."
      },
      {
        title: "Mobile First",
        description: "Seamless experience across all devices, from smartphones to large desktop screens."
      }
    ],
    process: [
      { step: "Discovery", description: "Understand your brand, audience, and business objectives." },
      { step: "Design", description: "Create a visual identity that resonates with your customers." },
      { step: "Build", description: "Develop your site using modern, reliable technologies." },
      { step: "Launch", description: "Rigorous testing and smooth deployment to your new domain." }
    ]
  },
  {
    id: "saas-development",
    slug: "saas-development",
    icon: Layout,
    title: "SaaS Development",
    shortDescription: "Custom MVPs, dashboards, and subscription platforms built to scale.",
    description: "We build complex web applications and SaaS products designed for scalability and user engagement. From authentication to payments, we handle the full stack of your product development.",
    deliverables: [
      "Scalable system architecture",
      "Authentication & role-based access",
      "Payments & subscription integration",
      "Custom dashboards & internal tools",
      "Observability & error handling",
      "AI & API optional add-ons"
    ],
    pricing: "Free domain + 6 months free hosting",
    heroDescription: "Turn your product idea into a scalable SaaS platform. We handle the complexity of building modern web applications so you can focus on your business.",
    features: [
      {
        title: "Scalable Architecture",
        description: "Systems designed to grow with your user base without performance degradation."
      },
      {
        title: "Secure Authentication",
        description: "Robust user management and secure access controls for your sensitive data."
      },
      {
        title: "Payment Integration",
        description: "Seamless billing and subscription management with Stripe and other providers."
      },
      {
        title: "Data Insights",
        description: "Powerful dashboards and reporting tools to help you make data-driven decisions."
      }
    ],
    process: [
      { step: "Discovery", description: "Deep dive into your product vision and technical requirements." },
      { step: "Architecture", description: "Design a robust foundation for your scalable application." },
      { step: "Build", description: "Agile development with regular milestones and feedback loops." },
      { step: "QA & Launch", description: "Thorough testing and managed deployment to production." }
    ]
  },
  {
    id: "ai-assistance",
    slug: "ai-assistance",
    icon: Bot,
    title: "AI Assistance",
    shortDescription: "Intelligent AI features integrated into your web and SaaS products.",
    description: "We embed powerful AI capabilities directly into your products to automate tasks and enhance user experience. From intelligent chatbots to content summarization, we make your software smarter.",
    deliverables: [
      "Embedded AI chat/helpdesk assistants",
      "AI content drafting & summarization",
      "Knowledge base & RAG integration",
      "Privacy-first secure integration",
      "Custom LLM fine-tuning options",
      "Automated customer Q&A systems"
    ],
      pricing: "Custom integration available",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      heroDescription: "Supercharge your software with modern AI capabilities. We integrate intelligent features that provide real value to your users and save time for your team.",
    features: [
      {
        title: "Intelligent Chat",
        description: "AI assistants that understand your business and provide accurate support to your users."
      },
      {
        title: "Content Automation",
        description: "Save hours of work with AI-powered drafting, summarization, and translation features."
      },
      {
        title: "Privacy First",
        description: "Secure integrations that protect your data and respect user privacy."
      },
      {
        title: "RAG Integration",
        description: "Connect AI to your specific business knowledge for accurate, contextual responses."
      }
    ],
    process: [
      { step: "Audit", description: "Identify where AI can provide the most value in your product." },
      { step: "Integration", description: "Seamlessly connect AI models to your existing systems." },
      { step: "Testing", description: "Extensive testing for accuracy, safety, and performance." },
      { step: "Support", description: "Ongoing monitoring and refinement of AI interactions." }
    ]
  },
  {
    id: "api-integration",
    slug: "api-integration",
    icon: Plug,
    title: "API & Systems Integration",
    shortDescription: "Reliable connections between your tools and third-party systems.",
    description: "We specialize in making your tools talk to each other. Whether it's syncing data between platforms or building custom middleware, we ensure your systems work in harmony.",
    deliverables: [
      "Third-party API integrations",
      "Webhooks & real-time data sync",
      "Secure OAuth & API key management",
      "Robust retry & rate-limit handling",
      "ETL-lite & data transformation",
      "Input validation & error logging"
    ],
      pricing: "Custom quotes based on complexity",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2070&auto=format&fit=crop",
      heroDescription: "Eliminate data silos and manual work by connecting your business tools. We build secure, reliable integrations that keep your data moving.",
    features: [
      {
        title: "Reliable Sync",
        description: "Robust data synchronization that handles failures and rate limits gracefully."
      },
      {
        title: "Secure Methods",
        description: "Industry-standard authentication and secure management of sensitive API keys."
      },
      {
        title: "Custom Middleware",
        description: "Bespoke code to transform and route data exactly where it needs to go."
      },
      {
        title: "Real-time Updates",
        description: "Webhook implementations for instant data flow between your business tools."
      }
    ],
    process: [
      { step: "Analysis", description: "Map out your systems and identify necessary data flows." },
      { step: "Design", description: "Create a secure and efficient integration architecture." },
      { step: "Implementation", description: "Build and deploy reliable connections between your tools." },
      { step: "Monitoring", description: "Automated alerts and logs to ensure ongoing reliability." }
    ]
  }
];

export const pricingDetails = {
  initial: "Free domain included + 6 months free hosting at the start.",
  recurring: [
    { label: "Hosting", price: "$60/month" },
    { label: "Maintenance", price: "$150/month" }
  ]
};

export const faqs = [
  {
    question: "What is included in the free domain and hosting offer?",
    answer: "For all new web and SaaS development projects, we include one year of domain registration and six months of high-performance hosting at no extra cost to help you get started."
  },
  {
    question: "What are the costs after the first 6 months?",
    answer: "After the initial 6-month period, hosting is $60/month and maintenance is $150/month. This covers server costs, security updates, and regular backups."
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes, our maintenance package includes regular bug fixes, security updates, performance monitoring, and small enhancements to keep your software running smoothly."
  },
  {
    question: "What technologies do you work with?",
    answer: "We specialize in modern web technologies including React, Next.js, Node.js, and Python. We use cloud infrastructure like AWS and Vercel to ensure scalability and reliability."
  },
  {
    question: "Can you integrate AI into my existing website?",
    answer: "Absolutely. Our AI Assistance service is designed to be embedded into both new and existing products, whether it's a simple website or a complex SaaS dashboard."
  },
  {
    question: "How do you handle data security?",
    answer: "Security is built into every layer. We use secure headers, encrypted connections, and follow industry best practices for authentication and data management."
  }
];
import { Globe, Layout, Bot, Plug } from "lucide-react";

export const services = [
  {
    id: "web-development",
    slug: "web-development",
    icon: Globe,
    title: "Web Development",
    shortDescription: "Marketing websites, landing pages, and business sites built for performance and SEO.",
    description: "We build modern, responsive, and SEO-optimized websites that help your business stand out. From high-converting landing pages to comprehensive business sites, we handle everything from design to deployment.",
    deliverables: [
      "Modern responsive UI/UX design",
      "SEO fundamentals & metadata optimization",
      "High-performance architecture",
      "Security best practices (HTTPS, secure headers)",
      "Deployment & launch support",
      "Bundled API add-ons available"
    ],
      pricing: "Free domain + 6 months free hosting",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      heroDescription: "Get a professional web presence that converts visitors into customers. We build fast, secure, and SEO-ready websites tailored to your business needs.",
    features: [
      {
        title: "Conversion-Focused Design",
        description: "Every pixel is placed with intent to guide your visitors towards your goals."
      },
      {
        title: "SEO Optimized",
        description: "Built-in SEO best practices to ensure your site is discoverable and ranks well on search engines."
      },
      {
        title: "Lightning Fast",
        description: "Optimized performance for better user experience and higher search engine rankings."
      },
      {
        title: "Mobile First",
        description: "Seamless experience across all devices, from smartphones to large desktop screens."
      }
    ],
    process: [
      { step: "Discovery", description: "Understand your brand, audience, and business objectives." },
      { step: "Design", description: "Create a visual identity that resonates with your customers." },
      { step: "Build", description: "Develop your site using modern, reliable technologies." },
      { step: "Launch", description: "Rigorous testing and smooth deployment to your new domain." }
    ]
  },
  {
    id: "saas-development",
    slug: "saas-development",
    icon: Layout,
    title: "SaaS Development",
    shortDescription: "Custom MVPs, dashboards, and subscription platforms built to scale.",
    description: "We build complex web applications and SaaS products designed for scalability and user engagement. From authentication to payments, we handle the full stack of your product development.",
    deliverables: [
      "Scalable system architecture",
      "Authentication & role-based access",
      "Payments & subscription integration",
      "Custom dashboards & internal tools",
      "Observability & error handling",
      "AI & API optional add-ons"
    ],
      pricing: "Free domain + 6 months free hosting",
      image: "https://images.unsplash.com/photo-1551288049-bbbda53666cf?q=80&w=2070&auto=format&fit=crop",
      heroDescription: "Turn your product idea into a scalable SaaS platform. We handle the complexity of building modern web applications so you can focus on your business.",
    features: [
      {
        title: "Scalable Architecture",
        description: "Systems designed to grow with your user base without performance degradation."
      },
      {
        title: "Secure Authentication",
        description: "Robust user management and secure access controls for your sensitive data."
      },
      {
        title: "Payment Integration",
        description: "Seamless billing and subscription management with Stripe and other providers."
      },
      {
        title: "Data Insights",
        description: "Powerful dashboards and reporting tools to help you make data-driven decisions."
      }
    ],
    process: [
      { step: "Discovery", description: "Deep dive into your product vision and technical requirements." },
      { step: "Architecture", description: "Design a robust foundation for your scalable application." },
      { step: "Build", description: "Agile development with regular milestones and feedback loops." },
      { step: "QA & Launch", description: "Thorough testing and managed deployment to production." }
    ]
  },
  {
    id: "ai-assistance",
    slug: "ai-assistance",
    icon: Bot,
    title: "AI Assistance",
    shortDescription: "Intelligent AI features integrated into your web and SaaS products.",
    description: "We embed powerful AI capabilities directly into your products to automate tasks and enhance user experience. From intelligent chatbots to content summarization, we make your software smarter.",
    deliverables: [
      "Embedded AI chat/helpdesk assistants",
      "AI content drafting & summarization",
      "Knowledge base & RAG integration",
      "Privacy-first secure integration",
      "Custom LLM fine-tuning options",
      "Automated customer Q&A systems"
    ],
      pricing: "Custom integration available",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      heroDescription: "Supercharge your software with modern AI capabilities. We integrate intelligent features that provide real value to your users and save time for your team.",
    features: [
      {
        title: "Intelligent Chat",
        description: "AI assistants that understand your business and provide accurate support to your users."
      },
      {
        title: "Content Automation",
        description: "Save hours of work with AI-powered drafting, summarization, and translation features."
      },
      {
        title: "Privacy First",
        description: "Secure integrations that protect your data and respect user privacy."
      },
      {
        title: "RAG Integration",
        description: "Connect AI to your specific business knowledge for accurate, contextual responses."
      }
    ],
    process: [
      { step: "Audit", description: "Identify where AI can provide the most value in your product." },
      { step: "Integration", description: "Seamlessly connect AI models to your existing systems." },
      { step: "Testing", description: "Extensive testing for accuracy, safety, and performance." },
      { step: "Support", description: "Ongoing monitoring and refinement of AI interactions." }
    ]
  },
  {
    id: "api-integration",
    slug: "api-integration",
    icon: Plug,
    title: "API & Systems Integration",
    shortDescription: "Reliable connections between your tools and third-party systems.",
    description: "We specialize in making your tools talk to each other. Whether it's syncing data between platforms or building custom middleware, we ensure your systems work in harmony.",
    deliverables: [
      "Third-party API integrations",
      "Webhooks & real-time data sync",
      "Secure OAuth & API key management",
      "Robust retry & rate-limit handling",
      "ETL-lite & data transformation",
      "Input validation & error logging"
    ],
      pricing: "Custom quotes based on complexity",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2070&auto=format&fit=crop",
      heroDescription: "Eliminate data silos and manual work by connecting your business tools. We build secure, reliable integrations that keep your data moving.",
    features: [
      {
        title: "Reliable Sync",
        description: "Robust data synchronization that handles failures and rate limits gracefully."
      },
      {
        title: "Secure Methods",
        description: "Industry-standard authentication and secure management of sensitive API keys."
      },
      {
        title: "Custom Middleware",
        description: "Bespoke code to transform and route data exactly where it needs to go."
      },
      {
        title: "Real-time Updates",
        description: "Webhook implementations for instant data flow between your business tools."
      }
    ],
    process: [
      { step: "Analysis", description: "Map out your systems and identify necessary data flows." },
      { step: "Design", description: "Create a secure and efficient integration architecture." },
      { step: "Implementation", description: "Build and deploy reliable connections between your tools." },
      { step: "Monitoring", description: "Automated alerts and logs to ensure ongoing reliability." }
    ]
  }
];

export const pricingDetails = {
  initial: "Free domain included + 6 months free hosting at the start.",
  recurring: [
    { label: "Hosting", price: "$60/month" },
    { label: "Maintenance", price: "$150/month" }
  ]
};

export const faqs = [
  {
    question: "What is included in the free domain and hosting offer?",
    answer: "For all new web and SaaS development projects, we include one year of domain registration and six months of high-performance hosting at no extra cost to help you get started."
  },
  {
    question: "What are the costs after the first 6 months?",
    answer: "After the initial 6-month period, hosting is $60/month and maintenance is $150/month. This covers server costs, security updates, and regular backups."
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes, our maintenance package includes regular bug fixes, security updates, performance monitoring, and small enhancements to keep your software running smoothly."
  },
  {
    question: "What technologies do you work with?",
    answer: "We specialize in modern web technologies including React, Next.js, Node.js, and Python. We use cloud infrastructure like AWS and Vercel to ensure scalability and reliability."
  },
  {
    question: "Can you integrate AI into my existing website?",
    answer: "Absolutely. Our AI Assistance service is designed to be embedded into both new and existing products, whether it's a simple website or a complex SaaS dashboard."
  },
  {
    question: "How do you handle data security?",
    answer: "Security is built into every layer. We use secure headers, encrypted connections, and follow industry best practices for authentication and data management."
  }
];
