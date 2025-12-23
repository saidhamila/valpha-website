import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for vAlpha. Our commitment to quality and security.",
};

export default function TermsPage() {
  return (
    <main className="pt-32 pb-16">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
          <h1 className="text-4xl font-bold font-heading mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing our website at <a href="https://valpha.dev">valpha.dev</a>, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Services and Quotes</h2>
            <p>
              vAlpha provides custom software development, AI integration, and systems integration services. Any quotes provided via our website are estimates based on the information provided and do not constitute a binding contract until a formal service agreement is signed.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
            <p>
              The content on this website, including text, graphics, logos, and code, is the property of vAlpha and is protected by intellectual property laws. For custom development projects, ownership of intellectual property will be defined in the specific service agreement for that project.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
            <p>
              In no event shall vAlpha be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Hosting and Maintenance</h2>
            <p>
              Our hosting and maintenance services are subject to the terms of our specific service agreements. We strive for high availability and security, but cannot guarantee 100% uptime due to the nature of cloud infrastructure and third-party dependencies.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with standard international business practices and any specific jurisdiction mentioned in our formal service agreements.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Contact Information</h2>
            <p>
              Questions about the Terms of Service should be sent to us at:
            </p>
            <p>
              Email: <a href="mailto:contact@valpha.dev">contact@valpha.dev</a>
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
