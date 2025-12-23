"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/home/Hero").then((mod) => mod.Hero), { ssr: false });
const LogoStrip = dynamic(() => import("@/components/home/LogoStrip").then((mod) => mod.LogoStrip), { ssr: false });
const ServicesOverview = dynamic(() => import("@/components/home/ServicesOverview").then((mod) => mod.ServicesOverview), { ssr: false });
const Stats = dynamic(() => import("@/components/home/Stats").then((mod) => mod.Stats), { ssr: false });
const Process = dynamic(() => import("@/components/home/Process").then((mod) => mod.Process), { ssr: false });
const Benefits = dynamic(() => import("@/components/home/Benefits").then((mod) => mod.Benefits), { ssr: false });
const TechStack = dynamic(() => import("@/components/home/TechStack").then((mod) => mod.TechStack), { ssr: false });
const FeaturedCaseStudy = dynamic(() => import("@/components/home/FeaturedCaseStudy").then((mod) => mod.FeaturedCaseStudy), { ssr: false });
const Testimonials = dynamic(() => import("@/components/home/Testimonials").then((mod) => mod.Testimonials), { ssr: false });
const FAQ = dynamic(() => import("@/components/home/FAQ").then((mod) => mod.FAQ), { ssr: false });
const CTAStrip = dynamic(() => import("@/components/home/CTAStrip").then((mod) => mod.CTAStrip), { ssr: false });

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <>
      <Hero />
      <LogoStrip />
      <ServicesOverview />
      <Stats />
      <Process />
      <Benefits />
      <TechStack />
      <FeaturedCaseStudy />
      <Testimonials />
      <FAQ />
      <CTAStrip />
    </>
  );
}