import type { Metadata } from "next";
import { QuoteHero } from "@/components/quote/QuoteHero";
import { QuoteSection } from "@/components/quote/QuoteSection";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: "Request a personalized quote for your next software project. Web, SaaS, AI, and Systems Integration solutions from vAlpha.",
};

export default function QuotePage() {
  return (
    <>
      <QuoteHero />
      <QuoteSection />
    </>
  );
}
