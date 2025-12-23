"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  readTime: string;
  content: string;
}

interface BlogPostProps {
  post: Post;
  prevPost: Post | null;
  nextPost: Post | null;
}

export function BlogPost({ post, prevPost, nextPost }: BlogPostProps) {
  return (
    <>
      <article className="pt-32 pb-20 sm:pt-40">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to blog
            </Link>

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

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-foreground tracking-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-12 pb-8 border-b border-border">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-heading prose-headings:tracking-tight prose-a:text-sky prose-code:text-sky prose-pre:bg-primary prose-pre:text-primary-foreground"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />
        </Container>
      </article>

      <section className="py-12 border-t border-border bg-muted/30">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group flex-1 p-6 rounded-2xl border border-border bg-card hover:border-sky/50 transition-all"
              >
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <ArrowLeft size={14} />
                  Previous
                </span>
                <p className="font-semibold text-foreground mt-2 group-hover:text-sky transition-colors">
                  {prevPost.title}
                </p>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex-1 p-6 rounded-2xl border border-border bg-card hover:border-sky/50 transition-all text-right"
              >
                <span className="text-sm text-muted-foreground flex items-center justify-end gap-1">
                  Next
                  <ArrowRight size={14} />
                </span>
                <p className="font-semibold text-foreground mt-2 group-hover:text-sky transition-colors">
                  {nextPost.title}
                </p>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </Container>
      </section>
    </>
  );
}

function formatContent(content: string): string {
  return content
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
    .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.+)$/gm, (match) => {
      if (match.startsWith('<')) return match;
      return `<p>${match}</p>`;
    });
}
