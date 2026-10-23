import {
  BookOpen,
  Users,
  Trophy,
  ClipboardList,
  MessagesSquare,
  HelpCircle,
  Smartphone,
  Zap,
} from "lucide-react";

const items = [
  {
    icon: BookOpen,
    title: "Courses & programmes",
    text: "Structured course cards with durations, modes, highlights and fees.",
  },
  {
    icon: Users,
    title: "Faculty & mentors",
    text: "Editorial mentor profiles with credentials and teaching philosophy.",
  },
  {
    icon: Trophy,
    title: "Results & achievements",
    text: "Elegant result showcases with honest demo-content labelling.",
  },
  {
    icon: ClipboardList,
    title: "Admissions process",
    text: "Step-by-step admission journeys that reduce enquiry friction.",
  },
  {
    icon: MessagesSquare,
    title: "Enquiry & counselling",
    text: "Validated enquiry forms with a prefilled WhatsApp hand-off.",
  },
  {
    icon: HelpCircle,
    title: "FAQs & trust",
    text: "Accessible accordions, testimonials and parent/student trust blocks.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first layouts",
    text: "Purpose-built mobile designs with sticky CTAs and clean tap targets.",
  },
  {
    icon: Zap,
    title: "Smooth, calm motion",
    text: "Scroll reveals and micro-interactions that respect reduced-motion.",
  },
];

export function WhatIsIncluded() {
  return (
    <section
      id="included"
      className="relative scroll-mt-20 border-y border-white/10 bg-white/[0.02] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky-300/80">
          02 — What every website includes
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          One complete website — in every coaching concept
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60">
          Whichever design you pick, the structure underneath is production
          ready: everything a coaching institute needs to convert visitors into
          enquiries. Retail and fashion concepts such as TM SONS swap this
          content model for a product catalogue, collection pages and a
          wholesale quote builder while keeping the same engineering standards.
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.06]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/25 to-sky-500/25 text-indigo-200">
                <Icon aria-hidden className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-white">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
