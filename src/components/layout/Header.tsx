"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe, Layout, Bot, Plug } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { ThemeToggle } from "@/components/ThemeToggle";

const serviceLinks = [
  { href: "/services/web-development", label: "Web Development", icon: Globe },
  { href: "/services/saas-development", label: "SaaS Development", icon: Layout },
  { href: "/services/ai-assistance", label: "AI Assistance", icon: Bot },
  { href: "/services/api-integration", label: "API & Systems Integration", icon: Plug },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/about", label: "About" },
  { href: "/quote", label: "Get a Quote" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 100);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 sm:h-20">
            <Link
              href="/"
              className="flex items-center gap-2"
            >
                    <img 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-design-13-1766536595488.png?width=8000&height=8000&resize=contain" 
                      alt="vAlpha Logo" 
                      className="h-8 w-auto sm:h-10 dark:invert"
                    />
              <span className="text-xl font-bold font-heading tracking-tight text-foreground">vAlpha</span>
            </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div 
                  key={link.href} 
                  className="relative" 
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href="/services"
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors rounded-lg inline-flex items-center gap-1",
                      pathname.startsWith("/services")
                        ? "text-sky"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform duration-200",
                        isServicesOpen && "rotate-180"
                      )}
                    />
                  </Link>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="w-72 py-2 rounded-xl border border-border bg-card shadow-lg">
                          <Link
                            href="/services"
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                          >
                            All Services
                          </Link>
                          <div className="my-2 border-t border-border" />
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                            >
                              <service.icon size={18} className="text-sky" />
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                    pathname === link.href
                      ? "text-sky"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full bg-sky text-primary transition-all hover:bg-sky/90 focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-2 focus:ring-offset-background"
            >
              Get a Quote
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </Container>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <Container className="py-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  link.hasDropdown ? (
                    <div key={link.href}>
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={cn(
                          "w-full px-4 py-3 text-base font-medium rounded-lg transition-colors flex items-center justify-between",
                          pathname.startsWith("/services")
                            ? "text-sky bg-sky/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        )}
                      >
                        {link.label}
                        <ChevronDown
                          size={18}
                          className={cn(
                            "transition-transform duration-200",
                            isMobileServicesOpen && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.15 }}
                            className="pl-4 overflow-hidden"
                          >
                            <Link
                              href="/services"
                              className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground"
                            >
                              All Services
                            </Link>
                            {serviceLinks.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground"
                              >
                                <service.icon size={16} className="text-sky" />
                                {service.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "px-4 py-3 text-base font-medium rounded-lg transition-colors",
                        pathname === link.href
                          ? "text-sky bg-sky/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                ))}
                <Link
                  href="/quote"
                  className="mt-4 inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-full bg-sky text-primary"
                >
                  Get a Quote
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}