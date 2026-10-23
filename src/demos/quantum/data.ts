// ILLUSTRATIVE DEMO CONTENT — all results, ranks, names, and credentials below are fictional placeholders for a design demo.

import { PLACEHOLDER_CONTACT, type DemoContact } from "@/lib/registry";

export interface QuantumNavLink {
  label: string;
  href: string;
}

export interface QuantumCourse {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  mode: string;
  highlights: string[];
  fee: string;
}

export interface QuantumFaculty {
  id: string;
  name: string;
  role: string;
  credential: string;
  focus: string;
  bio: string;
  image: string;
  imageAlt: string;
}

export interface QuantumConcept {
  id: string;
  title: string;
  blurb: string;
  topics: string[];
  image: string;
  imageAlt: string;
}

export interface QuantumStat {
  id: string;
  value: string;
  label: string;
}

export interface QuantumResultStory {
  id: string;
  student: string;
  exam: string;
  headline: string;
  story: string;
  focus: string[];
}

export interface QuantumTestimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

export interface QuantumPoint {
  id: string;
  title: string;
  body: string;
}

export interface QuantumStep {
  id: string;
  step: string;
  title: string;
  body: string;
}

export interface QuantumFaq {
  question: string;
  answer: string;
}

export const quantumContact: DemoContact = { ...PLACEHOLDER_CONTACT };

export const quantumNav: QuantumNavLink[] = [
  { label: "Home", href: "/demos/quantum" },
  { label: "Courses", href: "/demos/quantum/courses" },
  { label: "Faculty", href: "/demos/quantum/faculty" },
  { label: "Results", href: "/demos/quantum/results" },
  { label: "About", href: "/demos/quantum/about" },
  { label: "Contact", href: "/demos/quantum/contact" },
  { label: "All concepts", href: "/" },
];

export const quantumCourses: QuantumCourse[] = [
  {
    id: "jee-physics-maths-intensive",
    name: "JEE Physics & Maths Intensive",
    tagline:
      "A two-year, concept-first route for aspirants targeting JEE Main and Advanced, with physics and mathematics taught to the same depth.",
    duration: "24 months · Class 11 to Class 12",
    mode: "Classroom + online mirror",
    highlights: [
      "First-principles mechanics and calculus tracks",
      "Weekly problem labs with in-room solving",
      "Full JEE-pattern simulations from month nine",
      "Error-tagged feedback after every graded paper",
    ],
    fee: "₹1,40,000 / year",
  },
  {
    id: "advanced-mathematics-lab",
    name: "Advanced Mathematics Lab",
    tagline:
      "A weekend enrichment lab for students who want mathematics beyond the syllabus — olympiad-flavoured problems with direct exam utility.",
    duration: "12 months · Weekend batches",
    mode: "Saturday problem lab + problem sets",
    highlights: [
      "Combinatorics, number theory and geometry modules",
      "Proof-writing and alternative-solution reviews",
      "Open problem sessions twice a month",
      "Optional olympiad paper track",
    ],
    fee: "₹54,000 / year",
  },
  {
    id: "neet-biology-chemistry",
    name: "NEET Biology + Chemistry",
    tagline:
      "Biology and chemistry held to exam-standard precision, with physics support so the full NEET paper is covered honestly.",
    duration: "24 months · Class 11 to Class 12",
    mode: "Classroom + online mirror",
    highlights: [
      "NCERT-anchored recall structures for biology",
      "Reaction-logic approach to organic chemistry",
      "Weekly NEET-pattern simulations",
      "Diagram and assertion-reason drill banks",
    ],
    fee: "₹1,30,000 / year",
  },
  {
    id: "coding-computational-thinking",
    name: "Coding & Computational Thinking",
    tagline:
      "Python, data structures and algorithmic thinking for school students — taught with the same diagnostic discipline as the exam tracks.",
    duration: "16 weeks per level · Three levels",
    mode: "Evening batches + project reviews",
    highlights: [
      "Level 1: Python fundamentals and modelling",
      "Level 2: Data structures and problem patterns",
      "Level 3: Algorithms, complexity and projects",
      "Portfolio project reviewed by a mentor",
    ],
    fee: "₹28,000 / level",
  },
  {
    id: "concept-diagnostics-program",
    name: "Concept-Diagnostics Program",
    tagline:
      "A three-week assessment cycle that maps a student's concept landscape before any programme is chosen.",
    duration: "3 weeks · Rolling intake",
    mode: "Supervised sittings + mentor report",
    highlights: [
      "Subject-wise concept mapping papers",
      "Timed speed-and-accuracy measurement",
      "Written diagnostic report with a revision map",
      "Fee fully adjustable against a programme",
    ],
    fee: "₹6,500 / cycle",
  },
];

export const quantumFaculty: QuantumFaculty[] = [
  {
    id: "rohan-deshpande",
    name: "Rohan Deshpande",
    role: "Head of Physics",
    credential: "M.Sc. Physics · 14 years of JEE mentoring (demo credential)",
    focus: "Mechanics, electrodynamics, modern physics",
    bio: "Rohan builds every physics chapter from the underlying model — free-body diagrams, field lines, energy arguments — before a single formula appears. Students leave his sessions able to reconstruct a relation they have forgotten, which is what exam pressure actually tests.",
    image: "/images/quantum/faculty-1.jpg",
    imageAlt:
      "Portrait of Rohan Deshpande, physics mentor (illustrative demo profile)",
  },
  {
    id: "ananya-iyer",
    name: "Ananya Iyer",
    role: "Head of Mathematics",
    credential: "M.Sc. Mathematics · Olympiad mentor (demo credential)",
    focus: "Calculus, coordinate geometry, combinatorics",
    bio: "Ananya treats mathematics as a language with grammar. Her labs make students prove the short-cut before they use it, so the method survives the exam hall even when the numbers change.",
    image: "/images/quantum/faculty-2.jpg",
    imageAlt:
      "Portrait of Ananya Iyer, mathematics mentor (illustrative demo profile)",
  },
  {
    id: "sana-anand",
    name: "Sana Anand",
    role: "Head of Biology & Chemistry",
    credential: "M.Sc. Biochemistry · NEET curriculum lead (demo credential)",
    focus: "Physiology, organic reaction logic, physical chemistry",
    bio: "Sana teaches biology as structured reading and chemistry as pattern logic. Her recall maps and reaction trees turn dense chapters into systems a student can navigate under a ninety-minute clock.",
    image: "/images/quantum/faculty-4.jpg",
    imageAlt:
      "Portrait of Sana Anand, biology and chemistry mentor (illustrative demo profile)",
  },
  {
    id: "vikram-sethi",
    name: "Vikram Sethi",
    role: "Head of Computing",
    credential: "M.Tech · Industry engineer, 9 years mentoring (demo credential)",
    focus: "Python, data structures, algorithms",
    bio: "Vikram runs the computing track like a problem lab: short explanations, long solving time, and code reviews that name the one habit costing a student correctness — off-by-one errors, untested edge cases, or unmodelled data.",
    image: "/images/quantum/faculty-3.jpg",
    imageAlt:
      "Portrait of Vikram Sethi, computing mentor (illustrative demo profile)",
  },
];

export const quantumConcepts: QuantumConcept[] = [
  {
    id: "physics",
    title: "Physics",
    blurb:
      "Physics is taught as models, not formulas. Each chapter opens with the physical argument, then compresses it into the relations the examiner actually uses.",
    topics: [
      "Kinematics and vector reasoning",
      "Newtonian and Lagrangian mechanics",
      "Rotational dynamics",
      "Thermodynamics and kinetic theory",
      "Ray and wave optics",
      "Electromagnetic induction",
      "Modern physics and nuclear decay",
    ],
    image: "/images/quantum/hero-physics.jpg",
    imageAlt:
      "Students working through a mechanics problem at a Quantum Learning problem lab (demo image)",
  },
  {
    id: "mathematics",
    title: "Mathematics",
    blurb:
      "Mathematics is treated as a language with grammar: definitions, theorems and methods are connected, so a forgotten formula can be rebuilt instead of guessed.",
    topics: [
      "Differential and integral calculus",
      "Coordinate geometry and conics",
      "Algebra, sequences and series",
      "Probability and binomial reasoning",
      "Vectors and three-dimensional geometry",
      "Trigonometric identities and equations",
    ],
    image: "/images/quantum/math.jpg",
    imageAlt:
      "A mathematics notebook with worked calculus problems beside graph paper (demo image)",
  },
  {
    id: "chemistry",
    title: "Chemistry",
    blurb:
      "Chemistry is split into three disciplines with three methods: physical for derivations, organic for reaction logic, inorganic for structured recall.",
    topics: [
      "Mole concept and stoichiometry",
      "Chemical and ionic equilibrium",
      "Thermochemistry and electrochemistry",
      "Organic reaction mechanisms",
      "Inorganic pattern tables",
      "Atomic structure and chemical bonding",
    ],
    image: "/images/quantum/chemistry.jpg",
    imageAlt:
      "Glassware arranged on a laboratory bench during a chemistry session (demo image)",
  },
  {
    id: "biology",
    title: "Biology",
    blurb:
      "Biology is a reading discipline. Annotation maps turn NCERT paragraphs into recallable structures before memorisation ever begins.",
    topics: [
      "Cell biology and biomolecules",
      "Human physiology systems",
      "Genetics and evolution",
      "Plant diversity and taxonomy",
      "Ecology and environment",
      "Assertion-reason and diagram drills",
    ],
    image: "/images/quantum/lab.jpg",
    imageAlt:
      "A biology lab bench with microscopes and prepared slides (demo image)",
  },
  {
    id: "computing",
    title: "Computing",
    blurb:
      "Computing is taught as computational thinking: model the problem, choose the data structure, prove the complexity, then write the code.",
    topics: [
      "Python fundamentals and modelling",
      "Data structures: lists, maps, trees, graphs",
      "Sorting, searching and hashing",
      "Recursion and dynamic programming",
      "Complexity analysis",
      "Portfolio project with mentor review",
    ],
    image: "/images/quantum/laptops.jpg",
    imageAlt:
      "Students writing Python solutions on laptops during a coding lab (demo image)",
  },
];

export const quantumStats: QuantumStat[] = [
  { id: "years", value: "9 yrs", label: "Teaching STEM for competitive exams" },
  { id: "students", value: "1,100+", label: "Students mentored across batches" },
  { id: "ratio", value: "1 : 14", label: "Mentor-to-student ratio in labs" },
  { id: "papers", value: "40+", label: "Graded papers in a full cycle" },
];

export const quantumResults: QuantumResultStory[] = [
  {
    id: "aarav-s",
    student: "Aarav S.",
    exam: "JEE Advanced · 2025 session (demo)",
    headline: "AIR 5XX band in the demo range",
    story:
      "Aarav's mechanics were strong but his calculus speed capped the whole paper. A rebuilt integration track, alternate-day timing drills and an error log that named every skipped step moved his practice scores from the seventies into the nineties percentile band.",
    focus: ["Calculus speed track", "Error logging", "Mock discipline"],
  },
  {
    id: "ishita-r",
    student: "Ishita R.",
    exam: "NEET UG · 2025 session (demo)",
    headline: "6XX score band in the demo range",
    story:
      "Ishita lost marks in physical chemistry to calculation slips, not concepts. Unit-checking habits, daily numerical sets and same-day analysis turned her most variable section into the steadiest part of the paper.",
    focus: ["Numerical accuracy", "Unit checks", "Recall structures"],
  },
  {
    id: "kabir-m",
    student: "Kabir M.",
    exam: "JEE Main · 2025 session (demo)",
    headline: "99.XX percentile band in the demo range",
    story:
      "Kabir could solve almost anything given time, so the work was entirely about ordering. Section-wise timing drills and a rewritten attempt sequence gave him close to twenty minutes back in the final paper.",
    focus: ["Attempt ordering", "Speed drills", "Selection sense"],
  },
  {
    id: "tara-v",
    student: "Tara V.",
    exam: "Coding olympiad · 2025 session (demo)",
    headline: "State-level selection in the demo range",
    story:
      "Tara arrived from the computing track with clean Python but weak graph reasoning. Eight weeks of problem patterns — BFS, DP on trees, prefix sums — turned contest ratings from partial solves into full ones.",
    focus: ["Graph patterns", "Contest strategy", "Proof of correctness"],
  },
];

export const quantumTestimonials: QuantumTestimonial[] = [
  {
    id: "parent-nandini",
    quote:
      "The diagnostic report was the first honest document we received from any institute. It named three chapters costing marks — and the plan addressed exactly those three.",
    name: "Nandini G.",
    role: "Parent of a Class 11 student (demo)",
  },
  {
    id: "student-rehan",
    quote:
      "Problem labs changed how I study. Solving in the room, out loud, with a mentor watching, meant I stopped mistaking reading a solution for knowing one.",
    name: "Rehan A.",
    role: "JEE aspirant (demo)",
  },
  {
    id: "parent-suresh",
    quote:
      "The error analytics are what convinced us. Every paper came back tagged by mistake type, so revision finally had a target instead of a mood.",
    name: "K. Suresh",
    role: "Parent of a NEET aspirant (demo)",
  },
];

export const quantumFeatures: QuantumPoint[] = [
  {
    id: "diagnostics-first",
    title: "Diagnostics before teaching",
    body: "No batch starts with a lecture. Every programme opens with a graded concept map, so teaching time goes to what is actually missing instead of what the chapter list assumes.",
  },
  {
    id: "problem-labs",
    title: "Problem labs, not lecture halls",
    body: "Sessions are built around solving in the room. Mentors circulate while students work, which makes confusion visible in week one instead of before the exam.",
  },
  {
    id: "error-analytics",
    title: "Error analytics after every paper",
    body: "Graded papers are tagged by error type — concept gap, method slip, calculation error, time pressure — so revision targets patterns rather than chapters.",
  },
  {
    id: "mentor-thread",
    title: "One mentor thread through the year",
    body: "The mentor who maps the plan is the mentor who reviews it fortnightly. Continuity is what turns data into a decision instead of a dashboard.",
  },
];

export const quantumProcess: QuantumStep[] = [
  {
    id: "map",
    step: "01",
    title: "Map",
    body: "Concept diagnostics chart what a student already owns and what is genuinely missing, subject by subject.",
  },
  {
    id: "model",
    step: "02",
    title: "Model",
    body: "Concepts are built from first principles — diagrams, arguments and derivations — before any formula is memorised.",
  },
  {
    id: "solve",
    step: "03",
    title: "Solve",
    body: "Guided problem labs put every student solving in the room while mentors circulate and correct method in real time.",
  },
  {
    id: "analyse",
    step: "04",
    title: "Analyse",
    body: "Graded work is tagged by error type, so the weekly plan targets patterns instead of rereading chapters.",
  },
  {
    id: "simulate",
    step: "05",
    title: "Simulate",
    body: "Full papers under exam conditions, with same-day debriefs that rewrite the next fortnight's plan.",
  },
];

export const quantumAdmissions: QuantumStep[] = [
  {
    id: "enquire",
    step: "01",
    title: "Enquire",
    body: "Share the student's class, target exam and timeline through the form, a call or WhatsApp.",
  },
  {
    id: "diagnostic",
    step: "02",
    title: "Concept diagnostic",
    body: "A 60-minute supervised assessment across the target subjects establishes an honest starting map.",
  },
  {
    id: "mapping",
    step: "03",
    title: "Programme mapping",
    body: "A mentor recommends the programme, batch and revision calendar — and explains fees and schedules plainly.",
  },
  {
    id: "enrol",
    step: "04",
    title: "Enrol",
    body: "Confirm the seat, meet the mentor who owns the batch, and receive the diagnostic report with the first problem set.",
  },
];

export const quantumFaqs: QuantumFaq[] = [
  {
    question: "How large are the batches and labs?",
    answer:
      "Classroom batches are capped at twenty-four students, and problem labs run at a mentor-to-student ratio of about 1:14 so every student solves under observation. When a batch fills we open a second one rather than extend the first — the ratio is the programme.",
  },
  {
    question: "Are the fees shown on this site final?",
    answer:
      "No. This website is a design demonstration, so every figure on it — fees, results, student counts and rankings — is an illustrative placeholder. A live institute would publish its current fee structure, concessions and refund policy in this exact section.",
  },
  {
    question: "Can a student take the coding track alongside JEE preparation?",
    answer:
      "Yes. Coding & Computational Thinking runs in evening and weekend slots precisely so exam-track students can attend without competing with classroom hours. Most students join at Level 1 and progress one level per term.",
  },
  {
    question: "What does the concept diagnostic actually measure?",
    answer:
      "Concept clarity across the target subjects, speed under timed conditions, and the error patterns behind both. It takes about sixty minutes and results are delivered as a written map with a revision schedule, walked through with the student and a parent or guardian.",
  },
  {
    question: "How do classroom and online students learn together?",
    answer:
      "Every classroom session is mirrored on the online campus with the same notes, problem sets and same-day grading, so a student joining a session online works against exactly the same material as the room.",
  },
];

export const quantumChooser: QuantumPoint[] = [
  {
    id: "by-target",
    title: "By target exam",
    body: "Engineering aspirants begin with JEE Physics & Maths Intensive, medical aspirants with NEET Biology + Chemistry. Both run the same diagnostic discipline and the same error analytics.",
  },
  {
    id: "by-depth",
    title: "By depth",
    body: "Students who want mathematics past the syllabus add the Advanced Mathematics Lab on weekends. Computing runs as a parallel track for students who want computational thinking alongside exams.",
  },
  {
    id: "by-timeline",
    title: "By timeline",
    body: "Uncertain where to start? The Concept-Diagnostics Program maps the terrain in three weeks, and its fee adjusts fully against whichever programme you enrol in afterwards.",
  },
];

export const quantumTracking: QuantumStep[] = [
  {
    id: "baseline",
    step: "01",
    title: "Baseline concept map",
    body: "Every student starts with a timed diagnostic that establishes an honest concept map before teaching begins.",
  },
  {
    id: "fortnightly",
    step: "02",
    title: "Fortnightly simulation",
    body: "Full-length papers under exam conditions, graded for marks and method, with a named error-type analysis.",
  },
  {
    id: "review",
    step: "03",
    title: "Written mentor review",
    body: "The mentor records what moved, what did not, and what the next fortnight will target — shared with the family.",
  },
];

export const quantumLab: QuantumPoint[] = [
  {
    id: "problem-rooms",
    title: "Eighteen-seat problem rooms",
    body: "Rooms built for solving rather than listening — every student sits close enough to be asked to show their working.",
  },
  {
    id: "diagnostic-suite",
    title: "Diagnostic suite",
    body: "A supervised assessment room where baseline papers and fortnightly simulations are written under exam discipline.",
  },
  {
    id: "online-mirror",
    title: "Online mirror campus",
    body: "Recorded sessions, graded papers and error analyses mirrored online, so a missed class is never a lost week.",
  },
  {
    id: "mentors-desk",
    title: "Mentor desk, six days a week",
    body: "A staffed doubt desk open until closing for the question that refuses to wait for the next class.",
  },
];

export const quantumNextSteps: QuantumStep[] = [
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
    body: "Sixty minutes of supervised assessment, followed by a short conversation with the mentor who would teach the batch.",
  },
  {
    id: "decide",
    step: "03",
    title: "You decide, unhurried",
    body: "We share a written recommendation — programme, batch, calendar and fee — and leave the decision entirely with you.",
  },
];

export const quantumManifesto = {
  paragraphs: [
    "Quantum Learning began as a physics problem lab above a neighbourhood library: one mentor, eight students, and a whiteboard covered in free-body diagrams. The discovery was simple — students did not fail entrances for lack of information. They failed because nobody had ever watched them solve.",
    "Nine years later the lab has become a campus with diagnostic suites and an online mirror, but the constraint is the same on purpose. We do not run lecture halls. We run rooms where a mentor can see the step where a method breaks, and change the plan by the following week.",
    "What follows is a school of problem solving rather than a school of teaching: map honestly, model from first principles, solve in the room, analyse the errors, simulate under pressure. The exam stays the same every year. Our job is to make sure nothing in it arrives as a surprise.",
  ],
  quote: "A formula memorised without its geometry is a formula waiting to fail.",
  attribution: "The founding principle of Quantum Learning (demo)",
};

export const quantumContactLead =
  "Bring the student's class, target exam and timeline. We will recommend a programme and batch honestly — including when we are not the right fit.";
