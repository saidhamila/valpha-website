"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/home").then((mod) => mod.Hero), { ssr: false });
const LogoStrip = dynamic(() => import("@/components/home").then((mod) => mod.LogoStrip), { ssr: false });
const ServicesOverview = dynamic(() => import("@/components/home").then((mod) => mod.ServicesOverview), { ssr: false });
const Stats = dynamic(() => import("@/components/home").then((mod) => mod.Stats), { ssr: false });
const Process = dynamic(() => import("@/components/home").then((mod) => mod.Process), { ssr: false });
const Benefits = dynamic(() => import("@/components/home").then((mod) => mod.Benefits), { ssr: false });
const TechStack = dynamic(() => import("@/components/home").then((mod) => mod.TechStack), { ssr: false });
const FeaturedCaseStudy = dynamic(() => import("@/components/home").then((mod) => mod.FeaturedCaseStudy), { ssr: false });
const Testimonials = dynamic(() => import("@/components/home").then((mod) => mod.Testimonials), { ssr: false });
const FAQ = dynamic(() => import("@/components/home").then((mod) => mod.FAQ), { ssr: false });
const CTAStrip = dynamic(() => import("@/components/home").then((mod) => mod.CTAStrip), { ssr: false });

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