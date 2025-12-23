import { MetadataRoute } from "next";
import { posts } from "@/lib/content/posts";
import { caseStudies } from "@/lib/content/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://valpha.dev";

  const staticPages = [
    "",
    "/services",
    "/services/web-saas",
    "/services/ai-automation",
    "/services/api-integration",
    "/work",
    "/blog",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const caseStudyPages = caseStudies.map((cs) => ({
    url: `${baseUrl}/work/${cs.id}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages, ...caseStudyPages];
}