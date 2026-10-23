// ILLUSTRATIVE DEMO CONTENT — all results, ranks, names, and credentials below are fictional placeholders for a design demo.

import { PLACEHOLDER_CONTACT, type DemoContact } from "@/lib/registry";

export const northstarContact: DemoContact = { ...PLACEHOLDER_CONTACT };

export interface NorthstarNavLink {
  href: string;
  label: string;
}

export const northstarHomeHref = "/demos/northstar";

export const northstarNav: NorthstarNavLink[] = [
  { href: northstarHomeHref, label: "Home" },
  { href: "/demos/northstar/courses", label: "Programmes" },
  { href: "/demos/northstar/faculty", label: "Mentors" },
  { href: "/demos/northstar/results", label: "Results" },
  { href: "/demos/northstar/about", label: "About" },
  { href: "/demos/northstar/contact", label: "Contact" },
];

export interface NorthstarCourse {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  mode: string;
  highlights: string[];
  fee: string;
}

export const northstarCourses: NorthstarCourse[] = [
  {
    id: "upsc-general-studies",
    name: "UPSC General Studies",
    tagline:
      "A complete Prelims-cum-Mains programme built around mentor contact and answer writing.",
    duration: "12–15 months · foundation to interview",
    mode: "Offline morning batches · live evening repeats",
    highlights: [
      "GS I–IV taught as one connected syllabus, not four isolated subjects",
      "Answer writing from week three, evaluated by the mentor who taught the class",
      "Weekly current-affairs studio with newspaper-led discussion",
      "Full Prelims simulation series with post-paper dissection sessions",
      "Mains test series with one-to-one feedback copies",
    ],
    fee: "₹1,28,000 (illustrative)",
  },
  {
    id: "ssc-cgl-chsl",
    name: "SSC CGL & CHSL",
    tagline:
      "Tier-wise preparation with the quantitative and language rigour the merit list rewards.",
    duration: "6–8 months · Tier I to Tier II",
    mode: "Offline batches of 30 · weekend doubt clinics",
    highlights: [
      "Quantitative aptitude taught from arithmetic fundamentals upward",
      "English language module built on usage, not rule-mugging",
      "General awareness distilled from standard sources, revised on a cycle",
      "Tier II oriented descriptive and statistics practice",
      "Alternate full-length mocks with percentile discussion",
    ],
    fee: "₹42,000 (illustrative)",
  },
  {
    id: "banking-po-clerk",
    name: "Banking PO & Clerk",
    tagline:
      "Speed, accuracy and temperament for IBPS and SBI — trained together, not separately.",
    duration: "4–6 months · preliminary to mains",
    mode: "Offline and live-online parallel tracks",
    highlights: [
      "Reasoning and quantitative sections drilled to sectional timing",
      "Banking awareness and current economy taught in plain language",
      "Mains-level descriptive English practice with model answers",
      "Interview studio for PO candidates, including HR and banking scenarios",
      "Performance sheets that track speed and accuracy, not just scores",
    ],
    fee: "₹36,000 (illustrative)",
  },
  {
    id: "optional-mentoring",
    name: "Optional Subject Mentoring",
    tagline:
      "One mentor, one optional, one syllabus map — treated with the seriousness Mains demands.",
    duration: "8–10 months · alongside GS",
    mode: "Small cohorts, capped at 20",
    highlights: [
      "History, Public Administration, Geography and Sociology cohorts",
      "Paper I and Paper II taught as a single argument, not two book lists",
      "Weekly sectional tests growing into full papers under timed conditions",
      "Previous-year paper analysis every fortnight",
      "Notes programme: each aspirant builds a revision set in their own hand",
    ],
    fee: "₹58,000 (illustrative)",
  },
  {
    id: "interview-personality-test",
    name: "Interview & Personality Test",
    tagline:
      "A six-week studio for the final fifty marks — where composure is prepared as carefully as content.",
    duration: "6 weeks · winter cohort",
    mode: "Studio sessions of 8 candidates",
    highlights: [
      "Mock boards with serving and retired civil servants (demo profiles)",
      "Dossier and bio-data preparation, line by line",
      "Current-issue grilling calibrated to your optional and cadre choice",
      "Recording, playback and honest critique of every mock",
      "Ethical-dilemma conversation practice for the ethics panel",
    ],
    fee: "₹24,000 (illustrative)",
  },
];

export interface NorthstarFaculty {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  image: string;
  alt: string;
}

export const northstarFaculty: NorthstarFaculty[] = [
  {
    id: "s-krishnan",
    name: "S. Krishnan",
    role: "Director · Polity & Governance",
    credentials:
      "M.A. Public Administration · 18 years mentoring UPSC aspirants (demo credentials)",
    bio: "Krishnan founded Northstar after nearly two decades of mentoring aspirants alongside his own public-policy work. He teaches Polity as a living argument rather than a clause-compendium, and he still personally evaluates the first answer copy of every General Studies student.",
    image: "/images/northstar/faculty-4.jpg",
    alt: "Editorial portrait of S. Krishnan, director and polity mentor at Northstar Institute",
  },
  {
    id: "kavita-bhattacharya",
    name: "Kavita Bhattacharya",
    role: "Economy & Current Affairs",
    credentials:
      "M.Phil Economics · 13 years teaching experience (demo credentials)",
    bio: "Kavita's economy classes are built on a simple discipline: no jargon survives her whiteboard until it has been explained in ordinary language. She also runs the daily newspaper studio, where aspirants learn to read the news the way a Mains paper rewards.",
    image: "/images/northstar/faculty-2.jpg",
    alt: "Editorial portrait of Kavita Bhattacharya, economy and current affairs mentor",
  },
  {
    id: "r-venkatesh",
    name: "R. Venkatesh",
    role: "History & Optional Mentoring",
    credentials:
      "M.A. Modern History · 15 years teaching experience (demo credentials)",
    bio: "Venkatesh teaches history as evidence weighed, not dates collected. He leads the History optional cohort and is known among students for marginal notes that turn a practice answer into an argument — a habit he insists every mentee acquires.",
    image: "/images/northstar/faculty-3.jpg",
    alt: "Editorial portrait of R. Venkatesh, history and optional-subject mentor",
  },
  {
    id: "farhat-ali",
    name: "Farhat Ali",
    role: "Reasoning, Aptitude & Banking",
    credentials:
      "M.Sc. Statistics · 11 years teaching experience (demo credentials)",
    bio: "Farhat designs the institute's quantitative and reasoning drills. He treats speed as a result of method, not panic, and his sectional-timing sheets have become the standard preparation tool for the SSC and banking cohorts.",
    image: "/images/northstar/faculty-1.jpg",
    alt: "Editorial portrait of Farhat Ali, reasoning and quantitative aptitude mentor",
  },
];

export interface NorthstarRoadmapStage {
  stage: string;
  title: string;
  window: string;
  description: string;
}

export const northstarRoadmap: NorthstarRoadmapStage[] = [
  {
    stage: "I",
    title: "Orientation & diagnostic map",
    window: "Weeks 1–2",
    description:
      "A written diagnostic across all papers, a conversation about work, family and time, and an honest mentor recommendation — including when a shorter programme is the wiser choice.",
  },
  {
    stage: "II",
    title: "Syllabus architecture",
    window: "Months 1–5",
    description:
      "The GS syllabus is taught as a connected structure. Each block is mapped to its previous-year questions, so aspirants always know why a chapter is on the page and where it will be examined.",
  },
  {
    stage: "III",
    title: "Current affairs discipline",
    window: "Ongoing, weekly",
    description:
      "One newspaper, one magazine, one revision notebook. The weekly studio converts reading into short notes that double as Mains evidence — no stockpiling, no month-end panic.",
  },
  {
    stage: "IV",
    title: "Answer writing studio",
    window: "Months 4–10",
    description:
      "Sectional tests grow into full papers under timed conditions. Every copy is returned with a marked rubric and one conversation: what to keep, what to cut, what to practise next.",
  },
  {
    stage: "V",
    title: "Simulation & personality test",
    window: "Final 3 months",
    description:
      "Prelims simulations under exam-hall discipline, Mains in real seat-time blocks, and — for those who clear — a six-week interview studio with recorded mocks and frank debriefs.",
  },
];

export interface NorthstarJourney {
  id: string;
  aspirant: string;
  track: string;
  timeframe: string;
  story: string;
  outcome: string;
  image: string;
  alt: string;
}

export const northstarJourneys: NorthstarJourney[] = [
  {
    id: "ritika-m",
    aspirant: "Ritika M.",
    track: "UPSC Civil Services",
    timeframe: "Working professional · two attempts (demo story)",
    story:
      "Ritika joined the evening repeat batch while working full-time in a bank. Her mentor rebuilt the day around a 90-minute morning block and a disciplined Sunday test. Two attempts later, the habit — not heroics — carried her into the Mains list in this illustrative story.",
    outcome:
      "Cleared to Mains on the second attempt (demo outcome, not a verified claim).",
    image: "/images/northstar/student.jpg",
    alt: "A Northstar aspirant reading at a study desk beside a window",
  },
  {
    id: "arjun-s",
    aspirant: "S. Arjun",
    track: "SSC CGL",
    timeframe: "Final-year graduate · one attempt (demo story)",
    story:
      "Arjun arrived fluent in formulas and careless in arithmetic. Farhat's drill sheets slowed him down for six weeks — deliberately — until accuracy stabilised above ninety per cent. Speed arrived afterwards, on its own.",
    outcome:
      "Tier-II qualified in his first attempt (demo outcome, not a verified claim).",
    image: "/images/northstar/notes.jpg",
    alt: "Handwritten preparation notes and a marked answer sheet on a wooden desk",
  },
  {
    id: "meenakshi-r",
    aspirant: "Meenakshi R.",
    track: "Banking PO",
    timeframe: "Working clerk · one cycle (demo story)",
    story:
      "Already inside a bank, Meenakshi prepared for the PO mains on her lunch hours and commute. The interview studio spent four sessions on her own branch's credit portfolio — she walked into the panel able to speak from work, not textbooks.",
    outcome:
      "Selected in the PO cadre in this illustrative story (demo outcome).",
    image: "/images/northstar/books.jpg",
    alt: "A quiet stack of standard reference books with reading markers",
  },
];

export interface NorthstarResultHighlight {
  figure: string;
  label: string;
  detail: string;
}

export const northstarResults: NorthstarResultHighlight[] = [
  {
    figure: "38",
    label: "Final-list selections (demo)",
    detail:
      "An illustrative count of civil-services and banking selections attributed to Northstar cohorts in this fictional demo. Not a verified real-world claim.",
  },
  {
    figure: "112",
    label: "Interview calls (demo)",
    detail:
      "Fictional placeholder representing candidates who reached personality-test stages across UPSC, SSC and banking examinations in this design demo.",
  },
  {
    figure: "1 : 14",
    label: "Mentor-to-aspirant ratio",
    detail:
      "The structural figure the institute holds itself to — small enough that every answer copy is read by the mentor who taught the class.",
  },
  {
    figure: "9 yrs",
    label: "Average mentor tenure",
    detail:
      "Continuity of faculty is treated as a results strategy: the same mentors, teaching the same argument, year after year.",
  },
];

export interface NorthstarTestimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

export const northstarTestimonials: NorthstarTestimonial[] = [
  {
    id: "t1",
    quote:
      "What I needed was not more lectures — it was one mentor who read my answers honestly. My first copy came back with eleven marginal notes and a two-line verdict. That verdict did more for my Mains than a year of reading.",
    name: "Ritika M.",
    role: "UPSC aspirant · demo testimonial",
  },
  {
    id: "t2",
    quote:
      "The institute talked me out of the longest programme and into a six-month one. That conversation, on the first day, is why I trusted everything that followed.",
    name: "Kunal D.",
    role: "SSC aspirant · demo testimonial",
  },
  {
    id: "t3",
    quote:
      "My daughter prepared here while holding a full-time job. The mentors kept her to a plan that respected her hours. She never once felt she was catching up — she felt she was on schedule.",
    name: "Shobha R.",
    role: "Parent of a banking aspirant · demo testimonial",
  },
];

export interface NorthstarPrinciple {
  index: string;
  title: string;
  description: string;
}

export const northstarPrinciples: NorthstarPrinciple[] = [
  {
    index: "01",
    title: "Mentor-led, not lecture-led",
    description:
      "Every batch belongs to a named mentor who designs its syllabus map, teaches its core classes, and returns its evaluated copies. No rotating panel, no anonymous test series.",
  },
  {
    index: "02",
    title: "The syllabus is architecture",
    description:
      "Papers are taught as connected structures. Aspirants leave each block able to draw its skeleton on a blank page — the only revision system that survives the final month.",
  },
  {
    index: "03",
    title: "Answer writing from week three",
    description:
      "Reading is necessary and insufficient. Writing under time pressure begins early and continues relentlessly, because marks are made on paper, not in the margins of a book.",
  },
  {
    index: "04",
    title: "Counselling that can say no",
    description:
      "We recommend shorter programmes, later attempts and honest gaps when the situation demands. Trust, not volume, is the basis on which this institute intends to grow.",
  },
];

export interface NorthstarAdmissionStep {
  step: string;
  title: string;
  description: string;
}

export const northstarAdmissions: NorthstarAdmissionStep[] = [
  {
    step: "01",
    title: "A conversation",
    description:
      "Share your target examination, timeline and constraints by form, phone or WhatsApp. A counsellor replies within one working day — with honest guidance, not a sales script.",
  },
  {
    step: "02",
    title: "Diagnostic & mentor match",
    description:
      "Sit a short written diagnostic across the relevant papers. A mentor reviews it with you, then recommends the batch — or the smaller programme, if that serves you better.",
  },
  {
    step: "03",
    title: "Study plan & enrolment",
    description:
      "Confirm the batch and receive your personalised study map: weekly hours, test calendar, reading list and the first three writing assignments, dated.",
  },
  {
    step: "04",
    title: "Orientation week",
    description:
      "The first week is deliberate and quiet: library access, note-taking method, timetable habits, and a first conversation with your mentor before the syllabus begins in earnest.",
  },
];

export interface NorthstarFaq {
  question: string;
  answer: string;
}

export const northstarFaqs: NorthstarFaq[] = [
  {
    question: "How large are the batches, really?",
    answer:
      "General Studies and optional cohorts are capped at 30 and 20 aspirants respectively; the interview studio runs in groups of 8. Batch sizes are fixed at these numbers, and when a batch fills, the next one starts rather than absorbing extra seats.",
  },
  {
    question: "I am a working professional. Can I prepare alongside a job?",
    answer:
      "A substantial share of our UPSC and banking aspirants work full-time. Evening repeat classes, weekend clinics and a test calendar designed around working hours make it feasible — though the diagnostic conversation will be frank about the trade-offs in scope and pace.",
  },
  {
    question: "When should I choose my optional subject?",
    answer:
      "Ideally within the first three months of General Studies. The optional mentoring cohort can accommodate later joins where seats remain, but delaying the optional is the most common scheduling mistake aspirants make, and we plan around avoiding it.",
  },
  {
    question: "Is the test series included, or charged separately?",
    answer:
      "Sectional tests and the full Prelims simulation series are included in the General Studies programme fee. The Mains test series and interview studio are available as separate enrolments for candidates from other institutes as well.",
  },
  {
    question: "How do fees and instalments work?",
    answer:
      "Fees may be paid in full or in two instalments per programme; the second instalment falls at the mid-point of the course. Scholarships are assessed on diagnostic performance and family circumstances. All figures shown on this site are illustrative demo amounts.",
  },
];
