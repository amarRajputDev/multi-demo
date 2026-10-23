import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { ContactCta } from "../sections/contact-cta";
import { PageHero } from "../sections/page-hero";
import { pulseFaculty } from "../data";

const heroMeta = [
  { label: "Faculty leads", value: "4 mentors" },
  { label: "Combined coaching", value: "43 years" },
  { label: "Papers re-solved", value: "In-house, always" },
  { label: "Desk hours", value: "Till 9 PM" },
];

const offsets = ["", "lg:mt-12", "lg:mt-4", "lg:mt-16"];

const approach = [
  {
    step: "01",
    title: "No formula without a reason",
    body: "Derivations come before shortcuts. A student who knows why a formula works can rebuild it under exam pressure — a student who only memorised it cannot.",
  },
  {
    step: "02",
    title: "Errors drive the next class",
    body: "Mentors review the previous day's error log before writing the day's drill. If one concept keeps slipping, it reappears in the next set until it stops.",
  },
  {
    step: "03",
    title: "Teach the paper, not the syllabus",
    body: "Every chapter is taught with its weightage, its usual traps and its last-ten-attempts history on the table. The exam is the context, not an afterthought.",
  },
  {
    step: "04",
    title: "Sit the paper before the batch does",
    body: "Faculty re-solve every mock and previous-year paper themselves before it reaches a student. Solution keys are written in-house — never imported.",
  },
];

export function FacultyPage() {
  return (
    <>
      <PageHero
        headingId="faculty-hero"
        eyebrow="The faculty"
        heading={
          <>
            Still solving
            <br />
            the paper first.
          </>
        }
        intro="Four leads, one shared rule: every mentor re-solves the current paper before the batch sees it. Between them they hold four decades of entrance teaching — and they write the drills, keys and analysis clinics themselves."
        meta={heroMeta}
      />

      <section aria-labelledby="mentors-heading" className="bg-white">
        <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Reveal y={16} duration={0.45}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-bold tracking-[0.28em] text-[#2447F0] uppercase">
                  Meet the leads
                </p>
                <h2
                  id="mentors-heading"
                  className="font-pulse-display mt-3 max-w-2xl text-[clamp(1.9rem,4.6vw,3.25rem)] leading-[0.92] font-black tracking-[-0.04em] text-[#0A1B4D] uppercase"
                >
                  The people who
                  <br />
                  write your drills.
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-[#5A6A99]">
                Every mentor also runs a weekly doubt-desk shift — the same
                faces you see in class are the ones clearing your 8 PM
                questions.
              </p>
            </div>
          </Reveal>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-4 lg:gap-4">
            {pulseFaculty.map((member, index) => (
              <li key={member.id} className={offsets[index]}>
                <Reveal y={18} delay={index * 0.06} duration={0.45}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#0A1B4D]/10 bg-white transition-transform duration-200 hover:-translate-y-1.5">
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#0A1B4D]">
                      <Image
                        src={member.image}
                        alt={member.alt}
                        width={1400}
                        height={2100}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 46vw"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <span className="absolute bottom-3 left-3 rounded-full bg-[#2447F0] px-3 py-1.5 text-[9px] font-bold tracking-[0.16em] text-white uppercase">
                        {member.role.split("·")[1]?.trim() ?? member.role}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-pulse-display text-[clamp(1.4rem,2.6vw,1.85rem)] leading-none font-black tracking-[-0.035em] text-[#0A1B4D] uppercase">
                        {member.name}
                      </h3>
                      <p className="mt-2 text-[11px] font-bold tracking-[0.14em] text-[#2447F0] uppercase">
                        {member.role.split("·")[0]?.trim()}
                      </p>
                      <p className="mt-3 text-xs font-semibold tracking-wide text-[#5A6A99]">
                        {member.credentials}
                      </p>
                      <p className="mt-4 flex-1 border-t border-[#0A1B4D]/10 pt-4 text-[13px] leading-relaxed text-[#5A6A99]">
                        {member.bio}
                      </p>
                      <Link
                        href="/demos/pulse-prep/contact"
                        className="group/link mt-5 inline-flex min-h-11 items-center gap-2 self-start text-[11px] font-bold tracking-[0.16em] text-[#0A1B4D] uppercase transition-colors duration-200 hover:text-[#2447F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2447F0]"
                      >
                        <span className="border-b-2 border-[#D8FF3E] pb-1">
                          Sit in on a class
                        </span>
                        <ArrowRight
                          aria-hidden
                          className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1"
                        />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal y={14} duration={0.45}>
            <p className="mt-10 flex items-start gap-2.5 rounded-2xl bg-[#F2F5FF] px-4 py-3.5 text-xs leading-relaxed text-[#5A6A99]">
              <Info aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#2447F0]" />
              Faculty names, credentials and profiles on this page are
              illustrative demo placeholders — not real people or verified
              qualifications.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="approach-heading" className="bg-[#F2F5FF]">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-20">
          <div className="lg:col-span-5">
            <Reveal y={18} duration={0.5}>
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute inset-0 translate-x-3 translate-y-3 bg-[#2447F0] sm:translate-x-4 sm:translate-y-4"
                />
                <RevealImage className="relative">
                  <figure className="relative aspect-[4/5] overflow-hidden bg-white">
                    <Image
                      src="/images/pulse-prep/whiteboard.jpg"
                      alt="A Pulse Prep faculty member mapping a problem on the whiteboard during a live class"
                      width={1400}
                      height={933}
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="h-full w-full object-cover"
                    />
                    <figcaption className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-[#D8FF3E] px-3.5 py-2 text-[10px] font-bold tracking-[0.16em] text-[#0A1B4D] uppercase">
                      Live concept class
                    </figcaption>
                  </figure>
                </RevealImage>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal y={16} duration={0.45}>
              <p className="text-[11px] font-bold tracking-[0.28em] text-[#2447F0] uppercase">
                How the teaching works
              </p>
              <h2
                id="approach-heading"
                className="font-pulse-display mt-3 text-[clamp(1.9rem,4.6vw,3.25rem)] leading-[0.92] font-black tracking-[-0.04em] text-[#0A1B4D] uppercase"
              >
                Four rules
                <br />
                on every board.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#5A6A99] sm:text-base">
                These are not posters on a wall. Each rule changes what happens
                in the classroom on a specific day, and mentors are reviewed
                against them every term.
              </p>
            </Reveal>

            <ol className="mt-8 grid gap-3">
              {approach.map((item, index) => (
                <li key={item.step}>
                  <Reveal y={16} delay={index * 0.06} duration={0.45}>
                    <div className="flex gap-4 rounded-2xl border border-[#0A1B4D]/10 bg-white p-5 transition-transform duration-200 hover:-translate-y-0.5 sm:gap-5 sm:p-6">
                      <span className="font-pulse-display shrink-0 text-[1.75rem] leading-none font-black tracking-[-0.05em] text-[#2447F0] sm:text-[2rem]">
                        {item.step}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-pulse-display text-base leading-tight font-extrabold tracking-[-0.025em] text-[#0A1B4D] uppercase sm:text-lg">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-[13px] leading-relaxed text-[#5A6A99] sm:text-sm">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
