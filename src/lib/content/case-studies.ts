export const caseStudies = [
  {
    id: "fintech-dashboard",
    title: "Real-Time Trading Dashboard",
    client: "QuantFlow Capital",
    industry: "Fintech",
    tags: ["SaaS", "Fintech", "Real-time"],
    stack: ["Next.js", "WebSocket", "PostgreSQL", "AWS"],
    thumbnail: "/images/case-1.jpg",
    shortDescription: "A high-performance trading dashboard processing 10,000+ data points per second.",
    challenge: "QuantFlow needed to replace their legacy trading interface with a modern, real-time dashboard that could handle massive data throughput while maintaining sub-100ms latency.",
    solution: "We built a custom WebSocket-based architecture with intelligent data aggregation, virtualized rendering for large datasets, and a modular widget system for trader customization.",
    outcome: "The new platform handles 10x the data volume with 60% lower latency. Trader efficiency improved by 40%, and the modern UX reduced onboarding time for new traders by 50%.",
    metrics: [
      { label: "Data throughput", value: "10x" },
      { label: "Latency reduction", value: "60%" },
      { label: "Efficiency gain", value: "+40%" }
    ],
    featured: true,
    images: [
      { src: "/images/case-1-detail-1.jpg", alt: "Trading dashboard main view", caption: "The main trading dashboard with real-time data streaming" },
      { src: "/images/case-1-detail-2.jpg", alt: "Widget customization panel", caption: "Traders can customize their workspace with drag-and-drop widgets" },
      { src: "/images/case-1-detail-3.jpg", alt: "Analytics section", caption: "Built-in analytics for performance tracking" }
    ],
    content: `
## The Challenge

QuantFlow Capital, a leading quantitative trading firm, was struggling with their legacy trading interface. Built over a decade ago, the system couldn't keep pace with the volume and velocity of modern financial markets.

Their traders were losing precious milliseconds—and real money—due to interface lag. The old system could only handle about 1,000 data points per second, while modern trading requires handling 10x that volume without breaking a sweat.

## Our Approach

We started with a deep-dive into QuantFlow's trading workflows. Understanding how traders actually work—not just what they say they need—was crucial to designing an interface that would genuinely improve their performance.

### Architecture Decisions

**WebSocket-First Communication**: We abandoned the traditional REST API approach for real-time data. WebSockets provide the persistent, bidirectional communication needed for sub-100ms updates.

**Intelligent Data Aggregation**: Not every data point needs to hit the UI. We implemented smart aggregation on the server that respects the user's zoom level and current view, dramatically reducing bandwidth while maintaining data fidelity.

**Virtualized Rendering**: With thousands of data points, traditional DOM rendering would choke. We implemented virtualized lists and charts that only render what's visible, keeping the interface buttery smooth.

## The Solution

The new dashboard features a modular widget system that traders can customize to their exact needs. Want five price charts and two order books? Done. Prefer a single large chart with a trade history sidebar? Easy.

Key features include:
- Real-time streaming with WebSocket connections
- Drag-and-drop widget arrangement
- Multi-monitor support with synchronized state
- Keyboard shortcuts for rapid execution
- Built-in analytics and performance tracking

## Results

The impact was immediate and measurable:

- **10x data throughput**: The system now comfortably handles 10,000+ data points per second
- **60% latency reduction**: Average UI update latency dropped from 250ms to under 100ms
- **40% efficiency gain**: Traders execute more trades with fewer errors
- **50% faster onboarding**: New traders get up to speed in half the time

The project was completed in 14 weeks, and QuantFlow has since expanded the platform to their entire trading desk.
    `
  },
  {
    id: "support-automation",
    title: "AI Support Automation",
    client: "CloudServe Inc.",
    industry: "SaaS",
    tags: ["SaaS", "AI", "Support Automation"],
    stack: ["Python", "OpenAI", "React", "Node.js"],
    thumbnail: "/images/case-2.jpg",
    shortDescription: "An AI-powered support system that resolved 70% of tickets automatically.",
    challenge: "CloudServe's support team was overwhelmed with repetitive tickets, leading to long response times and customer frustration. They needed a solution that could handle common queries while maintaining quality.",
    solution: "We developed a custom AI assistant trained on their knowledge base, integrated with their ticketing system. The bot handles initial triage, resolves common issues, and seamlessly escalates complex cases to human agents.",
    outcome: "Automatic resolution rate of 70% for incoming tickets. Average response time dropped from 4 hours to 2 minutes. Support team can now focus on complex, high-value interactions.",
    metrics: [
      { label: "Auto-resolved", value: "70%" },
      { label: "Response time", value: "2min" },
      { label: "Cost savings", value: "$180K/yr" }
    ],
    featured: true,
    images: [
      { src: "/images/case-2-detail-1.jpg", alt: "AI chat interface", caption: "The customer-facing chat interface with AI assistance" },
      { src: "/images/case-2-detail-2.jpg", alt: "Agent dashboard", caption: "Support agents see AI suggestions and context for escalated tickets" },
      { src: "/images/case-2-detail-3.jpg", alt: "Analytics dashboard", caption: "Real-time analytics on resolution rates and customer satisfaction" }
    ],
    content: `
## The Challenge

CloudServe Inc., a B2B SaaS company with over 2,000 customers, was drowning in support tickets. Their 8-person support team was handling 500+ tickets daily, with an average response time of 4 hours—far below their 1-hour SLA target.

The root cause? About 70% of tickets were variations of the same 50 questions. Password resets, billing inquiries, feature explanations—repetitive work that burned out agents and frustrated customers.

## Our Approach

We proposed an AI-first support system that would handle the routine while empowering humans to do what they do best: solve complex problems with empathy and creativity.

### Phase 1: Knowledge Foundation

Before building anything, we spent two weeks analyzing 10,000 historical tickets. We identified patterns, categorized issues, and built a comprehensive knowledge base that would serve as the AI's training data.

### Phase 2: AI Development

We built a custom AI assistant using OpenAI's GPT models, fine-tuned on CloudServe's specific domain knowledge. But we didn't just slap an API on it—we engineered:

- **Context awareness**: The AI understands customer history, subscription tier, and recent interactions
- **Confidence scoring**: Low-confidence responses are flagged for human review
- **Graceful handoff**: When escalation is needed, all context transfers seamlessly to agents

### Phase 3: Human-AI Collaboration

The key insight: AI shouldn't replace agents, it should supercharge them. For escalated tickets, agents see:
- AI's suggested response (editable)
- Relevant knowledge base articles
- Similar past tickets and their resolutions

## The Solution

The final system includes:

**Customer-Facing Chat**: An intelligent chat widget that resolves most queries instantly, available 24/7.

**Agent Dashboard**: A unified interface showing all tickets with AI-powered suggestions, priority scoring, and customer context.

**Analytics Suite**: Real-time metrics on resolution rates, customer satisfaction, and AI performance for continuous improvement.

## Results

After 3 months in production:

- **70% auto-resolution rate**: 7 in 10 tickets never need human intervention
- **2-minute average response**: Down from 4 hours
- **$180K annual savings**: Through reduced support costs
- **95% customer satisfaction**: Up from 78%

CloudServe's support team now focuses on complex issues and proactive outreach, transforming support from a cost center into a competitive advantage.
    `
  },
  {
    id: "healthcare-platform",
    title: "Patient Management Platform",
    client: "MediCare Solutions",
    industry: "Healthcare",
    tags: ["Healthcare", "SaaS", "Integration"],
    stack: ["React", "Node.js", "FHIR", "Azure"],
    thumbnail: "/images/case-3.jpg",
    shortDescription: "A HIPAA-compliant platform connecting 50+ healthcare providers.",
    challenge: "MediCare needed to modernize their patient management system while ensuring HIPAA compliance and integrating with various EHR systems across their network of clinics.",
    solution: "We architected a secure, cloud-native platform using FHIR standards for interoperability. Implemented end-to-end encryption, audit logging, and a flexible integration layer for EHR connectivity.",
    outcome: "Successfully connected 50+ providers on a single platform. Patient data access time reduced by 80%. The platform passed all compliance audits with zero findings.",
    metrics: [
      { label: "Providers connected", value: "50+" },
      { label: "Access time", value: "-80%" },
      { label: "Compliance score", value: "100%" }
    ],
    featured: false,
    images: [
      { src: "/images/case-3-detail-1.jpg", alt: "Provider dashboard", caption: "The main provider dashboard with patient overview" },
      { src: "/images/case-3-detail-2.jpg", alt: "Patient records view", caption: "Unified patient records across all connected providers" },
      { src: "/images/case-3-detail-3.jpg", alt: "Integration panel", caption: "Easy EHR integration management" }
    ],
    content: `
## The Challenge

MediCare Solutions manages a network of 50+ healthcare clinics across three states. Each clinic had its own patient management system—some paper-based, others using outdated software from the 90s.

This fragmentation meant:
- Patients had to re-explain their history at every visit
- Providers couldn't see the full picture of a patient's care
- Administrative staff spent hours on manual data entry
- Compliance was a nightmare of paper trails and spreadsheets

## Our Approach

Healthcare software isn't like other software. The stakes are higher, the regulations stricter, and the integration challenges more complex. We assembled a team with specific healthcare IT experience and approached this systematically.

### Compliance First

Before writing a line of code, we mapped out HIPAA requirements and built compliance into our architecture:
- End-to-end encryption for data at rest and in transit
- Role-based access control with audit logging
- Automatic session management and secure authentication
- Data residency controls for state-specific regulations

### FHIR for Interoperability

We adopted FHIR (Fast Healthcare Interoperability Resources) as our data exchange standard. This allowed us to:
- Connect with modern EHR systems via standard APIs
- Build adapters for legacy systems
- Future-proof the platform for upcoming regulations

## The Solution

The platform we delivered includes:

**Unified Patient View**: Clinicians see a complete patient history across all network providers, with intelligent summarization and timeline views.

**Smart Scheduling**: Cross-facility scheduling with conflict detection, automated reminders, and no-show prediction.

**Secure Messaging**: HIPAA-compliant communication between providers, with patient portal integration.

**Compliance Dashboard**: Real-time compliance status, audit trails, and automated reporting for regulatory requirements.

## Results

Six months post-launch:

- **50+ providers connected** on a single platform
- **80% reduction** in patient data access time
- **100% compliance** score across all audits
- **Zero** security incidents
- **4.8/5** provider satisfaction rating

The platform now processes over 100,000 patient interactions monthly and has become MediCare's competitive differentiator when acquiring new clinics.
    `
  },
  {
    id: "ecommerce-integration",
    title: "Multi-Channel Commerce Hub",
    client: "RetailMax",
    industry: "E-commerce",
    tags: ["E-commerce", "Integration", "Automation"],
    stack: ["Node.js", "PostgreSQL", "Shopify", "Amazon API"],
    thumbnail: "/images/case-4.jpg",
    shortDescription: "Unified inventory and order management across 5 sales channels.",
    challenge: "RetailMax was selling on multiple platforms but managing inventory manually, leading to overselling, stockouts, and fulfillment errors that were costing them customers and revenue.",
    solution: "We built a centralized commerce hub that syncs inventory in real-time across all channels, automates order routing to optimal fulfillment centers, and provides unified analytics.",
    outcome: "Eliminated overselling incidents entirely. Order processing time reduced by 65%. The unified view enabled data-driven decisions that increased overall revenue by 25%.",
    metrics: [
      { label: "Overselling", value: "0%" },
      { label: "Processing time", value: "-65%" },
      { label: "Revenue increase", value: "+25%" }
    ],
    featured: false,
    images: [
      { src: "/images/case-4-detail-1.jpg", alt: "Inventory dashboard", caption: "Real-time inventory view across all sales channels" },
      { src: "/images/case-4-detail-2.jpg", alt: "Order management", caption: "Unified order management with smart routing" },
      { src: "/images/case-4-detail-3.jpg", alt: "Analytics view", caption: "Cross-channel analytics and insights" }
    ],
    content: `
## The Challenge

RetailMax, a growing e-commerce brand, was selling on Amazon, Shopify, eBay, Walmart Marketplace, and their own website. Five channels, five admin panels, and one overworked operations team trying to keep it all in sync.

The problems were mounting:
- Overselling during sales events (leading to cancelled orders and angry customers)
- Stockouts because inventory wasn't updated fast enough
- Fulfillment delays from manual order routing
- No clear picture of which channels were actually profitable

## Our Approach

We envisioned a single source of truth—a commerce hub that would be the brain of RetailMax's operations, connecting all channels and making intelligent decisions in real-time.

### Integration Architecture

Each sales channel speaks a different language. We built a normalized data layer that:
- Translates each platform's API into a common format
- Handles rate limits and retry logic
- Maintains data consistency with eventual consistency patterns
- Scales horizontally as order volume grows

### Smart Inventory Management

Inventory syncing isn't just about matching numbers. We implemented:
- Safety stock calculations per channel and product
- Predictive replenishment based on sales velocity
- Automatic allocation during flash sales
- Dead stock identification and clearance recommendations

## The Solution

The commerce hub includes:

**Real-Time Inventory Sync**: Changes propagate to all channels within 30 seconds, eliminating overselling.

**Intelligent Order Routing**: Orders automatically route to the nearest fulfillment center with stock, reducing shipping costs and delivery times.

**Unified Analytics**: One dashboard showing profitability by channel, product performance, and inventory health.

**Automation Engine**: Rule-based automation for pricing adjustments, listing updates, and promotional campaigns.

## Results

After 90 days in production:

- **Zero overselling** incidents (down from 50+ per month)
- **65% faster** order processing
- **25% revenue increase** from better inventory positioning and pricing
- **30% reduction** in shipping costs from smarter routing
- **3 FTEs worth** of manual work automated

RetailMax has since expanded to two additional channels with zero additional operational overhead.
    `
  }
];

export const industries = ["All", "SaaS", "Fintech", "Healthcare", "E-commerce", "AI"];