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

const companyLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", hasDropdown: true, dropdownLinks: serviceLinks },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/company", label: "Company", hasDropdown: true, dropdownLinks: companyLinks },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpenDropdowns, setMobileOpenDropdowns] = useState<Record<string, boolean>>({});
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
    setActiveDropdown(null);
    setMobileOpenDropdowns({});
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileOpenDropdowns(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
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
          <Link href="/" className="flex items-center gap-2">
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-design-13-1766536595488.png?width=8000&height=8000&resize=contain" 
              alt="vAlpha Logo" 
              className="h-8 w-auto sm:h-10 dark:invert"
            />
            <span className="text-xl font-bold font-heading tracking-tight text-foreground">vAlpha</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div 
                  key={link.label} 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors rounded-full inline-flex items-center gap-1",
                      (link.dropdownLinks?.some(d => pathname.startsWith(d.href)) || pathname.startsWith(link.href))
                        ? "text-sky bg-sky/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-200 opacity-50",
                        activeDropdown === link.label && "rotate-180 opacity-100"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="w-64 overflow-hidden rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-xl shadow-primary/5">
                          {link.href !== "/company" && (
                            <>
                              <Link
                                href={link.href}
                                className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                              >
                                All {link.label}
                              </Link>
                              <div className="border-t border-border" />
                            </>
                          )}
                          <div className="py-1">
                            {link.dropdownLinks?.map((subLink: any) => (
                              <Link
                                key={subLink.href}
                                href={subLink.href}
                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                              >
                                {subLink.icon && <subLink.icon size={16} className="text-sky/80" />}
                                {subLink.label}
                              </Link>
                            ))}
                          </div>
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
                    "px-3 py-2 text-sm font-medium transition-colors rounded-full",
                    pathname === link.href
                      ? "text-sky bg-sky/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 pl-2 border-l border-border/50">
            <ThemeToggle />
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full bg-sky text-primary transition-all hover:bg-sky/90 active:scale-95"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <Container className="py-6">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  link.hasDropdown ? (
                    <div key={link.label} className="py-1">
                      <button
                        onClick={() => toggleMobileDropdown(link.label)}
                        className={cn(
                          "w-full px-4 py-2.5 text-base font-medium rounded-xl transition-colors flex items-center justify-between",
                          (link.dropdownLinks?.some(d => pathname.startsWith(d.href)) || pathname.startsWith(link.href))
                            ? "text-sky bg-sky/5"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        )}
                      >
                        {link.label}
                        <ChevronDown
                          size={18}
                          className={cn(
                            "transition-transform duration-200 opacity-50",
                            mobileOpenDropdowns[link.label] && "rotate-180 opacity-100"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileOpenDropdowns[link.label] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.15 }}
                            className="pl-4 mt-1 space-y-1"
                          >
                            {link.href !== "/company" && (
                              <Link
                                href={link.href}
                                className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
                              >
                                All {link.label}
                              </Link>
                            )}
                            {link.dropdownLinks?.map((subLink: any) => (
                              <Link
                                key={subLink.href}
                                href={subLink.href}
                                className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                              >
                                {subLink.icon && <subLink.icon size={16} className="text-sky/70" />}
                                {subLink.label}
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
                        "px-4 py-2.5 text-base font-medium rounded-xl transition-colors",
                        pathname === link.href
                          ? "text-sky bg-sky/5"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                ))}
                <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-full bg-sky text-primary transition-all hover:bg-sky/90 active:scale-[0.98]"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
