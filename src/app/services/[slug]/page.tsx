import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { services, faqs } from "@/lib/content/services";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Services`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceIndex = services.findIndex((s) => s.slug === slug);
  const prevService = serviceIndex > 0 ? services[serviceIndex - 1] : null;
  const nextService = serviceIndex < services.length - 1 ? services[serviceIndex + 1] : null;

  return (
    <main>
      <section className="pt-32 pb-16 bg-gradient-to-b from-sky/5 to-transparent">
        <Container>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            All Services
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-sky/10">
                <service.icon className="w-6 h-6 text-sky" />
              </div>
              <span className="text-sm font-medium text-sky">{service.pricing}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
              {service.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {service.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full bg-sky text-primary hover:bg-sky/90 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full border border-border text-foreground hover:bg-muted transition-colors"
              >
                View Work
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl border border-border bg-card"
            >
              <h3 className="text-xl font-bold font-heading text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-6">
              What You Get
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {service.description}
            </p>
            <ul className="space-y-4">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-sky mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
              Our Process
            </h3>
            <div className="space-y-6">
              {service.process.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-sky/10 text-sky flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{step.step}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-8 text-center">
            Common Questions
          </h2>
          <ServiceFAQ faqs={faqs} />
        </div>
      </Section>

      <section className="py-16 bg-gradient-to-r from-sky to-sky/70">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-primary mb-4">
              Ready to get started?
            </h2>
            <p className="text-primary/80 mb-8 max-w-xl mx-auto">
              Let&apos;s discuss how we can help you achieve your goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Book a Discovery Call
            </Link>
          </div>
        </Container>
      </section>

      <Section>
        <div className="flex justify-between items-center">
          {prevService ? (
            <Link href={`/services/${prevService.slug}`} className="group">
              <p className="text-sm text-muted-foreground mb-1">Previous</p>
              <p className="font-medium text-foreground group-hover:text-sky transition-colors flex items-center gap-2">
                <ArrowLeft size={16} />
                {prevService.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          
          {nextService ? (
            <Link href={`/services/${nextService.slug}`} className="group text-right">
              <p className="text-sm text-muted-foreground mb-1">Next</p>
              <p className="font-medium text-foreground group-hover:text-sky transition-colors flex items-center gap-2">
                {nextService.title}
                <ArrowRight size={16} />
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Section>
    </main>
  );
}
