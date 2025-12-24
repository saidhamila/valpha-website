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

export const industries = ["All", "Weight Loss", "Sports Performance", "General Fitness", "Bodybuilding"];

export const caseStudies: CaseStudy[] = [
  {
    id: "sarah-jenkins",
    slug: "weight-loss-transformation",
    title: "Sarah's 12-Month Transformation",
    client: "Sarah Jenkins",
    industry: "Weight Loss",
    challenge: "Sarah struggled with consistency and hit a plateau in her fitness journey while managing a high-stress corporate job.",
    solution: "We implemented a sustainable nutrition plan and a 4-day-a-week strength training program focused on progressive overload.",
    outcome: "Sarah completely transformed her physique and mindset, achieving her goal weight while gaining significant lean muscle.",
    metrics: [
      { label: "Weight Lost", value: "45lbs" },
      { label: "Body Fat %", value: "-12%" },
      { label: "Strength Inc.", value: "150%" }
    ],
    tags: ["Personal Training", "Nutrition", "Weight Loss"],
    featured: true
  },
  {
    id: "mike-thompson",
    slug: "athletic-performance",
    title: "Elite Performance for Pro Athletes",
    client: "Mike Thompson",
    industry: "Sports Performance",
    challenge: "A professional athlete looking to increase explosive power and reduce injury risk during the off-season.",
    solution: "Advanced plyometric training combined with a strict recovery protocol and performance testing.",
    outcome: "Mike achieved his career-best vertical jump and reported zero injuries throughout the following season.",
    metrics: [
      { label: "Vertical Jump", value: "+6 inches" },
      { label: "Sprinting Speed", value: "+15%" },
      { label: "Injury Rate", value: "0%" }
    ],
    tags: ["Performance Lab", "Athletic Training", "Recovery"],
    featured: false
  }
];