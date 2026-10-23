import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { bloomSubjects } from "../data";
import { SubjectIcon } from "../components/illustrations";

export function Subjects() {
  return (
    <section
      aria-labelledby="subjects-heading"
      className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <Reveal y={16}>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#F5C86B]/25 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#3B3358] uppercase">
              What we teach
            </p>
            <h2
              id="subjects-heading"
              className="mt-4 font-bloom-display text-[clamp(1.9rem,4vw,2.75rem)] leading-tight font-semibold tracking-tight text-[#3B3358]"
            >
              Subjects, taught with
              <br className="hidden sm:block" /> warmth and curiosity
            </h2>
          </div>
          <Link
            href="/demos/bloom/courses"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#3B3358] shadow-[0_2px_12px_rgba(59,51,88,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#B34832] hover:shadow-[0_6px_18px_rgba(59,51,88,0.1)] focus-visible:ring-2 focus-visible:ring-[#D96A54] focus-visible:ring-offset-2 focus-visible:outline-none sm:self-auto"
          >
            See all programmes
            <ArrowRight
              aria-hidden
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </Reveal>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {bloomSubjects.map((subject, index) => (
          <li key={subject.id}>
            <Reveal delay={index * 0.05} y={18}>
              <article className="group flex h-full flex-col rounded-[24px] border border-[#3B3358]/8 bg-white p-6 shadow-[0_2px_16px_rgba(59,51,88,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E8836F]/30 hover:shadow-[0_12px_30px_rgba(59,51,88,0.1)]">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#FBF7F2] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[-4deg]">
                  <SubjectIcon
                    name={subject.icon}
                    className="h-8 w-8 text-[#E8836F]"
                  />
                </span>
                <h3 className="mt-4 font-bloom-display text-xl font-semibold text-[#3B3358]">
                  {subject.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5F5878]">
                  {subject.blurb}
                </p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
