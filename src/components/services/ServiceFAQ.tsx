"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQ[];
}

export function ServiceFAQ({ faqs }: ServiceFAQProps) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-4">
      {faqs.map((faq, index) => (
        <Accordion.Item
          key={index}
          value={`item-${index}`}
          className="rounded-xl border border-border bg-card overflow-hidden"
        >
          <Accordion.Header>
            <Accordion.Trigger className="flex items-center justify-between w-full p-5 text-left font-medium text-foreground hover:bg-muted/50 transition-colors group">
              {faq.question}
              <ChevronDown
                size={20}
                className={cn(
                  "text-muted-foreground transition-transform duration-200",
                  "group-data-[state=open]:rotate-180"
                )}
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
              {faq.answer}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
