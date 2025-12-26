
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function OfflinePage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-md"
            >
                {/* Offline Icon */}
                <div className="mb-8">
                    <svg
                        className="w-24 h-24 mx-auto text-muted-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                    </svg>
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-foreground mb-4">
                    You&apos;re Offline
                </h1>

                {/* Description */}
                <p className="text-muted-foreground mb-8">
                    It looks like you&apos;ve lost your internet connection.
                    Please check your connection and try again.
                </p>

                {/* Retry Button */}
                <button
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center justify-center px-6 py-3 bg-sky text-primary-foreground font-medium rounded-lg hover:bg-sky/90 transition-colors focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-2 focus:ring-offset-background"
                    aria-label="Retry loading the page"
                >
                    Try Again
                </button>

                {/* Home Link */}
                <div className="mt-6">
                    <Link
                        href="/"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
