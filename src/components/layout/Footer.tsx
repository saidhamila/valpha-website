"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Container } from "./Container";

const footerLinks = {
    company: [
      { href: "/about", label: "About" },
      { href: "/work", label: "Work" },
      { href: "/blog", label: "Blog" },
      { href: "/quote", label: "Get a Quote" },
    ],
  services: [
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/saas-development", label: "SaaS Development" },
    { href: "/services/ai-assistance", label: "AI Assistance" },
    { href: "/services/api-integration", label: "API & Systems Integration" },
  ],
};

const socialLinks = [
  { href: "https://github.com/valpha", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/company/valpha", label: "LinkedIn", icon: Linkedin },
  { href: "https://twitter.com/valpha", label: "Twitter", icon: Twitter },
];

export function Footer() {
  return (
    <footer className="bg-[#020617] text-white">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                  <img 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-design-13-1766536595488.png?width=8000&height=8000&resize=contain" 
                    alt="vAlpha Logo" 
                    className="h-10 w-auto invert"
                  />
                <span className="text-2xl font-bold font-heading tracking-tight text-white">vAlpha</span>
              </Link>
              <p className="text-gray-400 max-w-sm leading-relaxed">
                High-performance software solutions for modern businesses. Specializing in Web, SaaS, AI, and Systems Integration.
              </p>
              <div className="mt-6 space-y-2 text-sm text-gray-400">
                <p>Contact: <a href="mailto:contact@valpha.dev" className="text-white hover:text-sky transition-colors">contact@valpha.dev</a></p>
              </div>
              <div className="flex gap-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} vAlpha. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}