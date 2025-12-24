import { Dumbbell, Users, Utensils, Zap } from "lucide-react";

export const services = [
  {
    id: "personal-training",
    slug: "personal-training",
    icon: Dumbbell,
    title: "Personal Training",
    shortDescription: "One-on-one coaching tailored to your unique goals and fitness level.",
    description: "Our elite trainers design personalized workout regimens and provide the accountability you need to see real results. Whether you're looking to build muscle, lose weight, or improve athletic performance, we have the expertise to guide you.",
    deliverables: [
      "Customized Workout Plans",
      "Biometric Progress Tracking",
      "Form Correction & Safety",
      "Nutritional Guidance",
      "Flexible Scheduling",
      "Dedicated Accountability Partner"
    ],
    pricing: "Sessions starting from $60",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    heroDescription: "Unlock your full potential with world-class coaching. Our trainers don't just count reps; they change lives.",
    features: [
      {
        title: "Expert Coaches",
        description: "Certified professionals with years of experience in strength and conditioning."
      },
      {
        title: "Data-Driven Results",
        description: "We use body composition scans and performance metrics to track your journey."
      },
      {
        title: "Flexible Plans",
        description: "Training that fits into your lifestyle, not the other way around."
      },
      {
        title: "Holistic Support",
        description: "Focus on recovery, sleep, and mindset alongside physical training."
      }
    ],
    process: [
      { step: "Consultation", description: "Discussing your goals, history, and physical assessment." },
      { step: "Design", description: "Crafting your bespoke training and nutrition roadmap." },
      { step: "Action", description: "Executing the plan with expert guidance and motivation." },
      { step: "Analyze", description: "Reviewing metrics and adjusting for continuous growth." }
    ]
  },
  {
    id: "group-classes",
    slug: "group-classes",
    icon: Users,
    title: "Group Classes",
    shortDescription: "High-energy sessions including HIIT, Yoga, and Strength Training.",
    description: "Join our vibrant community in classes designed to challenge and inspire. From the intensity of HIIT to the balance of Yoga, our group sessions provide the perfect environment to push your limits together.",
    deliverables: [
      "Unlimited Class Access",
      "HIIT & Circuit Training",
      "Vinyasa & Power Yoga",
      "Olympic Weightlifting Basics",
      "Core & Mobility Workshops",
      "Community Events & Challenges"
    ],
    pricing: "Memberships from $99/mo",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
    heroDescription: "Find your tribe. Experience the power of group fitness with world-class instructors and an electric atmosphere.",
    features: [
      {
        title: "Dynamic Variety",
        description: "Never get bored with over 50 classes per week across multiple disciplines."
      },
      {
        title: "Motivating Community",
        description: "Surround yourself with people who push you to be your best."
      },
      {
        title: "Expert Instruction",
        description: "Every class is led by a specialist to ensure safety and maximum impact."
      },
      {
        title: "All Levels Welcome",
        description: "Scalable movements that cater to beginners and advanced athletes alike."
      }
    ],
    process: [
      { step: "Orientation", description: "Finding the right classes based on your interests and level." },
      { step: "Participation", description: "Diving into the high-energy environment of our sessions." },
      { step: "Connection", description: "Meeting like-minded members and building your support network." },
      { step: "Consistency", description: "Building a habit that leads to long-term health and vitality." }
    ]
  },
  {
    id: "nutrition-coaching",
    slug: "nutrition-coaching",
    icon: Utensils,
    title: "Nutrition Coaching",
    shortDescription: "Precision fuel strategies to optimize your performance and body composition.",
    description: "Fitness is only half the battle. Our nutritionists provide sustainable, science-based eating plans that fuel your workouts and help you reach your aesthetic and health goals without deprivation.",
    deliverables: [
      "Macro-nutrient Calculation",
      "Custom Meal Planning",
      "Grocery Shopping Lists",
      "Supplement Consultations",
      "Weekly Check-ins",
      "Dining Out Guides"
    ],
    pricing: "Monthly coaching from $150",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop",
    heroDescription: "Eat for the life you want. Our nutrition experts simplify healthy eating for peak performance.",
    features: [
      {
        title: "No Fad Diets",
        description: "We focus on sustainable habits and flexible dieting principles."
      },
      {
        title: "Performance Focus",
        description: "Ensure you have the energy to crush your workouts and recover fast."
      },
      {
        title: "Behavior Change",
        description: "Identify and transform the habits that have held you back in the past."
      },
      {
        title: "Ongoing Support",
        description: "Daily access to your nutritionist for questions and motivation."
      }
    ],
    process: [
      { step: "Assessment", description: "Analyzing current habits, preferences, and metabolic needs." },
      { step: "Education", description: "Learning the fundamentals of nutrition and energy balance." },
      { step: "Implementation", description: "Starting your new eating plan with continuous feedback." },
      { step: "Optimization", description: "Fine-tuning macros as your body and goals evolve." }
    ]
  },
  {
    id: "elite-recovery",
    slug: "elite-recovery",
    icon: Zap,
    title: "Elite Recovery",
    shortDescription: "Advanced recovery tools to keep you performing at your absolute peak.",
    description: "Training hard requires recovering harder. Our recovery suite features state-of-the-art technology to reduce inflammation, improve circulation, and get you back in the gym faster.",
    deliverables: [
      "Cryotherapy Sessions",
      "Infrared Sauna Access",
      "Compression Therapy (Normatec)",
      "Percussive Therapy (Theragun)",
      "Contrast Bath Therapy",
      "Guided Stretching Sessions"
    ],
    pricing: "Recovery passes from $40",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop",
    heroDescription: "The secret of the pros. Optimize your downtime with professional-grade recovery technology.",
    features: [
      {
        title: "Faster Muscle Repair",
        description: "Reduce DOMS and get back to your next session with full intensity."
      },
      {
        title: "Reduced Injury Risk",
        description: "Improve mobility and tissue health to keep you moving safely."
      },
      {
        title: "Mental Reset",
        description: "Our recovery environment is designed for deep relaxation and stress relief."
      },
      {
        title: "Cutting-Edge Tech",
        description: "Access the same tools used by professional athletes and Olympians."
      }
    ],
    process: [
      { step: "Evaluation", description: "Identifying areas of tightness, fatigue, or inflammation." },
      { step: "Selection", description: "Choosing the best recovery modalities for your specific needs." },
      { step: "Session", description: "Relaxing and letting the technology accelerate your repair." },
      { step: "Review", description: "Assessing mobility and feeling to plan future recovery." }
    ]
  }
];

export const pricingDetails = {
  initial: "Flexible membership options designed for every commitment level.",
  recurring: [
    { label: "Elite Access", price: "$149/mo" },
    { label: "Founders Membership", price: "$120/mo" }
  ]
};

export const faqs = [
  {
    question: "Do you offer a trial pass?",
    answer: "Yes! We offer a complimentary 3-day trial pass for local residents so you can experience the EliteGYM difference before committing."
  },
  {
    question: "What are your opening hours?",
    answer: "We are open 24/7 for Elite members. Staffed hours are Monday-Friday 6am-10pm, and Saturday-Sunday 8am-8pm."
  },
  {
    question: "Are personal trainers included in the membership?",
    answer: "While we offer introductory coaching sessions, ongoing one-on-one personal training is a separate service. However, all members get access to our base training programs."
  },
  {
    question: "What kind of equipment do you have?",
    answer: "We feature top-of-the-line equipment from Eleiko, Hammer Strength, and Life Fitness, including a massive functional training area and 10 power racks."
  },
  {
    question: "Can I cancel my membership at any time?",
    answer: "We offer both month-to-month and annual contracts. Our month-to-month plans can be canceled with a 30-day notice."
  },
  {
    question: "Is there a locker room and showers?",
    answer: "Absolutely. We provide premium locker rooms with private showers, towel service, and luxury grooming products."
  }
];
