"use client";

import { useCallback, useEffect } from "react";

/**
 * Analytics Hook
 * 
 * Provides a simple interface for tracking events and page views.
 * Works with Google Analytics but can be extended for other providers.
 */

// Event categories
export type EventCategory =
    | "engagement"
    | "conversion"
    | "navigation"
    | "form"
    | "error"
    | "custom";

// Standard events
export interface AnalyticsEvent {
    category: EventCategory;
    action: string;
    label?: string;
    value?: number;
    nonInteraction?: boolean;
}

/**
 * Check if analytics is enabled and user has consented
 */
function isAnalyticsEnabled(): boolean {
    if (typeof window === "undefined") return false;

    try {
        const consent = localStorage.getItem("valpha-cookie-consent");
        if (!consent) return false;

        const parsed = JSON.parse(consent);
        return parsed.analytics === true;
    } catch {
        return false;
    }
}

/**
 * Track a page view
 */
export function trackPageView(path: string, title?: string) {
    if (!isAnalyticsEnabled()) return;

    if (typeof window.gtag === "function") {
        window.gtag("event", "page_view", {
            page_path: path,
            page_title: title,
        });
    }
}

/**
 * Track a custom event
 */
export function trackEvent(event: AnalyticsEvent) {
    if (!isAnalyticsEnabled()) return;

    if (typeof window.gtag === "function") {
        window.gtag("event", event.action, {
            event_category: event.category,
            event_label: event.label,
            value: event.value,
            non_interaction: event.nonInteraction,
        });
    }
}

/**
 * Track form submission
 */
export function trackFormSubmission(formName: string, success: boolean) {
    trackEvent({
        category: "form",
        action: success ? "submit_success" : "submit_error",
        label: formName,
    });
}

/**
 * Track CTA click
 */
export function trackCTAClick(ctaName: string, location: string) {
    trackEvent({
        category: "engagement",
        action: "cta_click",
        label: `${ctaName} - ${location}`,
    });
}

/**
 * Track outbound link click
 */
export function trackOutboundLink(url: string) {
    trackEvent({
        category: "navigation",
        action: "outbound_click",
        label: url,
    });
}

/**
 * React hook for analytics
 * 
 * Usage:
 * const { trackEvent, trackPageView } = useAnalytics();
 */
export function useAnalytics() {
    // Track page view on mount
    useEffect(() => {
        if (typeof window !== "undefined") {
            trackPageView(window.location.pathname, document.title);
        }
    }, []);

    const track = useCallback((event: AnalyticsEvent) => {
        trackEvent(event);
    }, []);

    const trackPage = useCallback((path: string, title?: string) => {
        trackPageView(path, title);
    }, []);

    return {
        trackEvent: track,
        trackPageView: trackPage,
        trackFormSubmission,
        trackCTAClick,
        trackOutboundLink,
        isEnabled: isAnalyticsEnabled,
    };
}

// Type declaration for gtag
declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
        dataLayer?: unknown[];
    }
}
