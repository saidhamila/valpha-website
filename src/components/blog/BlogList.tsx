"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { posts, allTags } from "@/lib/content/posts";
import { cn } from "@/lib/utils";

export function BlogList() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  return (
    <Section className="bg-muted/30">
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelectedTag(null)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-full transition-colors",
            selectedTag === null
              ? "bg-sky text-primary"
              : "bg-card border border-border text-muted-foreground hover:text-foreground"
          )}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-full transition-colors",
              selectedTag === tag
                ? "bg-sky text-primary"
                : "bg-card border border-border text-muted-foreground hover:text-foreground"
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block p-6 sm:p-8 rounded-2xl border border-border bg-card hover:border-sky/50 transition-all"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-sky/10 text-sky"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-xl sm:text-2xl font-bold font-heading text-foreground group-hover:text-sky transition-colors mb-3">
                  {post.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                  <span>by {post.author}</span>
                </div>

                <span className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-sky group-hover:gap-3 transition-all">
                  Read more
                  <ArrowRight size={16} />
                </span>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No posts found with this tag.</p>
          <button
            onClick={() => setSelectedTag(null)}
            className="mt-4 text-sky hover:underline"
          >
            Clear filter
          </button>
        </div>
      )}
    </Section>
  );
}