// ILLUSTRATIVE DEMO CONTENT — all results, ranks, names, and credentials below are fictional placeholders for a design demo.

import { PLACEHOLDER_CONTACT, type DemoContact } from "@/lib/registry";

export interface AuroraNavLink {
  label: string;
  href: string;
}

export interface AuroraCourse {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  mode: string;
  highlights: string[];
  fee: string;
}

export interface AuroraFaculty {
  id: string;
  name: string;
  role: string;
  credential: string;
  focus: string;
  bio: string;
  image: string;
  imageAlt: string;
}

export interface AuroraStat {
  id: string;
  value: string;
  label: string;
}

export interface AuroraResultStory {
  id: string;
  student: string;
  exam: string;
  headline: string;
  story: string;
  focus: string[];
}

export interface AuroraTestimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

export interface AuroraPoint {
  id: string;
  title: string;
  body: string;
}

export interface AuroraStep {
  id: string;
  step: string;
  title: string;
  body: string;
}

export interface AuroraFaq {
  question: string;
  answer: string;
}

export const auroraContact: DemoContact = { ...PLACEHOLDER_CONTACT };

export const auroraNav: AuroraNavLink[] = [
  { label: "Home", href: "/demos/aurora" },
  { label: "Courses", href: "/demos/aurora/courses" },
  { label: "Faculty", href: "/demos/aurora/faculty" },
  { label: "Results", href: "/demos/aurora/results" },
  { label: "About", href: "/demos/aurora/about" },
  { label: "Contact", href: "/demos/aurora/contact" },
  { label: "All concepts", href: "/" },
];

export const auroraCourses: AuroraCourse[] = [
  {
    id: "jee-advanced-foundation",
    name: "JEE Advanced Foundation",
    tagline:
      "Two years of concept-first preparation for aspirants aiming at the most competitive engineering entrances.",
    duration: "24 months · Class 11 to Class 12",
    mode: "Classroom + digital campus",
    highlights: [
      "Advanced problem labs every week",
      "Full JEE-pattern mocks from month nine",
      "Doubt desks open six days a week",
      "Fortnightly one-to-one mentor reviews",
    ],
    fee: "₹1,60,000 / year",
  },
  {
    id: "neet-elite",
    name: "NEET Elite",
    tagline:
      "Biology taught to mastery, with physics and chemistry held to exactly the same standard.",
    duration: "24 months · Class 11 to Class 12",
    mode: "Classroom + digital campus",
    highlights: [
      "NCERT line-by-line mastery tracks",
      "Weekly NEET-pattern simulations",
      "Diagram, recall and assertion drills",
      "Chapter-level accuracy reporting",
    ],
    fee: "₹1,50,000 / year",
  },
  {
    id: "integrated-11-12",
    name: "Class 11–12 Integrated",
    tagline:
      "Board syllabus and competitive preparation planned as one continuous calendar instead of two competing ones.",
    duration: "24 months · Class 11 to Class 12",
    mode: "Morning school support + evening batches",
    highlights: [
      "Board and entrance syllabus mapped together",
      "Month-wise revision calendar from day one",
      "School exam support included",
      "Two diagnostic sittings every term",
    ],
    fee: "₹1,20,000 / year",
  },
  {
    id: "crash-revision",
    name: "Crash & Revision",
    tagline:
      "Twelve focused weeks that turn a finished syllabus into reliable, exam-ready recall.",
    duration: "12 weeks · Pre-exam sprint",
    mode: "Intensive classroom + daily tests",
    highlights: [
      "Condensed concept and formula sheets",
      "Alternate-day full-length papers",
      "Same-day error analysis sessions",
      "Final strategy sitting with a mentor",
    ],
    fee: "₹42,000 / course",
  },
  {
    id: "droppers-program",
    name: "Droppers Program",
    tagline:
      "A structured repeat year for students rewriting the exam with a clearer plan and honest feedback.",
    duration: "12 months · After Class 12",
    mode: "Daily classroom + supervised evening study",
    highlights: [
      "Fresh diagnostic before day one",
      "Weak-chapter rebuild blocks",
      "Fortnightly ranking simulations",
      "Weekly accountability reviews",
    ],
    fee: "₹1,35,000 / year",
  },
];

export const auroraFaculty: AuroraFaculty[] = [
  {
    id: "arvind-menon",
    name: "Arvind Menon",
    role: "Head of Physics",
    credential: "M.Sc. Physics · 15 years of JEE mentoring (demo credential)",
    focus: "Mechanics, electrodynamics",
    bio: "Arvind rebuilds physics from first principles. Every chapter opens with the question the examiner is really asking, so long derivations collapse into a handful of decisions a student can recall under pressure.",
    image: "/images/aurora/faculty-1.jpg",
    imageAlt: "Portrait of Arvind Menon, physics mentor (illustrative demo profile)",
  },
  {
    id: "kavitha-raghavan",
    name: "Kavitha Raghavan",
    role: "Head of Biology",
    credential: "M.Phil. Zoology · NEET curriculum lead (demo credential)",
    focus: "Physiology, genetics, ecology",
    bio: "Kavitha treats biology as a reading discipline. Her batches work through NCERT with a annotation method that turns dense paragraphs into recallable structures before memorisation ever begins.",
    image: "/images/aurora/faculty-2.jpg",
    imageAlt: "Portrait of Kavitha Raghavan, biology mentor (illustrative demo profile)",
  },
  {
    id: "devendra-sathe",
    name: "Devendra Sathe",
    role: "Head of Chemistry",
    credential: "M.Sc. Organic Chemistry · Olympiad mentor (demo credential)",
    focus: "Organic reaction logic, physical chemistry",
    bio: "Devendra teaches chemistry as a system of patterns rather than a list of reactions. Students leave his sessions able to predict unfamiliar chemistry instead of remembering familiar answers.",
    image: "/images/aurora/faculty-3.jpg",
    imageAlt: "Portrait of Devendra Sathe, chemistry mentor (illustrative demo profile)",
  },
  {
    id: "nandita-iyer",
    name: "Nandita Iyer",
    role: "Head of Mathematics",
    credential: "M.Tech · 12 years of paper strategy coaching (demo credential)",
    focus: "Calculus, coordinate geometry",
    bio: "Nandita pairs mathematical rigour with exam pragmatism: which method is fastest, where marks are typically lost, and how to hold accuracy through the final twenty minutes of a paper.",
    image: "/images/aurora/faculty-4.jpg",
    imageAlt: "Portrait of Nandita Iyer, mathematics mentor (illustrative demo profile)",
  },
];

export const auroraStats: AuroraStat[] = [
  { id: "years", value: "12 yrs", label: "Mentoring JEE and NEET aspirants" },
  { id: "students", value: "1,400+", label: "Students coached across batches" },
  { id: "attempts", value: "92%", label: "First-attempt qualification rate" },
  { id: "batch", value: "18", label: "Students in a typical mentor batch" },
];

export const auroraResults: AuroraResultStory[] = [
  {
    id: "aarav-s",
    student: "Aarav S.",
    exam: "JEE Advanced · 2025 session (demo)",
    headline: "AIR 2XX band in the demo range",
    story:
      "Aarav arrived with strong physics and a chemistry gap that had gone unnoticed for a year. A rebuilt organic track, fortnightly error reviews and a fixed mock calendar moved his practice scores from the sixties into the nineties percentile band.",
    focus: ["Organic chemistry rebuild", "Mock discipline", "Time management"],
  },
  {
    id: "ishita-r",
    student: "Ishita R.",
    exam: "NEET UG · 2025 session (demo)",
    headline: "6XX score band in the demo range",
    story:
      "Ishita's recall was inconsistent under timed conditions. Daily mixed-question sets, diagram drills and same-day analysis turned biology from her most variable subject into the steadiest part of her paper.",
    focus: ["Recall under pressure", "NCERT mastery", "Stamina building"],
  },
  {
    id: "kabir-m",
    student: "Kabir M.",
    exam: "JEE Main · 2025 session (demo)",
    headline: "99.XX percentile band in the demo range",
    story:
      "Kabir could solve almost anything given time, so the work was entirely about speed. Section-wise timing drills and a rewritten attempt order gave him back close to twenty minutes in the final paper.",
    focus: ["Attempt ordering", "Speed drills", "Calculation accuracy"],
  },
  {
    id: "sanya-t",
    student: "Sanya T.",
    exam: "NEET UG · 2025 session (demo)",
    headline: "Improved 1XX marks over her previous attempt (demo)",
    story:
      "Returning after an attempt that fell short, Sanya started with a diagnostic that named three specific chapters costing her marks. The Droppers Program rebuilt only what was broken and protected everything else.",
    focus: ["Targeted rebuild", "Weekly accountability", "Exam temperament"],
  },
];

export const auroraTestimonials: AuroraTestimonial[] = [
  {
    id: "parent-prakash",
    quote:
      "The review loop is what convinced us. Every fortnight we could see which chapters were moving and which were not — no guessing, no panic before the exam.",
    name: "R. Prakash",
    role: "Parent of a Class 12 student (demo)",
  },
  {
    id: "student-meher",
    quote:
      "My mentor kept the syllabus honest. We finished on time, revised twice, and walked into the hall knowing the paper held nothing genuinely new for us.",
    name: "Meher K.",
    role: "JEE aspirant (demo)",
  },
  {
    id: "parent-lakshmi",
    quote:
      "Small batches meant my daughter's weak areas were noticed in week two, not month six. That attention is exactly what we were paying for.",
    name: "S. Lakshmi",
    role: "Parent of a NEET aspirant (demo)",
  },
];

export const auroraWhy: AuroraPoint[] = [
  {
    id: "batches",
    title: "Batches capped at eighteen",
    body: "Every student is known by name, by weakness and by pace. Mentors carry the same batch through the year, so nothing has to be re-explained from scratch each term.",
  },
  {
    id: "syllabus",
    title: "A syllabus you can see",
    body: "From day one, students work against a mapped calendar: what is taught this week, what is revised next month, and exactly where the checkpoints fall.",
  },
  {
    id: "testing",
    title: "Testing that tells the truth",
    body: "Weekly papers are graded for marks and for method. The analysis names the question types costing marks, so revision becomes targeted instead of hopeful.",
  },
  {
    id: "feedback",
    title: "Feedback with a name attached",
    body: "Fortnightly mentor reviews bring parents into the loop — progress, attendance and the plan for the next two weeks, written down and owned by one person.",
  },
];

export const auroraMethod: AuroraStep[] = [
  {
    id: "diagnose",
    step: "01",
    title: "Diagnose",
    body: "A baseline assessment maps strengths, gaps and study habits before a single chapter is taught.",
  },
  {
    id: "build",
    step: "02",
    title: "Build",
    body: "Concept-first classes with worked problems solved in the room. Nothing moves forward until the room can solve it.",
  },
  {
    id: "stress-test",
    step: "03",
    title: "Stress-test",
    body: "Weekly papers under exam conditions, graded the same day, with an error analysis that names patterns rather than chapters.",
  },
  {
    id: "refine",
    step: "04",
    title: "Refine",
    body: "Fortnightly one-to-one reviews rewrite the study plan around what the data actually shows.",
  },
];

export const auroraAdmissions: AuroraStep[] = [
  {
    id: "enquire",
    step: "01",
    title: "Enquire",
    body: "Share the student's class, target exam and timeline through the form, a call or WhatsApp.",
  },
  {
    id: "diagnostic",
    step: "02",
    title: "Diagnostic sitting",
    body: "A 45-minute assessment and a short mentor conversation establish the honest starting point.",
  },
  {
    id: "counselling",
    step: "03",
    title: "Counselling",
    body: "We recommend a programme, batch and revision calendar — and answer fee and schedule questions plainly.",
  },
  {
    id: "enrol",
    step: "04",
    title: "Enrol",
    body: "Confirm the seat, complete enrolment, and meet the mentor who will own the batch for the year.",
  },
];

export const auroraFaqs: AuroraFaq[] = [
  {
    question: "How large are the batches?",
    answer:
      "Classroom batches are capped at eighteen students so mentors can track every student individually. When a batch fills we open a second one rather than extend the first — the ratio is the programme.",
  },
  {
    question: "Are the fees shown on this site final?",
    answer:
      "No. This website is a design demonstration, so every figure on it — fees, results, student counts and rankings — is an illustrative placeholder. A live institute would publish its current fee structure and policies in this exact section.",
  },
  {
    question: "Do you support students repeating a year?",
    answer:
      "Yes. The Droppers Program is a full-year route with a fresh diagnostic, rebuilt fundamentals and a fortnightly review cycle. Programme details shown here are illustrative demo content.",
  },
  {
    question: "How do classroom and online students learn together?",
    answer:
      "Every classroom session is mirrored on the digital campus with the same notes, problem sets and same-day grading, so a student joining a session online never falls behind the room.",
  },
  {
    question: "What does the diagnostic actually measure?",
    answer:
      "Concept clarity across the core subjects, speed under timed conditions, and the study habits behind both. It takes about 45 minutes and the results are walked through with the student and a parent or guardian.",
  },
];

export const auroraChooser: AuroraPoint[] = [
  {
    id: "by-class",
    title: "By class",
    body: "Class 11 and 12 students should begin with a two-year route — integrated if school exams matter, JEE or NEET Elite when the entrance paper is the only target.",
  },
  {
    id: "by-goal",
    title: "By goal",
    body: "Engineering aspirants follow JEE Advanced Foundation, medical aspirants follow NEET Elite. Both run the same testing discipline and the same mentor ratio.",
  },
  {
    id: "by-timeline",
    title: "By timeline",
    body: "Under twelve weeks to the exam, choose Crash & Revision. Rewriting next year after Class 12, choose the Droppers Program and start with a fresh diagnostic.",
  },
];

export const auroraRelationship: AuroraPoint[] = [
  {
    id: "doubt-hours",
    title: "Doubt desks, six days a week",
    body: "Questions are not queued until the next class. A mentor is physically present at the doubt desk every evening the campus is open.",
  },
  {
    id: "batch-ownership",
    title: "One mentor owns the batch",
    body: "The teacher who takes the first class also signs the fortnightly review. Continuity is what makes feedback specific instead of generic.",
  },
  {
    id: "parent-reviews",
    title: "Parents read the same sheet",
    body: "Every fortnight, progress, attendance and the next two-week plan are written down and shared with the family — in the student's own hand.",
  },
];

export const auroraTracking: AuroraStep[] = [
  {
    id: "baseline",
    step: "01",
    title: "Baseline percentile",
    body: "Every student starts with a timed paper that establishes an honest percentile band before teaching begins.",
  },
  {
    id: "simulation",
    step: "02",
    title: "Fortnightly simulation",
    body: "Full-length papers under exam conditions, graded for marks and method, with a named question-type analysis.",
  },
  {
    id: "review",
    step: "03",
    title: "Written mentor review",
    body: "The mentor records what moved, what did not and what the next fortnight will target — shared with the family.",
  },
];

export const auroraCampus: AuroraPoint[] = [
  {
    id: "classrooms",
    title: "Eighteen-seat classrooms",
    body: "Rooms built for discussion rather than lectures — every student sits close enough to be asked a question.",
  },
  {
    id: "doubt-desk",
    title: "Evening doubt desk",
    body: "A staffed desk open until closing, six days a week, for the question that refuses to wait for the next class.",
  },
  {
    id: "test-hall",
    title: "In-house test hall",
    body: "Weekly papers written under exam conditions — same seating discipline, same invigilation, same clock.",
  },
  {
    id: "digital-campus",
    title: "Digital campus",
    body: "Recorded sessions, graded papers and error analyses mirrored online, so a missed class is never a lost week.",
  },
];

export const auroraNextSteps: AuroraStep[] = [
  {
    id: "reply",
    step: "01",
    title: "We reply within a day",
    body: "A counsellor responds during working hours with the batches currently open and the next diagnostic dates.",
  },
  {
    id: "sit",
    step: "02",
    title: "You attend a diagnostic",
    body: "Forty-five minutes of assessment, followed by a short conversation with the mentor who would teach the batch.",
  },
  {
    id: "decide",
    step: "03",
    title: "You decide, unhurried",
    body: "We share a written recommendation — programme, batch, calendar and fee — and leave the decision entirely with you.",
  },
];

export const auroraManifesto = {
  paragraphs: [
    "Aurora Academy began with a room that was deliberately too small. Twelve students, one mentor, one blackboard — and the discovery that attention, given consistently for two years, produces results that volume never could.",
    "Twelve years later the blackboards are screens and the room holds eighteen students, but the constraint is the same on purpose. We do not run lecture halls. We run batches where a mentor knows which chapter is costing a student marks in week six, and can change the plan by week seven.",
    "What follows is a school of preparation rather than a school of teaching: diagnose honestly, build carefully, stress-test weekly, refine fortnightly. The exam stays the same every year. Our job is to make sure nothing in it arrives as a surprise.",
  ],
  quote: "We would rather teach eighteen students properly than two hundred adequately.",
  attribution: "The founding principle of Aurora Academy (demo)",
};

export const auroraContactLead =
  "Bring the student's class, target exam and timeline. We will recommend a programme and batch honestly — including when we are not the right fit.";
