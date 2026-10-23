import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { ContactCta } from "../sections/contact-cta";
import { Faq } from "../sections/faq";
import { pulseCourses, pulseFeatures } from "../data";

const headerMeta = [
  { label: "Programmes", value: "5 tracks" },
  { label: "Modes", value: "Classroom · Hybrid · Online" },
  { label: "Fees from", value: "₹7,999 / year" },
  { label: "Batch size", value: "Capped at 30" },
];

export function CoursesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0A1B4D] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-14 hidden h-64 w-64 rotate-12 border-[6px] border-white/15 sm:block"
        />
        <div className="relative mx-auto grid max-w-[1240px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-20">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-bold tracking-[0.28em] text-[#D8FF3E] uppercase">
              Programmes
            </p>
            <h1 className="font-pulse-display mt-4 text-[clamp(2.25rem,6.5vw,4.5rem)] leading-[0.9] font-black tracking-[-0.045em] uppercase">
              Five tracks.
              <br />
              One standard.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              Every track runs on the same engine — diagnostic blueprint,
              weekly ranked testing, doubt desk till 9 PM — tuned to a
              different target paper, pace and stage of preparation.
            </p>
            <Link
              href="/demos/pulse-prep/contact"
              className="group mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#D8FF3E] px-7 py-3.5 text-xs font-black tracking-[0.16em] text-[#0A1B4D] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Get the batch calendar
              <ArrowRight
                aria-hidden
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <dl className="grid grid-cols-2 gap-3 self-end lg:col-span-5">
            {headerMeta.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-4"
              >
                <dt className="text-[10px] font-bold tracking-[0.18em] text-white/80 uppercase">
                  {item.label}
                </dt>
                <dd className="font-pulse-display mt-1.5 text-base leading-tight font-extrabold tracking-[-0.02em] text-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="course-list-heading" className="bg-white">
        <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Reveal y={16} duration={0.45}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2
                id="course-list-heading"
                className="font-pulse-display text-[clamp(1.75rem,4vw,2.75rem)] leading-[0.95] font-black tracking-[-0.04em] text-[#0A1B4D] uppercase"
              >
                Pick the paper.
                <br />
                We build the route.
              </h2>
              <p className="max-w-sm text-sm text-[#5A6A99]">
                Fees are indicative for this demo and can be paid in two or
                three instalments per year.
              </p>
            </div>
          </Reveal>

          <ol className="mt-9 border-t border-[#0A1B4D]/12">
            {pulseCourses.map((course, index) => (
              <li
                key={course.id}
                className="grid gap-5 border-b border-[#0A1B4D]/12 py-8 lg:grid-cols-12 lg:gap-10"
              >
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3">
                    <span className="font-pulse-display text-sm font-black tracking-[0.08em] text-[#2447F0]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {course.badge ? (
                      <span className="rounded-full bg-[#D8FF3E] px-3 py-1 text-[9px] font-bold tracking-[0.16em] text-[#0A1B4D] uppercase">
                        {course.badge}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="font-pulse-display mt-3 text-[clamp(1.6rem,3.4vw,2.35rem)] leading-none font-black tracking-[-0.04em] text-[#0A1B4D] uppercase">
                    {course.name}
                  </h3>
                  <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#5A6A99]">
                    <div>
                      <dt className="font-bold tracking-[0.14em] text-[#2447F0] uppercase">
                        Duration
                      </dt>
                      <dd className="mt-0.5 text-[#0A1B4D]">{course.duration}</dd>
                    </div>
                    <div>
                      <dt className="font-bold tracking-[0.14em] text-[#2447F0] uppercase">
                        Mode
                      </dt>
                      <dd className="mt-0.5 text-[#0A1B4D]">{course.mode}</dd>
                    </div>
                    <div>
                      <dt className="font-bold tracking-[0.14em] text-[#2447F0] uppercase">
                        Fee
                      </dt>
                      <dd className="mt-0.5 font-semibold text-[#0A1B4D]">
                        {course.fee}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="lg:col-span-7">
                  <p className="text-base leading-relaxed text-[#0A1B4D] sm:text-lg">
                    {course.tagline}
                  </p>
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {course.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 rounded-xl bg-[#F2F5FF] px-3.5 py-3 text-[13px] leading-snug text-[#0A1B4D]"
                      >
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-[6px] bg-[#2447F0]">
                          <Check
                            aria-hidden
                            className="h-3.5 w-3.5 text-white"
                            strokeWidth={3}
                          />
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/demos/pulse-prep/contact"
                    className="group mt-5 inline-flex min-h-11 items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#0A1B4D] uppercase transition-colors duration-200 hover:text-[#2447F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2447F0]"
                  >
                    <span className="border-b-2 border-[#D8FF3E] pb-1">
                      Enquire about {course.name}
                    </span>
                    <ArrowRight
                      aria-hidden
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="included-heading"
        className="bg-[#F2F5FF]"
      >
        <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <Reveal y={16} duration={0.45}>
            <p className="text-[11px] font-bold tracking-[0.28em] text-[#2447F0] uppercase">
              Included in every track
            </p>
            <h2
              id="included-heading"
              className="font-pulse-display mt-3 text-[clamp(1.6rem,3.6vw,2.5rem)] leading-[0.95] font-black tracking-[-0.04em] text-[#0A1B4D] uppercase"
            >
              Whatever you pick, you get all of this.
            </h2>
          </Reveal>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {pulseFeatures.map((feature, index) => (
              <li key={feature.title} className="h-full">
                <Reveal
                  y={16}
                  delay={index * 0.06}
                  duration={0.45}
                  className="h-full"
                >
                  <div className="h-full rounded-2xl border border-[#0A1B4D]/10 bg-white p-5 transition-transform duration-200 hover:-translate-y-1">
                    <span className="font-pulse-display text-2xl font-black tracking-[-0.03em] text-[#2447F0]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-pulse-display mt-2 text-base leading-tight font-extrabold tracking-[-0.02em] text-[#0A1B4D] uppercase">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-[#5A6A99]">
                      {feature.body}
                    </p>
                    <p className="mt-3 text-[10px] font-bold tracking-[0.16em] text-[#2447F0] uppercase">
                      {feature.meta}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq />
      <ContactCta />
    </>
  );
}
