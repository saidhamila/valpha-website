import type { Metadata } from "next";
import { WorkHero } from "@/components/work/WorkHero";
import { CaseStudyGrid } from "@/components/work/CaseStudyGrid";
import { CTAStrip } from "@/components/home/CTAStrip";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies and success stories from our work with innovative companies across fintech, SaaS, healthcare, and e-commerce.",
};

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <CaseStudyGrid />
      <CTAStrip />
    </>
  );
}
