import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { services, faqs } from "@/lib/content/services";
import { ServicesFAQ } from "@/components/services/ServicesFAQ";
import { CTAStrip } from "@/components/home/CTAStrip";

export const metadata: Metadata = {
  title: "Services",
  description: "Web development, AI automation, and systems integration. Full-stack solutions for modern businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-sky/5 to-transparent">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sky font-medium mb-4">Our Services</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
              End-to-end software solutions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From custom web applications to AI-powered automation, we build the technology that powers your business growth.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="grid lg:grid-cols-2 gap-8 p-6 sm:p-8 rounded-2xl border border-border bg-card"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-sky/10">
                    <service.icon className="w-6 h-6 text-sky" />
                  </div>
                  <span className="text-sm font-medium text-sky">{service.pricing}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-sky hover:gap-3 transition-all"
                >
                  Learn more
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  What&apos;s included
                </h3>
                <ul className="space-y-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sky mt-0.5 shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <ServicesFAQ />
        </div>
      </Section>

      <CTAStrip />
    </>
  );
}