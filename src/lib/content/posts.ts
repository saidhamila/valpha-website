// Blog Posts - Web Development, Design & Hosting
// SEO-optimized content with 1500+ words each

export const posts = [
  {
    slug: "nextjs-15-complete-guide-2025",
    title: "The Complete Guide to Next.js 15: Everything You Need to Know in 2025",
    excerpt: "Master Next.js 15 with this comprehensive guide covering the App Router, Server Components, streaming, caching strategies, and production-ready best practices for building modern web applications.",
    date: "2025-01-02",
    author: "vAlpha Team",
    tags: ["Next.js", "React", "Web Development"],
    readTime: "12 min read",
    content: `
## Introduction to Next.js 15

Next.js 15 represents a significant leap forward in React-based web development, introducing powerful features that streamline the development process while delivering exceptional performance. Whether you're building a simple marketing website or a complex enterprise application, Next.js 15 provides the tools and patterns you need to succeed.

In this comprehensive guide, we'll explore everything you need to know about Next.js 15, from the fundamentals to advanced optimization techniques. By the end, you'll have a solid understanding of how to leverage Next.js 15 to build fast, scalable, and SEO-friendly web applications.

## What's New in Next.js 15

Next.js 15 builds upon the revolutionary changes introduced in previous versions while adding refinements that make development smoother and applications faster. The App Router, now fully mature, offers a more intuitive way to structure your applications with layouts, loading states, and error boundaries built directly into the routing system.

### Enhanced Server Components

React Server Components are no longer experimental—they're the default. This paradigm shift means components render on the server by default, sending only the necessary HTML and JavaScript to the client. The result is dramatically improved initial page loads and reduced JavaScript bundle sizes.

Server Components excel at data fetching, allowing you to query databases directly within your components without exposing sensitive logic to the client. This simplifies your architecture by eliminating the need for separate API routes in many cases.

### Improved Streaming and Suspense

Streaming allows your application to progressively render content as it becomes available. Instead of waiting for all data to load before showing anything, users see content immediately while slower parts stream in. This creates a more responsive user experience, especially on slower connections.

The integration with React Suspense is now seamless. You can wrap any component in a Suspense boundary with a fallback, and Next.js handles the complexity of streaming that content to the browser.

## The App Router Architecture

The App Router fundamentally changes how you structure Next.js applications. Instead of a flat pages directory, you now have a hierarchical app directory where folders define routes and special files control behavior.

### File Conventions

Understanding the file conventions is crucial for effective Next.js development:

- **page.tsx**: Defines the UI for a route segment
- **layout.tsx**: Wraps pages and child layouts with shared UI
- **loading.tsx**: Creates loading UI with automatic Suspense integration
- **error.tsx**: Provides error boundaries for graceful error handling
- **not-found.tsx**: Customizes 404 pages per route segment

### Layouts and Templates

Layouts persist across navigations and maintain state, making them perfect for navigation bars, sidebars, and other persistent UI elements. They wrap child segments, creating a natural component hierarchy.

\`\`\`typescript
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
\`\`\`

Templates are similar to layouts but create a new instance on each navigation. Use them when you need fresh state or effects on each page visit.

## Data Fetching Strategies

Next.js 15 offers multiple data fetching strategies, each optimized for different use cases. Understanding when to use each is key to building performant applications.

### Server-Side Data Fetching

By default, data fetching in Server Components happens on the server. You can use async/await directly in your components:

\`\`\`typescript
async function BlogPosts() {
  const posts = await fetch('https://api.example.com/posts', {
    next: { revalidate: 3600 } // Cache for 1 hour
  });
  
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
\`\`\`

### Static vs Dynamic Rendering

Next.js automatically determines whether to statically generate or dynamically render each page based on your data fetching patterns. Pages without dynamic data are generated at build time for maximum performance. Pages that use dynamic data like cookies, headers, or search params render on demand.

You can force static generation with:

\`\`\`typescript
export const dynamic = 'force-static';
\`\`\`

Or ensure dynamic rendering with:

\`\`\`typescript
export const dynamic = 'force-dynamic';
\`\`\`

### Caching and Revalidation

Next.js 15 provides fine-grained control over caching. The fetch API is extended with a next option that controls caching behavior:

- **cache: 'force-cache'**: Cache indefinitely (default for GET requests)
- **cache: 'no-store'**: Never cache, always fetch fresh
- **next: { revalidate: n }**: Cache for n seconds, then revalidate

For more complex scenarios, use the revalidateTag or revalidatePath functions to programmatically invalidate cached data.

## Server Actions and Mutations

Server Actions revolutionize how you handle form submissions and data mutations. Instead of creating separate API routes, you define functions that run on the server and can be called directly from your components.

\`\`\`typescript
'use server'

export async function createPost(formData: FormData) {
  const title = formData.get('title');
  const content = formData.get('content');
  
  await db.posts.create({
    data: { title, content }
  });
  
  revalidatePath('/blog');
}
\`\`\`

### Progressive Enhancement

Server Actions work without JavaScript, providing progressive enhancement out of the box. Forms submit normally if JavaScript fails to load, ensuring your application remains functional for all users.

### Optimistic Updates

Combine Server Actions with React's useOptimistic hook for instant feedback:

\`\`\`typescript
const [optimisticPosts, addOptimisticPost] = useOptimistic(
  posts,
  (state, newPost) => [...state, { ...newPost, pending: true }]
);
\`\`\`

## Performance Optimization

Next.js 15 includes numerous performance optimizations out of the box, but understanding them helps you maximize your application's speed.

### Image Optimization

The next/image component automatically optimizes images with lazy loading, responsive sizing, and modern formats like WebP and AVIF:

\`\`\`typescript
import Image from 'next/image';

export function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image description"
      width={1200}
      height={600}
      priority // Load immediately for above-the-fold images
      placeholder="blur"
    />
  );
}
\`\`\`

### Font Optimization

The next/font module eliminates layout shift from font loading and hosts fonts locally for privacy and performance:

\`\`\`typescript
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
\`\`\`

### Script Optimization

The next/script component provides fine-grained control over third-party script loading:

- **beforeInteractive**: Load before any Next.js code
- **afterInteractive**: Load after hydration (default)
- **lazyOnload**: Load during idle time
- **worker**: Load in a web worker (experimental)

## SEO Best Practices

Next.js 15 makes SEO straightforward with the Metadata API. Define metadata in your layout or page files:

\`\`\`typescript
export const metadata = {
  title: 'Your Page Title',
  description: 'Compelling description for search results',
  openGraph: {
    title: 'Title for social sharing',
    description: 'Description for social platforms',
    images: ['/og-image.jpg'],
  },
};
\`\`\`

### Dynamic Metadata

Generate metadata dynamically based on route parameters:

\`\`\`typescript
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  
  return {
    title: post.title,
    description: post.excerpt,
  };
}
\`\`\`

### Structured Data

Add JSON-LD structured data for rich search results:

\`\`\`typescript
export default function BlogPost({ post }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>{/* Post content */}</article>
    </>
  );
}
\`\`\`

## Deployment and Production

Deploying Next.js 15 applications is straightforward with platforms like Vercel, which provide zero-configuration deployments with automatic HTTPS, CDN distribution, and edge functions.

### Environment Variables

Manage configuration with environment variables. Prefix with NEXT_PUBLIC_ for client-side access:

\`\`\`bash
# Server-only (secure)
DATABASE_URL=postgresql://...
API_SECRET=abc123

# Available on client
NEXT_PUBLIC_API_URL=https://api.example.com
\`\`\`

### Monitoring and Analytics

Integrate Web Vitals monitoring to track real-user performance:

\`\`\`typescript
export function reportWebVitals(metric) {
  analytics.track(metric.name, {
    value: metric.value,
    id: metric.id,
  });
}
\`\`\`

## Conclusion

Next.js 15 represents the cutting edge of React web development. Its combination of Server Components, streaming, and the App Router creates a development experience that's both powerful and intuitive. By following the patterns and practices outlined in this guide, you'll be well-equipped to build fast, scalable, and SEO-friendly web applications.

The framework continues to evolve, so stay connected with the Next.js community and documentation for the latest updates and best practices. Happy building!
    `
  },
  {
    slug: "typescript-best-practices-2025",
    title: "TypeScript Best Practices for 2025: Write Safer, Cleaner Code",
    excerpt: "Elevate your TypeScript skills with battle-tested best practices covering strict typing, utility types, error handling, and patterns that make your codebase more maintainable and bug-free.",
    date: "2024-12-28",
    author: "vAlpha Team",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    readTime: "14 min read",
    content: `
## Why TypeScript Matters More Than Ever

TypeScript has evolved from a "nice-to-have" to an industry standard. In 2025, writing JavaScript without TypeScript feels like coding without a safety net. The type system catches bugs before they reach production, improves developer experience with intelligent autocomplete, and serves as living documentation that never goes stale.

This guide covers the TypeScript practices that separate amateur code from production-ready applications. Whether you're new to TypeScript or looking to level up your skills, these patterns will make your code safer, cleaner, and more maintainable.

## Enable Strict Mode from Day One

The single most impactful change you can make is enabling strict mode in your tsconfig.json. It activates a suite of stricter type-checking options:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "exactOptionalPropertyTypes": true
  }
}
\`\`\`

### Understanding Strict Mode Options

**strictNullChecks**: Distinguishes between null, undefined, and other values. This catches the dreaded "cannot read property of undefined" errors at compile time.

**strictFunctionTypes**: Ensures function parameter types are checked correctly, preventing subtle bugs in callback functions.

**noImplicitAny**: Requires explicit type annotations when TypeScript can't infer the type. This prevents accidentally using 'any' and losing type safety.

## Type Inference: Trust But Verify

TypeScript's inference is powerful—use it wisely. Let TypeScript infer types when they're obvious:

\`\`\`typescript
// Good: Let inference work
const count = 42; // inferred as number
const items = ['a', 'b', 'c']; // inferred as string[]
const user = { name: 'Alice', age: 30 }; // inferred correctly

// Unnecessary: Don't over-annotate
const count: number = 42; // Redundant
\`\`\`

But be explicit when inference isn't clear or when documenting public APIs:

\`\`\`typescript
// Good: Explicit for function return types
function fetchUser(id: string): Promise<User> {
  return api.get(\`/users/\${id}\`);
}

// Good: Explicit for exported interfaces
export interface UserConfig {
  theme: 'light' | 'dark';
  notifications: boolean;
  language: string;
}
\`\`\`

## Master Utility Types

TypeScript's built-in utility types solve common typing patterns. Knowing them prevents reinventing the wheel:

### Pick and Omit

Create new types by selecting or excluding properties:

\`\`\`typescript
interface User {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
}

// For API responses (exclude sensitive data)
type PublicUser = Omit<User, 'password'>;

// For update operations (only certain fields)
type UserUpdate = Pick<User, 'email'>;
\`\`\`

### Partial and Required

Make properties optional or required:

\`\`\`typescript
// All properties optional (for updates)
type PartialUser = Partial<User>;

// All properties required (reverse optional)
type CompleteConfig = Required<Config>;
\`\`\`

### Record

Create object types with known keys:

\`\`\`typescript
type Status = 'pending' | 'active' | 'completed';
type StatusMessages = Record<Status, string>;

const messages: StatusMessages = {
  pending: 'Waiting to start',
  active: 'In progress',
  completed: 'Done!',
};
\`\`\`

### Extract and Exclude

Filter union types:

\`\`\`typescript
type AllEvents = 'click' | 'focus' | 'blur' | 'submit';
type MouseEvents = Extract<AllEvents, 'click'>; // 'click'
type NonMouseEvents = Exclude<AllEvents, 'click'>; // 'focus' | 'blur' | 'submit'
\`\`\`

## Discriminated Unions for State Management

Discriminated unions elegantly handle multiple states with type safety:

\`\`\`typescript
type RequestState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

function renderUser(state: RequestState<User>) {
  switch (state.status) {
    case 'idle':
      return <div>Click to load</div>;
    case 'loading':
      return <Spinner />;
    case 'success':
      // TypeScript knows state.data exists here
      return <UserCard user={state.data} />;
    case 'error':
      // TypeScript knows state.error exists here
      return <Error message={state.error.message} />;
  }
}
\`\`\`

TypeScript narrows the type in each case, ensuring you only access properties that exist for that state.

## Safe Error Handling

TypeScript doesn't type catch clause errors as 'unknown' by default (it uses 'any'). Always handle errors safely:

\`\`\`typescript
try {
  await riskyOperation();
} catch (error) {
  // Error is unknown - check its type
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error('Unknown error:', error);
  }
}
\`\`\`

### Create Typed Error Classes

\`\`\`typescript
class ValidationError extends Error {
  constructor(
    message: string,
    public field: string,
    public value: unknown
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

class NotFoundError extends Error {
  constructor(resource: string, id: string) {
    super(\`\${resource} with id \${id} not found\`);
    this.name = 'NotFoundError';
  }
}
\`\`\`

## Type Guards and Narrowing

Type guards help TypeScript understand your runtime type checks:

### Using typeof and instanceof

\`\`\`typescript
function process(value: string | number) {
  if (typeof value === 'string') {
    // TypeScript knows value is string here
    return value.toUpperCase();
  }
  // TypeScript knows value is number here
  return value.toFixed(2);
}
\`\`\`

### Custom Type Guards

\`\`\`typescript
interface Dog {
  type: 'dog';
  bark(): void;
}

interface Cat {
  type: 'cat';
  meow(): void;
}

type Pet = Dog | Cat;

function isDog(pet: Pet): pet is Dog {
  return pet.type === 'dog';
}

function handlePet(pet: Pet) {
  if (isDog(pet)) {
    pet.bark(); // TypeScript knows this is a Dog
  } else {
    pet.meow(); // TypeScript knows this is a Cat
  }
}
\`\`\`

## Generics: Write Reusable Code

Generics enable type-safe code reuse:

\`\`\`typescript
// Generic function
function first<T>(array: T[]): T | undefined {
  return array[0];
}

// Generic interface
interface Repository<T> {
  findById(id: string): Promise<T | null>;
  save(entity: T): Promise<T>;
  delete(id: string): Promise<void>;
}

// Generic class
class LocalStorage<T> {
  constructor(private key: string) {}
  
  get(): T | null {
    const item = localStorage.getItem(this.key);
    return item ? JSON.parse(item) : null;
  }
  
  set(value: T): void {
    localStorage.setItem(this.key, JSON.stringify(value));
  }
}

// Usage with type inference
const userStorage = new LocalStorage<User>('current-user');
\`\`\`

### Constrained Generics

Limit generic types to specific shapes:

\`\`\`typescript
interface HasId {
  id: string;
}

function findById<T extends HasId>(items: T[], id: string): T | undefined {
  return items.find(item => item.id === id);
}
\`\`\`

## Branded Types for Domain Safety

Prevent mixing up similar primitive types with branded types:

\`\`\`typescript
type UserId = string & { readonly brand: unique symbol };
type PostId = string & { readonly brand: unique symbol };

function createUserId(id: string): UserId {
  return id as UserId;
}

function createPostId(id: string): PostId {
  return id as PostId;
}

function getUser(id: UserId) { /* ... */ }
function getPost(id: PostId) { /* ... */ }

const userId = createUserId('user-123');
const postId = createPostId('post-456');

getUser(userId); // OK
getUser(postId); // Error: Argument of type 'PostId' is not assignable to 'UserId'
\`\`\`

## Const Assertions for Literal Types

Use 'as const' to infer literal types instead of wider types:

\`\`\`typescript
// Without const assertion
const config = {
  theme: 'dark',
  version: 1,
}; // { theme: string; version: number }

// With const assertion
const config = {
  theme: 'dark',
  version: 1,
} as const; // { readonly theme: "dark"; readonly version: 1 }

// Arrays become readonly tuples
const colors = ['red', 'green', 'blue'] as const;
// readonly ["red", "green", "blue"]
\`\`\`

## Avoid These Common Mistakes

### Don't Use 'any' as an Escape Hatch

\`\`\`typescript
// Bad
function parseData(data: any) {
  return data.value; // No type safety
}

// Good
function parseData<T extends { value: unknown }>(data: T) {
  return data.value;
}
\`\`\`

### Don't Ignore Compiler Errors

\`\`\`typescript
// Bad: Suppressing errors with @ts-ignore
// @ts-ignore
const result = unsafeOperation();

// Better: Use @ts-expect-error with explanation
// @ts-expect-error - Third-party library typing issue, see issue #123
const result = unsafeOperation();
\`\`\`

### Don't Overuse Type Assertions

\`\`\`typescript
// Bad: Forcing types
const user = {} as User; // Dangerous if User has required properties

// Good: Validate and narrow
const user = validateUser(data); // Returns User or throws
\`\`\`

## Conclusion

TypeScript's power comes from its type system, but that power is only realized through consistent application of best practices. Enable strict mode, leverage utility types, use discriminated unions for state, and let the compiler be your first line of defense against bugs.

The investment in learning these patterns pays dividends in reduced debugging time, improved code quality, and a better developer experience for everyone on your team.
    `
  },
  {
    slug: "modern-css-techniques-2025",
    title: "Modern CSS Techniques Every Developer Should Know in 2025",
    excerpt: "Discover the latest CSS features transforming web design including container queries, cascade layers, the :has() selector, and advanced layout techniques that make responsive design effortless.",
    date: "2024-12-22",
    author: "vAlpha Team",
    tags: ["CSS", "Web Design", "Frontend"],
    readTime: "13 min read",
    content: `
## CSS Has Never Been More Powerful

CSS in 2025 is a far cry from the float-based layouts and browser inconsistencies of the past. Modern CSS provides native solutions for problems that previously required JavaScript or complex workarounds. Container queries, cascade layers, the :has() selector, and other recent additions have transformed CSS into a more capable and intuitive language.

This guide explores the modern CSS techniques that every developer should master to build responsive, maintainable, and visually stunning websites.

## Container Queries: The End of Media Query Workarounds

Container queries are arguably the most significant CSS addition in years. Unlike media queries that respond to viewport size, container queries respond to the size of a parent container. This enables truly component-based responsive design.

### Defining a Container

\`\`\`css
.card-container {
  container-type: inline-size;
  container-name: card;
}
\`\`\`

### Querying the Container

\`\`\`css
@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 1rem;
  }
}

@container card (min-width: 600px) {
  .card {
    grid-template-columns: 300px 1fr;
  }
}
\`\`\`

### Use Cases for Container Queries

Container queries shine when the same component appears in different contexts. A product card might be full-width in a listing but constrained in a sidebar. With container queries, the card adapts to its container automatically.

\`\`\`css
/* Component adapts to any container */
.product-card {
  display: flex;
  flex-direction: column;
}

@container (min-width: 350px) {
  .product-card {
    flex-direction: row;
    align-items: center;
  }
  
  .product-card .image {
    width: 40%;
  }
}
\`\`\`

## Cascade Layers: Taming Specificity Wars

Cascade layers give you explicit control over the cascade, ending specificity wars in complex projects.

### Defining Layer Order

\`\`\`css
@layer reset, base, components, utilities;

@layer reset {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}

@layer base {
  body {
    font-family: system-ui, sans-serif;
    line-height: 1.5;
  }
}

@layer components {
  .button {
    padding: 0.75rem 1.5rem;
    background: var(--primary);
    border-radius: 0.5rem;
  }
}

@layer utilities {
  .mt-4 { margin-top: 1rem; }
  .hidden { display: none; }
}
\`\`\`

Later layers always win over earlier layers, regardless of specificity. This means a simple class in your utilities layer beats a complex selector in your components layer.

### Integrating Third-Party Styles

\`\`\`css
@layer vendor, custom;

@import url('third-party.css') layer(vendor);

@layer custom {
  /* Your overrides always win */
  .third-party-widget {
    color: var(--text);
  }
}
\`\`\`

## The :has() Selector: CSS Gets Conditional Logic

The :has() selector is often called the "parent selector" because it selects elements based on their descendants. But it's much more powerful than that.

### Basic Parent Selection

\`\`\`css
/* Style article differently if it has an image */
article:has(img) {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

article:not(:has(img)) {
  max-width: 65ch;
}
\`\`\`

### Form Validation Styling

\`\`\`css
/* Style label when input is invalid */
label:has(+ input:invalid) {
  color: var(--error);
}

/* Style form when any field is invalid */
form:has(:invalid) .submit-button {
  opacity: 0.5;
  pointer-events: none;
}
\`\`\`

### Complex Conditional Styling

\`\`\`css
/* Change layout when sidebar exists */
.content:has(+ .sidebar) {
  max-width: 70%;
}

/* Style navigation based on mega-menu state */
nav:has(.mega-menu:hover) {
  background: var(--bg-elevated);
}
\`\`\`

## CSS Nesting: Native Sass-Like Syntax

CSS nesting is now natively supported, reducing the need for preprocessors:

\`\`\`css
.card {
  padding: 1rem;
  border-radius: 0.5rem;
  
  & .title {
    font-size: 1.25rem;
    font-weight: 600;
  }
  
  & .content {
    margin-top: 0.5rem;
    color: var(--text-muted);
  }
  
  &:hover {
    box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
  }
  
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
}
\`\`\`

## Modern Color Functions

CSS now includes powerful color manipulation functions:

### oklch() for Perceptually Uniform Colors

\`\`\`css
:root {
  --primary: oklch(60% 0.15 250);
  --primary-hover: oklch(55% 0.15 250);
  --primary-light: oklch(90% 0.05 250);
}
\`\`\`

OKLCH provides perceptually uniform lightness, meaning colors at the same lightness value appear equally bright to human eyes.

### color-mix() for Dynamic Color Blending

\`\`\`css
.button {
  background: var(--primary);
}

.button:hover {
  background: color-mix(in oklch, var(--primary), black 15%);
}

.button:active {
  background: color-mix(in oklch, var(--primary), black 25%);
}
\`\`\`

### Relative Color Syntax

\`\`\`css
.card {
  --base-color: oklch(60% 0.15 250);
  background: oklch(from var(--base-color) calc(l + 30%) c h);
  border-color: oklch(from var(--base-color) calc(l - 10%) c h);
}
\`\`\`

## Scroll-Driven Animations

Create scroll-based animations without JavaScript:

\`\`\`css
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.section {
  animation: fade-in linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 100%;
}
\`\`\`

### Progress Indicators

\`\`\`css
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--primary);
  transform-origin: left;
  animation: grow-progress linear;
  animation-timeline: scroll();
}

@keyframes grow-progress {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
\`\`\`

## View Transitions API

Create smooth page transitions with the View Transitions API:

\`\`\`css
/* Define which elements should transition */
.page-title {
  view-transition-name: title;
}

.hero-image {
  view-transition-name: hero;
}

/* Customize the transition */
::view-transition-old(title),
::view-transition-new(title) {
  animation-duration: 0.4s;
}

::view-transition-old(hero) {
  animation: slide-out 0.3s ease-out;
}

::view-transition-new(hero) {
  animation: slide-in 0.3s ease-out;
}
\`\`\`

## Modern Layout Techniques

### Subgrid for Aligned Nested Layouts

\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
}
\`\`\`

Subgrid ensures all cards align their internal elements even when content varies.

### Logical Properties for Internationalization

\`\`\`css
.card {
  padding-inline: 1rem;
  padding-block: 0.75rem;
  margin-inline-start: auto;
  border-inline-end: 1px solid var(--border);
}
\`\`\`

Logical properties automatically flip for right-to-left languages.

## Performance Considerations

### content-visibility for Large Pages

\`\`\`css
.below-fold-section {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px;
}
\`\`\`

This skips rendering off-screen content, dramatically improving initial load performance.

### will-change (Use Sparingly)

\`\`\`css
.animated-element {
  will-change: transform;
}

/* Remove after animation completes */
.animated-element.done {
  will-change: auto;
}
\`\`\`

## Conclusion

Modern CSS provides powerful tools for building responsive, accessible, and performant websites. Container queries enable true component-based design. Cascade layers bring order to specificity. The :has() selector adds conditional logic. And native nesting reduces the need for preprocessors.

Embrace these features in your projects. They're well-supported in modern browsers and make CSS more intuitive and capable than ever before.
    `
  },
  {
    slug: "web-accessibility-complete-guide",
    title: "Building Accessible Web Applications: The Complete WCAG Guide",
    excerpt: "Learn how to create web applications that work for everyone. This comprehensive guide covers WCAG guidelines, ARIA patterns, keyboard navigation, screen reader optimization, and automated testing.",
    date: "2024-12-18",
    author: "vAlpha Team",
    tags: ["Accessibility", "WCAG", "Best Practices"],
    readTime: "15 min read",
    content: `
## Why Accessibility Matters

Web accessibility isn't just a legal requirement—it's a moral imperative and a business advantage. Over one billion people worldwide live with disabilities. When you build accessible websites, you reach more users, improve SEO, and create better experiences for everyone.

Accessible design benefits all users. Captions help viewers in noisy environments. Keyboard navigation helps power users work faster. Clear contrast helps everyone read in bright sunlight. Good accessibility is simply good design.

This guide covers practical techniques for building WCAG 2.1 AA compliant applications.

## Understanding WCAG Principles

WCAG is organized around four principles, remembered by the acronym POUR:

### Perceivable

Information must be presentable in ways users can perceive. This includes:

- Text alternatives for images
- Captions for videos
- Sufficient color contrast
- Resizable text without loss of content

### Operable

Interface components must be operable by all users:

- Keyboard accessible
- Enough time to read and use content
- No content that causes seizures
- Navigable with clear wayfinding

### Understandable

Information and interface operation must be understandable:

- Readable and predictable
- Input assistance for forms
- Consistent navigation

### Robust

Content must be robust enough for various assistive technologies:

- Valid, semantic HTML
- Compatible with current and future tools

## Semantic HTML: The Foundation

Semantic HTML is 80% of accessibility. Use the right elements for the right purpose:

\`\`\`html
<!-- Bad: Divs for everything -->
<div class="header">
  <div class="nav">
    <div class="link">Home</div>
  </div>
</div>

<!-- Good: Semantic elements -->
<header>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>
\`\`\`

### Document Structure

\`\`\`html
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  
  <header>
    <nav aria-label="Main">
      <!-- Primary navigation -->
    </nav>
  </header>
  
  <main id="main-content">
    <article>
      <h1>Page Title</h1>
      <section aria-labelledby="section-heading">
        <h2 id="section-heading">Section Title</h2>
        <!-- Content -->
      </section>
    </article>
  </main>
  
  <aside aria-label="Related content">
    <!-- Sidebar -->
  </aside>
  
  <footer>
    <!-- Footer content -->
  </footer>
</body>
\`\`\`

### Heading Hierarchy

Headings create a document outline. Never skip levels:

\`\`\`html
<!-- Correct hierarchy -->
<h1>Page Title</h1>
  <h2>Main Section</h2>
    <h3>Subsection</h3>
    <h3>Another Subsection</h3>
  <h2>Another Main Section</h2>
\`\`\`

## Images and Alt Text

Every image needs an alt attribute. The content depends on context:

### Informative Images

\`\`\`html
<img 
  src="chart.png" 
  alt="Sales increased 45% from January to December 2024, 
       rising from $2M to $2.9M"
>
\`\`\`

### Decorative Images

\`\`\`html
<img src="decorative-swirl.png" alt="" role="presentation">
\`\`\`

### Functional Images (Links/Buttons)

\`\`\`html
<a href="/search">
  <img src="search-icon.svg" alt="Search">
</a>
\`\`\`

### Complex Images (Charts, Diagrams)

\`\`\`html
<figure>
  <img 
    src="complex-chart.png" 
    alt="Quarterly revenue comparison chart"
    aria-describedby="chart-description"
  >
  <figcaption id="chart-description">
    Detailed description of the chart data...
  </figcaption>
</figure>
\`\`\`

## Keyboard Accessibility

All interactive elements must be keyboard accessible:

### Focus Management

\`\`\`css
/* Never remove focus outlines without replacement */
:focus {
  outline: 2px solid var(--focus-color);
  outline-offset: 2px;
}

/* Enhanced focus for modern browsers */
:focus-visible {
  outline: 2px solid var(--focus-color);
  outline-offset: 2px;
}

/* Remove outline only for mouse users */
:focus:not(:focus-visible) {
  outline: none;
}
\`\`\`

### Tab Order

\`\`\`html
<!-- Natural tab order follows DOM order -->
<button>First</button>
<button>Second</button>
<button>Third</button>

<!-- Avoid positive tabindex - it breaks expectations -->
<button tabindex="3">Bad practice</button>
\`\`\`

### Custom Keyboard Interactions

\`\`\`javascript
// Dropdown menu keyboard navigation
function handleKeyDown(event) {
  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();
      focusNextItem();
      break;
    case 'ArrowUp':
      event.preventDefault();
      focusPreviousItem();
      break;
    case 'Escape':
      closeMenu();
      focusTrigger();
      break;
    case 'Home':
      focusFirstItem();
      break;
    case 'End':
      focusLastItem();
      break;
  }
}
\`\`\`

## ARIA: When HTML Isn't Enough

ARIA (Accessible Rich Internet Applications) supplements HTML semantics. Use it when native HTML elements can't convey the intended purpose.

### First Rule of ARIA

Don't use ARIA if native HTML works:

\`\`\`html
<!-- Bad: ARIA for something HTML handles -->
<div role="button" tabindex="0" aria-pressed="false">Toggle</div>

<!-- Good: Native HTML -->
<button aria-pressed="false">Toggle</button>
\`\`\`

### Common ARIA Patterns

#### Live Regions for Dynamic Content

\`\`\`html
<!-- Announce important updates -->
<div role="status" aria-live="polite">
  Item added to cart
</div>

<!-- Urgent announcements interrupt -->
<div role="alert" aria-live="assertive">
  Error: Please correct the form
</div>
\`\`\`

#### Modal Dialogs

\`\`\`html
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="dialog-title"
  aria-describedby="dialog-description"
>
  <h2 id="dialog-title">Confirm Deletion</h2>
  <p id="dialog-description">
    Are you sure you want to delete this item?
  </p>
  <button>Cancel</button>
  <button>Confirm</button>
</div>
\`\`\`

#### Tabs

\`\`\`html
<div class="tabs">
  <div role="tablist" aria-label="Content sections">
    <button 
      role="tab" 
      aria-selected="true" 
      aria-controls="panel-1"
      id="tab-1"
    >
      Overview
    </button>
    <button 
      role="tab" 
      aria-selected="false" 
      aria-controls="panel-2"
      id="tab-2"
    >
      Details
    </button>
  </div>
  
  <div 
    role="tabpanel" 
    id="panel-1" 
    aria-labelledby="tab-1"
  >
    <!-- Panel content -->
  </div>
</div>
\`\`\`

## Forms and Error Handling

Accessible forms are crucial for usability:

### Labels and Instructions

\`\`\`html
<form>
  <div class="field">
    <label for="email">Email Address</label>
    <input 
      type="email" 
      id="email" 
      name="email"
      aria-describedby="email-hint"
      required
    >
    <p id="email-hint" class="hint">
      We'll never share your email
    </p>
  </div>
</form>
\`\`\`

### Error Messages

\`\`\`html
<div class="field">
  <label for="password">Password</label>
  <input 
    type="password" 
    id="password"
    aria-invalid="true"
    aria-describedby="password-error"
  >
  <p id="password-error" class="error" role="alert">
    Password must be at least 8 characters
  </p>
</div>
\`\`\`

### Form Validation Pattern

\`\`\`javascript
function validateForm(form) {
  const errors = [];
  
  // Collect all errors
  inputs.forEach(input => {
    if (!input.validity.valid) {
      errors.push({
        field: input.name,
        message: getErrorMessage(input)
      });
    }
  });
  
  if (errors.length > 0) {
    // Announce error summary
    const summary = document.getElementById('error-summary');
    summary.innerHTML = \`
      <h2>Please correct \${errors.length} errors</h2>
      <ul>
        \${errors.map(e => \`<li><a href="#\${e.field}">\${e.message}</a></li>\`).join('')}
      </ul>
    \`;
    summary.focus();
    return false;
  }
  
  return true;
}
\`\`\`

## Color and Contrast

### Minimum Contrast Ratios

- Normal text: 4.5:1
- Large text (18pt or 14pt bold): 3:1
- UI components and graphics: 3:1

\`\`\`css
/* Test contrast ratios */
:root {
  --text-primary: #1a1a1a; /* High contrast on white */
  --text-secondary: #525252; /* Still meets 4.5:1 on white */
  --text-on-primary: #ffffff; /* For dark backgrounds */
}
\`\`\`

### Don't Rely on Color Alone

\`\`\`html
<!-- Bad: Only color indicates error -->
<input class="error-border">

<!-- Good: Color plus icon and text -->
<input class="error-border" aria-invalid="true">
<span class="error-icon" aria-hidden="true">!</span>
<span class="error-message">Invalid email format</span>
\`\`\`

## Testing Accessibility

### Automated Testing

\`\`\`javascript
// Using axe-core with Playwright
import AxeBuilder from '@axe-core/playwright';

test('homepage has no accessibility violations', async ({ page }) => {
  await page.goto('/');
  
  const results = await new AxeBuilder({ page }).analyze();
  
  expect(results.violations).toEqual([]);
});
\`\`\`

### Manual Testing Checklist

1. Navigate with keyboard only (Tab, Enter, Space, Arrows)
2. Test with screen reader (NVDA, VoiceOver, JAWS)
3. Zoom to 200% and verify layout
4. Check contrast with browser extensions
5. Disable CSS and check content order
6. Test with reduced motion preference

## Conclusion

Accessibility isn't a feature—it's a fundamental aspect of quality web development. By following WCAG guidelines, using semantic HTML, implementing proper ARIA when needed, and testing regularly, you create experiences that work for everyone.

Start with semantic HTML, add keyboard support, ensure color contrast, and test with real assistive technologies. Your users—all of them—will thank you.
    `
  },
  {
    slug: "react-server-components-guide",
    title: "React Server Components Explained: When, Why, and How to Use Them",
    excerpt: "Understand React Server Components from the ground up. Learn when to use server vs client components, data fetching patterns, streaming, and best practices for building hybrid applications.",
    date: "2024-12-14",
    author: "vAlpha Team",
    tags: ["React", "Next.js", "Server Components"],
    readTime: "14 min read",
    content: `
## The Evolution of React Rendering

React Server Components represent the biggest shift in React architecture since hooks. They fundamentally change how we think about component rendering, data fetching, and the balance between server and client.

For years, React applications ran primarily in the browser. The server sent a JavaScript bundle, and the client rendered everything. This approach had drawbacks: large bundle sizes, slow initial loads, and the complexity of managing API layers between frontend and backend.

Server Components solve these problems by rendering components on the server and sending HTML to the client—with zero JavaScript for those components. The result is faster initial loads, smaller bundles, and simpler data fetching.

## Understanding the Mental Model

Think of Server Components as React components that run exclusively on the server. They can:

- Access databases directly
- Read from the file system
- Use server-only APIs
- Keep secrets secure (API keys never reach the client)

Client Components are the React you already know. They run in the browser and handle:

- Interactivity (clicks, typing, gestures)
- State management (useState, useReducer)
- Browser APIs (localStorage, geolocation)
- Effects (useEffect)

## Server Components by Default

In Next.js 13+ with the App Router, all components are Server Components by default. This is a critical mental shift:

\`\`\`typescript
// This is a Server Component by default
async function ProductPage({ params }: { params: { id: string } }) {
  const product = await db.products.findUnique({
    where: { id: params.id }
  });
  
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <AddToCartButton productId={product.id} />
    </div>
  );
}
\`\`\`

Notice how we query the database directly in the component. No API route needed. No fetch calls. No loading states to manage manually.

## When to Use Client Components

Add the "use client" directive when you need interactivity:

\`\`\`typescript
"use client"

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
\`\`\`

### Client Component Triggers

Use Client Components when you need:

- **State**: useState, useReducer
- **Effects**: useEffect, useLayoutEffect
- **Event handlers**: onClick, onChange, onSubmit
- **Browser APIs**: localStorage, navigator, window
- **React hooks that use state**: useContext, useSyncExternalStore
- **Class components**: Legacy components with lifecycle methods

## The Boundary Pattern

The key to effective Server Component architecture is understanding boundaries. When you add "use client" to a component, everything it imports becomes part of the client bundle:

\`\`\`typescript
// This file and everything it imports ships to client
"use client"

import { HeavyLibrary } from 'heavy-library'; // Bundled!
import { formatDate } from '@/utils/date'; // Bundled!
import { Card } from '@/components/Card'; // Bundled!

export function InteractiveFeature() {
  // ...
}
\`\`\`

### Push Client Boundaries Down

Structure your application so client boundaries are as low as possible in the component tree:

\`\`\`typescript
// ❌ Bad: Entire page is client
"use client"

export function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  
  return (
    <div>
      <Header /> {/* Could be Server Component */}
      <ProductDetails /> {/* Could be Server Component */}
      <QuantitySelector 
        value={quantity} 
        onChange={setQuantity} 
      />
      <Footer /> {/* Could be Server Component */}
    </div>
  );
}

// ✅ Good: Only interactive part is client
// page.tsx (Server Component)
export default async function ProductPage() {
  const product = await getProduct();
  
  return (
    <div>
      <Header />
      <ProductDetails product={product} />
      <QuantitySelector productId={product.id} /> {/* Client */}
      <Footer />
    </div>
  );
}

// QuantitySelector.tsx
"use client"

export function QuantitySelector({ productId }) {
  const [quantity, setQuantity] = useState(1);
  // Only this component ships JavaScript
}
\`\`\`

## Passing Server Data to Client Components

Server Components can fetch data and pass it to Client Components as props:

\`\`\`typescript
// Server Component
async function ProductPage({ id }) {
  const product = await getProduct(id);
  
  return (
    <div>
      <h1>{product.name}</h1>
      {/* Pass server data to client component */}
      <AddToCart 
        productId={product.id}
        availableQuantity={product.stock}
        price={product.price}
      />
    </div>
  );
}

// Client Component
"use client"

function AddToCart({ productId, availableQuantity, price }) {
  const [quantity, setQuantity] = useState(1);
  
  return (
    <form action={addToCart}>
      <input type="hidden" name="productId" value={productId} />
      <select 
        value={quantity} 
        onChange={e => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: availableQuantity }, (_, i) => (
          <option key={i + 1} value={i + 1}>{i + 1}</option>
        ))}
      </select>
      <button type="submit">
        Add to Cart - \${(price * quantity).toFixed(2)}
      </button>
    </form>
  );
}
\`\`\`

## Composition: Children Pattern

Pass Server Components as children to Client Components:

\`\`\`typescript
// Client Component that accepts children
"use client"

function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div className="carousel">
      <div className="slides">
        {children}
      </div>
      <button onClick={() => setActiveIndex(i => i - 1)}>Prev</button>
      <button onClick={() => setActiveIndex(i => i + 1)}>Next</button>
    </div>
  );
}

// Server Component page using the carousel
async function Gallery() {
  const images = await getImages();
  
  return (
    <Carousel>
      {/* These Server Components render on server */}
      {images.map(img => (
        <ServerRenderedImage key={img.id} image={img} />
      ))}
    </Carousel>
  );
}
\`\`\`

## Data Fetching Patterns

### Direct Database Access

\`\`\`typescript
async function Dashboard() {
  const [users, orders, revenue] = await Promise.all([
    db.users.count(),
    db.orders.findMany({ take: 10 }),
    db.orders.aggregate({ _sum: { total: true } })
  ]);
  
  return (
    <div>
      <StatCard title="Users" value={users} />
      <StatCard title="Revenue" value={revenue._sum.total} />
      <RecentOrders orders={orders} />
    </div>
  );
}
\`\`\`

### Parallel Data Fetching

\`\`\`typescript
async function ProductPage({ id }) {
  // Start all fetches in parallel
  const productPromise = getProduct(id);
  const reviewsPromise = getReviews(id);
  const relatedPromise = getRelatedProducts(id);
  
  const product = await productPromise;
  
  return (
    <div>
      <ProductDetails product={product} />
      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews promise={reviewsPromise} />
      </Suspense>
      <Suspense fallback={<RelatedSkeleton />}>
        <RelatedProducts promise={relatedPromise} />
      </Suspense>
    </div>
  );
}
\`\`\`

## Streaming with Suspense

Suspense boundaries enable streaming—sending HTML progressively as data becomes available:

\`\`\`typescript
export default async function Page() {
  return (
    <div>
      {/* Loads instantly */}
      <Header />
      
      {/* Streams in when ready */}
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      
      {/* Independent streaming */}
      <Suspense fallback={<ProductsSkeleton />}>
        <FeaturedProducts />
      </Suspense>
      
      {/* Loads instantly */}
      <Footer />
    </div>
  );
}
\`\`\`

Users see the header and footer immediately while content streams in progressively.

## Server Actions for Mutations

Server Actions handle form submissions and mutations:

\`\`\`typescript
// actions.ts
"use server"

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  
  await db.posts.create({
    data: { title, content }
  });
  
  revalidatePath("/posts");
  redirect("/posts");
}

// page.tsx (Server Component)
import { createPost } from "./actions";

export default function NewPost() {
  return (
    <form action={createPost}>
      <input name="title" required />
      <textarea name="content" required />
      <button type="submit">Publish</button>
    </form>
  );
}
\`\`\`

## Common Patterns and Best Practices

### Fetching in Parallel

\`\`\`typescript
// ❌ Sequential (slow)
const user = await getUser();
const posts = await getPosts(user.id);
const comments = await getComments(posts);

// ✅ Parallel (fast)
const [user, posts] = await Promise.all([
  getUser(),
  getPosts()
]);
\`\`\`

### Avoid Waterfalls

\`\`\`typescript
// ❌ Waterfall: Child waits for parent
async function Parent() {
  const data = await fetchData(); // 1s
  return <Child userId={data.id} />;
}

async function Child({ userId }) {
  const more = await fetchMore(userId); // 1s
  // Total: 2s
}

// ✅ Parallel with Suspense
async function Parent() {
  return (
    <Suspense>
      <ChildWithOwnData />
    </Suspense>
  );
}

async function ChildWithOwnData() {
  const data = await fetchAll();
  // Total: 1s (parallel)
}
\`\`\`

### Reusable Data Functions

\`\`\`typescript
// lib/data.ts
import { cache } from "react";

export const getUser = cache(async (id: string) => {
  const user = await db.users.findUnique({ where: { id } });
  return user;
});

// Multiple components can call getUser(id)
// React deduplicates the requests automatically
\`\`\`

## Conclusion

React Server Components represent a paradigm shift in how we build React applications. By rendering on the server by default, they enable faster initial loads, smaller bundles, and simpler data fetching patterns.

The key principles to remember:

1. Components are Server Components by default
2. Use "use client" only when you need interactivity
3. Push client boundaries as low as possible
4. Pass data from server to client via props
5. Use Suspense for streaming and progressive loading
6. Use Server Actions for mutations

Master these patterns, and you'll build faster, more maintainable React applications.
    `
  },
  {
    slug: "api-design-patterns-rest-graphql-trpc",
    title: "API Design Patterns: Choosing Between REST, GraphQL, and tRPC",
    excerpt: "Compare the leading API paradigms and learn when to use each. This comprehensive guide covers REST conventions, GraphQL schemas, tRPC type safety, and practical decision frameworks.",
    date: "2024-12-10",
    author: "vAlpha Team",
    tags: ["API", "REST", "GraphQL", "Backend"],
    readTime: "13 min read",
    content: `
## The API Landscape in 2025

APIs are the backbone of modern applications. They connect frontends to backends, services to services, and organizations to partners. Choosing the right API paradigm impacts development speed, performance, and maintainability for years to come.

Three approaches dominate the landscape: REST, GraphQL, and tRPC. Each has strengths, weaknesses, and ideal use cases. This guide helps you make informed decisions based on your specific requirements.

## REST: The Time-Tested Standard

REST (Representational State Transfer) has been the dominant API style for over two decades. Its resource-based model maps naturally to HTTP, making it intuitive for developers familiar with web fundamentals.

### Core REST Principles

REST APIs are built around resources—nouns that represent entities in your system. HTTP methods provide the verbs:

- GET: Retrieve resources
- POST: Create new resources
- PUT: Replace resources entirely
- PATCH: Update resource fields
- DELETE: Remove resources

A well-designed REST API follows predictable patterns:

\`\`\`
GET    /users           → List all users
GET    /users/:id       → Get specific user
POST   /users           → Create user
PUT    /users/:id       → Replace user
PATCH  /users/:id       → Update user fields
DELETE /users/:id       → Delete user
GET    /users/:id/posts → Get user's posts
\`\`\`

### REST Best Practices

**Use meaningful status codes.** Don't return 200 for everything. Use 201 for created resources, 204 for successful deletions, 400 for client errors, 401 for authentication issues, 403 for authorization failures, and 404 for missing resources.

**Version your API.** Changes are inevitable. Include version in the URL (/api/v1/) or headers to allow graceful deprecation.

**Support filtering, sorting, and pagination.** Real-world applications need these capabilities from day one.

### When to Choose REST

REST excels when you have clear resource hierarchies and simple data requirements. It's the right choice when your team values simplicity, when you need maximum caching capabilities, when you're building public APIs for external consumption, or when you prefer established patterns and extensive tooling.

## GraphQL: Flexible Data Fetching

GraphQL emerged from Facebook to solve the problem of over-fetching and under-fetching data. Instead of multiple endpoints returning fixed data shapes, GraphQL provides a single endpoint where clients specify exactly what they need.

### The GraphQL Schema

GraphQL starts with a schema defining your data types and operations:

\`\`\`graphql
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
  followers: [User!]!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
  comments: [Comment!]!
}

type Query {
  user(id: ID!): User
  users(first: Int, after: String): UserConnection!
  post(id: ID!): Post
}

type Mutation {
  createPost(input: CreatePostInput!): Post!
  updateUser(id: ID!, input: UpdateUserInput!): User!
}
\`\`\`

### Client-Specified Queries

Clients request exactly the data they need:

\`\`\`graphql
query GetUserWithPosts {
  user(id: "123") {
    name
    email
    posts {
      title
      comments {
        text
      }
    }
  }
}
\`\`\`

This single request replaces what might be three REST calls: get user, get user's posts, get comments for each post.

### GraphQL Considerations

**N+1 queries.** Without proper optimization (DataLoader), GraphQL can generate excessive database queries. Plan for this from the start.

**Caching complexity.** HTTP caching doesn't work naturally with POST requests to a single endpoint. You need application-level caching strategies.

**Security.** Clients can construct arbitrarily complex queries. Implement query depth limiting, complexity analysis, and rate limiting by query cost.

### When to Choose GraphQL

GraphQL shines when clients have diverse data needs. It's ideal when mobile and web clients need different data shapes, when you want to reduce network round trips, when your data is highly interconnected, or when frontend teams need autonomy from backend changes.

## tRPC: End-to-End Type Safety

tRPC is the newest contender, offering end-to-end type safety for TypeScript applications. With tRPC, your API types are derived from your server code and automatically available to your client—no code generation required.

### Defining Procedures

\`\`\`typescript
import { router, publicProcedure } from './trpc';
import { z } from 'zod';

export const appRouter = router({
  users: router({
    list: publicProcedure
      .query(async () => {
        return db.users.findMany();
      }),
    
    byId: publicProcedure
      .input(z.string())
      .query(async ({ input }) => {
        return db.users.findUnique({ where: { id: input } });
      }),
    
    create: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
      }))
      .mutation(async ({ input }) => {
        return db.users.create({ data: input });
      }),
  }),
});

export type AppRouter = typeof appRouter;
\`\`\`

### Type-Safe Client Calls

\`\`\`typescript
import { trpc } from './utils/trpc';

function UserProfile({ id }: { id: string }) {
  // Fully typed - TypeScript knows the response shape
  const { data: user } = trpc.users.byId.useQuery(id);
  
  // TypeScript errors if you pass wrong input
  const createUser = trpc.users.create.useMutation();
  
  const handleSubmit = (data: { name: string; email: string }) => {
    createUser.mutate(data); // Type-checked!
  };
}
\`\`\`

### tRPC Benefits

**Zero runtime overhead.** Types exist only at build time. The runtime is just function calls.

**Refactoring confidence.** Change your API, and TypeScript immediately shows affected clients.

**Integrated with React Query.** tRPC builds on TanStack Query, giving you caching, background refetching, and optimistic updates for free.

### When to Choose tRPC

tRPC is perfect for full-stack TypeScript applications. Choose it when frontend and backend share a repository, when you want maximum type safety, when your team is comfortable with TypeScript, or when you prioritize developer experience.

## Decision Framework

Here's a practical framework for choosing your API paradigm:

**Choose REST when:** You're building a public API, need maximum HTTP caching, have simple data requirements, or want the broadest ecosystem support.

**Choose GraphQL when:** You have diverse client needs, complex data relationships, want to minimize round trips, or need a self-documenting API for multiple teams.

**Choose tRPC when:** You control both client and server, use TypeScript throughout, want end-to-end type safety, and value development speed.

## Hybrid Approaches

You don't have to pick just one. Many applications benefit from hybrid approaches. Use REST for public APIs, GraphQL for internal data-heavy interfaces, and tRPC for full-stack features in a mono-repo.

## Conclusion

The best API style depends on your specific context—team expertise, client diversity, data complexity, and performance requirements. REST remains the safe default for most scenarios. GraphQL unlocks powerful flexibility for complex data needs. tRPC maximizes productivity for TypeScript shops.

Whatever you choose, focus on consistent conventions, comprehensive documentation, and a great developer experience.
    `
  },
  {
    slug: "modern-authentication-strategies-web-apps",
    title: "Modern Authentication Strategies for Web Applications in 2025",
    excerpt: "Implement secure authentication with this guide covering OAuth 2.0, OpenID Connect, JWTs, session management, passwordless auth, and security best practices for protecting your users.",
    date: "2024-12-06",
    author: "vAlpha Team",
    tags: ["Authentication", "Security", "Web Development"],
    readTime: "14 min read",
    content: `
## Authentication in the Modern Era

Authentication—verifying who users are—is fundamental to web security. Yet it remains one of the most complex aspects of application development. Get it wrong, and you expose user data to attackers. Get it right, and users trust your platform implicitly.

This guide covers modern authentication strategies, from traditional sessions to passwordless flows, with practical implementation guidance.

## Understanding Authentication vs Authorization

These terms are often confused but represent distinct concepts:

**Authentication** answers "Who are you?" It verifies identity through credentials—passwords, biometrics, security keys, or identity provider tokens.

**Authorization** answers "What can you do?" It determines permissions based on verified identity—can this user edit this document, access this API, or view this dashboard?

Authentication comes first. You can't authorize actions without knowing who's acting.

## Session-Based Authentication

The traditional approach: after login, the server creates a session and sends a session ID cookie. Subsequent requests include this cookie, and the server looks up the associated session.

### How Sessions Work

\`\`\`typescript
// Login: Create session
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  const user = await verifyCredentials(email, password);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  
  // Create session
  req.session.userId = user.id;
  req.session.createdAt = Date.now();
  
  res.json({ user: sanitizeUser(user) });
});

// Auth middleware: Check session
function requireAuth(req, res, next) {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  next();
}
\`\`\`

### Session Best Practices

**Use secure cookies.** Always set HttpOnly, Secure, and SameSite attributes:

\`\`\`typescript
app.use(session({
  cookie: {
    httpOnly: true,  // No JavaScript access
    secure: true,    // HTTPS only
    sameSite: 'lax', // CSRF protection
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  },
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));
\`\`\`

**Store sessions in Redis or a database.** In-memory sessions don't survive server restarts and don't work with multiple servers.

**Regenerate session ID after login.** Prevent session fixation attacks by creating a new session ID when privileges change.

## JWT-Based Authentication

JSON Web Tokens (JWTs) encode user information in a signed token. The server doesn't need to store sessions—it verifies the token's signature instead.

### JWT Structure

A JWT contains three parts: header, payload, and signature, base64-encoded:

\`\`\`
eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.dozjgNryP4J3jVmNHl0w5N_XgL0n3I9PlFUP0THsR8U
\`\`\`

### Implementing JWT Auth

\`\`\`typescript
import jwt from 'jsonwebtoken';

// Login: Issue tokens
app.post('/login', async (req, res) => {
  const user = await verifyCredentials(req.body.email, req.body.password);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  
  const accessToken = jwt.sign(
    { sub: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  );
  
  const refreshToken = jwt.sign(
    { sub: user.id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' }
  );
  
  // Store refresh token hash in database
  await storeRefreshToken(user.id, refreshToken);
  
  res.json({ accessToken, refreshToken });
});
\`\`\`

### JWT Best Practices

**Keep access tokens short-lived.** 15 minutes is a common choice. Short lifetimes limit the damage from stolen tokens.

**Use refresh tokens for long sessions.** Issue short-lived access tokens that can be renewed with a longer-lived refresh token.

**Never store JWTs in localStorage.** It's accessible to XSS attacks. Use HttpOnly cookies or memory-only storage.

**Consider token refresh patterns carefully.** Implement sliding window refresh, not just automatic refresh on every request.

## OAuth 2.0 and OpenID Connect

When users want to log in with Google, GitHub, or other providers, OAuth 2.0 and OpenID Connect handle the flow.

**OAuth 2.0** is an authorization framework. It lets users grant limited access to their resources (like Google Calendar) without sharing passwords.

**OpenID Connect** builds on OAuth 2.0 to add authentication. It provides a standardized way to verify user identity.

### The Authorization Code Flow

\`\`\`typescript
// 1. Redirect to provider
app.get('/auth/google', (req, res) => {
  const url = new URL('https://accounts.google.com/o/oauth2/v2/auth');
  url.searchParams.set('client_id', process.env.GOOGLE_CLIENT_ID);
  url.searchParams.set('redirect_uri', 'https://yourapp.com/auth/callback');
  url.searchParams.set('response_type', 'code');
  url.searchParams.set('scope', 'openid email profile');
  url.searchParams.set('state', generateRandomState()); // CSRF protection
  
  res.redirect(url.toString());
});

// 2. Handle callback
app.get('/auth/callback', async (req, res) => {
  const { code, state } = req.query;
  
  // Verify state matches what we sent
  if (!verifyState(state)) {
    return res.status(400).json({ error: 'Invalid state' });
  }
  
  // Exchange code for tokens
  const tokens = await exchangeCodeForTokens(code);
  
  // Get user info from ID token
  const userInfo = decodeIdToken(tokens.id_token);
  
  // Create or update user in your database
  const user = await upsertUser(userInfo);
  
  // Create session
  req.session.userId = user.id;
  
  res.redirect('/dashboard');
});
\`\`\`

## Passwordless Authentication

Passwords are a liability—users reuse them, forget them, and fall for phishing. Passwordless authentication eliminates these risks.

### Magic Links

Send a one-time login link via email:

\`\`\`typescript
app.post('/auth/magic-link', async (req, res) => {
  const { email } = req.body;
  
  const token = crypto.randomBytes(32).toString('hex');
  const expires = Date.now() + 15 * 60 * 1000; // 15 minutes
  
  await db.magicTokens.create({
    data: { email, token: hashToken(token), expiresAt: new Date(expires) }
  });
  
  await sendEmail(email, {
    subject: 'Your Login Link',
    body: \`Click to log in: https://yourapp.com/auth/verify?token=\${token}\`
  });
  
  res.json({ message: 'Check your email' });
});
\`\`\`

### WebAuthn and Passkeys

WebAuthn enables passwordless authentication using biometrics or security keys. Apple, Google, and Microsoft now support passkeys—WebAuthn credentials that sync across devices.

\`\`\`typescript
// Registration
const credential = await navigator.credentials.create({
  publicKey: {
    challenge: new Uint8Array(challengeFromServer),
    rp: { name: 'Your App' },
    user: {
      id: new Uint8Array(userId),
      name: email,
      displayName: name,
    },
    pubKeyCredParams: [
      { type: 'public-key', alg: -7 },  // ES256
      { type: 'public-key', alg: -257 }, // RS256
    ],
    authenticatorSelection: {
      residentKey: 'preferred',
      userVerification: 'preferred',
    },
  },
});
\`\`\`

## Multi-Factor Authentication

MFA adds a second verification layer beyond passwords. Common factors are something you know (password), something you have (phone, security key), and something you are (biometrics).

### TOTP (Authenticator Apps)

\`\`\`typescript
import { authenticator } from 'otplib';

// Setup: Generate secret
const secret = authenticator.generateSecret();
const otpauthUrl = authenticator.keyuri(user.email, 'YourApp', secret);
// Display as QR code for user to scan

// Verification
function verifyTOTP(token: string, secret: string): boolean {
  return authenticator.verify({ token, secret });
}
\`\`\`

## Security Best Practices

**Rate limit authentication endpoints.** Prevent brute force attacks by limiting login attempts.

**Monitor for suspicious patterns.** Alert on multiple failed logins, logins from new locations, or unusual access patterns.

**Implement account lockout carefully.** Balance security with user experience. Consider progressive delays rather than hard lockouts.

**Log everything.** Authentication events should be logged for security auditing. Include IP, user agent, and timestamp.

**Use secure password storage.** Never store plaintext passwords. Use bcrypt or Argon2 with appropriate work factors.

## Conclusion

Modern authentication balances security with user experience. Sessions remain viable for server-rendered apps. JWTs work well for APIs and SPAs. OAuth enables secure third-party login. Passwordless reduces friction and risk.

Choose based on your application's needs, implement security best practices, and stay current with evolving standards. Your users' security depends on it.
    `
  },
  {
    slug: "database-selection-guide-2025",
    title: "Database Selection Guide 2025: SQL, NoSQL, and Edge Databases",
    excerpt: "Navigate the database landscape with confidence. Compare relational databases, document stores, key-value stores, and edge databases to choose the right solution for your application's needs.",
    date: "2024-12-02",
    author: "vAlpha Team",
    tags: ["Database", "PostgreSQL", "Backend"],
    readTime: "12 min read",
    content: `
## The Database Decision

Your database choice ripples through every aspect of your application—data modeling, query patterns, scalability, operational complexity, and even team hiring. Yet many teams make this decision quickly, choosing what's familiar rather than what's optimal.

This guide helps you evaluate options systematically, understanding tradeoffs to make informed decisions.

## Relational Databases: The Proven Foundation

Relational databases (PostgreSQL, MySQL, MariaDB) have powered applications for decades. Their strength lies in structured data, complex queries, and ACID transactions.

### When Relational Databases Excel

**Structured data with clear relationships.** When your data has defined schemas with foreign key relationships—users have orders, orders contain products—relational databases shine.

**Complex queries.** Need to join multiple tables, aggregate data, and filter with complex conditions? SQL provides expressive power that's hard to match.

**ACID requirements.** Financial transactions, inventory management, or any situation requiring atomicity, consistency, isolation, and durability.

### PostgreSQL: The Modern Choice

PostgreSQL has become the default recommendation for most new projects:

\`\`\`sql
-- Advanced features: JSON support
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  metadata JSONB DEFAULT '{}'
);

-- Query JSON fields
SELECT * FROM products 
WHERE metadata->>'category' = 'electronics';

-- Full-text search
SELECT * FROM products 
WHERE to_tsvector('english', name || ' ' || description) 
@@ to_tsquery('english', 'wireless & headphones');
\`\`\`

PostgreSQL combines relational rigor with modern features: JSON support, full-text search, array types, and extensions like PostGIS for geospatial data.

## Document Databases: Flexibility First

Document databases (MongoDB, CouchDB) store data as flexible documents, typically JSON. They excel when your data structure varies or evolves rapidly.

### MongoDB Use Cases

**Rapid prototyping.** When you're figuring out your data model, document databases let you iterate without migrations.

**Content management.** Articles, products, and user profiles with varying attributes fit naturally into documents.

**Real-time analytics.** MongoDB's aggregation pipeline handles complex analytics on large datasets.

\`\`\`javascript
// Flexible schema
db.products.insertOne({
  name: "Wireless Headphones",
  price: 199.99,
  specs: {
    battery: "30 hours",
    connectivity: ["Bluetooth 5.0", "3.5mm jack"],
    features: ["ANC", "Transparency mode"]
  },
  reviews: [
    { rating: 5, text: "Amazing sound quality" },
    { rating: 4, text: "Great but expensive" }
  ]
});

// Aggregation pipeline
db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: {
    _id: { $month: "$createdAt" },
    total: { $sum: "$amount" }
  }},
  { $sort: { _id: 1 } }
]);
\`\`\`

### Document Database Tradeoffs

**No foreign keys.** Relationships must be managed in application code or through embedding, which can lead to data duplication.

**Eventual consistency.** Most document databases default to eventual consistency, which may not suit all applications.

**Query limitations.** Complex joins and relationships are harder to express and less efficient.

## Key-Value Stores: Speed Above All

Key-value stores (Redis, DynamoDB) offer the simplest data model: keys map to values. This simplicity enables exceptional speed and scalability.

### Redis: The Swiss Army Knife

Redis is more than a cache—it's a data structure server:

\`\`\`redis
# Simple key-value
SET user:123:name "Alice"
GET user:123:name

# Sorted sets for leaderboards
ZADD leaderboard 1000 "player1"
ZADD leaderboard 1500 "player2"
ZRANGE leaderboard 0 -1 WITHSCORES REV

# Pub/Sub for real-time
SUBSCRIBE notifications
PUBLISH notifications "New message"

# Rate limiting
INCR requests:user:123
EXPIRE requests:user:123 60
\`\`\`

### DynamoDB: Serverless Scale

AWS DynamoDB offers true serverless scaling—you pay for throughput rather than instances:

\`\`\`typescript
// DynamoDB with single-table design
await dynamodb.put({
  TableName: 'MainTable',
  Item: {
    PK: 'USER#123',
    SK: 'PROFILE',
    name: 'Alice',
    email: 'alice@example.com'
  }
});

// Query all orders for a user
await dynamodb.query({
  TableName: 'MainTable',
  KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
  ExpressionAttributeValues: {
    ':pk': 'USER#123',
    ':sk': 'ORDER#'
  }
});
\`\`\`

## Edge Databases: The New Frontier

Edge databases bring data closer to users by distributing data to edge locations worldwide. They're designed for the new generation of edge-first applications.

### Turso and LibSQL

Turso, built on LibSQL (a SQLite fork), offers SQLite's simplicity with multi-region replication:

\`\`\`typescript
import { createClient } from '@libsql/client';

const db = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

// Standard SQL queries
const result = await db.execute({
  sql: 'SELECT * FROM users WHERE id = ?',
  args: [userId]
});
\`\`\`

### PlanetScale and Serverless MySQL

PlanetScale offers MySQL with features designed for modern deployments like non-blocking schema changes, database branching, and automatic scaling.

### Edge Database Considerations

**Read-heavy workloads.** Edge databases typically handle reads at the edge but route writes to a primary region.

**Consistency tradeoffs.** Understand your database's consistency model. Some offer strong consistency; others provide eventual consistency with conflict resolution.

**Cold starts.** Serverless databases may have cold start latency. Test with realistic traffic patterns.

## Making Your Decision

### Start with Requirements

Before comparing databases, clarify your requirements:

1. What's your data model? Structured, semi-structured, or unstructured?
2. What are your query patterns? Simple lookups, complex analytics, or full-text search?
3. What are your consistency requirements? Strong ACID or eventual consistency?
4. What's your scale? Thousands of users or millions?
5. What's your team's expertise? What databases do they know?

### Decision Matrix

**Choose PostgreSQL when:** You need relational data, complex queries, strong consistency, and want a battle-tested solution with extensive ecosystem support.

**Choose MongoDB when:** Your data is document-oriented, schema flexibility is important, and you're willing to manage relationships in application code.

**Choose Redis when:** You need a cache, real-time features, or a secondary database for specific high-speed access patterns.

**Choose Edge Databases when:** Your users are globally distributed, read-heavy workloads dominate, and you want to minimize latency.

## Conclusion

There's no universally "best" database—only the right database for your specific needs. Start with PostgreSQL if you're unsure; it handles most workloads well and scales further than many realize.

As you grow, you'll likely use multiple databases: PostgreSQL for core data, Redis for caching, and perhaps an edge database for global content. Design with this evolution in mind, and your architecture will serve you well.
    `
  },
  {
    slug: "design-systems-that-scale",
    title: "Building Design Systems That Scale: A Complete Implementation Guide",
    excerpt: "Learn how to create and maintain design systems that grow with your organization. Covers component libraries, design tokens, documentation, versioning, and organizational adoption strategies.",
    date: "2024-11-28",
    author: "vAlpha Team",
    tags: ["Design Systems", "UI/UX", "Frontend"],
    readTime: "13 min read",
    content: `
## What Makes Design Systems Succeed

A design system is more than a component library. It's a shared language between designers and developers, a set of constraints that enable faster decision-making, and a living product that evolves with your organization.

Successful design systems share common traits: clear principles, flexible components, comprehensive documentation, and—most importantly—organizational buy-in. This guide covers practical strategies for building and scaling design systems.

## Start with Design Tokens

Design tokens are the atoms of your design system—named values for colors, spacing, typography, and other design decisions. They provide a single source of truth that works across platforms and tools.

### Token Structure

\`\`\`typescript
// tokens/colors.ts
export const colors = {
  // Primitive tokens (raw values)
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    900: '#1e3a8a',
  },
  
  // Semantic tokens (usage-based)
  primary: {
    DEFAULT: 'var(--color-blue-600)',
    hover: 'var(--color-blue-700)',
    active: 'var(--color-blue-800)',
  },
  
  background: {
    DEFAULT: 'var(--color-white)',
    secondary: 'var(--color-gray-50)',
    inverse: 'var(--color-gray-900)',
  },
  
  text: {
    DEFAULT: 'var(--color-gray-900)',
    secondary: 'var(--color-gray-600)',
    inverse: 'var(--color-white)',
  }
};

// tokens/spacing.ts
export const spacing = {
  px: '1px',
  0.5: '0.125rem',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  6: '1.5rem',
  8: '2rem',
  12: '3rem',
  16: '4rem',
};
\`\`\`

### Generating CSS Variables

\`\`\`typescript
// Build script: Convert tokens to CSS
function generateCSSVariables(tokens, prefix = '') {
  let css = ':root {\n';
  
  for (const [key, value] of Object.entries(tokens)) {
    if (typeof value === 'object') {
      css += generateCSSVariables(value, \`\${prefix}\${key}-\`);
    } else {
      css += \`  --\${prefix}\${key}: \${value};\n\`;
    }
  }
  
  css += '}\n';
  return css;
}
\`\`\`

## Component Architecture

Components should be flexible enough to handle real-world use cases while maintaining consistency.

### Composition Over Configuration

Prefer composition to prop explosion:

\`\`\`typescript
// ❌ Prop explosion
<Card
  title="Post Title"
  subtitle="Subtitle"
  image="/image.jpg"
  imagePosition="left"
  actions={[{ label: 'Read', onClick: handleClick }]}
  footer="Published yesterday"
  variant="elevated"
/>

// ✅ Composition
<Card variant="elevated">
  <Card.Image src="/image.jpg" position="left" />
  <Card.Header>
    <Card.Title>Post Title</Card.Title>
    <Card.Subtitle>Subtitle</Card.Subtitle>
  </Card.Header>
  <Card.Content>...</Card.Content>
  <Card.Actions>
    <Button onClick={handleClick}>Read</Button>
  </Card.Actions>
  <Card.Footer>Published yesterday</Card.Footer>
</Card>
\`\`\`

### Variants with cva

Use class-variance-authority (cva) for variant management:

\`\`\`typescript
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary-hover',
        secondary: 'bg-secondary text-foreground hover:bg-secondary-hover',
        ghost: 'hover:bg-muted',
        destructive: 'bg-destructive text-white hover:bg-destructive-dark',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}
\`\`\`

## Documentation That Works

Documentation is often where design systems fail. Great components mean nothing if teams can't find or understand them.

### Essential Documentation Elements

1. **Overview and principles.** Why does this component exist? What problems does it solve?
2. **Visual examples.** Show every variant, state, and size.
3. **API reference.** Document every prop with types and descriptions.
4. **Usage guidelines.** When to use this component vs alternatives.
5. **Accessibility.** Keyboard navigation, ARIA patterns, screen reader behavior.
6. **Code examples.** Copy-pasteable examples for common use cases.

### Interactive Documentation with Storybook

\`\`\`typescript
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Buttons trigger actions or navigation.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};
\`\`\`

## Versioning and Release Strategy

Design systems need careful versioning to avoid breaking consuming applications.

### Semantic Versioning

Follow semver strictly:
- **Major (2.0.0)**: Breaking changes
- **Minor (1.1.0)**: New features, backwards compatible
- **Patch (1.0.1)**: Bug fixes

### Deprecation Process

Never remove features abruptly:

\`\`\`typescript
/**
 * @deprecated Use variant="ghost" instead. Will be removed in v3.0.
 */
export function TextButton(props: ButtonProps) {
  console.warn('TextButton is deprecated. Use <Button variant="ghost"> instead.');
  return <Button variant="ghost" {...props} />;
}
\`\`\`

## Driving Adoption

The best design system is worthless if teams don't use it. Adoption requires strategy.

### Make It Easy

- **One-line setup.** Installation should be trivial.
- **Great defaults.** Components should look good out of the box.
- **Escape hatches.** Allow customization when needed.
- **Migration guides.** Help teams move from existing solutions.

### Build Relationships

- **Office hours.** Regular sessions where teams can get help.
- **Contribution guides.** Make it easy for teams to contribute components.
- **Feedback loops.** Regularly gather and act on user feedback.
- **Celebrate adoption.** Recognize teams that embrace the system.

## Conclusion

Design systems are as much about people as they are about code. Technical excellence matters, but organizational buy-in determines success.

Start small—a few foundational components and clear tokens. Document thoroughly. Listen to your users. Evolve based on real needs, not theoretical completeness.

The goal isn't a perfect component library. It's faster, more consistent product development across your organization.
    `
  },
  {
    slug: "dark-mode-implementation-guide",
    title: "Dark Mode Done Right: Complete Implementation Guide",
    excerpt: "Implement dark mode that delights users with this comprehensive guide covering CSS custom properties, system preferences, persistence, images, and avoiding common pitfalls.",
    date: "2024-11-24",
    author: "vAlpha Team",
    tags: ["CSS", "Dark Mode", "UI/UX"],
    readTime: "11 min read",
    content: `
## Why Dark Mode Matters

Dark mode has evolved from a nice-to-have to an expected feature. Users want it for reduced eye strain in low light, battery savings on OLED screens, and simply because they prefer the aesthetic.

But implementing dark mode poorly is worse than not implementing it at all. Inconsistent colors, missing states, and jarring transitions frustrate users. This guide shows you how to implement dark mode that users love.

## The Foundation: CSS Custom Properties

CSS custom properties (variables) are the foundation of maintainable theming:

\`\`\`css
:root {
  /* Semantic color tokens */
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text-primary: #0f172a;
  --color-text-secondary: #475569;
  --color-border: #e2e8f0;
  --color-primary: #3b82f6;
  --color-primary-hover: #2563eb;
}

[data-theme="dark"] {
  --color-background: #0f172a;
  --color-surface: #1e293b;
  --color-text-primary: #f1f5f9;
  --color-text-secondary: #94a3b8;
  --color-border: #334155;
  --color-primary: #60a5fa;
  --color-primary-hover: #3b82f6;
}

/* Usage */
body {
  background-color: var(--color-background);
  color: var(--color-text-primary);
}

.card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
}
\`\`\`

### Token Naming Strategy

Use semantic names that describe purpose, not appearance:

\`\`\`css
/* ❌ Describes appearance */
--dark-gray: #1e293b;
--light-blue: #60a5fa;

/* ✅ Describes purpose */
--color-surface: #1e293b;
--color-primary: #60a5fa;
\`\`\`

## Respecting System Preferences

Honor the user's operating system preference by default:

\`\`\`css
/* Light mode by default */
:root {
  --color-background: #ffffff;
  --color-text: #0f172a;
}

/* System preference: dark */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #0f172a;
    --color-text: #f1f5f9;
  }
}
\`\`\`

### With User Override

Let users override system preference:

\`\`\`typescript
// ThemeProvider.tsx
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: 'system',
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');
  
  useEffect(() => {
    // Load saved preference
    const saved = localStorage.getItem('theme') as Theme;
    if (saved) setTheme(saved);
  }, []);
  
  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'system') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.setAttribute('data-theme', systemDark ? 'dark' : 'light');
    } else {
      root.setAttribute('data-theme', theme);
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
\`\`\`

## Preventing Flash of Wrong Theme

The dreaded "flash" occurs when the page loads with the wrong theme before JavaScript runs. Prevent it with blocking scripts:

\`\`\`html
<!-- In <head>, before stylesheets -->
<script>
  (function() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  })();
</script>
\`\`\`

For Next.js with App Router:

\`\`\`typescript
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: \`
              (function() {
                const saved = localStorage.getItem('theme');
                if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            \`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
\`\`\`

## Images and Media

### Adjusting Image Brightness

Some images look too harsh against dark backgrounds:

\`\`\`css
[data-theme="dark"] img:not([data-no-adjust]) {
  filter: brightness(0.9) contrast(1.1);
}
\`\`\`

### Different Images for Each Theme

\`\`\`typescript
function ThemedImage({
  lightSrc,
  darkSrc,
  alt,
  ...props
}: {
  lightSrc: string;
  darkSrc: string;
  alt: string;
}) {
  const { resolvedTheme } = useTheme();
  
  return (
    <img
      src={resolvedTheme === 'dark' ? darkSrc : lightSrc}
      alt={alt}
      {...props}
    />
  );
}

// Or with CSS
<picture>
  <source srcset="/logo-dark.svg" media="(prefers-color-scheme: dark)" />
  <img src="/logo-light.svg" alt="Logo" />
</picture>
\`\`\`

### SVG Icons

Use currentColor for icons that should match text:

\`\`\`html
<svg fill="currentColor" viewBox="0 0 24 24">
  <path d="..." />
</svg>
\`\`\`

## Shadows and Elevation

Shadows need different treatment in dark mode:

\`\`\`css
:root {
  --shadow-sm: 0 1px 2px rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px rgb(0 0 0 / 0.1);
}

[data-theme="dark"] {
  /* Darker shadows or use lighter backgrounds for elevation */
  --shadow-sm: 0 1px 2px rgb(0 0 0 / 0.3);
  --shadow-md: 0 4px 6px rgb(0 0 0 / 0.4);
  --shadow-lg: 0 10px 15px rgb(0 0 0 / 0.5);
  
  /* Alternative: lighten surfaces for elevation */
  --color-surface-elevated: #293548;
}
\`\`\`

## Transitions

Smooth transitions between themes:

\`\`\`css
/* Apply to all themed properties */
* {
  transition: background-color 0.2s ease, 
              color 0.2s ease, 
              border-color 0.2s ease,
              box-shadow 0.2s ease;
}

/* Disable during initial load */
.no-transitions * {
  transition: none !important;
}
\`\`\`

\`\`\`typescript
// Disable transitions during initial theme load
useEffect(() => {
  document.body.classList.add('no-transitions');
  
  // Re-enable after a frame
  requestAnimationFrame(() => {
    document.body.classList.remove('no-transitions');
  });
}, []);
\`\`\`

## Common Pitfalls

### Don't Invert Everything

Simply inverting colors creates an unpleasant effect. Design dark mode intentionally:

\`\`\`css
/* ❌ Don't do this */
[data-theme="dark"] {
  filter: invert(1) hue-rotate(180deg);
}
\`\`\`

### Test All States

Check every component in both themes:
- Hover states
- Focus states
- Disabled states
- Error states
- Loading states

### Consider Readability

Pure white text on pure black is harsh. Use off-white and softer blacks:

\`\`\`css
/* ❌ Too harsh */
--color-background: #000000;
--color-text: #ffffff;

/* ✅ Softer */
--color-background: #0f172a;
--color-text: #f1f5f9;
\`\`\`

## Conclusion

Dark mode done right requires intentional design—not just color swapping. Define semantic tokens, respect system preferences while allowing overrides, prevent the flash, and test thoroughly.

Users notice quality. A polished dark mode implementation shows attention to detail and respect for user preferences.
    `
  },
  {
    slug: "responsive-design-2025-beyond-media-queries",
    title: "Responsive Design in 2025: Beyond Media Queries",
    excerpt: "Modern responsive design goes beyond breakpoints. Learn container queries, fluid typography, intrinsic layouts, and CSS techniques that create truly adaptive interfaces.",
    date: "2024-11-20",
    author: "vAlpha Team",
    tags: ["CSS", "Responsive Design", "Frontend"],
    readTime: "11 min read",
    content: `
## The Evolution of Responsive Design

Responsive design has come a long way since Ethan Marcotte coined the term in 2010. What started as fluid grids and media queries has evolved into a sophisticated set of techniques that create truly adaptive interfaces.

Modern CSS gives us tools that our predecessors could only dream of. Container queries, fluid typography, and intrinsic layouts let us build components that adapt intelligently to their context, not just the viewport.

## Container Queries: Component-Level Responsiveness

Media queries respond to viewport size. Container queries respond to parent element size. This is revolutionary for component-based design.

\`\`\`css
.card-container {
  container-type: inline-size;
  container-name: card;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@container card (min-width: 400px) {
  .card {
    flex-direction: row;
    align-items: center;
  }
  
  .card-image {
    width: 40%;
    flex-shrink: 0;
  }
}
\`\`\`

Now the same card component works in a narrow sidebar and a wide content area without any JavaScript or complex CSS overrides.

## Fluid Typography

Stop defining font sizes at arbitrary breakpoints. Use clamp() for typography that scales smoothly:

\`\`\`css
:root {
  --font-size-sm: clamp(0.875rem, 0.8rem + 0.25vw, 1rem);
  --font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --font-size-lg: clamp(1.25rem, 1rem + 1vw, 1.5rem);
  --font-size-xl: clamp(1.5rem, 1rem + 2vw, 2.5rem);
  --font-size-2xl: clamp(2rem, 1rem + 3vw, 4rem);
}

h1 { font-size: var(--font-size-2xl); }
h2 { font-size: var(--font-size-xl); }
p { font-size: var(--font-size-base); }
\`\`\`

The formula clamp(min, preferred, max) ensures readable text on phones while allowing larger sizes on desktop.

## Intrinsic Layouts with CSS Grid

Let content determine layout rather than forcing content into predetermined breakpoints:

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 2rem;
}
\`\`\`

This creates a grid that automatically adjusts the number of columns based on available space, with a minimum column width of 300px.

## Logical Properties for Global Reach

Support right-to-left languages without duplicate CSS:

\`\`\`css
.card {
  padding-inline: 1.5rem;
  padding-block: 1rem;
  margin-inline-start: auto;
  border-inline-end: 2px solid var(--border);
}
\`\`\`

These properties automatically flip for RTL layouts.

## Aspect Ratio for Consistent Media

Maintain consistent proportions without padding hacks:

\`\`\`css
.video-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}

.avatar {
  aspect-ratio: 1;
  width: 3rem;
  border-radius: 50%;
}
\`\`\`

## Conclusion

Modern responsive design is about creating systems that adapt intelligently. Use container queries for component-level responsiveness, fluid typography for smooth scaling, and intrinsic layouts that respect content.
    `
  },
  {
    slug: "micro-animations-that-delight-users",
    title: "Micro-Animations That Delight: Motion Design for Developers",
    excerpt: "Learn to create subtle, purposeful animations that enhance user experience. Covers CSS animations, Framer Motion, performance optimization, and accessibility considerations.",
    date: "2024-11-16",
    author: "vAlpha Team",
    tags: ["Animation", "UI/UX", "CSS"],
    readTime: "12 min read",
    content: `
## The Power of Subtle Motion

Micro-animations are the secret ingredient that separates good interfaces from great ones. They provide feedback, guide attention, and create emotional connections with users.

But animation is a double-edged sword. Done well, it delights. Done poorly, it annoys. This guide shows you how to create purposeful motion that enhances rather than distracts.

## Purpose-Driven Animation

Every animation should serve a purpose:

**Feedback**: Confirm user actions (button pressed, form submitted)
**State changes**: Communicate transitions (loading, success, error)
**Guidance**: Direct attention (tooltip appearing, modal opening)
**Continuity**: Maintain context during navigation

\`\`\`css
/* Feedback: Button press */
.button {
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}

.button:active {
  transform: scale(0.98);
  box-shadow: inset 0 2px 4px rgb(0 0 0 / 0.1);
}
\`\`\`

## Timing and Easing

Duration and easing dramatically affect perceived quality:

\`\`\`css
:root {
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}
\`\`\`

Use ease-out for elements entering, ease-in for elements leaving.

## CSS Animations

\`\`\`css
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fade-in-up 0.3s var(--ease-out) both;
}

/* Staggered children */
.list > * {
  animation: fade-in-up 0.3s var(--ease-out) both;
}

.list > *:nth-child(1) { animation-delay: 0ms; }
.list > *:nth-child(2) { animation-delay: 50ms; }
.list > *:nth-child(3) { animation-delay: 100ms; }
\`\`\`

## Framer Motion for React

\`\`\`typescript
import { motion, AnimatePresence } from 'framer-motion';

function Card({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
\`\`\`

## Performance Considerations

Animate only transform and opacity for smooth 60fps animations:

\`\`\`css
/* ❌ Triggers layout */
.bad {
  transition: width 0.3s, height 0.3s, margin 0.3s;
}

/* ✅ GPU-accelerated */
.good {
  transition: transform 0.3s, opacity 0.3s;
}
\`\`\`

## Accessibility: Respecting Preferences

Honor user preferences for reduced motion:

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
\`\`\`

## Conclusion

Micro-animations should be felt, not noticed. Keep them subtle, purposeful, and performant. Respect user preferences, and your interfaces will feel polished and professional.
    `
  },
  {
    slug: "web-typography-complete-guide",
    title: "Typography for the Web: A Complete Guide for Developers",
    excerpt: "Master web typography with this guide covering font selection, loading strategies, hierarchy, readability, and CSS techniques for beautiful, performant text.",
    date: "2024-11-12",
    author: "vAlpha Team",
    tags: ["Typography", "CSS", "Design"],
    readTime: "13 min read",
    content: `
## Typography Makes or Breaks Design

Typography is 95% of web design. The words on your page are the primary way users consume content. Poor typography creates friction; good typography becomes invisible, letting content shine.

This guide covers practical typography techniques for developers who want their sites to look professional.

## Choosing Fonts

### System Fonts for Performance

System fonts load instantly because they're already on the user's device:

\`\`\`css
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
               Oxygen, Ubuntu, Cantarell, sans-serif;
}
\`\`\`

### Google Fonts with next/font

\`\`\`typescript
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

export default function RootLayout({ children }) {
  return (
    <html className={\`\${inter.variable} \${playfair.variable}\`}>
      <body>{children}</body>
    </html>
  );
}
\`\`\`

### Font Pairing Rules

1. Contrast: Pair a serif with a sans-serif
2. Limit: Use 2-3 fonts maximum
3. Hierarchy: Display fonts for headings, readable fonts for body

## Establishing Hierarchy

Create clear visual hierarchy with size, weight, and spacing:

\`\`\`css
:root {
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 2rem;
  --font-size-4xl: 2.5rem;
}

h1 {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

h2 {
  font-size: var(--font-size-3xl);
  font-weight: 600;
  line-height: 1.2;
}

p {
  font-size: var(--font-size-base);
  line-height: 1.7;
}
\`\`\`

## Readability Essentials

### Line Length

Optimal line length is 45-75 characters:

\`\`\`css
.prose {
  max-width: 65ch;
}
\`\`\`

### Line Height

Body text needs more line height than headings:

\`\`\`css
h1, h2, h3 { line-height: 1.2; }
p, li { line-height: 1.7; }
\`\`\`

### Paragraph Spacing

Use margin for paragraph separation:

\`\`\`css
p + p {
  margin-top: 1.5em;
}
\`\`\`

## Responsive Typography

Use clamp() for fluid font sizes:

\`\`\`css
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}
\`\`\`

## Conclusion

Good typography requires attention to hierarchy, readability, and performance. Choose fonts intentionally, establish clear hierarchy, and optimize for reading comfort. Your users will thank you.
    `
  },
  {
    slug: "choosing-hosting-platform-vercel-netlify-railway",
    title: "Choosing Your Hosting Platform: Vercel vs Netlify vs Railway",
    excerpt: "Compare the leading hosting platforms for modern web applications. Covers pricing, features, performance, DX, and which platform fits your specific use case.",
    date: "2024-11-08",
    author: "vAlpha Team",
    tags: ["Hosting", "Deployment", "Infrastructure"],
    readTime: "11 min read",
    content: `
## The Modern Hosting Landscape

Deploying web applications has never been easier. Push to Git, and your changes are live in minutes. But with great options comes decision paralysis. Vercel, Netlify, Railway, Render, Fly.io—each has strengths and ideal use cases.

This guide helps you choose the right platform for your needs.

## Vercel: Built for Next.js

Vercel, created by the team behind Next.js, offers the best Next.js experience. Zero-configuration deployments, automatic optimizations, and seamless integration with the framework's features.

**Strengths:**
- Unmatched Next.js integration
- Edge Functions and Middleware
- Automatic image optimization
- Analytics and Web Vitals monitoring
- Excellent developer experience

**Pricing:**
- Hobby: Free (personal projects)
- Pro: $20/user/month
- Team: Custom pricing

**Best for:** Next.js projects, React applications, and teams prioritizing developer experience.

## Netlify: The JAMstack Pioneer

Netlify popularized JAMstack deployment and remains excellent for static sites and serverless functions.

**Strengths:**
- Powerful build system
- Forms handling built-in
- Identity/Authentication
- Large file handling
- Excellent documentation

**Best for:** Static sites, Hugo/Gatsby projects, and teams wanting an all-in-one platform.

## Railway: Simple Full-Stack

Railway excels at deploying full-stack applications with databases, background workers, and services.

**Strengths:**
- Native database support (Postgres, Redis, MongoDB)
- Simple container deployment
- Cron jobs built-in
- Transparent pricing
- Great for microservices

**Best for:** Full-stack apps needing databases, Node.js backends, and Python applications.

## Decision Framework

**Choose Vercel when:**
- Building with Next.js
- Need edge functions
- Prioritize DX

**Choose Netlify when:**
- Static sites with forms
- JAMstack architecture
- Need simple auth

**Choose Railway when:**
- Need databases
- Running containers
- Full-stack without serverless

## Conclusion

All three platforms are excellent. Vercel leads for Next.js, Netlify for static sites, and Railway for full-stack apps with databases.
    `
  },
  {
    slug: "edge-computing-explained-developers",
    title: "Edge Computing Explained: CDNs, Edge Functions, and Global Performance",
    excerpt: "Understand edge computing and how it improves web application performance. Covers CDN fundamentals, edge functions, caching strategies, and real-world implementation patterns.",
    date: "2024-11-04",
    author: "vAlpha Team",
    tags: ["Edge Computing", "Performance", "Infrastructure"],
    readTime: "12 min read",
    content: `
## What is Edge Computing?

Edge computing brings computation closer to users by executing code at data centers distributed globally—at the "edge" of the network. Instead of routing every request to a single origin server, edge servers handle requests from nearby locations.

The result: dramatically reduced latency and improved user experience worldwide.

## CDN Fundamentals

Content Delivery Networks (CDNs) cache static assets at edge locations:

\`\`\`
User in Tokyo → Tokyo Edge → (if cached) → Asset delivered in 20ms
                          → (if not cached) → Origin in US → Asset cached → Delivered
\`\`\`

### Cache Headers

Control caching with HTTP headers:

\`\`\`typescript
// Next.js API route
export async function GET() {
  return Response.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=600',
    },
  });
}
\`\`\`

- **s-maxage:** How long CDN should cache
- **stale-while-revalidate:** Serve stale while fetching fresh

## Edge Functions

Edge functions run JavaScript at edge locations, enabling dynamic content without origin round-trips:

\`\`\`typescript
// Vercel Edge Function
export const config = { runtime: 'edge' };

export default async function handler(request: Request) {
  const country = request.headers.get('x-vercel-ip-country');
  
  return new Response(\`Hello from \${country}!\`, {
    headers: { 'content-type': 'text/plain' },
  });
}
\`\`\`

### Use Cases

- Personalization based on location
- A/B testing at the edge
- Authentication token validation
- Request routing

## Edge Databases

For dynamic data at the edge, use edge-compatible databases:

- **Turso:** SQLite at the edge
- **PlanetScale:** Serverless MySQL
- **Upstash:** Redis at the edge

## Conclusion

Edge computing transforms global performance. Cache aggressively, use edge functions for personalization, and choose edge-friendly databases for dynamic content.
    `
  },
  {
    slug: "docker-for-frontend-developers",
    title: "Docker for Frontend Developers: Container Fundamentals",
    excerpt: "Learn Docker essentials for frontend development. Covers containers, images, Docker Compose, development workflows, and deployment strategies for web applications.",
    date: "2024-10-30",
    author: "vAlpha Team",
    tags: ["Docker", "DevOps", "Infrastructure"],
    readTime: "13 min read",
    content: `
## Why Docker for Frontend?

Docker ensures your application runs identically everywhere—development, testing, and production. No more "works on my machine" problems.

## Docker Basics

### Images and Containers

**Image:** A blueprint containing your application and dependencies
**Container:** A running instance of an image

### Creating a Dockerfile

\`\`\`dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
\`\`\`

### Building and Running

\`\`\`bash
# Build image
docker build -t my-app .

# Run container
docker run -p 3000:3000 my-app
\`\`\`

## Docker Compose for Development

\`\`\`yaml
# docker-compose.yml
services:
  app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - DATABASE_URL=postgres://postgres:password@db:5432/app
  
  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
\`\`\`

## Best Practices

1. Use multi-stage builds to minimize image size
2. Use .dockerignore to exclude node_modules
3. Pin dependency versions
4. Run as non-root user

## Conclusion

Docker simplifies deployment by ensuring consistency across environments. Start with a basic Dockerfile, add Docker Compose for local development, and iterate from there.
    `
  },
  {
    slug: "cicd-pipelines-github-actions",
    title: "CI/CD Pipelines That Work: A GitHub Actions Guide",
    excerpt: "Build reliable CI/CD pipelines with GitHub Actions. Covers testing, building, deployment, caching, secrets management, and advanced workflow patterns.",
    date: "2024-10-26",
    author: "vAlpha Team",
    tags: ["CI/CD", "GitHub Actions", "DevOps"],
    readTime: "12 min read",
    content: `
## Why CI/CD Matters

Continuous Integration and Continuous Deployment automate the boring parts of shipping software. Every push triggers tests, builds, and deployments—reducing human error and accelerating delivery.

## GitHub Actions Fundamentals

### Workflow Structure

\`\`\`yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build
\`\`\`

## Caching for Speed

\`\`\`yaml
- uses: actions/cache@v4
  with:
    path: ~/.npm
    key: npm-\${{ hashFiles('package-lock.json') }}
    restore-keys: npm-
\`\`\`

## Deployment Pipeline

\`\`\`yaml
deploy:
  needs: test
  runs-on: ubuntu-latest
  if: github.ref == 'refs/heads/main'
  
  steps:
    - uses: actions/checkout@v4
    
    - name: Deploy to Vercel
      run: vercel deploy --prod --token=\${{ secrets.VERCEL_TOKEN }}
\`\`\`

## Secrets Management

Store sensitive data in GitHub Secrets:

\`\`\`yaml
env:
  DATABASE_URL: \${{ secrets.DATABASE_URL }}
  API_KEY: \${{ secrets.API_KEY }}
\`\`\`

## Matrix Builds

Test across multiple configurations:

\`\`\`yaml
strategy:
  matrix:
    node: [18, 20, 22]
    os: [ubuntu-latest, macos-latest]

runs-on: \${{ matrix.os }}
\`\`\`

## Conclusion

Start simple: run tests and lint on every push. Add deployment automation once tests are reliable. Iterate based on your team's needs.
    `
  },
  {
    slug: "web-performance-monitoring-core-web-vitals",
    title: "Performance Monitoring: Core Web Vitals and Real User Metrics",
    excerpt: "Track and improve your website's performance with this guide to Core Web Vitals, real user monitoring, performance budgets, and optimization strategies.",
    date: "2024-10-22",
    author: "vAlpha Team",
    tags: ["Performance", "Web Vitals", "Analytics"],
    readTime: "11 min read",
    content: `
## Why Performance Monitoring Matters

You can't improve what you don't measure. Core Web Vitals are Google's metrics for user experience, and they directly impact SEO rankings. Monitoring these metrics helps you catch regressions and prioritize optimizations.

## Core Web Vitals Explained

### Largest Contentful Paint (LCP)

LCP measures loading performance—when the largest content element becomes visible. Target: under 2.5 seconds.

**Optimization strategies:**
- Optimize images (WebP, proper sizing)
- Preload critical resources
- Use a CDN
- Minimize server response time

### First Input Delay (FID) / Interaction to Next Paint (INP)

These metrics measure interactivity—how quickly your site responds to user input. Target: under 100ms for FID, under 200ms for INP.

**Optimization strategies:**
- Break up long JavaScript tasks
- Use web workers for heavy computation
- Minimize main thread work
- Defer non-critical JavaScript

### Cumulative Layout Shift (CLS)

CLS measures visual stability—how much content shifts unexpectedly. Target: under 0.1.

**Optimization strategies:**
- Always include dimensions on images and videos
- Reserve space for dynamic content
- Avoid inserting content above existing content
- Use CSS transforms for animations

## Implementing Monitoring

### Next.js Web Vitals

\`\`\`typescript
// app/layout.tsx
export function reportWebVitals(metric) {
  const body = JSON.stringify(metric);
  
  // Send to analytics
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/vitals', body);
  } else {
    fetch('/api/vitals', { body, method: 'POST', keepalive: true });
  }
}
\`\`\`

### Real User Monitoring (RUM)

\`\`\`typescript
import { onCLS, onFID, onLCP, onTTFB, onINP } from 'web-vitals';

function sendToAnalytics({ name, delta, id }) {
  analytics.track('Web Vital', {
    metric: name,
    value: delta,
    id: id,
  });
}

onCLS(sendToAnalytics);
onFID(sendToAnalytics);
onLCP(sendToAnalytics);
onTTFB(sendToAnalytics);
onINP(sendToAnalytics);
\`\`\`

## Performance Budgets

Set budgets to prevent regressions:

\`\`\`json
{
  "budgets": [
    {
      "resourceType": "script",
      "budget": 200
    },
    {
      "resourceType": "total",
      "budget": 500
    },
    {
      "metric": "largest-contentful-paint",
      "budget": 2500
    }
  ]
}
\`\`\`

## Conclusion

Monitor Core Web Vitals continuously, set performance budgets, and treat regressions as bugs. Your users and search rankings will benefit.
    `
  },
  {
    slug: "color-theory-for-developers",
    title: "Color Theory for Developers: Accessibility and Theming",
    excerpt: "Master color for web development. Learn color spaces, accessibility requirements, palette generation, and CSS techniques for building flexible color systems.",
    date: "2024-10-18",
    author: "vAlpha Team",
    tags: ["Design", "CSS", "Accessibility"],
    readTime: "12 min read",
    content: `
## Color in Web Development

Color conveys meaning, creates hierarchy, and evokes emotion. But color also creates accessibility barriers if not handled carefully. This guide helps developers use color effectively and accessibly.

## Color Spaces for the Web

### RGB and Hex

The traditional web color format. Limited gamut but universal support:

\`\`\`css
.color {
  color: #3b82f6;
  color: rgb(59, 130, 246);
}
\`\`\`

### HSL: Intuitive Manipulation

HSL (Hue, Saturation, Lightness) is easier to manipulate programmatically:

\`\`\`css
:root {
  --hue: 217;
  --primary: hsl(var(--hue), 91%, 60%);
  --primary-light: hsl(var(--hue), 91%, 80%);
  --primary-dark: hsl(var(--hue), 91%, 40%);
}
\`\`\`

### OKLCH: Perceptually Uniform

OKLCH provides perceptually uniform colors—equal steps in lightness look equally different:

\`\`\`css
:root {
  --primary: oklch(60% 0.15 250);
  --primary-hover: oklch(55% 0.15 250);
}
\`\`\`

## Accessibility Requirements

### Contrast Ratios

WCAG requires minimum contrast between text and background:

- **4.5:1** for normal text (Level AA)
- **3:1** for large text (18pt+)
- **3:1** for UI components

\`\`\`css
/* High contrast palette */
:root {
  --text: #0f172a;        /* Very dark */
  --text-muted: #475569;  /* Passes 4.5:1 on white */
  --bg: #ffffff;
}
\`\`\`

### Don't Rely on Color Alone

Color should reinforce meaning, not carry it alone:

\`\`\`html
<!-- ❌ Color only -->
<span class="text-red-500">Error</span>

<!-- ✅ Color + icon + text -->
<span class="text-red-500">
  <ErrorIcon /> Error: Invalid email
</span>
\`\`\`

## CSS Color Functions

### color-mix()

Blend colors without preprocessing:

\`\`\`css
.button:hover {
  background: color-mix(in oklch, var(--primary), black 15%);
}
\`\`\`

### Relative Color Syntax

Derive colors from a base:

\`\`\`css
:root {
  --brand: oklch(60% 0.2 250);
  --brand-light: oklch(from var(--brand) calc(l + 20%) c h);
  --brand-dark: oklch(from var(--brand) calc(l - 20%) c h);
}
\`\`\`

## Building a Color System

\`\`\`css
:root {
  /* Semantic tokens */
  --color-text: var(--gray-900);
  --color-text-muted: var(--gray-600);
  --color-background: var(--white);
  --color-surface: var(--gray-50);
  --color-border: var(--gray-200);
  --color-primary: var(--blue-600);
  --color-success: var(--green-600);
  --color-warning: var(--amber-600);
  --color-error: var(--red-600);
}

[data-theme="dark"] {
  --color-text: var(--gray-100);
  --color-background: var(--gray-900);
  /* ... */
}
\`\`\`

## Conclusion

Use semantic color tokens, ensure adequate contrast, and never rely on color alone for meaning. Modern CSS color functions make building flexible systems easier than ever.
    `
  },
  {
    slug: "security-hardening-your-website",
    title: "Security Hardening Your Website: Headers, CSP, and HTTPS",
    excerpt: "Protect your website from common attacks with this security guide. Covers HTTP security headers, Content Security Policy, HTTPS configuration, and defensive coding practices.",
    date: "2024-10-14",
    author: "vAlpha Team",
    tags: ["Security", "Web Development", "Best Practices"],
    readTime: "13 min read",
    content: `
## Security is Not Optional

Every website is a potential target. Automated bots scan for vulnerabilities constantly. Even a simple marketing site can be compromised to serve malware or steal visitor data.

This guide covers practical security measures every website should implement.

## HTTP Security Headers

Security headers tell browsers how to behave when handling your site's content:

### Content Security Policy (CSP)

CSP prevents XSS attacks by controlling what resources can load:

\`\`\`typescript
// Next.js middleware
export function middleware(request) {
  const headers = new Headers();
  
  headers.set('Content-Security-Policy', [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self'",
    "connect-src 'self' https://api.example.com",
  ].join('; '));
  
  return NextResponse.next({ headers });
}
\`\`\`

### Other Essential Headers

\`\`\`typescript
// Complete security headers
const securityHeaders = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};
\`\`\`

## HTTPS Everywhere

HTTPS is mandatory. It encrypts traffic, enables HTTP/2 and HTTP/3, and is required for many browser features.

**Enforcement:**
- Set HSTS header to force HTTPS
- Redirect HTTP to HTTPS
- Use secure cookies

## Input Validation

Never trust user input. Validate on the server:

\`\`\`typescript
import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email().max(255),
  name: z.string().min(1).max(100),
});

export async function POST(request) {
  const body = await request.json();
  
  const result = userSchema.safeParse(body);
  if (!result.success) {
    return Response.json({ error: result.error }, { status: 400 });
  }
  
  // Proceed with validated data
}
\`\`\`

## Rate Limiting

Prevent abuse with rate limiting:

\`\`\`typescript
const rateLimit = new Map();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimit.get(ip);
  
  if (!limit || now - limit.timestamp > 60000) {
    rateLimit.set(ip, { count: 1, timestamp: now });
    return true;
  }
  
  if (limit.count >= 100) {
    return false;
  }
  
  limit.count++;
  return true;
}
\`\`\`

## Dependency Security

Keep dependencies updated and audit regularly:

\`\`\`bash
npm audit
npm update
\`\`\`

## Conclusion

Security requires defense in depth. Implement security headers, validate all input, use HTTPS, rate limit endpoints, and keep dependencies updated. No single measure is sufficient, but together they create robust protection.
    `
  }
];

export const allTags = [...new Set(posts.flatMap(post => post.tags))].sort();
