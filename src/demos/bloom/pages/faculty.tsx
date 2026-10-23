import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { bloomFaculty, bloomValues } from "../data";
import { HeartMark } from "../components/illustrations";

const facultyHeights = [1400, 2100, 933, 929] as const;

export default function BloomFacultyPage() {
  return (
    <>
      <section aria-labelledby="faculty-hero" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-14 -right-16 h-52 w-52 rounded-[58%_42%_50%_50%/48%_55%_45%_52%] bg-[#F5C86B]/25"
        />
        <div className="relative mx-auto max-w-[1200px] px-4 pt-14 pb-12 sm:px-6 lg:px-8">
          <Reveal y={14}>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#E8836F]/12 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#B34832] uppercase">
              <HeartMark className="h-4 w-4 text-[#E8836F]" />
              The Mentors
            </p>
            <h1
              id="faculty-hero"
              className="mt-4 max-w-3xl font-bloom-display text-[clamp(2.1rem,5vw,3.25rem)] leading-[1.1] font-semibold tracking-tight text-[#3B3358]"
            >
              Mentors who know every child{" "}
              <span className="text-[#C2503A]">by name</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5F5878] sm:text-lg">
              Our mentor team has taught together for years — the kind of
              stability that lets teaching build deliberately, term after term.
              (Faculty profiles below are illustrative demo content.)
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {bloomFaculty.map((member, index) => (
          <Reveal key={member.id} delay={0.04} y={20}>
            <article
              aria-labelledby={`${member.id}-name`}
              className={`grid gap-8 border-b border-[#3B3358]/10 py-14 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14 ${
                index % 2 === 1 ? "lg:grid-cols-[minmax(0,1fr)_280px]" : ""
              }`}
            >
              <RevealImage delay={0.08}>
                <Image
                  src={member.image}
                  alt={member.alt}
                  width={1400}
                  height={facultyHeights[index] ?? 1400}
                  sizes="(max-width: 1024px) 100vw, 280px"
                  className="aspect-[3/4] w-full rounded-[26px] object-cover object-top shadow-[0_8px_28px_rgba(59,51,88,0.1)]"
                />
              </RevealImage>
              <div className={index % 2 === 1 ? "lg:order-first" : undefined}>
                <p className="text-[11px] font-semibold tracking-[0.16em] text-[#B34832] uppercase">
                  {member.role}
                </p>
                <h2
                  id={`${member.id}-name`}
                  className="mt-2 font-bloom-display text-[clamp(1.6rem,3.5vw,2.25rem)] font-semibold text-[#3B3358]"
                >
                  {member.name}
                </h2>
                <p className="mt-3 inline-flex rounded-full bg-[#F5C86B]/25 px-3.5 py-1 text-sm font-semibold text-[#3B3358]">
                  {member.credentials}
                </p>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#5F5878]">
                  {member.bio}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <section
        aria-labelledby="faculty-values"
        className="relative overflow-hidden bg-white/60 py-16 lg:py-20"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-16 h-52 w-52 rounded-[45%_55%_55%_45%/55%_45%_50%_50%] bg-[#F3EDF8]"
        />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <Reveal y={16}>
            <div className="mx-auto max-w-2xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#F3EDF8] px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#3B3358] uppercase">
                How we teach
              </p>
              <h2
                id="faculty-values"
                className="mt-4 font-bloom-display text-[clamp(1.9rem,4vw,2.5rem)] leading-tight font-semibold tracking-tight text-[#3B3358]"
              >
                The values every mentor holds
              </h2>
            </div>
          </Reveal>
          <dl className="mt-10 grid gap-5 sm:grid-cols-2">
            {bloomValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06} y={18}>
                <div className="h-full rounded-[24px] border border-[#3B3358]/8 bg-[#FBF7F2] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_30px_rgba(59,51,88,0.09)]">
                  <dt className="font-bloom-display text-xl font-semibold text-[#3B3358]">
                    {value.title}
                  </dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-[#5F5878]">
                    {value.description}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>

          <Reveal y={14}>
            <div className="mt-12 text-center">
              <Link
                href="/demos/bloom/contact"
                className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-[#C2503A] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(194,80,58,0.3)] transition-all duration-200 hover:scale-[1.03] hover:bg-[#A8402D] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#3B3358] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Meet a mentor in person
                <ArrowRight
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
