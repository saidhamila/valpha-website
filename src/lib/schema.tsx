/**
 * JSON-LD Schema Components
 * 
 * Structured data for better SEO and rich search results
 */

import type { Metadata } from "next";

// ============================================
// SCHEMA TYPES
// ============================================

export interface OrganizationSchema {
    "@context": "https://schema.org";
    "@type": "Organization";
    name: string;
    url: string;
    logo?: string;
    description?: string;
    sameAs?: string[];
    contactPoint?: {
        "@type": "ContactPoint";
        telephone?: string;
        email?: string;
        contactType: string;
        availableLanguage?: string[];
    };
    address?: {
        "@type": "PostalAddress";
        streetAddress?: string;
        addressLocality?: string;
        addressRegion?: string;
        postalCode?: string;
        addressCountry?: string;
    };
}

export interface WebSiteSchema {
    "@context": "https://schema.org";
    "@type": "WebSite";
    name: string;
    url: string;
    description?: string;
    potentialAction?: {
        "@type": "SearchAction";
        target: string;
        "query-input": string;
    };
}

export interface BreadcrumbSchema {
    "@context": "https://schema.org";
    "@type": "BreadcrumbList";
    itemListElement: {
        "@type": "ListItem";
        position: number;
        name: string;
        item?: string;
    }[];
}

export interface FAQSchema {
    "@context": "https://schema.org";
    "@type": "FAQPage";
    mainEntity: {
        "@type": "Question";
        name: string;
        acceptedAnswer: {
            "@type": "Answer";
            text: string;
        };
    }[];
}

export interface ServiceSchema {
    "@context": "https://schema.org";
    "@type": "Service";
    name: string;
    description: string;
    provider: {
        "@type": "Organization";
        name: string;
    };
    serviceType?: string;
    areaServed?: string;
}

// ============================================
// SCHEMA GENERATORS
// ============================================

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://valpha.com";

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema(): OrganizationSchema {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "vAlpha",
        url: BASE_URL,
        logo: `${BASE_URL}/favicon.svg`,
        description: "High-performance software and immersive digital experiences for the next generation of brands.",
        sameAs: [
            // Add social media profiles here
            // "https://twitter.com/valpha",
            // "https://linkedin.com/company/valpha",
            // "https://github.com/valpha",
        ],
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: "contact@valpha.com",
            availableLanguage: ["English"],
        },
    };
}

/**
 * Generate WebSite schema
 */
export function generateWebSiteSchema(): WebSiteSchema {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "vAlpha",
        url: BASE_URL,
        description: "High-performance software and immersive digital experiences for the next generation of brands.",
    };
}

/**
 * Generate Breadcrumb schema
 */
export function generateBreadcrumbSchema(
    items: { name: string; url?: string }[]
): BreadcrumbSchema {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem" as const,
            position: index + 1,
            name: item.name,
            item: item.url ? `${BASE_URL}${item.url}` : undefined,
        })),
    };
}

/**
 * Generate FAQ schema from Q&A pairs
 */
export function generateFAQSchema(
    faqs: { question: string; answer: string }[]
): FAQSchema {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question" as const,
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer" as const,
                text: faq.answer,
            },
        })),
    };
}

/**
 * Generate Service schema
 */
export function generateServiceSchema(
    name: string,
    description: string,
    serviceType?: string
): ServiceSchema {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        provider: {
            "@type": "Organization",
            name: "vAlpha",
        },
        serviceType,
        areaServed: "Worldwide",
    };
}

// ============================================
// REACT COMPONENT
// ============================================

interface JsonLdProps {
    data: object | object[];
}

/**
 * JSON-LD Script Component
 * Use this in page components to add structured data
 */
export function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data),
            }}
        />
    );
}

// ============================================
// METADATA HELPERS
// ============================================

/**
 * Generate canonical URL for a page
 */
export function getCanonicalUrl(path: string): string {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${BASE_URL}${cleanPath}`;
}

/**
 * Generate page metadata with canonical URL
 */
export function generatePageMetadata(
    title: string,
    description: string,
    path: string,
    image?: string
): Metadata {
    const canonical = getCanonicalUrl(path);

    return {
        title,
        description,
        alternates: {
            canonical,
        },
        openGraph: {
            title,
            description,
            url: canonical,
            images: image ? [{ url: image }] : undefined,
        },
        twitter: {
            title,
            description,
            images: image ? [image] : undefined,
        },
    };
}
