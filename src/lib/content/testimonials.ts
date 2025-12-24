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
    content: "EliteGYM changed my life. The trainers aren't just experts; they're mentors who genuinely care about your progress. I've never felt stronger.",
    author: "David Chen",
    role: "Member for 2 years"
  },
  {
    id: "2",
    content: "The facilities are world-class, but it's the community that keeps me coming back. It's the most supportive environment I've ever trained in.",
    author: "Elena Rodriguez",
    role: "Group Fitness Regular"
  },
  {
    id: "3",
    content: "The nutrition coaching was the missing piece for me. I finally understood how to fuel my body without feeling restricted.",
    author: "Marcus Thorne",
    role: "Performance Lab Client"
  }
];