import { Palette, Layout, Megaphone, Video, Globe, Smartphone, Sparkles, MessageSquare, Target, Camera } from "lucide-react";
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
    id: "branding-identity",
    slug: "branding-identity",
    title: "Branding & Identity",
    shortDescription: "We craft iconic brands that tell your story and resonate with your audience.",
    description: "Comprehensive branding solutions that define your visual and emotional identity.",
    heroDescription: "Your brand is more than just a logo. We create cohesive identities that capture your essence and build lasting connections with your customers.",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop",
    pricing: "Starts at $5k",
    features: [
      { title: "Visual Identity Systems", description: "Comprehensive design systems including logos, color palettes, and typography." },
      { title: "Brand Strategy", description: "Defining your brand's mission, vision, values, and market positioning." },
      { title: "Verbal Identity", description: "Developing your brand's unique voice, tone, and messaging framework." },
      { title: "Brand Guidelines", description: "Detailed documentation to ensure consistent brand implementation across all touchpoints." }
    ],
    deliverables: [
      "Logo suite (Primary, Secondary, Icon)",
      "Color palette & Typography",
      "Brand style guide",
      "Marketing collateral templates",
      "Social media assets"
    ],
    process: [
      { step: "Discovery", description: "Deep diving into your business, competitors, and target audience." },
      { step: "Strategy", description: "Developing the foundational pillars of your brand identity." },
      { step: "Creative Direction", description: "Exploring visual concepts and aesthetic directions." },
      { step: "Design & Refinement", description: "Crafting and polishing the final visual elements." }
    ]
  },
  {
    id: "web-digital-design",
    slug: "web-digital-design",
    title: "Web & Digital Design",
    shortDescription: "Immersive digital experiences that blend aesthetic beauty with functional excellence.",
    description: "Bespoke digital design that prioritizes user experience and brand storytelling.",
    heroDescription: "We design websites and digital products that are not just beautiful, but intuitive and performance-driven. We turn digital touchpoints into brand experiences.",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop",
    pricing: "Starts at $8k",
    features: [
      { title: "UX/UI Design", description: "User-centric design focused on creating seamless and engaging digital journeys." },
      { title: "Interactive Prototypes", description: "High-fidelity prototypes to visualize and test user interactions before development." },
      { title: "Responsive Web Design", description: "Designs that look and function perfectly across all devices and screen sizes." },
      { title: "Digital Product Design", description: "Comprehensive design for complex web applications and digital tools." }
    ],
    deliverables: [
      "UX wireframes",
      "UI design mockups",
      "Interactive prototypes",
      "Design system components",
      "Accessibility audit"
    ],
    process: [
      { step: "User Research", description: "Understanding user needs and behavioral patterns." },
      { step: "Wireframing", description: "Mapping out the structure and user flow." },
      { step: "Visual Design", description: "Applying brand aesthetics to the digital interface." },
      { step: "Prototyping", description: "Creating interactive models for testing and validation." }
    ]
  },
  {
    id: "content-social-strategy",
    slug: "content-social-strategy",
    title: "Content & Social Strategy",
    shortDescription: "Strategic content that builds community and drives engagement across platforms.",
    description: "Driving growth through purposeful content creation and social media management.",
    heroDescription: "We help brands find their voice in a crowded digital landscape. Our strategies are data-driven but creatively led, ensuring your message lands where it matters.",
    icon: Megaphone,
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2031&auto=format&fit=crop",
    pricing: "Starts at $3k/mo",
    features: [
      { title: "Content Strategy", description: "Comprehensive roadmap for content creation, distribution, and measurement." },
      { title: "Social Media Management", description: "Curating and managing your brand's presence across social platforms." },
      { title: "Influencer Partnerships", description: "Connecting your brand with the right voices to expand your reach." },
      { title: "Paid Media Strategy", description: "Targeted advertising campaigns to accelerate growth and conversions." }
    ],
    deliverables: [
      "Content calendar",
      "Social media asset library",
      "Strategy document",
      "Performance reports",
      "Copywriting guide"
    ],
    process: [
      { step: "Audit & Research", description: "Analyzing current performance and audience behavior." },
      { step: "Strategy Development", description: "Defining content pillars and platform strategies." },
      { step: "Production", description: "Creating high-quality content that resonates." },
      { step: "Engagement & Growth", description: "Managing community and optimizing for reach." }
    ]
  },
  {
    id: "creative-production",
    slug: "creative-production",
    title: "Creative Production",
    shortDescription: "High-end photo, video, and motion assets that bring your brand to life.",
    description: "Full-service production for visual storytelling across all media.",
    heroDescription: "We produce visual content that captures attention and tells your story with cinematic quality. From photography to motion graphics, we bring your brand to life.",
    icon: Video,
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop",
    pricing: "Starts at $6k",
    features: [
      { title: "Video Production", description: "Cinematic brand films, social content, and product showcases." },
      { title: "Photography", description: "High-end commercial, lifestyle, and product photography." },
      { title: "Motion Graphics", description: "Engaging animated content that adds a dynamic layer to your brand." },
      { title: "Post-Production", description: "Expert editing, color grading, and sound design." }
    ],
    deliverables: [
      "Final video assets",
      "High-res image library",
      "Animated brand elements",
      "Raw footage (optional)",
      "Production plan"
    ],
    process: [
      { step: "Pre-Production", description: "Scripting, storyboarding, and logistics planning." },
      { step: "Production", description: "On-set filming or photography with professional crew." },
      { step: "Post-Production", description: "Editing, sound design, and visual effects." },
      { step: "Final Delivery", description: "Optimizing assets for all intended platforms." }
    ]
  }
];

export const faqs: FAQ[] = [
  {
    question: "What is your creative process?",
    answer: "Our process is highly collaborative and iterative. We start with a deep discovery phase to understand your brand and goals, followed by strategy, creative direction, design, and final production. We value your input at every stage to ensure the end result is perfectly aligned with your vision."
  },
  {
    question: "Do you handle both design and production?",
    answer: "Yes, we are a full-service creative agency. We can take a project from the initial strategy and design concepts all the way through to final production, whether that's a website launch, a brand rollout, or a video campaign."
  },
  {
    question: "How do you measure the success of a project?",
    answer: "Success metrics depend on the project goals. For branding, it might be brand recognition and sentiment. For digital design, it could be user engagement and conversion rates. For content strategy, we look at reach, engagement, and community growth. We define these KPIs with you at the start of every project."
  },
  {
    question: "What industries do you specialize in?",
    answer: "While we have experience across many sectors, we specialize in working with lifestyle, technology, fashion, and premium service brands that value high-end design and strategic storytelling."
  },
  {
    question: "Can we work on a single project or do you require a retainer?",
    answer: "We offer both project-based engagements and ongoing retainers. Single projects are great for branding or website launches, while retainers are ideal for ongoing content strategy, social media management, and creative support."
  }
];

export const pricingDetails: PricingDetails = {
  initial: "Every creative project is unique. We begin with a discovery session to understand your scope and objectives, providing a transparent proposal with clearly defined phases and deliverables.",
  recurring: [
    { label: "Monthly Retainer", price: "From $2,500/mo" },
    { label: "Creative Direction", price: "From $200/hr" }
  ]
};
