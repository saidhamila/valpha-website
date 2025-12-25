"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Cookie Consent Banner
 * 
 * GDPR-compliant cookie consent with preferences storage.
 * Does not affect visuals of existing pages.
 */

interface CookiePreferences {
    necessary: boolean; // Always true, required
    analytics: boolean;
    marketing: boolean;
}

const COOKIE_CONSENT_KEY = "valpha-cookie-consent";

export function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>({
        necessary: true,
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        // Check if consent has already been given
        const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (!stored) {
            // Delay showing banner for better UX
            const timer = setTimeout(() => setShowBanner(true), 1500);
            return () => clearTimeout(timer);
        } else {
            try {
                const parsed = JSON.parse(stored);
                setPreferences(parsed);
            } catch {
                setShowBanner(true);
            }
        }
    }, []);

    const handleAcceptAll = () => {
        const allAccepted: CookiePreferences = {
            necessary: true,
            analytics: true,
            marketing: true,
        };
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(allAccepted));
        setPreferences(allAccepted);
        setShowBanner(false);

        // Initialize analytics if accepted
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("consent", "update", {
                analytics_storage: "granted",
                ad_storage: "granted",
            });
        }
    };

    const handleRejectAll = () => {
        const onlyNecessary: CookiePreferences = {
            necessary: true,
            analytics: false,
            marketing: false,
        };
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(onlyNecessary));
        setPreferences(onlyNecessary);
        setShowBanner(false);
    };

    const handleSavePreferences = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
        setShowBanner(false);
        setShowPreferences(false);

        // Update analytics consent
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("consent", "update", {
                analytics_storage: preferences.analytics ? "granted" : "denied",
                ad_storage: preferences.marketing ? "granted" : "denied",
            });
        }
    };

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                    role="dialog"
                    aria-label="Cookie consent"
                    aria-describedby="cookie-description"
                >
                    <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-2xl p-6">
                        {!showPreferences ? (
                            // Main consent view
                            <div className="flex flex-col md:flex-row md:items-center gap-4">
                                <div className="flex-1">
                                    <h3 className="font-semibold text-foreground mb-2">
                                        🍪 We value your privacy
                                    </h3>
                                    <p id="cookie-description" className="text-sm text-muted-foreground">
                                        We use cookies to enhance your browsing experience and analyze our traffic.
                                        By clicking &quot;Accept All&quot;, you consent to our use of cookies.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <button
                                        onClick={() => setShowPreferences(true)}
                                        className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                        aria-label="Customize cookie preferences"
                                    >
                                        Preferences
                                    </button>
                                    <button
                                        onClick={handleRejectAll}
                                        className="px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-muted transition-colors"
                                        aria-label="Reject all optional cookies"
                                    >
                                        Reject All
                                    </button>
                                    <button
                                        onClick={handleAcceptAll}
                                        className="px-4 py-2 text-sm font-medium bg-sky text-primary-foreground rounded-lg hover:bg-sky/90 transition-colors"
                                        aria-label="Accept all cookies"
                                    >
                                        Accept All
                                    </button>
                                </div>
                            </div>
                        ) : (
                            // Preferences view
                            <div>
                                <h3 className="font-semibold text-foreground mb-4">Cookie Preferences</h3>
                                <div className="space-y-4 mb-6">
                                    {/* Necessary cookies */}
                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            id="necessary"
                                            checked={true}
                                            disabled
                                            className="mt-1 h-4 w-4"
                                            aria-describedby="necessary-desc"
                                        />
                                        <div>
                                            <label htmlFor="necessary" className="font-medium text-foreground">
                                                Necessary
                                            </label>
                                            <p id="necessary-desc" className="text-sm text-muted-foreground">
                                                Required for the website to function. Cannot be disabled.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Analytics cookies */}
                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            id="analytics"
                                            checked={preferences.analytics}
                                            onChange={(e) =>
                                                setPreferences({ ...preferences, analytics: e.target.checked })
                                            }
                                            className="mt-1 h-4 w-4"
                                            aria-describedby="analytics-desc"
                                        />
                                        <div>
                                            <label htmlFor="analytics" className="font-medium text-foreground">
                                                Analytics
                                            </label>
                                            <p id="analytics-desc" className="text-sm text-muted-foreground">
                                                Help us understand how visitors interact with our website.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Marketing cookies */}
                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            id="marketing"
                                            checked={preferences.marketing}
                                            onChange={(e) =>
                                                setPreferences({ ...preferences, marketing: e.target.checked })
                                            }
                                            className="mt-1 h-4 w-4"
                                            aria-describedby="marketing-desc"
                                        />
                                        <div>
                                            <label htmlFor="marketing" className="font-medium text-foreground">
                                                Marketing
                                            </label>
                                            <p id="marketing-desc" className="text-sm text-muted-foreground">
                                                Used to deliver relevant advertisements.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <button
                                        onClick={() => setShowPreferences(false)}
                                        className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={handleSavePreferences}
                                        className="px-4 py-2 text-sm font-medium bg-sky text-primary-foreground rounded-lg hover:bg-sky/90 transition-colors"
                                    >
                                        Save Preferences
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// Type declaration for gtag
declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}
