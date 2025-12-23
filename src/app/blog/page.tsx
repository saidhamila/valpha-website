import type { Metadata } from "next";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogList } from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on software development, AI, architecture patterns, and building products that scale.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogList />
    </>
  );
}
