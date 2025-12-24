import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Mail, MessageSquare, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with vAlpha for your software development needs.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-heading mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Have a question or want to discuss a project? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-2xl bg-card border border-border text-center">
            <div className="w-12 h-12 bg-sky/10 rounded-xl flex items-center justify-center mx-auto mb-6 text-sky">
              <Mail size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground mb-4">Drop us a line anytime</p>
            <a href="mailto:contact@valpha.dev" className="text-sky font-medium hover:underline">
              contact@valpha.dev
            </a>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border text-center">
            <div className="w-12 h-12 bg-sky/10 rounded-xl flex items-center justify-center mx-auto mb-6 text-sky">
              <MessageSquare size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
            <p className="text-muted-foreground mb-4">Available Mon-Fri, 9-5</p>
            <button className="text-sky font-medium hover:underline">
              Start a conversation
            </button>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border text-center">
            <div className="w-12 h-12 bg-sky/10 rounded-xl flex items-center justify-center mx-auto mb-6 text-sky">
              <Phone size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground mb-4">Give us a call</p>
            <a href="tel:+1234567890" className="text-sky font-medium hover:underline">
              +1 (234) 567-890
            </a>
          </div>
        </div>

        <div className="max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-card border border-border">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-sky/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-sky/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-sky/50 transition-all"
                placeholder="How can we help?"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-sky/50 transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-sky text-primary font-semibold hover:bg-sky/90 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}
