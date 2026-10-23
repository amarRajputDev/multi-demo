/**
 * Shared types + demo registry.
 *
 * Each demo is a self-contained website. The registry is the single source of
 * truth used by the showcase selector, the demo utility bar, and routing.
 *
 * IMPORTANT: All results, ranks, faculty credentials, student counts, and
 * testimonials in this project are ILLUSTRATIVE DEMONSTRATION CONTENT created
 * for a design demo. They are not real, verified achievements.
 */

export type DemoSlug =
  | "aurora"
  | "scholar-house"
  | "pulse-prep"
  | "northstar"
  | "quantum"
  | "bloom";

export interface DemoMeta {
  slug: DemoSlug;
  name: string;
  shortName: string;
  tagline: string;
  styleLabel: string;
  audience: string;
  /** Preview palette used by the showcase cards + demo chrome. */
  palette: {
    bg: string;
    ink: string;
    accent: string;
    accentSoft: string;
    muted: string;
  };
  /** Font families (loaded via next/font) applied to the demo shell. */
  fonts: {
    display: string;
    body: string;
  };
  path: string;
  /** For the "Explore other designs" utility bar. */
  utilityTone: "dark" | "light";
}

export const DEMOS: DemoMeta[] = [
  {
    slug: "aurora",
    name: "Aurora Academy",
    shortName: "Aurora",
    tagline:
      "Big dreams deserve exceptional preparation. A cinematic, elite home for JEE & NEET aspirants.",
    styleLabel: "Cinematic · Premium · Editorial",
    audience: "JEE · NEET · National competitive brands",
    palette: {
      bg: "#0B1A33",
      ink: "#0B1A33",
      accent: "#C9A227",
      accentSoft: "#E8D9A0",
      muted: "#6B7A94",
    },
    fonts: { display: "Fraunces", body: "Inter" },
    path: "/demos/aurora",
    utilityTone: "dark",
  },
  {
    slug: "scholar-house",
    name: "Scholar House",
    shortName: "Scholar House",
    tagline:
      "Building strong foundations for lifelong success. A timeless, trustworthy academic prospectus.",
    styleLabel: "Refined · Timeless · Academic",
    audience: "Class 9–12 · Tuition · Foundation",
    palette: {
      bg: "#FBF8F1",
      ink: "#1F3A2E",
      accent: "#A8842C",
      accentSoft: "#E7D8B4",
      muted: "#5C6B60",
    },
    fonts: { display: "EB Garamond", body: "Source Sans 3" },
    path: "/demos/scholar-house",
    utilityTone: "light",
  },
  {
    slug: "pulse-prep",
    name: "Pulse Prep",
    shortName: "Pulse",
    tagline:
      "Prepare smarter, compete stronger. An energetic, geometric engine for entrance aspirants.",
    styleLabel: "Energetic · Bold · Geometric",
    audience: "Entrance exams · Competitive prep",
    palette: {
      bg: "#FFFFFF",
      ink: "#0A1B4D",
      accent: "#2447F0",
      accentSoft: "#D8FF3E",
      muted: "#5A6A99",
    },
    fonts: { display: "Archivo", body: "Inter" },
    path: "/demos/pulse-prep",
    utilityTone: "light",
  },
  {
    slug: "northstar",
    name: "Northstar Institute",
    shortName: "Northstar",
    tagline:
      "Clarity of purpose, confidence in preparation. A minimal, mentor-led editorial experience.",
    styleLabel: "Minimal · Editorial · Mentor-led",
    audience: "UPSC · SSC · Banking · Government exams",
    palette: {
      bg: "#F7F4EF",
      ink: "#26241F",
      accent: "#9C4F36",
      accentSoft: "#E5C9BC",
      muted: "#6E6A62",
    },
    fonts: { display: "Newsreader", body: "Karla" },
    path: "/demos/northstar",
    utilityTone: "light",
  },
  {
    slug: "quantum",
    name: "Quantum Learning",
    shortName: "Quantum",
    tagline:
      "Master the concepts, understand the possibilities. A precise, futuristic STEM campus.",
    styleLabel: "Technical · Futuristic · Precise",
    audience: "STEM · JEE · Coding academies",
    palette: {
      bg: "#050A18",
      ink: "#EAF2FF",
      accent: "#22D3EE",
      accentSoft: "#8B5CF6",
      muted: "#7C93B8",
    },
    fonts: { display: "Sora", body: "IBM Plex Sans" },
    path: "/demos/quantum",
    utilityTone: "dark",
  },
  {
    slug: "bloom",
    name: "Bloom Learning",
    shortName: "Bloom",
    tagline:
      "Every student has the potential to shine. A warm, joyful home for young learners.",
    styleLabel: "Friendly · Warm · Optimistic",
    audience: "Foundation · Olympiad · School tuition",
    palette: {
      bg: "#FBF7F2",
      ink: "#3B3358",
      accent: "#E8836F",
      accentSoft: "#F5C86B",
      muted: "#7A7295",
    },
    fonts: { display: "Outfit", body: "Nunito Sans" },
    path: "/demos/bloom",
    utilityTone: "light",
  },
];

export const DEMO_SLUGS: DemoSlug[] = DEMOS.map((d) => d.slug);

export function isDemoSlug(value: string): value is DemoSlug {
  return (DEMO_SLUGS as string[]).includes(value);
}

export function getDemoMeta(slug: DemoSlug): DemoMeta {
  const meta = DEMOS.find((d) => d.slug === slug);
  if (!meta) throw new Error(`Unknown demo slug: ${slug}`);
  return meta;
}

/**
 * Every demo implements these top-level routes with its own branded layout.
 * Order matters — this is the canonical nav order shared conceptually (but
 * rendered very differently) across demos.
 */
export const DEMO_ROUTES = [
  "courses",
  "faculty",
  "results",
  "about",
  "contact",
] as const;

export type DemoRoute = (typeof DEMO_ROUTES)[number];

/** Shared placeholder contact details. Clearly fictional. */
export interface DemoContact {
  phoneDisplay: string;
  phoneDigits: string;
  whatsappDigits: string;
  email: string;
  addressLines: string[];
  hours: string;
}

export const PLACEHOLDER_CONTACT: DemoContact = {
  phoneDisplay: "+91 90000 00000",
  phoneDigits: "+919000000000",
  whatsappDigits: "919000000000",
  email: "admissions@example.com",
  addressLines: [
    "123, Knowledge Park",
    "Your City, State 000000",
  ],
  hours: "Mon–Sat · 9:00 AM – 7:00 PM",
};
