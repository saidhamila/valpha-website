export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    content: "vAlpha transformed our legacy systems into a modern, high-performance platform. Their technical depth and creative approach are unmatched.",
    author: "Sarah Jenkins",
    role: "CTO, FutureScale"
  },
  {
    id: "2",
    content: "The level of attention to detail and performance optimization they brought to our SaaS product was exactly what we needed to scale.",
    author: "Michael Chen",
    role: "Founder, SaaSFlow"
  },
  {
    id: "3",
    content: "They didn't just build an app; they helped us redefine our digital strategy. A true partner in every sense of the word.",
    author: "Emily Rodriguez",
    role: "Product Director, InnovateHub"
  }
];
