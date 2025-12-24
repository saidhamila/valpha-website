import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, Shield, FileText, Users } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Company | vAlpha",
  description: "Learn more about vAlpha, our mission, and how we work.",
};

const companyLinks = [
  {
    title: "About Us",
    description: "Our mission, vision, and the team behind vAlpha.",
    href: "/about",
    icon: Users,
  },
  {
    title: "Contact",
    description: "Get in touch with us for project inquiries or support.",
    href: "/contact",
    icon: Mail,
  },
  {
    title: "Privacy Policy",
    description: "How we handle and protect your data.",
    href: "/privacy",
    icon: Shield,
  },
  {
    title: "Terms of Service",
    description: "The rules and guidelines for using our services.",
    href: "/terms",
    icon: FileText,
  },
];

export default function CompanyPage() {
  return (
    <main className="pt-32 pb-16">
      <Container>
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-foreground mb-6">
            Company
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            High-performance software solutions for modern businesses. We specialize in building fast, secure, and scalable digital products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {companyLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group p-8 rounded-3xl border border-border bg-card hover:border-sky/50 transition-all hover:shadow-xl hover:shadow-sky/5"
            >
              <div className="p-3 rounded-2xl bg-sky/10 w-fit mb-6 group-hover:bg-sky/20 transition-colors">
                <link.icon className="w-6 h-6 text-sky" />
              </div>
              <h2 className="text-2xl font-bold font-heading text-foreground mb-3 flex items-center gap-2">
                {link.title}
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky" />
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>

      <Section>
        <div className="p-12 rounded-[2.5rem] bg-sky text-primary text-center">
          <h2 className="text-3xl font-bold font-heading mb-4">Ready to work with us?</h2>
          <p className="text-primary/80 mb-8 max-w-xl mx-auto text-lg">
            Let's discuss your next project and how vAlpha can help you achieve your goals.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </Section>
    </main>
  );
}
