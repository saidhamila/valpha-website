import { Dumbbell, Users, Utensils, Zap, Trophy, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export const services: Service[] = [
  {
    id: "personal-training",
    slug: "personal-training",
    title: "Personal Training",
    description: "One-on-one sessions tailored to your specific goals, from weight loss to muscle gain and athletic performance.",
    icon: Dumbbell,
    features: [
      "Customized Workout Plans",
      "Nutritional Guidance",
      "Regular Progress Tracking",
      "Expert Form Correction",
      "Motivation & Accountability"
    ]
  },
  {
    id: "group-fitness",
    slug: "group-fitness",
    title: "Group Classes",
    description: "High-energy group sessions including HIIT, Yoga, and Strength training led by expert instructors.",
    icon: Users,
    features: [
      "Diverse Class Schedule",
      "Community Support",
      "Certified Instructors",
      "All Fitness Levels Welcome",
      "Modern Equipment"
    ]
  },
  {
    id: "nutrition-coaching",
    slug: "nutrition-coaching",
    title: "Nutrition Coaching",
    description: "Scientific approach to nutrition to fuel your workouts and optimize your health and recovery.",
    icon: Utensils,
    features: [
      "Personalized Meal Plans",
      "Macro Tracking Support",
      "Supplement Guidance",
      "Lifestyle Integration",
      "Bi-weekly Consultations"
    ]
  },
  {
    id: "performance-lab",
    slug: "performance-lab",
    title: "Performance Lab",
    description: "Advanced testing and recovery services to push your limits and prevent injuries.",
    icon: Zap,
    features: [
      "Body Composition Analysis",
      "VO2 Max Testing",
      "Recovery Zone Access",
      "Injury Prevention",
      "Mobility Assessments"
    ]
  }
];