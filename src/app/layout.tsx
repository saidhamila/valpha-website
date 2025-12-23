import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "vAlpha | AI-Powered Software Engineering",
    template: "%s | vAlpha",
  },
  description: "We build intelligent software solutions—web apps, AI assistants, and automation systems—that help businesses scale and innovate.",
  keywords: ["software development", "AI", "automation", "web development", "SaaS", "consulting"],
  authors: [{ name: "vAlpha" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "vAlpha",
    title: "vAlpha | AI-Powered Software Engineering",
    description: "We build intelligent software solutions that help businesses automate, scale, and innovate.",
  },
  twitter: {
    card: "summary_large_image",
    title: "vAlpha | AI-Powered Software Engineering",
    description: "We build intelligent software solutions that help businesses automate, scale, and innovate.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="25497254-eb33-418f-af86-b167421cec1c"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <Providers>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-sky focus:text-primary focus:rounded-lg"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <ScrollToTop />
        </Providers>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}