export interface CaseStudyImage {
  alt: string;
  caption?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  client: string;
  industry: string;
  stack: string[];
  challenge: string;
  solution: string;
  outcome: string;
  content: string;
  metrics: {
    label: string;
    value: string;
  }[];
  images: CaseStudyImage[];
  tags: string[];
  featured?: boolean;
}

export const industries = ["All", "FinTech", "HealthTech", "E-commerce", "SaaS", "Fitness"];

export const caseStudies: CaseStudy[] = [
  {
    id: "elitegym",
    slug: "elite-gym-digital-transformation",
    title: "EliteGYM Digital Platform",
    shortDescription: "A premium digital experience for a high-end fitness facility, featuring real-time class booking and member dashboard.",
    client: "EliteGYM",
    industry: "Fitness",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Stripe"],
    challenge: "EliteGYM needed a premium digital experience to match their high-end physical facilities and streamline member bookings.",
    solution: "We built a high-performance Next.js platform with real-time class scheduling and a custom member dashboard.",
    outcome: "A 40% increase in online bookings and a significant improvement in member engagement through the digital portal.",
    content: `
## The Challenge

EliteGYM operates premium fitness facilities but their digital presence didn't match the quality of their physical spaces. Members struggled with an outdated booking system and the team needed better insights into class attendance.

## Our Approach

We worked closely with the EliteGYM team to understand their members' needs and pain points. Through user research and stakeholder interviews, we identified key opportunities to improve the digital experience.

### Key Features Built

- **Real-time Class Booking** - Members can see live availability and book instantly
- **Member Dashboard** - Personalized view of upcoming classes, progress tracking, and membership details
- **Admin Panel** - Staff can manage schedules, track attendance, and analyze trends
- **Mobile-First Design** - Optimized for on-the-go booking from any device

## The Results

The new platform launched to overwhelmingly positive feedback from both members and staff. The intuitive booking flow reduced friction and increased engagement across the board.
    `,
    metrics: [
      { label: "Booking Increase", value: "40%" },
      { label: "Mobile Traffic", value: "+120%" },
      { label: "Site Speed", value: "98/100" }
    ],
    images: [
      { alt: "EliteGYM Dashboard", caption: "Member dashboard with upcoming classes" },
      { alt: "Class Booking Flow", caption: "Streamlined booking experience" },
      { alt: "Mobile View", caption: "Responsive design for mobile users" }
    ],
    tags: ["Next.js", "Real-time API", "UX Design"],
    featured: true
  },
  {
    id: "futurescale",
    slug: "futurescale-saas-platform",
    title: "FutureScale SaaS Platform",
    shortDescription: "Migrating a legacy system to scalable microservices architecture supporting 250k+ concurrent users.",
    client: "FutureScale",
    industry: "SaaS",
    stack: ["React", "Node.js", "Kubernetes", "AWS", "Redis"],
    challenge: "Scaling their legacy architecture to support 100k+ concurrent users while maintaining low latency.",
    solution: "Complete migration to a microservices architecture with a modern React frontend and globally distributed backend.",
    outcome: "Successfully scaled to 250k users with zero downtime and 50% reduction in infrastructure costs.",
    content: `
## The Challenge

FutureScale's platform was built on a monolithic architecture that was struggling under increasing user load. Response times were degrading and the development team found it difficult to ship new features quickly.

## Our Approach

We conducted a thorough audit of the existing system and designed a phased migration plan that minimized risk while maximizing the benefits of the new architecture.

### Migration Strategy

- **Phase 1** - Set up new infrastructure and CI/CD pipelines
- **Phase 2** - Extract core services into independent microservices
- **Phase 3** - Migrate frontend to React with improved UX
- **Phase 4** - Complete data migration with zero downtime

## The Results

The new platform handles 2.5x more users with better performance and lower costs. The microservices architecture enables the team to deploy updates multiple times per day.
    `,
    metrics: [
      { label: "User Capacity", value: "+150%" },
      { label: "Latency", value: "-60%" },
      { label: "Uptime", value: "99.99%" }
    ],
    images: [
      { alt: "Architecture Diagram", caption: "New microservices architecture" },
      { alt: "Performance Metrics", caption: "Real-time monitoring dashboard" },
      { alt: "User Interface", caption: "Redesigned user interface" }
    ],
    tags: ["Cloud Arch", "Microservices", "React"],
    featured: false
  }
];
