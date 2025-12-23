"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/home/Hero").then((mod) => mod.Hero), { ssr: false });
const LogoStrip = dynamic(() => import("@/components/home/LogoStrip").then((mod) => mod.LogoStrip), { ssr: false });

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <LogoStrip />
    </div>
  );
}
