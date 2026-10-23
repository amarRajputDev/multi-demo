// ILLUSTRATIVE DEMO CONTENT — all results, names, and credentials below are fictional placeholders for a design demo.

import { PLACEHOLDER_CONTACT, type DemoContact } from "@/lib/registry";

export const bloomContact: DemoContact = { ...PLACEHOLDER_CONTACT };

export interface BloomNavLink {
  href: string;
  label: string;
}

export const bloomHomeHref = "/demos/bloom";

export const bloomNav: BloomNavLink[] = [
  { href: bloomHomeHref, label: "Home" },
  { href: "/demos/bloom/courses", label: "Courses" },
  { href: "/demos/bloom/faculty", label: "Mentors" },
  { href: "/demos/bloom/results", label: "Results" },
  { href: "/demos/bloom/about", label: "About" },
  { href: "/demos/bloom/contact", label: "Contact" },
];

export interface BloomCourse {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  mode: string;
  highlights: string[];
  fee: string;
}

export const bloomCourses: BloomCourse[] = [
  {
    id: "foundation-5-6",
    name: "Foundation Class 5–6",
    tagline:
      "A joyful start to serious learning — strong basics in Maths and Science, taught with warmth.",
    duration: "Full academic year",
    mode: "Offline · Batches of 12",
    highlights: [
      "Concept-first Maths and Science mapped to the school syllabus",
      "Weekly reading and handwriting practice built into the timetable",
      "Story-based science demonstrations that make ideas stick",
      "Monthly progress card shared with parents, in plain language",
    ],
    fee: "₹28,000 / year",
  },
  {
    id: "launchpad-7-8",
    name: "Class 7–8 Launchpad",
    tagline:
      "The middle-school years, handled with care — deeper concepts, better habits, confident learners.",
    duration: "Full academic year",
    mode: "Offline · Batches of 14",
    highlights: [
      "Maths, Science and English taught by a stable core faculty",
      "Study-skills workshops: note-taking, revision cycles, homework rhythm",
      "Fortnightly chapter tests with friendly, detailed feedback",
      "Olympiad starter problems woven into every Maths and Science term",
    ],
    fee: "₹34,000 / year",
  },
  {
    id: "olympiad-training",
    name: "Olympiad Training",
    tagline:
      "For curious minds that want to stretch — Maths and Science Olympiad preparation, weekend batches.",
    duration: "Weekend batches · 6-month cycles",
    mode: "Offline + supervised online clinics",
    highlights: [
      "IOQM, NSO and IMO foundation coaching with a progressive difficulty ladder",
      "Small problem-solving circles modelled on neighbourhood math clubs",
      "Enrichment worksheets curated by our mentor team",
      "Mock rounds with peer discussion and mentor review",
    ],
    fee: "₹22,000 / cycle",
  },
  {
    id: "board-booster-9-10",
    name: "Board Booster Class 9–10",
    tagline:
      "A calm, well-paced board-year programme — no panic, no cramming, just steady preparation.",
    duration: "Full academic year + revision camps",
    mode: "Offline · Batches of 16",
    highlights: [
      "NCERT-deep coverage with previous-year question practice from term one",
      "Three full pre-boards with written-answer drill and review",
      "Revision diaries and formula booklets for every subject",
      "Board-strategy session for parents and students before the final term",
    ],
    fee: "₹42,000 / year",
  },
  {
    id: "reading-reasoning-lab",
    name: "Reading & Reasoning Lab",
    tagline:
      "A joyful after-school lab for comprehension, logical thinking, and the love of language.",
    duration: "Two sessions a week · rolling intake",
    mode: "Offline · Groups of 10",
    highlights: [
      "Guided reading circles across fiction and age-appropriate non-fiction",
      "Comprehension and summary-writing practice, gently progressive",
      "Logical reasoning puzzles and pattern games for sharp thinking",
      "A friendly book club showcase at the end of every term",
    ],
    fee: "₹18,000 / term",
  },
];

export interface BloomFaculty {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  image: string;
  alt: string;
}

export const bloomFaculty: BloomFaculty[] = [
  {
    id: "priya-nair",
    name: "Priya Nair",
    role: "Founder & Lead Mentor · Mathematics",
    credentials: "M.Sc. Mathematics, 13 years teaching Class 5–10",
    bio: "Priya founded Bloom Learning around one simple idea: young students flourish when teaching is warm, patient, and genuinely fun. She leads the mathematics programme and personally mentors every new faculty member who joins the team.",
    image: "/images/bloom/faculty-4.jpg",
    alt: "Warm portrait of Priya Nair, founder and mathematics mentor at Bloom Learning",
  },
  {
    id: "arjun-sethi",
    name: "Arjun Sethi",
    role: "Senior Mentor · Science & Olympiad",
    credentials: "M.Sc. Chemistry, 10 years teaching experience",
    bio: "Arjun turns everyday phenomena into classroom experiments his students never forget. He leads the science stream and the weekend Olympiad circle, where his progressive problem ladders have become a Bloom signature.",
    image: "/images/bloom/faculty-2.jpg",
    alt: "Portrait of Arjun Sethi, senior science and olympiad mentor at Bloom Learning",
  },
  {
    id: "kavya-krishnan",
    name: "Kavya Krishnan",
    role: "Mentor · English & Reading Lab",
    credentials: "M.A. English, 8 years teaching experience",
    bio: "Kavya runs the Reading & Reasoning Lab with a shelf-full of stories and a gift for drawing out quiet readers. Her book clubs are where reluctant readers discover that books can be genuinely delightful.",
    image: "/images/bloom/faculty-3.jpg",
    alt: "Portrait of Kavya Krishnan, English and reading mentor at Bloom Learning",
  },
  {
    id: "rohan-das",
    name: "Rohan Das",
    role: "Mentor · Learning Skills & Reasoning",
    credentials: "M.Ed., 9 years teaching experience",
    bio: "Rohan teaches the skills school rarely does — how to take notes, how to revise, how to sit with a hard problem without giving up. He also leads the parent workshops on building healthy study habits at home.",
    image: "/images/bloom/faculty-1.jpg",
    alt: "Portrait of Rohan Das, learning-skills mentor at Bloom Learning",
  },
];

export interface BloomJourneyStep {
  step: string;
  title: string;
  description: string;
}

export const bloomJourney: BloomJourneyStep[] = [
  {
    step: "1",
    title: "A friendly welcome chat",
    description:
      "Parents and students meet a mentor for an unhurried conversation — about the child, their school, what they enjoy, and where support would help most.",
  },
  {
    step: "2",
    title: "Gentle baseline check",
    description:
      "A short, low-pressure diagnostic across core subjects maps strengths and gaps. It is never used for ranking — only to plan the right starting point.",
  },
  {
    step: "3",
    title: "Personal learning plan",
    description:
      "We draft a term-wise plan together: focus chapters, weekly practice load, reading goals, and checkpoints the family can follow at home.",
  },
  {
    step: "4",
    title: "Weekly classes & practice",
    description:
      "Concept teaching, guided practice and doubt clinics run on a published timetable, so learning grows steadily instead of in last-minute bursts.",
  },
  {
    step: "5",
    title: "Progress reviews with parents",
    description:
      "Monthly progress cards and open conversations with mentors keep home and institute aligned — encouragement first, always.",
  },
];

export interface BloomTrustPoint {
  figure: string;
  label: string;
  detail: string;
}

export const bloomTrust: BloomTrustPoint[] = [
  {
    figure: "12",
    label: "Students per batch, maximum",
    detail:
      "Small enough that every child is known by name, by strengths, and by the work they hand in each week.",
  },
  {
    figure: "1:1",
    label: "Monthly mentor check-ins",
    detail:
      "Every student gets a personal progress conversation with their mentor, every month.",
  },
  {
    figure: "100%",
    label: "Parent progress cards",
    detail:
      "Families receive a plain-language progress card each month — never a surprise at report-card time.",
  },
  {
    figure: "9 yrs",
    label: "Average mentor tenure",
    detail:
      "A stable team means teaching that builds term after term, without restarting relationships.",
  },
];

export interface BloomSubject {
  id: string;
  name: string;
  blurb: string;
  icon: "math" | "science" | "english" | "reasoning" | "olympiad" | "art";
}

export const bloomSubjects: BloomSubject[] = [
  {
    id: "maths",
    name: "Mathematics",
    blurb:
      "From number sense to algebra, taught through patterns, puzzles and plenty of guided practice.",
    icon: "math",
  },
  {
    id: "science",
    name: "Science",
    blurb:
      "Physics, chemistry and biology brought to life with demonstrations, models and real questions.",
    icon: "science",
  },
  {
    id: "english",
    name: "English",
    blurb:
      "Reading fluency, grammar clarity and confident writing — built story by story, essay by essay.",
    icon: "english",
  },
  {
    id: "reasoning",
    name: "Logical Reasoning",
    blurb:
      "Patterns, puzzles and thinking games that sharpen the mind for Olympiads and beyond.",
    icon: "reasoning",
  },
  {
    id: "olympiad",
    name: "Olympiad Prep",
    blurb:
      "A stretch stream for curious students who want to go further than the textbook ever asks.",
    icon: "olympiad",
  },
  {
    id: "life-skills",
    name: "Study & Life Skills",
    blurb:
      "Note-taking, revision habits and focus routines — the quiet skills that make learning easier.",
    icon: "art",
  },
];

export interface BloomResultHighlight {
  figure: string;
  label: string;
  detail: string;
}

export const bloomResults: BloomResultHighlight[] = [
  {
    figure: "96%",
    label: "Students improved a grade or more (demo)",
    detail:
      "An illustrative figure representing learners who moved up at least one grade within a year — a placeholder for this design demo.",
  },
  {
    figure: "38+",
    label: "Olympiad participations (demo)",
    detail:
      "A sample count of student participations across Maths and Science Olympiad rounds, shown purely for this demo layout.",
  },
  {
    figure: "4.8/5",
    label: "Parent satisfaction (demo)",
    detail:
      "Fictional family-satisfaction score from our demo survey card — not a verified real-world claim.",
  },
  {
    figure: "1 in 3",
    label: "Families who refer a friend (demo)",
    detail:
      "A placeholder referral figure — the kind of organic trust a neighbourhood institute is built on.",
  },
];

export interface BloomTestimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

export const bloomTestimonials: BloomTestimonial[] = [
  {
    id: "t1",
    quote:
      "What won us over was how calm the place feels. No shouting, no rank-lists on walls — just kind, capable teachers who genuinely know our daughter. She actually looks forward to her Saturday Maths class now.",
    name: "Meena K.",
    role: "Parent · Class 7 (demo testimonial)",
  },
  {
    id: "t2",
    quote:
      "I used to find Science scary. Arjun Sir's experiments make everything make sense, and the Reading Lab made me finish six books this year. My favourite is still the book club showcase at the end of term.",
    name: "Aanya R.",
    role: "Student · Class 8 (demo testimonial)",
  },
  {
    id: "t3",
    quote:
      "The monthly progress card is wonderful — it tells us what Kabir is good at, not just what he got wrong. And Rohan Sir's workshop on study habits at home changed our evenings completely.",
    name: "Vikram S.",
    role: "Parent · Class 5 & Class 9 (demo testimonial)",
  },
];

export interface BloomAdmissionStep {
  step: string;
  title: string;
  description: string;
}

export const bloomAdmissions: BloomAdmissionStep[] = [
  {
    step: "01",
    title: "Say hello",
    description:
      "Share your child's class and interests through the enquiry form, a phone call, or WhatsApp — whichever feels easiest.",
  },
  {
    step: "02",
    title: "Visit & trial class",
    description:
      "Tour the centre, meet a mentor, and let your child attend a live class in their prospective batch — no cost, no commitment.",
  },
  {
    step: "03",
    title: "Find the right batch",
    description:
      "A friendly baseline check helps us recommend the batch and pace where your child will feel challenged and supported.",
  },
  {
    step: "04",
    title: "Welcome to Bloom",
    description:
      "Complete simple enrolment, receive the term calendar and learning plan, and begin with the next scheduled batch.",
  },
];

export interface BloomFaq {
  question: string;
  answer: string;
}

export const bloomFaqs: BloomFaq[] = [
  {
    question: "How large are the batches?",
    answer:
      "Foundation and Launchpad batches are capped at 12–14 students, Board Booster at 16, and the Reading Lab at 10. We would rather turn admission away than dilute the attention each child receives.",
  },
  {
    question: "Will my child get homework every day?",
    answer:
      "Practice is important, but so is childhood. We set a realistic weekly practice load — usually 30–45 minutes a day for younger classes — and mentors help students build a homework rhythm that leaves room for play, sport and reading for fun.",
  },
  {
    question: "How do you keep parents informed about progress?",
    answer:
      "Every family receives a plain-language progress card each month, plus a one-to-one check-in with the class mentor. The card highlights strengths first, then the areas we are working on — so there are never surprises at report-card time.",
  },
  {
    question: "Is Olympiad coaching included in the regular courses?",
    answer:
      "Olympiad starter problems are woven into the Maths and Science terms of our Launchpad and Board Booster programmes. Students who want to go further can join the dedicated weekend Olympiad Training cycle, which runs in six-month batches.",
  },
  {
    question: "Can we try a class before enrolling?",
    answer:
      "Absolutely. After the campus visit and baseline check, your child is welcome to attend a live class in their prospective batch. Many families tell us the trial class is what made the decision easy.",
  },
];

export interface BloomValue {
  title: string;
  description: string;
}

export const bloomValues: BloomValue[] = [
  {
    title: "Kind, never soft on standards",
    description:
      "Warmth and high expectations belong together. We encourage generously and teach rigorously — students leave knowing they can do hard things.",
  },
  {
    title: "Every child, known by name",
    description:
      "Batches stay small on purpose. Mentors know each student's strengths, struggles, favourite subjects, and the small wins worth celebrating.",
  },
  {
    title: "Families as partners",
    description:
      "Progress cards, open doors and honest conversations keep home and institute on the same page, in the same kind language.",
  },
  {
    title: "Joy in the everyday",
    description:
      "Experiments, stories, puzzles and book clubs — learning should feel alive during the week, not only before exams.",
  },
];
