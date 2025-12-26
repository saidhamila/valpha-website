import type { Metadata, Viewport } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieConsent } from "@/components/CookieConsent";
import {
  JsonLd,
  generateOrganizationSchema,
  generateWebSiteSchema
} from "@/lib/schema";


// ============================================
// METADATA & SEO
// ============================================

export const metadata: Metadata = {
  title: {
    default: "vAlpha | Creative Digital Agency",
    template: "%s | vAlpha",
  },
  description: "High-performance software and immersive digital experiences for the next generation of brands.",
  keywords: ["digital agency", "web development", "software development", "creative agency", "branding"],
  authors: [{ name: "vAlpha" }],
  creator: "vAlpha",
  publisher: "vAlpha",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://valpha.com"),
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "vAlpha",
    title: "vAlpha | Creative Digital Agency",
    description: "High-performance software and immersive digital experiences for the next generation of brands.",
  },
  twitter: {
    card: "summary_large_image",
    title: "vAlpha | Creative Digital Agency",
    description: "High-performance software and immersive digital experiences for the next generation of brands.",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "vAlpha",
  },
  formatDetection: {
    telephone: false,
  },
};

// Viewport configuration for mobile optimization
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFBFC" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

// ============================================
// ROOT LAYOUT
// ============================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <JsonLd data={generateOrganizationSchema()} />
        <JsonLd data={generateWebSiteSchema()} />

        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://slelguoygbfzlpylpxfs.supabase.co" />
        <link rel="preconnect" href="https://images.unsplash.com" />

        {/* DNS prefetch for additional performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="antialiased">
        {/* Service Worker Registration */}
        <Script
          id="sw-register"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('[SW] Registration successful:', registration.scope);
                  }).catch(function(error) {
                    console.log('[SW] Registration failed:', error);
                  });
                });
              }
            `,
          }}
        />

        {/* Google Analytics - Replace GA_ID with your ID */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="lazyOnload"
            />
            <Script
              id="google-analytics"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {/* External scripts - load after page is interactive */}
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="lazyOnload"
          data-orchids-project-id="25497254-eb33-418f-af86-b167421cec1c"
        />
        <ErrorReporter />
        <Script
          id="route-messenger"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="lazyOnload"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />

        <Providers>
          {/* Accessibility: Skip to main content link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-sky focus:text-primary focus:rounded-lg focus:ring-2 focus:ring-sky focus:ring-offset-2"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" role="main">{children}</main>
          <Footer />
          <ScrollToTop />
        </Providers>
        <CookieConsent />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}


