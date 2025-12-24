export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  featured?: boolean;
}

export const industries = ["All", "FinTech", "HealthTech", "E-commerce", "SaaS", "Fitness"];

export const caseStudies: CaseStudy[] = [
  {
    id: "elitegym",
    slug: "elite-gym-digital-transformation",
    title: "EliteGYM Digital Platform",
    client: "EliteGYM",
    industry: "Fitness",
    challenge: "EliteGYM needed a premium digital experience to match their high-end physical facilities and streamline member bookings.",
    solution: "We built a high-performance Next.js platform with real-time class scheduling and a custom member dashboard.",
    outcome: "A 40% increase in online bookings and a significant improvement in member engagement through the digital portal.",
    metrics: [
      { label: "Booking Increase", value: "40%" },
      { label: "Mobile Traffic", value: "+120%" },
      { label: "Site Speed", value: "98/100" }
    ],
    tags: ["Next.js", "Real-time API", "UX Design"],
    featured: true
  },
  {
    id: "futurescale",
    slug: "futurescale-saas-platform",
    title: "FutureScale SaaS Platform",
    client: "FutureScale",
    industry: "SaaS",
    challenge: "Scaling their legacy architecture to support 100k+ concurrent users while maintaining low latency.",
    solution: "Complete migration to a microservices architecture with a modern React frontend and globally distributed backend.",
    outcome: "Successfully scaled to 250k users with zero downtime and 50% reduction in infrastructure costs.",
    metrics: [
      { label: "User Capacity", value: "+150%" },
      { label: "Latency", value: "-60%" },
      { label: "Uptime", value: "99.99%" }
    ],
    tags: ["Cloud Arch", "Microservices", "React"],
    featured: false
  }
];
