"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCcw, Home, AlertCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center pt-20">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-500/10 text-red-500">
            <AlertCircle size={48} />
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold font-heading text-foreground mb-6">
            Something went wrong!
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            An unexpected error occurred. We have been notified and are working to fix it.
            In the meantime, you can try refreshing the page or head back to home.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => reset()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-full bg-sky text-primary hover:bg-sky/90 transition-colors"
            >
              <RefreshCcw size={18} />
              Try Again
            </button>
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-full border border-border text-foreground hover:bg-muted transition-colors"
            >
              <Home size={18} />
              Back to Home
            </Link>
          </div>
          
          <div className="mt-16 p-6 rounded-2xl bg-muted/50 border border-border text-left">
            <p className="text-xs font-mono text-muted-foreground break-all">
              Error ID: {error.digest || "Unknown"}
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
