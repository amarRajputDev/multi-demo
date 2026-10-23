import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Gauge, LineChart, Timer, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { ContactCta } from "../sections/contact-cta";
import { PageHero } from "../sections/page-hero";
import { pulseFeatures, pulseFaculty } from "../data";

const heroMeta = [
  { label: "Founded", value: "2016" },
  { label: "Programmes", value: "5 tracks" },
  { label: "Batch size", value: "Capped at 30" },
  { label: "Doubt desk", value: "Till 9 PM" },
];

const featureIcons: LucideIcon[] = [Timer, Gauge, LineChart, Users];

const milestones = [
  {
    year: "2016",
    title: "Twelve students, one room",
    detail:
      "Pulse Prep opens above a bookshop with a single JEE Sprint batch and hand-graded weekly tests.",
  },
  {
    year: "2018",
    title: "The 9 PM desk",
    detail:
      "Faculty hours extend to 9 PM, six days a week. The desk has stayed open every evening since.",
  },
  {
    year: "2020",
    title: "Hybrid, done properly",
    detail:
      "Every classroom session gains a live online replay — kept for evening students and outstation families.",
  },
  {
    year: "2022",
    title: "Mentor pods of 18",
    detail:
      "Each aspirant is assigned one named mentor who tracks attendance, error patterns and fortnightly check-ins.",
  },
  {
    year: "2024",
    title: "24-hour score reports",
    detail:
      "Percentile, pace and question-level analytics begin publishing within a day of every mock.",
  },
  {
    year: "2026",
    title: "Five programmes, caps intact",
    detail:
      "12,400+ aspirants coached to date — classroom batches still capped at thirty. Demo milestone.",
  },
];

export function AboutPage() {
  return (
    <>
      <PageHero
        headingId="about-hero"
        eyebrow="About Pulse Prep"
        heading={
          <>
            Built for the
            <br />
            measurable climb.
          </>
        }
        intro="Pulse Prep is a competitive entrance centre for families who want preparation they can see: a diagnostic before day one, a ranked mock every Sunday, and a faculty member on the desk until 9 PM. This is a design demonstration — the story below is illustrative."
        meta={heroMeta}
      />

      <section aria-labelledby="story-heading" className="bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-20">
          <div className="lg:col-span-7">
            <Reveal y={16} duration={0.45}>
              <p className="text-[11px] font-bold tracking-[0.28em] text-[#2447F0] uppercase">
                The story
              </p>
              <h2
                id="story-heading"
                className="font-pulse-display mt-3 text-[clamp(1.9rem,4.6vw,3.25rem)] leading-[0.92] font-black tracking-[-0.04em] text-[#0A1B4D] uppercase"
              >
                One room above
                <br />a bookshop.
              </h2>
              <div className="mt-5 max-w-xl space-y-4 text-sm leading-relaxed text-[#5A6A99] sm:text-base">
                <p>
                  Pulse Prep started in 2016 with twelve Class 11 students, a
                  borrowed whiteboard and a stubborn idea: entrance preparation
                  should feel measurable, not mysterious. Families were tired
                  of term-end surprises. We answered with weekly ranked tests,
                  published error logs and a desk that stayed open after dinner.
                </p>
                <p>
                  A decade on, the campus runs five programmes across JEE, NEET,
                  CET and olympiad tracks — and the operating rules have not
                  changed. A diagnostic before day one. A full mock every
                  Sunday. A named mentor for every aspirant. When something
                  stops working, the numbers say so first.
                </p>
              </div>
            </Reveal>

            <Reveal y={16} delay={0.08} duration={0.45}>
              <div className="mt-8 flex flex-wrap items-center gap-4 rounded-3xl bg-[#0A1B4D] px-5 py-5 text-white sm:px-6">
                <span className="font-pulse-display text-[clamp(1.75rem,4vw,2.5rem)] leading-none font-black tracking-[-0.04em] text-[#D8FF3E]">
                  12,400+
                </span>
                <span className="text-sm leading-relaxed text-white/80">
                  aspirants coached since 2016.
                  <br className="hidden sm:block" />{" "}
                  <span className="text-white/60">Demo figure.</span>
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal y={18} delay={0.06} duration={0.5}>
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute inset-0 translate-x-3 translate-y-3 bg-[#2447F0] sm:translate-x-4 sm:translate-y-4"
                />
                <RevealImage className="relative">
                  <figure className="relative aspect-[4/3] overflow-hidden bg-[#F2F5FF]">
                    <Image
                      src="/images/pulse-prep/meeting.jpg"
                      alt="Pulse Prep mentors reviewing a batch performance chart together in the faculty room"
                      width={1400}
                      height={933}
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="h-full w-full object-cover"
                    />
                    <figcaption className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-[#D8FF3E] px-3.5 py-2 text-[10px] font-bold tracking-[0.16em] text-[#0A1B4D] uppercase">
                      Weekly mentor review
                    </figcaption>
                  </figure>
                </RevealImage>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="values-heading" className="bg-[#F2F5FF]">
        <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Reveal y={16} duration={0.45}>
            <p className="text-[11px] font-bold tracking-[0.28em] text-[#2447F0] uppercase">
              What we hold to
            </p>
            <h2
              id="values-heading"
              className="font-pulse-display mt-3 max-w-2xl text-[clamp(1.9rem,4.6vw,3.25rem)] leading-[0.92] font-black tracking-[-0.04em] text-[#0A1B4D] uppercase"
            >
              Four promises, kept in public.
            </h2>
          </Reveal>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:gap-4">
            {pulseFeatures.map((feature, index) => {
              const Icon = featureIcons[index] ?? Gauge;
              return (
                <li key={feature.title} className="h-full">
                  <Reveal
                    y={16}
                    delay={index * 0.06}
                    duration={0.45}
                    className="h-full"
                  >
                    <div className="flex h-full flex-col rounded-2xl border border-[#0A1B4D]/10 bg-white p-5 transition-transform duration-200 hover:-translate-y-1 sm:p-6">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#2447F0] text-white">
                        <Icon aria-hidden className="h-5 w-5" />
                      </span>
                      <h3 className="font-pulse-display mt-4 text-lg leading-tight font-extrabold tracking-[-0.025em] text-[#0A1B4D] uppercase">
                        {feature.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-[#5A6A99]">
                        {feature.body}
                      </p>
                      <p className="mt-auto pt-5 text-[10px] font-bold tracking-[0.18em] text-[#2447F0] uppercase">
                        {feature.meta}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section aria-labelledby="milestones-heading" className="bg-white">
        <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Reveal y={16} duration={0.45}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-bold tracking-[0.28em] text-[#2447F0] uppercase">
                  Milestones
                </p>
                <h2
                  id="milestones-heading"
                  className="font-pulse-display mt-3 max-w-2xl text-[clamp(1.9rem,4.6vw,3.25rem)] leading-[0.92] font-black tracking-[-0.04em] text-[#0A1B4D] uppercase"
                >
                  Ten years,
                  <br />
                  in six moves.
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-[#5A6A99]">
                Illustrative timeline for this demo — each year marks a change
                that is still visible in how the campus runs today.
              </p>
            </div>
          </Reveal>

          <ol className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {milestones.map((item, index) => (
              <li key={item.year} className="h-full">
                <Reveal
                  y={16}
                  delay={index * 0.05}
                  duration={0.45}
                  className="h-full"
                >
                  <div className="flex h-full flex-col rounded-2xl border border-[#0A1B4D]/10 bg-white p-5 transition-transform duration-200 hover:-translate-y-1 sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-pulse-display text-[2rem] leading-none font-black tracking-[-0.05em] text-[#2447F0]">
                        {item.year}
                      </span>
                      <span aria-hidden className="h-2 w-10 bg-[#D8FF3E]" />
                    </div>
                    <h3 className="font-pulse-display mt-4 text-base leading-tight font-extrabold tracking-[-0.025em] text-[#0A1B4D] uppercase sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-[13px] leading-relaxed text-[#5A6A99]">
                      {item.detail}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="teaser-heading" className="bg-[#0A1B4D] text-white">
        <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Reveal y={16} duration={0.45}>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-bold tracking-[0.28em] text-[#D8FF3E] uppercase">
                  The faculty
                </p>
                <h2
                  id="teaser-heading"
                  className="font-pulse-display mt-3 text-[clamp(1.9rem,4.6vw,3.25rem)] leading-[0.92] font-black tracking-[-0.04em] uppercase"
                >
                  Taught by the people
                  <br />
                  who write the drills.
                </h2>
              </div>
              <Link
                href="/demos/pulse-prep/faculty"
                className="group inline-flex min-h-11 shrink-0 items-center gap-2 self-start rounded-full border border-white/40 px-5 py-3 text-[11px] font-bold tracking-[0.16em] text-white uppercase transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D8FF3E] hover:text-[#D8FF3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:self-auto"
              >
                Full faculty page
                <ArrowUpRight
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </Reveal>

          <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
            {pulseFaculty.map((member, index) => (
              <li key={member.id}>
                <Reveal y={16} delay={index * 0.06} duration={0.45}>
                  <Link
                    href="/demos/pulse-prep/faculty"
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white/5 transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8FF3E]"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.alt}
                        width={1400}
                        height={2100}
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 22vw"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <span className="font-pulse-display text-base leading-tight font-black tracking-[-0.02em] uppercase">
                        {member.name}
                      </span>
                      <span className="mt-1.5 text-[10px] font-bold tracking-[0.16em] text-[#D8FF3E] uppercase">
                        {member.role.split("·")[0]?.trim()}
                      </span>
                      <span className="mt-2 text-xs leading-relaxed text-white/65">
                        {member.credentials}
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
