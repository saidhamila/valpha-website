import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center pt-20">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-sky/10 text-sky">
            <Search size={48} />
          </div>
          
          <h1 className="text-6xl sm:text-8xl font-bold font-heading text-foreground mb-6">
            404
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-foreground mb-4">
            Page Not Found
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-full bg-sky text-primary hover:bg-sky/90 transition-colors"
            >
              <Home size={18} />
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-full border border-border text-foreground hover:bg-muted transition-colors"
            >
              Contact Support
            </Link>
          </div>
          
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-wider">
              Popular Pages
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/services" className="text-foreground hover:text-sky transition-colors">
                Services
              </Link>
              <Link href="/work" className="text-foreground hover:text-sky transition-colors">
                Portfolio
              </Link>
              <Link href="/blog" className="text-foreground hover:text-sky transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-foreground hover:text-sky transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
