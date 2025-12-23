"use client";

import {
  Hero,
  LogoStrip,
  ServicesOverview,
  Stats,
  Process,
  Benefits,
  TechStack,
  FeaturedCaseStudy,
  Testimonials,
  FAQ,
  CTAStrip,
} from "@/components/home";

export default function Home() {
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