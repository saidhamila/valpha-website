"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// ============================================
// LOADING SKELETONS
// ============================================

// Hero skeleton - full viewport height
const HeroSkeleton = () => (
  <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted animate-pulse">
    <div className="container mx-auto px-6 pt-32 pb-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="h-16 bg-muted rounded-lg w-3/4" />
          <div className="h-8 bg-muted rounded-lg w-1/2" />
          <div className="h-24 bg-muted rounded-lg w-full" />
          <div className="flex gap-4 pt-4">
            <div className="h-12 w-40 bg-muted rounded-lg" />
            <div className="h-12 w-40 bg-muted rounded-lg" />
          </div>
        </div>
        <div className="flex-1">
          <div className="aspect-square bg-muted rounded-2xl" />
        </div>
      </div>
    </div>
  </div>
);

// Section skeleton - standard height
const SectionSkeleton = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-6 animate-pulse">
      <div className="h-10 bg-muted rounded-lg w-1/3 mx-auto mb-12" />
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-64 bg-muted rounded-xl" />
        ))}
      </div>
    </div>
  </section>
);

// Compact skeleton for strips
const StripSkeleton = () => (
  <div className="py-12 bg-muted/50">
    <div className="container mx-auto px-6 animate-pulse">
      <div className="flex justify-center gap-12">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-8 w-24 bg-muted rounded" />
        ))}
      </div>
    </div>
  </div>
);

// ============================================
// DYNAMIC IMPORTS WITH LOADING STATES
// ============================================

const Hero = dynamic(
  () => import("@/components/home/Hero").then((mod) => mod.Hero),
  { ssr: false, loading: () => <HeroSkeleton /> }
);

const LogoStrip = dynamic(
  () => import("@/components/home/LogoStrip").then((mod) => mod.LogoStrip),
  { ssr: false, loading: () => <StripSkeleton /> }
);

const ServicesOverview = dynamic(
  () => import("@/components/home/ServicesOverview").then((mod) => mod.ServicesOverview),
  { ssr: false, loading: () => <SectionSkeleton /> }
);

const Benefits = dynamic(
  () => import("@/components/home/Benefits").then((mod) => mod.Benefits),
  { ssr: false, loading: () => <SectionSkeleton /> }
);

const Process = dynamic(
  () => import("@/components/home/Process").then((mod) => mod.Process),
  { ssr: false, loading: () => <SectionSkeleton /> }
);

const Stats = dynamic(
  () => import("@/components/home/Stats").then((mod) => mod.Stats),
  { ssr: false, loading: () => <SectionSkeleton /> }
);

const TechStack = dynamic(
  () => import("@/components/home/TechStack").then((mod) => mod.TechStack),
  { ssr: false, loading: () => <SectionSkeleton /> }
);

const FeaturedCaseStudy = dynamic(
  () => import("@/components/home/FeaturedCaseStudy").then((mod) => mod.FeaturedCaseStudy),
  { ssr: false, loading: () => <SectionSkeleton /> }
);

const CoreValues = dynamic(
  () => import("@/components/home/CoreValues").then((mod) => mod.CoreValues),
  { ssr: false, loading: () => <SectionSkeleton /> }
);

const FAQ = dynamic(
  () => import("@/components/home/FAQ").then((mod) => mod.FAQ),
  { ssr: false, loading: () => <SectionSkeleton /> }
);

const CTAStrip = dynamic(
  () => import("@/components/home/CTAStrip").then((mod) => mod.CTAStrip),
  { ssr: false, loading: () => <StripSkeleton /> }
);

// ============================================
// HOME PAGE COMPONENT
// ============================================

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show hero skeleton immediately for better perceived performance
  if (!mounted) {
    return <HeroSkeleton />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <LogoStrip />
      <ServicesOverview />
      <Benefits />
      <Process />
      <Stats />
      <TechStack />
      <FeaturedCaseStudy />
      <CoreValues />
      <FAQ />
      <CTAStrip />
    </div>
  );
}

