"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Container } from "./Container";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services/web-saas", label: "Web Development" },
    { href: "/services/ai-automation", label: "AI & Automation" },
    { href: "/services/api-integration", label: "Integrations" },
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
            <Link href="/" className="text-2xl font-bold font-heading tracking-tight text-white">
              vAlpha
            </Link>
            <p className="mt-4 text-gray-400 max-w-sm leading-relaxed">
              We build intelligent software solutions that help businesses automate, scale, and innovate.
            </p>
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