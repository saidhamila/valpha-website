export const posts = [
  {
    slug: "building-ai-powered-applications-2024",
    title: "Building AI-Powered Applications in 2024: A Practical Guide",
    excerpt: "Learn how to integrate large language models into your applications effectively, from choosing the right model to handling edge cases and optimizing costs.",
    date: "2024-12-15",
    author: "Alex Chen",
    tags: ["AI", "Development", "Tutorial"],
    readTime: "12 min read",
    content: `
## Introduction

The landscape of AI-powered applications has evolved dramatically over the past year. What was once cutting-edge research is now accessible to every developer through APIs and open-source models. But with great power comes great responsibility—and complexity. In this comprehensive guide, we'll explore practical strategies for building production-ready AI features that actually work.

The key to success isn't just calling an API. It's understanding the nuances of prompt engineering, building robust error handling, managing costs at scale, and creating user experiences that feel magical rather than clunky.

## Choosing the Right Model

Not every use case requires GPT-4 or Claude 3 Opus. In fact, using the most powerful model available is often a mistake. Consider these factors:

### Task Complexity

Simple classification tasks, sentiment analysis, or text extraction can be handled brilliantly by smaller, fine-tuned models. These models are faster, cheaper, and often more consistent than their larger counterparts.

For complex reasoning, creative writing, or tasks requiring nuanced understanding, larger models shine. The trick is matching model capability to task requirements.

### Latency Requirements

User experience depends heavily on perceived performance. Consider these strategies:

- **Streaming responses**: Display tokens as they arrive rather than waiting for completion
- **Optimistic UI**: Show placeholders and loading states that feel responsive
- **Background processing**: For non-interactive tasks, queue jobs and notify on completion

\`\`\`typescript
// Streaming implementation example
async function* streamCompletion(prompt: string) {
  const response = await fetch('/api/ai/stream', {
    method: 'POST',
    body: JSON.stringify({ prompt }),
  });
  
  const reader = response.body?.getReader();
  const decoder = new TextDecoder();
  
  while (true) {
    const { done, value } = await reader!.read();
    if (done) break;
    yield decoder.decode(value);
  }
}
\`\`\`

### Cost Constraints

Token costs add up quickly at scale. A seemingly cheap $0.01 per 1K tokens becomes $10,000 per million requests. Plan accordingly:

- Set per-user rate limits
- Implement token budgets
- Use smaller models for initial filtering
- Cache aggressively

## Architecture Patterns

### The Gateway Pattern

Abstract your AI provider behind a unified interface. This allows you to switch providers without code changes, implement fallbacks for reliability, add caching layers for common queries, and A/B test different models seamlessly.

\`\`\`typescript
interface AIGateway {
  complete(prompt: string, options?: CompletionOptions): Promise<string>;
  stream(prompt: string, options?: StreamOptions): AsyncGenerator<string>;
  embed(text: string): Promise<number[]>;
}

class AIGatewayImpl implements AIGateway {
  private providers: AIProvider[];
  
  async complete(prompt: string, options?: CompletionOptions) {
    for (const provider of this.providers) {
      try {
        return await provider.complete(prompt, options);
      } catch (error) {
        console.error(\`Provider \${provider.name} failed:\`, error);
        continue;
      }
    }
    throw new Error('All providers failed');
  }
}
\`\`\`

### The RAG Pattern (Retrieval Augmented Generation)

For knowledge-intensive applications, combine vector search with LLM generation:

1. Index your documents into a vector database
2. When a user asks a question, find relevant documents
3. Include those documents in your prompt context
4. Generate a response grounded in real data

This approach dramatically reduces hallucinations and keeps responses current with your latest data.

## Handling Edge Cases

AI outputs are inherently unpredictable. Your application must handle:

### Malformed Responses

Always validate AI outputs before using them. If you're expecting JSON, parse it defensively:

\`\`\`typescript
function parseAIResponse<T>(response: string, schema: z.ZodSchema<T>): T | null {
  try {
    // Try to extract JSON from markdown code blocks
    const jsonMatch = response.match(/\`\`\`json\\n([\\s\\S]*?)\\n\`\`\`/);
    const jsonString = jsonMatch ? jsonMatch[1] : response;
    
    const parsed = JSON.parse(jsonString);
    return schema.parse(parsed);
  } catch {
    return null;
  }
}
\`\`\`

### Harmful Content

Implement content filtering layers. Don't rely solely on the AI provider's built-in filters—add your own validation for your specific use case.

### Rate Limits and Timeouts

Plan for API unavailability with exponential backoff, circuit breakers, and graceful degradation.

## Cost Optimization Strategies

### Semantic Caching

Cache not just exact matches, but semantically similar queries:

\`\`\`typescript
async function getCachedOrGenerate(query: string) {
  const embedding = await embed(query);
  const cached = await vectorDB.findSimilar(embedding, threshold: 0.95);
  
  if (cached) return cached.response;
  
  const response = await generate(query);
  await vectorDB.store(embedding, response);
  return response;
}
\`\`\`

### Prompt Compression

Remove unnecessary whitespace, use abbreviations where the model understands them, and be concise in instructions.

### Tiered Model Selection

Use a smaller model to classify the complexity of a request, then route to the appropriate model tier.

## Monitoring and Observability

You can't improve what you can't measure. Track:

- Response latency (p50, p95, p99)
- Token usage per request
- Error rates by type
- User satisfaction signals (thumbs up/down, regeneration requests)
- Cost per user segment

## Conclusion

Building with AI requires a balance of innovation and pragmatism. Start simple, measure everything, and iterate based on real user feedback. The best AI features are those that users don't even notice—they just make the product feel smarter.

Remember: AI is a tool, not a solution. The magic happens when you combine AI capabilities with thoughtful product design and robust engineering practices.
    `
  },
  {
    slug: "saas-architecture-patterns",
    title: "Modern SaaS Architecture Patterns for Scale",
    excerpt: "Explore battle-tested architecture patterns that enable SaaS applications to scale from hundreds to millions of users without major rewrites.",
    date: "2024-12-01",
    author: "Sarah Kim",
    tags: ["Architecture", "SaaS", "Scale"],
    readTime: "15 min read",
    content: `
## The Challenge of Scale

Building a SaaS product that can scale is about making the right decisions early—without over-engineering for scale you may never need. The goal is creating an architecture that can evolve gracefully as your user base grows.

We've helped dozens of companies navigate this journey, from scrappy startups to enterprises serving millions. Here are the patterns that consistently deliver results.

## Multi-Tenancy Strategies

The first major architectural decision is how to isolate tenant data. There's no universally correct answer—each approach has tradeoffs.

### Database per Tenant

**Best for:** Enterprise products with strict compliance requirements, customers willing to pay for isolation.

\`\`\`
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Tenant A   │     │  Tenant B   │     │  Tenant C   │
│  Database   │     │  Database   │     │  Database   │
└─────────────┘     └─────────────┘     └─────────────┘
\`\`\`

**Advantages:**
- Complete data isolation
- Easy to meet compliance requirements (SOC2, HIPAA, GDPR)
- Simple backup and restore per tenant
- No "noisy neighbor" problems
- Easy to move enterprise customers to dedicated infrastructure

**Challenges:**
- Operational overhead grows linearly with tenants
- Database connection limits become a bottleneck
- Migrations must be run across all databases
- Higher infrastructure costs

### Schema per Tenant

A middle ground that works well for many use cases. Each tenant gets their own schema within a shared database.

\`\`\`sql
-- Creating a new tenant
CREATE SCHEMA tenant_acme;
SET search_path TO tenant_acme;
-- Run your standard migrations
\`\`\`

**Advantages:**
- Better resource utilization than DB-per-tenant
- Still provides logical isolation
- Single database to manage
- Easier cross-tenant queries for analytics

**Challenges:**
- Still limited by connection pool size
- Schema migrations can be slow at scale
- Less isolation than separate databases

### Row-Level Security

Most scalable but requires careful implementation. All tenants share tables, with a tenant_id column discriminating data.

\`\`\`sql
-- PostgreSQL RLS example
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation ON orders
  USING (tenant_id = current_setting('app.current_tenant')::uuid);
\`\`\`

**Advantages:**
- Simplest to scale
- Efficient resource utilization
- Standard migration process
- Easiest to implement cross-tenant features

**Challenges:**
- Bugs can expose data across tenants
- Requires discipline in query construction
- Harder to meet strict compliance requirements
- Noisy neighbor problems possible

## Event-Driven Architecture

As your system grows, synchronous request-response patterns become limiting. Event-driven architecture decouples your services and enables:

- Independent scaling of producers and consumers
- Resilience to downstream failures
- Natural audit trail
- Easy addition of new consumers

### The Event Flow

\`\`\`
User Action → Command Handler → Domain Event → Event Bus
                                                   │
                     ┌─────────────────────────────┼─────────────────────────────┐
                     │                             │                             │
                     ▼                             ▼                             ▼
              Email Service               Analytics Service              Webhook Service
\`\`\`

### Event Design Principles

**Make events immutable facts.** An event represents something that happened. Don't design events as commands to other services.

\`\`\`typescript
// Good: Immutable fact
interface OrderPlacedEvent {
  type: 'order.placed';
  occurredAt: Date;
  data: {
    orderId: string;
    customerId: string;
    items: OrderItem[];
    total: number;
  };
}

// Bad: Command disguised as event
interface SendOrderEmailEvent {
  type: 'send.order.email';
  // This couples the producer to the consumer
}
\`\`\`

**Include enough context.** Consumers shouldn't need to make API calls to understand an event. Include relevant data at the time of the event.

## Caching Strategies

Caching is essential for performance, but cache invalidation is famously hard. Layer your caches strategically:

### Layer 1: CDN (Edge Caching)

Cache static assets and even API responses at the edge.

\`\`\`typescript
// Next.js example
export async function GET(request: Request) {
  const data = await fetchData();
  
  return Response.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=600',
    },
  });
}
\`\`\`

### Layer 2: Application Cache

Use Redis or Memcached for session data, computed values, and frequently accessed objects.

\`\`\`typescript
async function getUser(id: string) {
  const cacheKey = \`user:\${id}\`;
  
  const cached = await redis.get(cacheKey);
  if (cached) return JSON.parse(cached);
  
  const user = await db.users.findUnique({ where: { id } });
  await redis.setex(cacheKey, 300, JSON.stringify(user));
  
  return user;
}
\`\`\`

### Layer 3: Database Query Cache

Let your database cache query results. Configure connection pooling and query caching appropriately.

### Cache Invalidation Patterns

**Time-based (TTL):** Simple but can serve stale data. Good for data that doesn't need to be immediately consistent.

**Event-based:** Invalidate cache when relevant events occur. More complex but ensures consistency.

\`\`\`typescript
eventBus.on('user.updated', async (event) => {
  await redis.del(\`user:\${event.data.userId}\`);
});
\`\`\`

## Background Job Processing

Not everything needs to happen in the request-response cycle. Move these operations to background jobs:

- Email sending
- PDF generation
- Data exports
- External API calls
- Analytics processing

Use a robust job queue like BullMQ, Celery, or Sidekiq. Implement:

- **Retries with exponential backoff**
- **Dead letter queues** for failed jobs
- **Job prioritization** for time-sensitive work
- **Monitoring and alerting** on queue depth and failure rates

## Database Scaling Strategies

### Read Replicas

Scale read-heavy workloads by directing queries to replicas:

\`\`\`typescript
const db = {
  primary: createClient(PRIMARY_URL),
  replica: createClient(REPLICA_URL),
};

// Use replica for reads that can tolerate slight staleness
async function getReports(tenantId: string) {
  return db.replica.reports.findMany({ where: { tenantId } });
}

// Use primary for writes and consistency-critical reads
async function createOrder(data: OrderData) {
  return db.primary.orders.create({ data });
}
\`\`\`

### Connection Pooling

Database connections are expensive. Use connection pooling (PgBouncer, ProxySQL) to serve more requests with fewer connections.

### Sharding

For truly massive scale, partition your data across multiple database clusters. Common sharding keys:

- Tenant ID (for multi-tenant apps)
- Geographic region
- Time-based partitioning for time-series data

## Conclusion

The best architecture is one that solves today's problems while leaving room for tomorrow's growth. Don't over-engineer for scale you don't have—but don't paint yourself into a corner either.

Start with a modular monolith, instrument everything, and let your metrics guide when and how to evolve. The patterns in this guide have served us well across dozens of projects. Adapt them to your context, and you'll be well-prepared for whatever scale brings.
    `
  },
  {
    slug: "effective-api-design",
    title: "Principles of Effective API Design",
    excerpt: "APIs are contracts between systems. Learn how to design APIs that are intuitive, maintainable, and built to last.",
    date: "2024-11-15",
    author: "Marcus Johnson",
    tags: ["API", "Development", "Best Practices"],
    readTime: "10 min read",
    content: `
## APIs Are User Interfaces

Just like visual interfaces, APIs have users—developers. And just like UI design, API design is fundamentally about empathy. Every decision should make the developer's job easier.

A well-designed API feels obvious. Developers can guess how to use it without consulting documentation. A poorly designed API leads to frustration, bugs, and endless support tickets.

## Naming Matters More Than You Think

Names are the first thing developers see. Get them right, and everything else becomes easier.

### Be Consistent

Pick a naming convention and stick to it religiously:

\`\`\`
GET  /users              → list users
GET  /users/:id          → get specific user
POST /users              → create user
PUT  /users/:id          → replace user
PATCH /users/:id         → update user fields
DELETE /users/:id        → delete user
\`\`\`

### Be Predictable

If \`/users/:id/posts\` returns a user's posts, then \`/teams/:id/posts\` should return a team's posts. Don't surprise developers with inconsistent patterns.

### Use Nouns, Not Verbs

Resources are nouns. HTTP methods are verbs.

\`\`\`
❌ POST /createUser
❌ GET /getUser
❌ POST /users/delete

✅ POST /users
✅ GET /users/:id
✅ DELETE /users/:id
\`\`\`

### Pluralize Collections

Even for resources where users typically only have one, use plurals for consistency:

\`\`\`
✅ /users/:id/settings
❌ /users/:id/setting
\`\`\`

## Versioning Strategy

APIs evolve. Your versioning strategy determines how painful that evolution is.

### URL Versioning

The most explicit approach. Easy to understand and implement:

\`\`\`
/api/v1/users
/api/v2/users
\`\`\`

**Pros:** Clear, cacheable, simple routing
**Cons:** Pollutes URLs, can lead to version proliferation

### Header Versioning

\`\`\`
GET /api/users
Accept: application/vnd.myapp.v2+json
\`\`\`

**Pros:** Clean URLs, flexible
**Cons:** Harder to test, less discoverable

### Query Parameter Versioning

\`\`\`
GET /api/users?version=2
\`\`\`

**Pros:** Easy to implement
**Cons:** Can break caching, less RESTful

Our recommendation: **URL versioning** for public APIs, **header versioning** for internal APIs where you control all clients.

## Error Handling That Helps

Errors are inevitable. Good error responses help developers fix problems quickly.

### Use Appropriate Status Codes

\`\`\`
200 OK           → Success
201 Created      → Resource created
204 No Content   → Success with no body
400 Bad Request  → Client error (validation, malformed request)
401 Unauthorized → Missing or invalid authentication
403 Forbidden    → Authenticated but not authorized
404 Not Found    → Resource doesn't exist
409 Conflict     → Conflict with current state (duplicate, version mismatch)
422 Unprocessable → Validation error
429 Too Many Requests → Rate limited
500 Internal Error → Server error (never expose details in production)
\`\`\`

### Return Meaningful Error Bodies

\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request contained invalid parameters",
    "details": [
      {
        "field": "email",
        "code": "INVALID_FORMAT",
        "message": "Email format is invalid"
      },
      {
        "field": "age",
        "code": "OUT_OF_RANGE",
        "message": "Age must be between 0 and 150"
      }
    ],
    "requestId": "req_abc123"
  }
}
\`\`\`

This gives developers everything they need: a machine-readable code for programmatic handling, human-readable messages for debugging, and a request ID for support escalation.

## Pagination Done Right

Any endpoint that returns a list should support pagination from day one.

### Cursor-Based Pagination

Preferred for most use cases. Stable, efficient, and handles real-time data well:

\`\`\`json
{
  "data": [...],
  "pagination": {
    "cursor": "eyJpZCI6MTAwfQ==",
    "hasMore": true
  }
}
\`\`\`

### Offset Pagination

Simpler to implement but has issues with consistency when data changes:

\`\`\`json
{
  "data": [...],
  "pagination": {
    "offset": 100,
    "limit": 25,
    "total": 1042
  }
}
\`\`\`

Use offset pagination only when you need to support "jump to page N" functionality.

## Rate Limiting

Protect your API and ensure fair usage with rate limiting. Always communicate limits clearly:

\`\`\`
HTTP/1.1 200 OK
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
\`\`\`

When a client is rate limited:

\`\`\`
HTTP/1.1 429 Too Many Requests
Retry-After: 60

{
  "error": {
    "code": "RATE_LIMITED",
    "message": "Too many requests. Please retry after 60 seconds."
  }
}
\`\`\`

## Documentation Is Not Optional

Your API is only as good as its documentation. Invest in:

- **Quick start guide**: Get developers to their first successful call in under 5 minutes
- **Reference documentation**: Complete, accurate, auto-generated from code when possible
- **Examples**: Real-world use cases with copy-paste code
- **Changelog**: What changed in each version, migration guides for breaking changes

Use OpenAPI (Swagger) to keep documentation in sync with your implementation.

## Security Considerations

### Authentication

Use industry standards:
- **OAuth 2.0** for third-party integrations
- **API keys** for server-to-server communication
- **JWT** for session management (with short expiry and refresh tokens)

### Input Validation

Validate everything. Never trust client input:

\`\`\`typescript
const createUserSchema = z.object({
  email: z.string().email().max(255),
  name: z.string().min(1).max(100),
  role: z.enum(['user', 'admin']).default('user'),
});

app.post('/users', async (req, res) => {
  const result = createUserSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ error: formatZodError(result.error) });
  }
  // Proceed with validated data
});
\`\`\`

### Output Filtering

Never return more data than necessary. Explicitly define what fields are returned in responses, and filter sensitive data.

## Conclusion

Great APIs feel invisible. Developers using them can focus on building their product rather than fighting with yours.

The principles here aren't revolutionary—they're the accumulated wisdom of thousands of API designers learning from mistakes. Apply them consistently, document thoroughly, and iterate based on feedback from your API consumers.

Your future self (and your users) will thank you.
    `
  },
  {
    slug: "next-js-performance-optimization",
    title: "Next.js Performance Optimization: From Good to Great",
    excerpt: "Practical techniques to optimize your Next.js application for speed, from bundle size reduction to smart data fetching strategies.",
    date: "2024-11-01",
    author: "Alex Chen",
    tags: ["Next.js", "Performance", "Tutorial"],
    readTime: "14 min read",
    content: `
## Why Performance Matters

Every 100ms of latency costs you 1% in conversions. Amazon found that every 100ms of load time cost them 1% in sales. Google uses page speed as a ranking factor. Performance isn't just a nice-to-have—it's a business imperative.

Next.js gives you a lot of performance optimizations out of the box, but there's always room for improvement. In this guide, we'll cover practical techniques that have delivered real results for our clients.

## Start With Measurement

Before optimizing anything, establish baselines. You can't improve what you don't measure.

### Core Web Vitals

Focus on the metrics that matter:

- **LCP (Largest Contentful Paint)**: Should be under 2.5 seconds
- **FID (First Input Delay)**: Should be under 100ms
- **CLS (Cumulative Layout Shift)**: Should be under 0.1

Use Lighthouse, WebPageTest, and real user monitoring (RUM) to track these metrics over time.

### Bundle Analysis

Understand what's in your bundle before trying to shrink it:

\`\`\`bash
npm install @next/bundle-analyzer

# next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({});

# Run analysis
ANALYZE=true npm run build
\`\`\`

Common culprits that bloat bundles:

- **Icon libraries**: Import only icons you use, not the entire library
- **Date libraries**: moment.js is 300KB; date-fns is tree-shakeable
- **Lodash**: Import individual functions, not the whole library
- **Unused dependencies**: Audit regularly with \`depcheck\`

## Code Splitting Strategies

Next.js automatically code splits by route, but you can go further.

### Dynamic Imports

Load heavy components only when needed:

\`\`\`typescript
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <ChartSkeleton />,
  ssr: false, // Disable SSR for client-only components
});

export default function Dashboard() {
  const [showChart, setShowChart] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShowChart(true)}>Show Chart</button>
      {showChart && <HeavyChart />}
    </div>
  );
}
\`\`\`

### Route Groups for Shared Layouts

Use route groups to share code between related pages without affecting URL structure:

\`\`\`
app/
  (marketing)/
    layout.tsx  ← Shared marketing layout
    page.tsx
    pricing/page.tsx
    about/page.tsx
  (app)/
    layout.tsx  ← Shared app layout
    dashboard/page.tsx
    settings/page.tsx
\`\`\`

## Image Optimization

Images are often the biggest contributor to page weight. Next.js Image component handles a lot, but optimization starts before you even use the component.

### Source Images

- Use appropriate source dimensions (don't serve a 4000px image for a 400px display)
- Compress images before upload
- Use modern formats (WebP, AVIF) when possible

### Next.js Image Component

\`\`\`typescript
import Image from 'next/image';

export function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={1200}
      height={600}
      priority // Load immediately for above-the-fold images
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
    />
  );
}
\`\`\`

### Key Props

- **priority**: Use for LCP images (hero, above the fold)
- **placeholder="blur"**: Improves perceived performance
- **sizes**: Tell the browser what size image to load based on viewport
- **quality**: Balance between file size and visual quality (default 75 is usually fine)

## Data Fetching Optimization

How you fetch data dramatically impacts performance.

### Server Components

Server Components are the default in the App Router. They fetch data on the server, reducing client JavaScript and improving SEO.

\`\`\`typescript
// This runs on the server
export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);
  
  return <ProductDetails product={product} />;
}
\`\`\`

### Parallel Data Fetching

Avoid waterfalls by fetching data in parallel:

\`\`\`typescript
// ❌ Waterfall: Each request waits for the previous
const user = await getUser(id);
const posts = await getUserPosts(user.id);
const comments = await getPostComments(posts[0].id);

// ✅ Parallel: All requests start immediately
const [user, posts, settings] = await Promise.all([
  getUser(id),
  getUserPosts(id),
  getUserSettings(id),
]);
\`\`\`

### Streaming and Suspense

Show content as soon as it's available:

\`\`\`typescript
import { Suspense } from 'react';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense fallback={<StatsSkeleton />}>
        <Stats />
      </Suspense>
      <Suspense fallback={<ChartSkeleton />}>
        <Chart />
      </Suspense>
    </div>
  );
}
\`\`\`

## Caching Strategies

Next.js 14+ has powerful caching built in. Understand the layers:

### Request Memoization

Duplicate requests in the same render pass are automatically deduplicated:

\`\`\`typescript
// These two calls result in only one actual fetch
const user1 = await getUser(1);
const user2 = await getUser(1); // Uses cached response
\`\`\`

### Data Cache

Cache fetch responses across requests:

\`\`\`typescript
// Cached indefinitely (until revalidation)
const data = await fetch('https://api.example.com/data', {
  cache: 'force-cache',
});

// Revalidate every 60 seconds
const data = await fetch('https://api.example.com/data', {
  next: { revalidate: 60 },
});

// Never cache (for user-specific data)
const data = await fetch('https://api.example.com/user', {
  cache: 'no-store',
});
\`\`\`

### Static Generation vs ISR

For content that doesn't change often, static generation is unbeatable:

\`\`\`typescript
// Generates at build time
export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);
  return <Article post={post} />;
}

// With ISR: Regenerates after 60 seconds
export const revalidate = 60;
\`\`\`

## Font Optimization

Web fonts can cause layout shift and slow renders. Next.js Font handles this elegantly:

\`\`\`typescript
import { Inter, Merriweather } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
});

export default function RootLayout({ children }) {
  return (
    <html className={\`\${inter.variable} \${merriweather.variable}\`}>
      <body>{children}</body>
    </html>
  );
}
\`\`\`

This automatically:
- Hosts fonts locally (no external requests)
- Eliminates layout shift with size-adjust
- Preloads only the fonts you use

## Third-Party Script Management

Third-party scripts are performance killers. Manage them carefully:

\`\`\`typescript
import Script from 'next/script';

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Script
        src="https://analytics.example.com/script.js"
        strategy="lazyOnload" // Load after everything else
      />
      <Script
        src="https://critical.example.com/script.js"
        strategy="beforeInteractive" // Only for truly critical scripts
      />
    </>
  );
}
\`\`\`

Script strategies:
- **beforeInteractive**: Critical scripts that must load first (rare)
- **afterInteractive**: Load after the page becomes interactive (default)
- **lazyOnload**: Load during idle time (analytics, chatbots)

## Conclusion

Performance optimization is iterative. The techniques in this guide will get you most of the way there, but every application is different.

Establish measurements, make targeted improvements, measure again. Small gains compound—a 50ms improvement here and there adds up to a noticeably faster experience.

Your users may not consciously notice a fast website. But they'll definitely notice a slow one. Invest in performance, and you invest in user experience.
    `
  },
  {
    slug: "automating-workflows-with-ai",
    title: "Automating Business Workflows with AI: A Case Study",
    excerpt: "How we helped a customer service team reduce ticket resolution time by 70% using AI-powered automation.",
    date: "2024-10-20",
    author: "Sarah Kim",
    tags: ["AI", "Automation", "Case Study"],
    readTime: "11 min read",
    content: `
## The Problem

Our client, a mid-sized e-commerce company, was drowning in customer support tickets. Their team of 15 support agents handled an average of 2,000 tickets per day. The same questions were asked dozens of times daily, and response times had crept up to 18 hours average.

Customer satisfaction was suffering. NPS had dropped from 45 to 28 over six months. Something had to change.

## Understanding the Current State

Before diving into solutions, we spent two weeks analyzing their support operations:

### Ticket Analysis

We categorized 10,000 historical tickets and found:
- **45%** were simple, repetitive questions (shipping, returns, order status)
- **35%** required access to customer account data
- **15%** needed nuanced human judgment
- **5%** required escalation to specialized teams

### Agent Time Study

Tracking how agents spent their time revealed:
- **30%** searching for information across multiple systems
- **25%** typing repetitive responses
- **25%** actually solving complex problems
- **20%** administrative tasks (categorization, routing)

The opportunity was clear: automate the repetitive work so humans could focus on complex problems.

## The Solution Architecture

We built a three-layer automation system, each layer handling progressively more complex scenarios.

### Layer 1: Instant Answers (AI Chatbot)

For the 45% of simple, repetitive questions, we deployed a knowledge-base-powered chatbot. But not just any chatbot—one that understood context and knew its limits.

**Training Data:**
- Product documentation and FAQs
- 50,000 historical ticket resolutions
- Shipping and returns policies
- Common troubleshooting guides

**Key Design Decisions:**

\`\`\`
1. Confidence thresholds: Only answer if confidence > 85%
2. Graceful handoff: Clear path to human agent at any point
3. Transparency: "I'm an AI assistant. Would you like to speak with a human?"
4. Learning loop: Human corrections improve future responses
\`\`\`

**Results after 30 days:**
- 45% of inquiries resolved without human intervention
- Average response time for automated queries: 12 seconds
- User satisfaction with AI responses: 82%

### Layer 2: Smart Triage (AI-Powered Routing)

For tickets that need human attention, AI now categorizes and routes them intelligently.

**Features:**
- **Priority scoring**: Analyzing sentiment, keywords, and customer history
- **Skill-based routing**: Matching tickets to agents with relevant expertise
- **Suggested responses**: Pre-drafted responses for agents to review and send

\`\`\`typescript
interface TriageResult {
  priority: 'urgent' | 'high' | 'normal' | 'low';
  category: string;
  suggestedAgent: string;
  sentiment: number;
  suggestedResponses: string[];
  relevantArticles: Article[];
}

async function triageTicket(ticket: Ticket): Promise<TriageResult> {
  const embedding = await embed(ticket.content);
  
  const [priority, category, sentiment] = await Promise.all([
    classifyPriority(ticket),
    classifyCategory(ticket),
    analyzeSentiment(ticket),
  ]);
  
  const suggestedAgent = await matchAgent(category, priority, sentiment);
  const relevantArticles = await findSimilarResolutions(embedding);
  const suggestedResponses = await generateResponses(ticket, relevantArticles);
  
  return {
    priority,
    category,
    sentiment,
    suggestedAgent,
    suggestedResponses,
    relevantArticles,
  };
}
\`\`\`

**Impact:**
- Routing accuracy improved from 65% to 94%
- Time to first response dropped from 4 hours to 45 minutes
- Agent productivity increased 40% (fewer ticket transfers)

### Layer 3: Agent Augmentation

Even for human-handled tickets, AI provides real-time assistance:

**Real-time Features:**
- Response suggestions as agents type
- Automatic surface relevant knowledge base articles
- Similar past tickets with successful resolutions
- Customer context (purchase history, previous interactions)

**Quality Assurance:**
- Grammar and tone checking before send
- Policy compliance verification
- Automatic tagging and documentation

Agents reported feeling like they had a "copilot" that made their job easier rather than technology threatening to replace them.

## Implementation Journey

Rolling out AI automation isn't just a technical challenge—it's a change management exercise.

### Phase 1: Shadow Mode (Weeks 1-4)

AI ran in parallel without customer visibility. We compared AI recommendations to human decisions to validate accuracy and build confidence.

### Phase 2: Assisted Mode (Weeks 5-8)

AI provided suggestions to agents, who made final decisions. This let us:
- Collect feedback on AI recommendations
- Build agent trust in the system
- Identify edge cases to improve

### Phase 3: Automated Mode (Weeks 9-12)

Gradually increased AI autonomy based on performance metrics. Started with lowest-risk categories and expanded.

## Results After 6 Months

The numbers tell the story:

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Avg resolution time | 18 hours | 5.4 hours | -70% |
| Tickets auto-resolved | 0% | 45% | +45% |
| NPS Score | 28 | 52 | +86% |
| Agent satisfaction | 3.2/5 | 4.4/5 | +37% |
| Cost per ticket | $12.50 | $5.80 | -54% |

## Lessons Learned

### 1. Start with High-Volume, Low-Complexity

Don't try to automate everything at once. Target the tickets that are:
- Asked frequently
- Have clear, consistent answers
- Low risk if AI gets it wrong

### 2. Human Oversight Is Essential

AI makes mistakes. Design systems where humans can:
- Override AI decisions easily
- Provide feedback that improves the model
- Handle edge cases gracefully

### 3. Measure Everything

Set up comprehensive tracking from day one:
- AI accuracy rates by category
- User satisfaction with AI vs human responses
- Agent sentiment about AI tools
- Cost metrics

### 4. Communication Matters

Employees fear AI replacement. Be transparent:
- This is about making jobs easier, not eliminating them
- Agents handling complex problems is more valuable
- Track and celebrate productivity gains

### 5. Continuous Improvement

AI systems need ongoing attention:
- Weekly review of misclassified tickets
- Monthly model retraining with new data
- Quarterly strategy reviews

## Conclusion

AI automation isn't about replacing humans—it's about amplifying their impact. When implemented thoughtfully, it creates a better experience for everyone: customers get faster answers, agents focus on meaningful work, and businesses operate more efficiently.

The key is starting with clear goals, implementing incrementally, and keeping humans in the loop throughout the process.
    `
  },
  {
    slug: "typescript-best-practices-2024",
    title: "TypeScript Best Practices for 2024",
    excerpt: "Modern TypeScript patterns and practices that will make your codebase more maintainable and your team more productive.",
    date: "2024-10-05",
    author: "Marcus Johnson",
    tags: ["TypeScript", "Development", "Best Practices"],
    readTime: "13 min read",
    content: `
## TypeScript Has Evolved

TypeScript in 2024 is more powerful than ever. The type system has grown incredibly sophisticated, and the ecosystem has matured. But with great power comes the temptation to overcomplicate. Here are patterns that leverage TypeScript's full potential while keeping your code readable and maintainable.

## Strict Mode Is Non-Negotiable

If you're not running strict mode, you're not getting TypeScript's full value. Enable all strict flags in tsconfig.json:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitOverride": true,
    "exactOptionalPropertyTypes": true
  }
}
\`\`\`

Yes, enabling these on an existing codebase will surface errors. That's the point—those errors were always there, now TypeScript is showing them to you.

## Type Inference: Let TypeScript Work

Don't annotate what TypeScript can infer:

\`\`\`typescript
// ❌ Redundant annotation
const name: string = "Alice";
const numbers: number[] = [1, 2, 3];

// ✅ Let TypeScript infer
const name = "Alice";
const numbers = [1, 2, 3];

// ✅ Do annotate function parameters and return types
function processUser(user: User): ProcessedUser {
  // ...
}
\`\`\`

The exception: always annotate public API boundaries (exported functions, class methods). This makes intentions clear and catches implementation drift.

## Discriminated Unions Over Optional Properties

Model your domain precisely. Don't use optional properties when you really mean different states:

\`\`\`typescript
// ❌ Imprecise: What combinations are valid?
interface Request {
  status: string;
  data?: unknown;
  error?: Error;
}

// ✅ Precise: Each state is explicit
type Request<T> = 
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

// Usage: TypeScript narrows the type
function handleRequest<T>(request: Request<T>) {
  switch (request.status) {
    case 'success':
      console.log(request.data); // TypeScript knows data exists
      break;
    case 'error':
      console.error(request.error); // TypeScript knows error exists
      break;
  }
}
\`\`\`

## Const Assertions for Literal Types

Lock down your object types with const assertions:

\`\`\`typescript
// Without const: type is { api: string; timeout: number }
const config = {
  api: '/api/v1',
  timeout: 5000
};

// With const: type is { readonly api: '/api/v1'; readonly timeout: 5000 }
const config = {
  api: '/api/v1',
  timeout: 5000
} as const;
\`\`\`

This is especially powerful for configuration objects, route definitions, and anywhere you want literal types instead of widened types.

## Master the Utility Types

TypeScript's built-in utility types are incredibly powerful. Use them:

\`\`\`typescript
interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  createdAt: Date;
}

// Pick specific properties
type UserCredentials = Pick<User, 'email' | 'id'>;

// Omit properties
type PublicUser = Omit<User, 'email'>;

// Make all properties optional
type PartialUser = Partial<User>;

// Make all properties required
type CompleteUser = Required<User>;

// Make all properties readonly
type ImmutableUser = Readonly<User>;

// Extract types from arrays
const roles = ['admin', 'user', 'guest'] as const;
type Role = typeof roles[number]; // 'admin' | 'user' | 'guest'
\`\`\`

## Template Literal Types

Create type-safe strings with template literal types:

\`\`\`typescript
type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type Route = \`/api/\${string}\`;

// Combine for powerful patterns
type Endpoint = \`\${HTTPMethod} \${Route}\`;

const endpoint: Endpoint = 'GET /api/users'; // ✅
const bad: Endpoint = 'PATCH /api/users'; // ❌ Type error

// Even more useful: event names
type EventName = \`\${'user' | 'order'}:\${'created' | 'updated' | 'deleted'}\`;
// Results in: 'user:created' | 'user:updated' | 'user:deleted' | 'order:created' | 'order:updated' | 'order:deleted'
\`\`\`

## Branded Types for Type Safety

Prevent mixing up similar primitive types:

\`\`\`typescript
// Without branding: easy to mix up
function getUser(id: string) { /* ... */ }
function getOrder(id: string) { /* ... */ }

const userId = 'usr_123';
const orderId = 'ord_456';

getUser(orderId); // No error! But this is a bug.

// With branding: type-safe
type UserId = string & { readonly __brand: 'UserId' };
type OrderId = string & { readonly __brand: 'OrderId' };

function createUserId(id: string): UserId {
  return id as UserId;
}

function getUser(id: UserId) { /* ... */ }

const userId = createUserId('usr_123');
getUser(orderId); // ❌ Type error!
\`\`\`

## Exhaustiveness Checking

Ensure you handle all cases in unions:

\`\`\`typescript
type Status = 'pending' | 'approved' | 'rejected';

function handleStatus(status: Status): string {
  switch (status) {
    case 'pending':
      return 'Waiting for review';
    case 'approved':
      return 'Ready to proceed';
    case 'rejected':
      return 'Not approved';
    default:
      // This line will error if we add a new Status and forget to handle it
      const exhaustiveCheck: never = status;
      throw new Error(\`Unhandled status: \${exhaustiveCheck}\`);
  }
}
\`\`\`

## Generic Constraints

Make your generics more useful with constraints:

\`\`\`typescript
// Without constraint: can be anything
function getProperty<T>(obj: T, key: string) {
  return obj[key]; // Error: can't index with string
}

// With constraint: must have the key
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]; // Works and return type is precise
}

const user = { name: 'Alice', age: 30 };
const name = getProperty(user, 'name'); // type is string
const age = getProperty(user, 'age'); // type is number
const bad = getProperty(user, 'invalid'); // ❌ Type error
\`\`\`

## Zod for Runtime Validation

TypeScript types disappear at runtime. Use Zod for validation that generates TypeScript types:

\`\`\`typescript
import { z } from 'zod';

const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().min(1).max(100),
  role: z.enum(['admin', 'user']),
});

// Infer TypeScript type from schema
type User = z.infer<typeof UserSchema>;

// Validate at runtime
function createUser(input: unknown): User {
  return UserSchema.parse(input); // Throws if invalid
}

// Safe parsing
const result = UserSchema.safeParse(input);
if (result.success) {
  console.log(result.data); // Typed as User
} else {
  console.error(result.error);
}
\`\`\`

## Avoid These Anti-Patterns

### Don't Use \`any\`

\`any\` disables type checking. Use \`unknown\` when you don't know the type, then narrow it:

\`\`\`typescript
// ❌ any defeats the purpose of TypeScript
function processData(data: any) {
  return data.foo.bar; // No errors, but could crash
}

// ✅ unknown forces you to check
function processData(data: unknown) {
  if (typeof data === 'object' && data !== null && 'foo' in data) {
    // Now TypeScript knows data has 'foo'
  }
}
\`\`\`

### Don't Overuse Type Assertions

Type assertions (\`as\`) should be rare:

\`\`\`typescript
// ❌ Dangerous: You're telling TypeScript to trust you
const user = response.data as User;

// ✅ Better: Validate at runtime
const user = UserSchema.parse(response.data);
\`\`\`

### Don't Create God Types

Keep types focused and composable:

\`\`\`typescript
// ❌ God type with everything
interface User {
  id: string;
  email: string;
  profile: { /* ... 20 fields ... */ };
  settings: { /* ... 15 fields ... */ };
  permissions: { /* ... 10 fields ... */ };
}

// ✅ Composable types
interface UserProfile { /* ... */ }
interface UserSettings { /* ... */ }
interface UserPermissions { /* ... */ }

interface User {
  id: string;
  email: string;
  profile: UserProfile;
  settings: UserSettings;
  permissions: UserPermissions;
}
\`\`\`

## Conclusion

TypeScript's type system is incredibly expressive. Use it to catch bugs before runtime, document your code through types, and make impossible states unrepresentable.

The goal isn't type gymnastics—it's maintainable code that's easy to understand and hard to misuse. When types feel like they're fighting you, step back and consider if there's a simpler model.

Invest in learning TypeScript deeply. The return on that investment compounds over the life of your codebase.
    `
  },
  {
    slug: "microservices-vs-monolith",
    title: "Microservices vs Monolith: Making the Right Choice in 2025",
    excerpt: "The architecture debate continues. Here's a framework for deciding when microservices make sense—and when a well-designed monolith is the better choice.",
    date: "2024-09-15",
    author: "Sarah Kim",
    tags: ["Architecture", "Microservices", "Best Practices"],
    readTime: "11 min read",
    content: `
## The Great Architecture Debate

"Should we use microservices?" is one of the most common questions we hear from engineering teams. And the answer is almost always: "It depends."

Both monoliths and microservices can scale. Both can be well-architected or poorly architected. The right choice depends on your team, your domain, and your growth trajectory.

## The Monolith Renaissance

Microservices became trendy because companies like Netflix and Amazon use them. But those companies have thousands of engineers and face unique scaling challenges. For most teams, a well-designed monolith is the right starting point.

### When Monoliths Shine

**Small to medium teams (< 50 engineers)**: Coordination overhead of microservices isn't worth it. Everyone can understand the entire system.

**New products finding fit**: You need to iterate quickly. Changing interfaces in a monolith is trivial; in microservices, it's a negotiation.

**Tightly coupled domains**: If your services would constantly call each other, you're paying microservices tax for no benefit.

**Limited DevOps resources**: Microservices require sophisticated infrastructure. If you don't have it, you'll move slower, not faster.

### The Modern Monolith

A monolith doesn't mean spaghetti code. Structure your monolith well:

\`\`\`
src/
├── modules/
│   ├── users/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── repositories/
│   │   └── index.ts
│   ├── orders/
│   └── payments/
├── shared/
│   ├── database/
│   ├── auth/
│   └── utils/
└── main.ts
\`\`\`

Each module has clear boundaries. If you need to extract a microservice later, the seams are already defined.

## When Microservices Make Sense

Microservices aren't bad—they're a tradeoff. Here's when the tradeoff pays off:

### Independent Scaling Requirements

If one part of your system needs 100x the resources of another, separate services let you scale independently. Running 100 instances of your entire monolith because the image processing needs it is wasteful.

### Team Autonomy at Scale

With 100+ engineers, a monolith becomes a coordination nightmare. Microservices let teams:
- Deploy independently
- Choose their own tech stacks
- Move at different speeds
- Own their services end-to-end

### Different Reliability Requirements

Your payment processing needs 99.99% uptime. Your recommendation engine can tolerate occasional failures. Separating them prevents the recommendation engine from taking down payments.

### Regulatory Boundaries

PCI compliance for payment data is easier to audit when it's isolated in its own service with its own access controls and logging.

## The Hidden Costs of Microservices

Before jumping to microservices, understand what you're signing up for:

### Operational Complexity

Each service needs:
- CI/CD pipeline
- Monitoring and alerting
- Log aggregation
- Health checks
- Deployment strategy

Multiply that by 50 services, and operations becomes a full-time job for a team.

### Distributed System Challenges

\`\`\`
Monolith: function call
Microservices: network call + serialization + potential failure + retry logic + timeout handling
\`\`\`

You'll need to handle:
- Network partitions
- Service discovery
- Distributed tracing
- Eventual consistency
- Cascading failures

### Data Management

In a monolith, JOIN queries are trivial. In microservices, each service owns its data. Cross-service queries require:
- API composition
- Data replication
- Eventual consistency
- Saga patterns for distributed transactions

### Testing Complexity

Integration testing across services is hard. You'll need:
- Contract testing
- Consumer-driven contracts
- Staging environments with all services
- Sophisticated test data management

## A Framework for Deciding

Ask these questions:

### 1. Team Size and Structure

**< 20 engineers**: Monolith, almost certainly
**20-50 engineers**: Modular monolith, maybe extract 1-3 core services
**50+ engineers**: Consider microservices for team autonomy

### 2. Domain Complexity

Can you draw clear boundaries between domains? If everything is interrelated, microservices add friction without benefit.

### 3. Scale Requirements

Are different parts of your system scaling differently? Can you solve it with a monolith and background jobs?

### 4. Deployment Frequency

Do different teams need to deploy at different cadences? In a monolith, everyone deploys together.

### 5. Infrastructure Maturity

Do you have:
- Container orchestration (Kubernetes)
- Service mesh or API gateway
- Distributed tracing
- Centralized logging
- Automated deployment pipelines

If not, you'll spend months building infrastructure instead of features.

## The Hybrid Approach

You don't have to choose one or the other. Many successful systems use a hybrid:

\`\`\`
┌─────────────────────────────────────────┐
│           Main Application              │
│         (Modular Monolith)              │
│  ┌───────┐ ┌───────┐ ┌───────┐        │
│  │ Users │ │Orders │ │ Blog  │        │
│  └───────┘ └───────┘ └───────┘        │
└─────────────┬───────────────────────────┘
              │
              │ Events
              ▼
┌─────────────┴───────────────────────────┐
│           Async Workers                  │
│  ┌───────────┐  ┌─────────────────┐    │
│  │Email Svc  │  │Analytics Worker │    │
│  └───────────┘  └─────────────────┘    │
└──────────────────────────────────────────┘
              │
              │
              ▼
┌──────────────────────────────────────────┐
│        Specialized Services              │
│  ┌─────────────┐  ┌──────────────────┐  │
│  │ML/AI Service│  │Payment Processing│  │
│  └─────────────┘  └──────────────────┘  │
└──────────────────────────────────────────┘
\`\`\`

Keep the core in a modular monolith. Extract services when there's a clear, compelling reason—not just because "microservices are better."

## Migration Strategies

If you're moving from monolith to microservices (or vice versa):

### Strangler Fig Pattern

Don't rewrite everything at once. Gradually extract functionality:

1. Identify a boundary in your monolith
2. Build the new service alongside
3. Route traffic to new service
4. Remove old code when confident

### Database Decomposition

This is often the hardest part. Options:

1. **Shared database** (temporary): Services share a database during migration
2. **Database per service**: Each service owns its data, sync via events
3. **CQRS**: Separate read and write models for cross-service queries

## Conclusion

The best architecture is the one your team can build, deploy, and maintain successfully. Don't let hype drive your decisions.

Start with a well-structured monolith. Instrument everything. When you have data showing specific scaling or organizational problems, extract services to solve those specific problems.

Premature optimization applies to architecture too. Build what you need today, design for what you might need tomorrow, and don't over-engineer for problems you'll never have.
    `
  },
  {
    slug: "securing-web-applications",
    title: "Securing Modern Web Applications: A Developer's Checklist",
    excerpt: "Security isn't optional. Learn the essential security practices every web developer should implement, from authentication to API protection.",
    date: "2024-09-01",
    author: "Alex Chen",
    tags: ["Security", "Development", "Best Practices"],
    readTime: "14 min read",
    content: `
## Security Is Everyone's Responsibility

"We'll add security later" is how breaches happen. Security isn't a feature you bolt on—it's a mindset that shapes every decision. This guide covers the essential security practices for modern web applications.

## Authentication Done Right

Authentication is your first line of defense. Get it wrong, and everything else doesn't matter.

### Password Security

**Never store plaintext passwords.** Use bcrypt, scrypt, or Argon2 with appropriate work factors:

\`\`\`typescript
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12; // Increase as hardware gets faster

async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
\`\`\`

**Enforce password policies:**
- Minimum length (12+ characters)
- Check against known breached passwords (Have I Been Pwned API)
- Don't enforce arbitrary complexity rules (they lead to weaker passwords)

### Session Management

\`\`\`typescript
// Secure session configuration
const sessionConfig = {
  name: 'session_id', // Don't use default names
  secret: process.env.SESSION_SECRET, // Long, random secret
  cookie: {
    httpOnly: true,     // Prevent XSS access
    secure: true,       // HTTPS only
    sameSite: 'strict', // Prevent CSRF
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  },
  resave: false,
  saveUninitialized: false,
};
\`\`\`

**Session security checklist:**
- Regenerate session ID after login
- Invalidate sessions on logout
- Implement absolute and idle timeouts
- Store sessions server-side, not just in JWTs

### Multi-Factor Authentication

MFA should be available for all accounts and required for sensitive operations:

\`\`\`typescript
// Time-based OTP verification
import { authenticator } from 'otplib';

function verifyTOTP(token: string, secret: string): boolean {
  return authenticator.verify({ token, secret });
}

// Generate backup codes
function generateBackupCodes(): string[] {
  return Array(10).fill(null).map(() => 
    crypto.randomBytes(4).toString('hex').toUpperCase()
  );
}
\`\`\`

## Input Validation and Sanitization

Never trust user input. Validate everything, everywhere.

### Server-Side Validation

Client-side validation improves UX but provides zero security. Always validate server-side:

\`\`\`typescript
import { z } from 'zod';

const CreateUserSchema = z.object({
  email: z.string().email().max(255),
  name: z.string().min(1).max(100).regex(/^[a-zA-Z\\s]+$/),
  age: z.number().int().min(0).max(150).optional(),
});

app.post('/users', async (req, res) => {
  const result = CreateUserSchema.safeParse(req.body);
  
  if (!result.success) {
    return res.status(400).json({ errors: result.error.flatten() });
  }
  
  // Proceed with validated data
  const user = await createUser(result.data);
});
\`\`\`

### SQL Injection Prevention

Always use parameterized queries:

\`\`\`typescript
// ❌ Vulnerable to SQL injection
const query = \`SELECT * FROM users WHERE email = '\${email}'\`;

// ✅ Safe: Parameterized query
const user = await db.query('SELECT * FROM users WHERE email = $1', [email]);

// ✅ Even better: Use an ORM with built-in protection
const user = await prisma.user.findUnique({ where: { email } });
\`\`\`

### XSS Prevention

Escape output based on context:

\`\`\`typescript
// React escapes by default
function UserProfile({ user }) {
  return <div>{user.bio}</div>; // Safe
}

// Dangerous: Only use when absolutely necessary
function RichContent({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: sanitize(html) }} />;
}
\`\`\`

For server-rendered content, use a sanitization library like DOMPurify:

\`\`\`typescript
import DOMPurify from 'isomorphic-dompurify';

const clean = DOMPurify.sanitize(userInput, {
  ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
  ALLOWED_ATTR: ['href'],
});
\`\`\`

## API Security

APIs are prime targets. Protect them accordingly.

### Rate Limiting

Prevent abuse and brute-force attacks:

\`\`\`typescript
import rateLimit from 'express-rate-limit';

// General API rate limit
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: { error: 'Too many requests' },
});

// Stricter limit for authentication endpoints
const authLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: { error: 'Too many login attempts' },
});

app.use('/api/', apiLimiter);
app.use('/auth/', authLimiter);
\`\`\`

### API Key Management

\`\`\`typescript
// Generate secure API keys
function generateApiKey(): string {
  return \`sk_\${crypto.randomBytes(32).toString('hex')}\`;
}

// Store hashed, not plaintext
async function createApiKey(userId: string) {
  const key = generateApiKey();
  const hash = await bcrypt.hash(key, 10);
  
  await db.apiKeys.create({
    userId,
    hash,
    prefix: key.slice(0, 8), // For identification
    lastUsed: null,
  });
  
  return key; // Only time plaintext is available
}
\`\`\`

### CORS Configuration

Configure CORS properly—don't just allow everything:

\`\`\`typescript
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = ['https://myapp.com', 'https://admin.myapp.com'];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
\`\`\`

## Security Headers

Set security headers on all responses:

\`\`\`typescript
import helmet from 'helmet';

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"], // Minimize inline scripts
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "https://api.myapp.com"],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  },
}));
\`\`\`

Key headers:
- **Content-Security-Policy**: Prevent XSS and data injection
- **Strict-Transport-Security**: Force HTTPS
- **X-Content-Type-Options**: Prevent MIME sniffing
- **X-Frame-Options**: Prevent clickjacking
- **Referrer-Policy**: Control referrer information

## Secrets Management

Never commit secrets to version control.

### Environment Variables

\`\`\`bash
# .env.example (commit this)
DATABASE_URL=
SESSION_SECRET=
STRIPE_SECRET_KEY=

# .env (never commit)
DATABASE_URL=postgres://...
SESSION_SECRET=your-actual-secret
STRIPE_SECRET_KEY=sk_live_...
\`\`\`

### Production Secrets

Use a secrets manager in production:
- AWS Secrets Manager
- HashiCorp Vault
- Doppler
- Environment variables from your platform (Vercel, Railway, etc.)

\`\`\`typescript
// Access secrets from environment
const config = {
  database: process.env.DATABASE_URL!,
  sessionSecret: process.env.SESSION_SECRET!,
  stripeKey: process.env.STRIPE_SECRET_KEY!,
};

// Validate at startup
function validateConfig() {
  const required = ['DATABASE_URL', 'SESSION_SECRET'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(\`Missing required env vars: \${missing.join(', ')}\`);
  }
}
\`\`\`

## Logging and Monitoring

Security logging helps detect and investigate incidents.

### What to Log

- Authentication events (login, logout, failed attempts)
- Authorization failures
- Input validation failures
- API key usage
- Administrative actions
- Sensitive data access

### What NOT to Log

- Passwords (even failed ones)
- Full credit card numbers
- Session tokens
- API keys
- Personal data (unless required for compliance)

\`\`\`typescript
// Safe logging
logger.info('Login attempt', {
  userId: user.id,
  email: maskEmail(user.email), // mask sensitive data
  ip: req.ip,
  userAgent: req.headers['user-agent'],
  success: true,
});

// Set up alerts for suspicious patterns
if (failedLoginAttempts > 5) {
  alertSecurityTeam('Potential brute force attack', { userId, ip });
}
\`\`\`

## Dependency Security

Third-party code is a major attack vector.

### Regular Audits

\`\`\`bash
# Check for known vulnerabilities
npm audit
yarn audit

# Fix automatically where possible
npm audit fix
\`\`\`

### Dependabot / Renovate

Automate dependency updates. Configure to:
- Open PRs for security updates immediately
- Group minor updates to reduce noise
- Run CI on update PRs

### Lock Files

Always commit your lock file (package-lock.json, yarn.lock). This ensures reproducible builds and prevents supply chain attacks via floating dependencies.

## Security Checklist

Use this checklist for every project:

**Authentication:**
- [ ] Passwords hashed with bcrypt/Argon2
- [ ] Session IDs are random and unpredictable
- [ ] Sessions regenerated after login
- [ ] MFA available for sensitive accounts
- [ ] Account lockout after failed attempts

**Data Protection:**
- [ ] All data validated server-side
- [ ] Parameterized queries everywhere
- [ ] Output escaped based on context
- [ ] Sensitive data encrypted at rest
- [ ] HTTPS enforced everywhere

**API Security:**
- [ ] Rate limiting implemented
- [ ] CORS configured restrictively
- [ ] API keys hashed in storage
- [ ] Authentication on all endpoints

**Infrastructure:**
- [ ] Security headers configured
- [ ] Secrets in environment variables
- [ ] Dependencies regularly audited
- [ ] Security logging in place

## Conclusion

Security isn't a destination—it's a continuous process. These practices are the baseline, not the ceiling.

Stay informed about new vulnerabilities. Subscribe to security advisories for your dependencies. Run regular penetration tests. And remember: the best security is defense in depth—multiple layers of protection so that no single failure compromises the system.

Your users trust you with their data. Honor that trust.
    `
  }
];

export const allTags = [...new Set(posts.flatMap(post => post.tags))].sort();
