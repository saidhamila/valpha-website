"use client";

import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  id?: string;
  dark?: boolean;
}

export function Section({
  children,
  className,
  containerClassName,
  eyebrow,
  title,
  description,
  id,
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 sm:py-28",
        dark ? "bg-primary text-primary-foreground" : "bg-background",
        className
      )}
    >
      <Container className={containerClassName}>
        {(eyebrow || title || description) && (
          <div className="mb-12 sm:mb-16 max-w-2xl">
            {eyebrow && (
              <p className={cn(
                "text-sm font-medium uppercase tracking-wider mb-3",
                dark ? "text-sky" : "text-sky"
              )}>
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className={cn(
                "text-3xl sm:text-4xl font-semibold tracking-tight font-heading",
                dark ? "text-white" : "text-foreground"
              )}>
                {title}
              </h2>
            )}
            {description && (
              <p className={cn(
                "mt-4 text-lg leading-relaxed",
                dark ? "text-gray-400" : "text-muted-foreground"
              )}>
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
