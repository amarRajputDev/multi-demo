// ILLUSTRATIVE DEMO CONTENT — all results, ranks, names, and credentials below are fictional placeholders for a design demo.

import { PLACEHOLDER_CONTACT, type DemoContact } from "@/lib/registry";

export const pulseContact: DemoContact = { ...PLACEHOLDER_CONTACT };

export interface PulseNavLink {
  href: string;
  label: string;
}

export const pulseNav: PulseNavLink[] = [
  { href: "/", label: "Home" },
  { href: "/demos/pulse-prep/courses", label: "Courses" },
  { href: "/demos/pulse-prep/faculty", label: "Faculty" },
  { href: "/demos/pulse-prep/results", label: "Results" },
  { href: "/demos/pulse-prep/about", label: "About" },
  { href: "/demos/pulse-prep/contact", label: "Contact" },
];

export interface PulseCourse {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  mode: string;
  highlights: string[];
  fee: string;
  badge?: string;
}

export const pulseCourses: PulseCourse[] = [
  {
    id: "jee-sprint",
    name: "JEE Sprint",
    tagline:
      "Two engineered years from Class 11 fundamentals to JEE Main and Advanced rank files.",
    duration: "24 months · Class 11 → Class 12",
    mode: "Classroom + live online replay",
    highlights: [
      "Physics, Chemistry and Maths taught in a single connected sequence",
      "48 full-length mocks with All-India percentile inside 24 hours",
      "Advanced-level problem labs every Saturday for the top 40% of each batch",
      "Doubt desk open till 9 PM, six days a week",
    ],
    fee: "₹1,24,000 total",
    badge: "Flagship",
  },
  {
    id: "neet-crash",
    name: "NEET Crash",
    tagline:
      "A biology-first, high-intensity twelve month sprint built for NEET UG attempts.",
    duration: "12 months · weekday evenings",
    mode: "Hybrid · campus + live online",
    highlights: [
      "NCERT line-by-line mapping across Biology, Physics and Chemistry",
      "Daily 45-question biology drills with instant error classification",
      "Weekly full-syllabus mock on the exact NEET paper pattern",
      "Revision decks released every 15 days from day one",
    ],
    fee: "₹86,000 total",
    badge: "High intensity",
  },
  {
    id: "cet-entrance",
    name: "CET & State Entrances",
    tagline:
      "MHT-CET, COMEDK and state-level papers drilled for speed, accuracy and zero surprises.",
    duration: "12 months · Class 12 year",
    mode: "Classroom · batches capped at 30",
    highlights: [
      "State-board and entrance syllabus taught side by side, not twice",
      "Speed arithmetic and elimination technique drills three times a week",
      "Previous-year paper dissections for the last 10 attempts",
      "Mock rank lists published after every Sunday test",
    ],
    fee: "₹54,000 total",
  },
  {
    id: "olympiad-boost",
    name: "Olympiad Boost",
    tagline:
      "Weekend stretch training for IOQM, NSEJS and RMO aspirants who want harder problems.",
    duration: "9 months · Saturday–Sunday",
    mode: "Weekend campus + supervised online clinics",
    highlights: [
      "Problem ladders from school level to regional round standard",
      "Peer proof-writing sessions modelled on mathematical circles",
      "Enrichment sets curated by the mathematics and physics faculty",
      "Open mock olympiad every fourth weekend",
    ],
    fee: "₹32,000 per cycle",
    badge: "Class 8–10",
  },
  {
    id: "test-series-unlimited",
    name: "Test-Series Unlimited",
    tagline:
      "All-year mock access with deep post-test analytics — the engine behind every rank here.",
    duration: "12 months access · starts any week",
    mode: "Online · self-paced with mentor review",
    highlights: [
      "9 full-length mocks a month across JEE, NEET and CET patterns",
      "Question-level time tracking and guessed-vs-correct breakdown",
      "Auto-generated revision list pulled from every test you take",
      "Faculty-written solution keys published within 48 hours",
    ],
    fee: "₹7,999 / year",
    badge: "Best value",
  },
];

export interface PulseFaculty {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  image: string;
  alt: string;
}

export const pulseFaculty: PulseFaculty[] = [
  {
    id: "ishita-rathore",
    name: "Ishita Rathore",
    role: "Head of Faculty · Physics",
    credentials: "M.Tech · 13 years coaching JEE Main & Advanced",
    bio: "Ishita built the Pulse physics sequence around one rule: no formula without a reason. Her mechanics and modern-physics modules are the reason our JEE cohort starts every year at the same level.",
    image: "/images/pulse-prep/faculty-2.jpg",
    alt: "Portrait of Ishita Rathore, Head of Faculty for Physics",
  },
  {
    id: "nikhil-barve",
    name: "Dr. Nikhil Barve",
    role: "Biology Lead · NEET UG",
    credentials: "M.D. Physiology · 10 years NEET teaching",
    bio: "Nikhil teaches biology as a system, not a syllabus. He personally writes the daily drill sets and reviews every student's error log before the next class begins.",
    image: "/images/pulse-prep/faculty-1.jpg",
    alt: "Portrait of Dr. Nikhil Barve, biology lead for NEET preparation",
  },
  {
    id: "sana-qureshi",
    name: "Sana Qureshi",
    role: "Chemistry · Physical & Organic",
    credentials: "M.Sc. Chemistry, NIT · 9 years teaching",
    bio: "Sana is known for turning organic reaction maps into something students can actually redraw under pressure. Her reaction-logic sheets are a staple of every Pulse batch.",
    image: "/images/pulse-prep/faculty-4.jpg",
    alt: "Portrait of Sana Qureshi, chemistry faculty",
  },
  {
    id: "arnav-desai",
    name: "Arnav Desai",
    role: "Mathematics · Calculus & Algebra",
    credentials: "M.Sc. Mathematics · 11 years coaching entrance exams",
    bio: "Arnav runs the Saturday advanced problem lab. He pushes the top of every batch past the paper's comfort zone, then brings the whole group back down to exam-hall technique.",
    image: "/images/pulse-prep/faculty-3.jpg",
    alt: "Portrait of Arnav Desai, mathematics faculty",
  },
];

export interface PulseFeature {
  title: string;
  body: string;
  meta: string;
}

export const pulseFeatures: PulseFeature[] = [
  {
    title: "Doubt desk till 9 PM",
    body: "Walk in after school or log in after dinner — a faculty member is on the desk every evening, six days a week.",
    meta: "Mon–Sat · till 9 PM",
  },
  {
    title: "Adaptive drill engine",
    body: "Every wrong answer feeds the next day's practice set, so revisions target weakness instead of comfort.",
    meta: "300+ questions dropped weekly",
  },
  {
    title: "Rank-first analytics",
    body: "Percentile, pace and accuracy after every single test — no waiting for a term report to know where you stand.",
    meta: "Reported within 24 hours",
  },
  {
    title: "Mentor pods of 18",
    body: "One mentor tracks eighteen aspirants end to end: attendance, error patterns, and a fortnightly face-to-face check-in.",
    meta: "1 mentor : 18 aspirants",
  },
];

export interface PulseRoadmapStage {
  stage: string;
  title: string;
  window: string;
  detail: string;
}

export const pulseRoadmap: PulseRoadmapStage[] = [
  {
    stage: "01",
    title: "Calibrate",
    window: "Week 1",
    detail:
      "A 45-minute diagnostic maps strengths, gaps and pace. You leave with a written blueprint, not a sales pitch.",
  },
  {
    stage: "02",
    title: "Build",
    window: "Month 1–4",
    detail:
      "Concept teaching with same-day drills. Every chapter closes with a timed check before the next one opens.",
  },
  {
    stage: "03",
    title: "Accelerate",
    window: "Month 5–8",
    detail:
      "Multi-concept problems, advanced labs and weekly part-syllabus tests start stitching the syllabus together.",
  },
  {
    stage: "04",
    title: "Simulate",
    window: "Month 9–11",
    detail:
      "Full mocks on the real paper pattern every Sunday, with Monday analysis clinics and a personal revision list.",
  },
  {
    stage: "05",
    title: "Peak",
    window: "Final 6 weeks",
    detail:
      "Shrinking syllabus, formula sprints, sleep-and-routine planning and two exact-time dress rehearsals before exam day.",
  },
];

export interface PulseStat {
  value: string;
  label: string;
  note: string;
}

export const pulseStats: PulseStat[] = [
  {
    value: "12,400+",
    label: "Aspirants coached",
    note: "Since 2016 · demo figure",
  },
  {
    value: "9 / month",
    label: "Full-length mocks",
    note: "Ranked across all batches",
  },
  {
    value: "92%",
    label: "Improved percentile",
    note: "Within three mocks · demo figure",
  },
  {
    value: "18",
    label: "Students per mentor",
    note: "One named mentor each",
  },
];

export interface PulseResult {
  exam: string;
  student: string;
  achievement: string;
  detail: string;
}

export const pulseResults: PulseResult[] = [
  {
    exam: "JEE Advanced",
    student: "Aarav Menon",
    achievement: "AIR 412",
    detail:
      "Two-year JEE Sprint cohort. Physics rank improved from 4,100 to 480 across the final six mocks.",
  },
  {
    exam: "NEET UG",
    student: "Priya Nambiar",
    achievement: "705 / 720",
    detail:
      "NEET Crash candidate who moved from 590 to 705 in eleven weeks of error-log driven revision.",
  },
  {
    exam: "JEE Main",
    student: "Meher Gill",
    achievement: "99.84 %ile",
    detail:
      "First attempt. Chemistry accuracy was the swing factor after the April speed-sprint module.",
  },
  {
    exam: "MHT-CET",
    student: "Rohan Kulkarni",
    achievement: "99.72 %ile",
    detail:
      "Balanced CET preparation with board syllabus through the integrated Class 12 batch.",
  },
  {
    exam: "IOQM",
    student: "Tanish Rao",
    achievement: "Regional qualifier",
    detail:
      "Olympiad Boost student from Class 9 who cleared the regional round on a second attempt.",
  },
  {
    exam: "NEET UG",
    student: "Ayesha Khan",
    achievement: "698 / 720",
    detail:
      "Repeat attempt. Shifted to the biology-first drill plan after a diagnostic score of 612.",
  },
];

export interface PulseTestimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

export const pulseTestimonials: PulseTestimonial[] = [
  {
    id: "t1",
    quote:
      "The Sunday mocks were brutal in the best way. By the third one I stopped being scared of the paper and started reading it properly. My percentile graph only went one direction.",
    name: "Kabir S.",
    role: "JEE Sprint · Class 12 (demo testimonial)",
  },
  {
    id: "t2",
    quote:
      "What sold us was the Monday analysis. Every week we could see exactly which questions cost marks and why. No vague advice, just a list of what to fix before Sunday.",
    name: "Radhika M.",
    role: "Parent · NEET Crash (demo testimonial)",
  },
  {
    id: "t3",
    quote:
      "I joined for the test series and stayed for the doubt desk. Being able to walk in at 8 PM and get calculus cleared the same evening changed how fast I could move through the syllabus.",
    name: "Devansh P.",
    role: "Test-Series Unlimited (demo testimonial)",
  },
];

export interface PulseMockCadence {
  label: string;
  value: string;
}

export interface PulseMockTrend {
  label: string;
  score: number;
  delta: string;
}

export interface PulseMock {
  headline: string;
  intro: string;
  cadence: PulseMockCadence[];
  trend: PulseMockTrend[];
  features: string[];
}

export const pulseMock: PulseMock = {
  headline: "Mocks that feel like the real paper.",
  intro:
    "Every test is timed to the exact pattern, graded the same night, and turned into a short list of things to fix before Sunday. Practice here is the exam, rehearsed often enough to stop being frightening.",
  cadence: [
    { label: "Full-syllabus mock", value: "Every Sunday · 9 AM" },
    { label: "Chapter drill", value: "Every Wednesday" },
    { label: "Speed sprint", value: "Every Friday · 40 min" },
    { label: "Analysis clinic", value: "Monday · 6 PM" },
  ],
  trend: [
    { label: "Physics", score: 78, delta: "+14" },
    { label: "Chemistry", score: 84, delta: "+9" },
    { label: "Maths / Biology", score: 71, delta: "+21" },
    { label: "Overall percentile", score: 96, delta: "+12" },
  ],
  features: [
    "All-India percentile within 24 hours of every test",
    "Question-level time tracking and guessed-vs-correct splits",
    "Auto-generated revision list pulled from your own errors",
    "Faculty-written solution keys within 48 hours",
  ],
};

export interface PulseAdmissionStep {
  step: string;
  title: string;
  description: string;
}

export const pulseAdmissions: PulseAdmissionStep[] = [
  {
    step: "01",
    title: "Book a diagnostic",
    description:
      "Free 45-minute test at the campus or online. It measures concept gaps and pace — never used to rank you against anyone.",
  },
  {
    step: "02",
    title: "Get your blueprint",
    description:
      "A counsellor sits with the family and maps the target exam, syllabus coverage, weekly load and the honest timeline to a competitive score.",
  },
  {
    step: "03",
    title: "Choose the batch",
    description:
      "Pick the timing and mode that fits school or college. Sit in on a live class before you commit to anything.",
  },
  {
    step: "04",
    title: "Lock the seat",
    description:
      "Complete enrolment, get your mentor assignment and test calendar — and take your first graded mock in week one.",
  },
];

export interface PulseFaq {
  question: string;
  answer: string;
}

export const pulseFaqs: PulseFaq[] = [
  {
    question: "Which exams does Pulse Prep actually prepare students for?",
    answer:
      "JEE Main and Advanced, NEET UG, MHT-CET and COMEDK state entrances, plus IOQM, NSEJS and RMO for school-level olympiad aspirants. Each programme targets a specific paper — we do not run one generic batch for all of them.",
  },
  {
    question: "How large are the batches?",
    answer:
      "Classroom batches are capped at 30 students, and every student is additionally assigned to a mentor pod of 18. When a batch fills, we open a new timing rather than adding seats to the existing one.",
  },
  {
    question: "Can my child prepare for boards and entrance exams together?",
    answer:
      "Yes — the CET and JEE Sprint programmes are built around integrated Class 11 and 12 batches that cover the state or CBSE syllabus and the entrance syllabus in the same sequence, so the two never compete for the same evening.",
  },
  {
    question: "What does the test series include, and is it sold separately?",
    answer:
      "Nine full-length mocks a month, weekly chapter drills, percentile reports within 24 hours, question-level analytics and faculty solution keys. It can be purchased on its own for ₹7,999 a year, and it is included with every classroom programme.",
  },
  {
    question: "Are there fees, instalments or scholarships?",
    answer:
      "Programme fees can be paid in two or three instalments per year. Diagnostic performance above the published threshold qualifies for a merit concession, and sibling discounts are available — ask the admissions desk for the current slab.",
  },
];
