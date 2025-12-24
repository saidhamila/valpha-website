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

export const industries = ["All", "Health & Fitness", "Technology", "Real Estate", "Hospitality", "Fashion", "Lifestyle"];

export const caseStudies: CaseStudy[] = [
  {
    id: "elitegym",
    slug: "elitegym-digital-presence",
    title: "EliteGYM",
    shortDescription: "Transforming a local gym's digital footprint into a high-visibility lead generation engine.",
    client: "EliteGYM",
    industry: "Health & Fitness",
    stack: ["Next.js", "Tailwind CSS", "Supabase", "Stripe", "PostgreSQL"],
    challenge: "EliteGYM needed to improve their digital footprint and increase visibility online to attract new members in a competitive local market.",
    solution: "We built a high-performance website with integrated booking and membership management, optimized for local SEO and mobile users.",
    outcome: "A 40% increase in monthly member sign-ups and 3x more organic search visibility within the first 6 months.",
    content: `
## The Challenge

EliteGYM was a top-tier local facility with a digital presence that didn't match the quality of their service. Their website was outdated, difficult to navigate on mobile, and lacked any way for potential members to sign up or book classes online. They were losing ground to national chains with better digital tools.

## Our Approach

We focused on creating a "digital front door" that was as welcoming and professional as the gym itself. The goal was to remove every friction point between a potential member discovering the gym and making their first visit.

### Software Solutions

- **High-Performance Web Platform** - A lightning-fast Next.js site optimized for mobile discovery and speed.
- **Integrated Membership System** - Seamless Stripe integration for membership payments and automated onboarding.
- **Local SEO Strategy** - Technical SEO and content optimization to dominate local search results for fitness-related keywords.
- **Class Booking Engine** - A custom-built scheduling system that allowed members to book sessions in seconds.

## The Results

The launch of the new EliteGYM platform marked a turning point for the business. By humanizing the brand and simplifying the conversion path, we turned their website into their most effective sales tool.
    `,
    metrics: [
      { label: "New Members", value: "+40%" },
      { label: "Search Visibility", value: "3x Increase" },
      { label: "Online Bookings", value: "+120%" }
    ],
    images: [
      { alt: "EliteGYM Modern Interface", caption: "Clean, high-energy design optimized for conversion" },
      { alt: "Membership Portal", caption: "Streamlined signup and payment flow" },
      { alt: "Mobile Experience", caption: "Perfect performance across all devices" }
    ],
    tags: ["Web Development", "Local SEO", "UX Design"],
    featured: true
  },
  {
    id: "luminary-fashion",
    slug: "luminary-fashion-branding",
    title: "Luminary Fashion Brand Identity",
    shortDescription: "A complete visual and narrative overhaul for a high-end sustainable fashion house.",
    client: "Luminary",
    industry: "Fashion",
    stack: ["Figma", "Adobe CC", "Next.js", "Sanity CMS", "Shopify"],
    challenge: "Luminary needed a brand identity that reflected their commitment to sustainable luxury while appealing to a global, design-conscious audience.",
    solution: "We developed a minimalist yet soulful identity system, complemented by a cinematic digital flagship that prioritizes storytelling and texture.",
    outcome: "A 150% increase in brand sentiment and a record-breaking launch for their digital flagship store.",
    content: `
## The Challenge

Luminary fashion house was at a crossroads. While their physical collections were world-class, their digital presence and brand narrative were fragmented. They needed a cohesive identity that could bridge the gap between their artisanal roots and their global future.

## Our Approach

We deep-dived into the materials, the process, and the philosophy behind Luminary. Our goal was to translate the 'tactile' nature of their clothing into a 'digital' experience that felt just as luxurious.

### Creative Solutions

- **Visual Identity System** - A bespoke logotype and color palette inspired by natural dyes and architectural forms.
- **Narrative Strategy** - Shifting the brand story from 'what we make' to 'why it matters'.
- **Digital Flagship** - A high-performance web experience that uses immersive video and large-scale typography to showcase collections.
- **Content Direction** - Art directing a series of brand films that capture the essence of 'Quiet Luxury'.

## The Results

The rebranding was met with international acclaim, positioning Luminary as a leader in the sustainable luxury space. The digital flagship has become their primary revenue driver, exceeding all initial projections.
    `,
    metrics: [
      { label: "Direct Sales", value: "+85%" },
      { label: "Brand Sentiment", value: "+150%" },
      { label: "Global Reach", value: "45+ Countries" }
    ],
    images: [
      { alt: "Luminary Visual Identity", caption: "Bespoke typography and identity system" },
      { alt: "Digital Flagship Experience", caption: "Immersive e-commerce journey" },
      { alt: "Brand Campaign", caption: "Art directed lifestyle photography" }
    ],
    tags: ["Branding", "Digital Design", "Storytelling"],
    featured: false
  },
  {
    id: "nova-tech",
    slug: "nova-tech-narrative",
    title: "Nova Tech Identity & Experience",
    shortDescription: "Humanizing a complex AI startup through strategic storytelling and accessible design.",
    client: "Nova Tech",
    industry: "Technology",
    stack: ["Figma", "Framer", "React", "Three.js", "Tailwind CSS"],
    challenge: "Nova Tech struggled to explain their complex AI infrastructure to non-technical stakeholders and potential partners.",
    solution: "We transformed their technical jargon into a human-centric brand narrative, supported by an interactive web experience that visualizes data flows.",
    outcome: "Successfully secured $25M in Series B funding following the brand relaunch and new investor platform.",
    content: `
## The Challenge

Nova Tech had incredible technology but a serious communication problem. Their brand felt cold and overly technical, making it difficult for investors and partners to grasp the human impact of their AI solutions.

## Our Approach

Our strategy was to 'humanize the machine'. We focused on the outcomes, the people, and the future Nova Tech was building, rather than just the code.

### Creative Solutions

- **Brand Narrative Framework** - Developing a clear, emotional 'Hero's Journey' for the brand.
- **Interactive Data Visualization** - Using Three.js to create beautiful, understandable representations of their AI processes.
- **Visual Language** - A vibrant, optimistic color palette and organic shapes that contrast with the technical nature of the product.
- **Investor Platform** - A secure, high-end portal designed to guide potential investors through the company's vision and performance.

## The Results

The new identity gave Nova Tech the confidence and clarity to lead their Series B funding round. The brand is now recognized not just for its technology, but for its vision.
    `,
    metrics: [
      { label: "Funding Secured", value: "$25M" },
      { label: "Partner Leads", value: "+200%" },
      { label: "Time on Site", value: "4:30 Avg" }
    ],
    images: [
      { alt: "Nova Brand World", caption: "A vibrant and optimistic visual language" },
      { alt: "Interactive Visualization", caption: "Visualizing complex AI data flows" },
      { alt: "Investor Portal", caption: "Strategic design for high-stakes communication" }
    ],
    tags: ["Strategy", "Interactive", "Identity"],
    featured: false
  }
];

