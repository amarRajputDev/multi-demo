// ILLUSTRATIVE DEMO CONTENT — all results, ranks, names, and credentials below are fictional placeholders for a design demo.

import { PLACEHOLDER_CONTACT, type DemoContact } from "@/lib/registry";

export const scholarContact: DemoContact = { ...PLACEHOLDER_CONTACT };

export interface ScholarNavLink {
  href: string;
  label: string;
}

export const scholarHomeHref = "/demos/scholar-house";

export const scholarNav: ScholarNavLink[] = [
  { href: scholarHomeHref, label: "Home" },
  { href: "/demos/scholar-house/courses", label: "Courses" },
  { href: "/demos/scholar-house/faculty", label: "Faculty" },
  { href: "/demos/scholar-house/results", label: "Results" },
  { href: "/demos/scholar-house/about", label: "About" },
  { href: "/demos/scholar-house/contact", label: "Contact" },
];

export interface ScholarCourse {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  mode: string;
  highlights: string[];
  fee: string;
}

export const scholarCourses: ScholarCourse[] = [
  {
    id: "foundation-9",
    name: "Foundation Class 9",
    tagline: "Build the habits and concepts that make Class 10 feel effortless.",
    duration: "Full academic year",
    mode: "Offline · Small batches of 15",
    highlights: [
      "NCERT-deep coverage in Maths, Science and Social Science",
      "Weekly concept clinics and doubt-solving hours",
      "Monthly progress report shared with parents",
      "Olympiad and NTSE readiness built into the syllabus",
    ],
    fee: "₹36,000 / year",
  },
  {
    id: "board-10",
    name: "Class 10 Board Mastery",
    tagline: "A structured board-year programme with revision built in from day one.",
    duration: "Full academic year + pre-board camps",
    mode: "Offline · Batches of 18",
    highlights: [
      "Chapter-wise PYQ solving with marking-scheme insight",
      "Three full-length pre-boards with written answer practice",
      "Formula diaries and revision booklets for every subject",
      "Dedicated board-strategy sessions for parents and students",
    ],
    fee: "₹44,000 / year",
  },
  {
    id: "science-11",
    name: "Class 11 Science",
    tagline: "Physics, Chemistry, Maths and Biology taught for genuine understanding.",
    duration: "Full academic year",
    mode: "Offline · Batches of 20",
    highlights: [
      "Concept-first teaching aligned to school and entrance syllabi",
      "Weekly problem-solving workbooks with model solutions",
      "Lab-visits and practical file guidance",
      "Optional JEE/NEET foundation add-on modules",
    ],
    fee: "₹58,000 / year",
  },
  {
    id: "commerce-12",
    name: "Class 12 Commerce",
    tagline: "Accountancy, Business Studies and Economics with exam-hall clarity.",
    duration: "Full academic year",
    mode: "Offline · Batches of 18",
    highlights: [
      "Ledger-to-financial-statements mastery through guided practice",
      "Case-study writing technique for Business Studies",
      "Current-affairs-linked Economics discussions",
      "Board sample-paper dissections every fortnight",
    ],
    fee: "₹52,000 / year",
  },
  {
    id: "olympiad",
    name: "Olympiad Prep",
    tagline: "Stretch programmes for students who want to go beyond the textbook.",
    duration: "Weekend batches · 6-month cycles",
    mode: "Offline + supervised online clinics",
    highlights: [
      "Maths and Science Olympiad (IOQM, NSO, IMO) coaching",
      "Enrichment problem sets curated by faculty",
      "Peer discussion circles modelled on math circles",
      "Progressive difficulty ladder from school level to regional rounds",
    ],
    fee: "₹24,000 / cycle",
  },
];

export interface ScholarFaculty {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  image: string;
  alt: string;
}

export const scholarFaculty: ScholarFaculty[] = [
  {
    id: "ananya-reddy",
    name: "Ananya Reddy",
    role: "Director of Studies · Mathematics",
    credentials: "M.Sc. Mathematics, 14 years teaching Class 9–12",
    bio: "Ananya founded Scholar House around a simple belief: students flourish when teaching is patient and expectations are high. She leads the mathematics programme and personally trains every new faculty member.",
    image: "/images/scholar-house/faculty-2.jpg",
    alt: "Faculty portrait of Ananya Reddy, Director of Studies",
  },
  {
    id: "vikram-menon",
    name: "Vikram Menon",
    role: "Senior Faculty · Physics & Science",
    credentials: "M.Sc. Physics, 11 years teaching experience",
    bio: "Vikram is known for turning abstract physics into concrete, visual reasoning. His classroom demonstrations and carefully sequenced problem sets are a signature of the science programme.",
    image: "/images/scholar-house/faculty-1.jpg",
    alt: "Faculty portrait of Vikram Menon, senior physics teacher",
  },
  {
    id: "meera-iyer",
    name: "Meera Iyer",
    role: "Faculty · Chemistry & Biology",
    credentials: "M.Sc. Chemistry, 9 years teaching experience",
    bio: "Meera specialises in making board-level chemistry rigorous without being overwhelming. She also mentors the biology stream and our Olympiad biology cohort.",
    image: "/images/scholar-house/faculty-4.jpg",
    alt: "Faculty portrait of Meera Iyer, chemistry and biology teacher",
  },
  {
    id: "r-s-deshpande",
    name: "R. S. Deshpande",
    role: "Faculty · Accountancy & Business Studies",
    credentials: "Chartered Accountant, 12 years teaching experience",
    bio: "A practising CA by training, Deshpande Sir brings real ledger discipline into the commerce classroom. His students consistently report that accountancy finally 'clicks'.",
    image: "/images/scholar-house/faculty-3.jpg",
    alt: "Faculty portrait of R. S. Deshpande, accountancy teacher",
  },
];

export interface ScholarJourneyStep {
  step: string;
  title: string;
  description: string;
}

export const scholarJourney: ScholarJourneyStep[] = [
  {
    step: "I",
    title: "Diagnostic assessment",
    description:
      "A short, friendly diagnostic across core subjects maps each student's current strengths and gaps — never used for ranking, only for planning.",
  },
  {
    step: "II",
    title: "Personal learning plan",
    description:
      "Faculty sit with the family and draft a term-wise plan: focus chapters, weekly practice load, and checkpoints to review together.",
  },
  {
    step: "III",
    title: "Structured classroom learning",
    description:
      "Concept teaching, guided problem-solving and weekly clinics run on a published timetable, so preparation never depends on last-minute cramming.",
  },
  {
    step: "IV",
    title: "Continuous assessment",
    description:
      "Weekly worksheets, fortnightly tests and detailed answer review build exam-hall discipline long before the board exams arrive.",
  },
  {
    step: "V",
    title: "Parent partnership",
    description:
      "Monthly progress conversations, open-door faculty access and a shared understanding of the plan keep home and institute aligned.",
  },
];

export interface ScholarResultHighlight {
  figure: string;
  label: string;
  detail: string;
}

export const scholarResults: ScholarResultHighlight[] = [
  {
    figure: "98%",
    label: "Board distinction rate (demo)",
    detail:
      "Illustrative figure representing students scoring above 75% in Class 10 and 12 boards — placeholder for this design demo.",
  },
  {
    figure: "40+",
    label: "Students above 90% (demo)",
    detail:
      "A sample cohort highlight, included purely to demonstrate the results layout. Not a verified real-world claim.",
  },
  {
    figure: "12",
    label: "Olympiad qualifiers (demo)",
    detail:
      "Fictional count of regional olympiad qualifiers, shown as a placeholder achievement for the demo.",
  },
  {
    figure: "9 yrs",
    label: "Average faculty tenure",
    detail:
      "Reflects the institute's low turnover — the kind of stability that lets faculty know every student properly.",
  },
];

export interface ScholarTestimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

export const scholarTestimonials: ScholarTestimonial[] = [
  {
    id: "t1",
    quote:
      "What convinced us was the calmness of the place. There is no shouting, no ranking children against each other — just steady, expert teaching. Our daughter's Class 10 results reflected a full year of that patience.",
    name: "Sunita K.",
    role: "Parent · Class 10 (demo testimonial)",
  },
  {
    id: "t2",
    quote:
      "I joined the Class 11 science batch after struggling with physics in school. Vikram Sir made mechanics feel like something I could actually reason about, not memorise. The weekly problem sheets were genuinely useful.",
    name: "Arjun P.",
    role: "Student · Class 11 Science (demo testimonial)",
  },
  {
    id: "t3",
    quote:
      "The monthly progress meetings kept us informed without anxiety. We always knew what was being worked on and how to help at home. That transparency is rare, and we valued it enormously.",
    name: "Mohammed F.",
    role: "Parent · Class 12 Commerce (demo testimonial)",
  },
];

export interface ScholarTimelineEntry {
  year: string;
  title: string;
  description: string;
}

export const scholarTimeline: ScholarTimelineEntry[] = [
  {
    year: "2012",
    title: "Scholar House opens",
    description:
      "Founded above the old public library with two classrooms and fourteen students, on the principle of patient, excellent teaching.",
  },
  {
    year: "2015",
    title: "Full Class 9–12 programme",
    description:
      "Expanded to a complete senior-secondary curriculum after three successful board cohorts.",
  },
  {
    year: "2018",
    title: "Purpose-built campus",
    description:
      "Moved into the current Knowledge Park premises with dedicated laboratories, a reading room, and small-batch classrooms.",
  },
  {
    year: "2021",
    title: "Olympiad & enrichment stream",
    description:
      "Launched the weekend Olympiad programme for students seeking challenges beyond the board syllabus.",
  },
  {
    year: "2024",
    title: "Parent partnership programme",
    description:
      "Formalised monthly progress conversations and the shared learning-plan process now used with every family.",
  },
];

export interface ScholarWhyPoint {
  title: string;
  description: string;
}

export const scholarWhy: ScholarWhyPoint[] = [
  {
    title: "Small batches, genuinely",
    description:
      "Classes are capped at 15–20 students so that every child is known by name, by strengths, and by the work they hand in each week.",
  },
  {
    title: "Experienced, stable faculty",
    description:
      "Our core faculty have taught together for years. Continuity means teaching that builds deliberately, term after term, without restarting relationships.",
  },
  {
    title: "Parents as partners",
    description:
      "Monthly progress conversations and open-door access keep families in the loop — never a surprise at report-card time.",
  },
  {
    title: "Calm, focused environment",
    description:
      "No rank-lists on walls, no manufactured panic. A quiet, bookish atmosphere where students actually want to sit and work.",
  },
];

export interface ScholarAdmissionStep {
  step: string;
  title: string;
  description: string;
}

export const scholarAdmissions: ScholarAdmissionStep[] = [
  {
    step: "01",
    title: "Enquire",
    description:
      "Share your child's class and subjects of interest through the enquiry form, WhatsApp, or a phone call to the front desk.",
  },
  {
    step: "02",
    title: "Visit the campus",
    description:
      "Spend an hour with us: see the classrooms, meet a faculty member, and talk through your child's goals with the admissions counsellor.",
  },
  {
    step: "03",
    title: "Diagnostic assessment",
    description:
      "A friendly, low-stakes diagnostic helps us recommend the right batch and identify where support will matter most.",
  },
  {
    step: "04",
    title: "Confirm the seat",
    description:
      "Complete simple enrolment paperwork, receive the term schedule and learning plan, and begin with the next scheduled batch.",
  },
];

export interface ScholarFaq {
  question: string;
  answer: string;
}

export const scholarFaqs: ScholarFaq[] = [
  {
    question: "How large are the batches?",
    answer:
      "Foundation and board batches are capped at 15–18 students, and senior science batches at 20. We would rather turn admission away than dilute the attention each student receives.",
  },
  {
    question: "Is there any entrance coaching along with school syllabus?",
    answer:
      "Yes. Class 11 Science students can opt for a JEE/NEET foundation add-on that runs alongside the school-aligned core programme, without replacing it.",
  },
  {
    question: "How do you keep parents informed?",
    answer:
      "Every family receives a monthly progress conversation with the class faculty, fortnightly test summaries, and access to the class timetable and holiday calendar in advance.",
  },
  {
    question: "What is the fee structure, and are there sibling concessions?",
    answer:
      "Fees are payable term-wise. Concessions are available for siblings enrolled together and for students enrolling across multiple terms; please speak with the admissions counsellor for details.",
  },
  {
    question: "Do you offer a trial class before enrolling?",
    answer:
      "Yes. After the diagnostic assessment and campus visit, students are welcome to attend a live class in their prospective batch before confirming admission.",
  },
];
