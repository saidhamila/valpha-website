import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { Timeline } from "@/components/about/Timeline";
import { Values } from "@/components/about/Values";
import { Team } from "@/components/about/Team";
import { CTAStrip } from "@/components/home/CTAStrip";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about vAlpha—our mission, values, and the team behind our AI-powered software solutions.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Timeline />
      <Values />
      <Team />
      <CTAStrip />
    </>
  );
}
