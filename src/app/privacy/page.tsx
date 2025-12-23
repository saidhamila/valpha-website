import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for vAlpha. Learn how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-16">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
          <h1 className="text-4xl font-bold font-heading mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p>
              At vAlpha, we collect minimal information necessary to provide our services and communicate with you. This includes:
            </p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, company name, and project details provided through our &quot;Get a Quote&quot; form.</li>
              <li><strong>Usage Data:</strong> Basic analytics about how you interact with our website (e.g., pages visited) to improve our user experience.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>To provide personalized project quotes and respond to your inquiries.</li>
              <li>To deliver and maintain the services you have requested.</li>
              <li>To improve our website functionality and service offerings.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. Data Retention</h2>
            <p>
              We retain your contact information for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. If you would like your data to be removed from our systems, please contact us.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Third-Party Services</h2>
            <p>
              We may use third-party services (such as website analytics and email providers) to assist in our operations. These providers have access to your information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Security</h2>
            <p>
              We implement industry-standard security measures to protect your data. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: <a href="mailto:contact@valpha.dev">contact@valpha.dev</a><br />
              Website: <a href="https://valpha.dev">valpha.dev</a>
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
