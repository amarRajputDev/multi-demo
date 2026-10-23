import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { auroraFaculty } from "../data";
import { SectionHeading } from "./section-heading";

export function Faculty() {
  return (
    <section className="border-b border-white/10 bg-[#0A1729]">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="04"
            eyebrow="Mentors"
            title="Editorial profiles of the people who own your batch."
            lead="One mentor carries a batch through the full year — the same voice in class, the same name on the review sheet."
          />
          <Reveal delay={0.1} className="shrink-0">
            <Link
              href="/demos/aurora/faculty"
              className="group inline-flex min-h-12 items-center gap-2 border-b border-[#C9A227]/50 pb-1 text-sm font-semibold tracking-wide text-[#E8D9A0] transition-colors hover:border-[#C9A227] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8D9A0]"
            >
              Meet the faculty
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {auroraFaculty.map((mentor, index) => (
            <Reveal key={mentor.id} delay={index * 0.07}>
              <article className="flex h-full flex-col border border-white/10 bg-[#0B1A33] p-4 transition-colors duration-300 hover:border-[#C9A227]/50">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={mentor.image}
                    alt={mentor.imageAlt}
                    width={1400}
                    height={2100}
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 44vw, 90vw"
                    className="h-full w-full object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-[#0B1A33]/70 via-transparent to-transparent"
                  />
                </div>
                <div className="mt-5 flex flex-1 flex-col">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                    {mentor.role}
                  </p>
                  <h3 className="font-aurora-display mt-2 text-xl text-[#F4EFE6]">
                    {mentor.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#F4EFE6]/60">
                    {mentor.credential}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#F4EFE6]/70">
                    {mentor.bio}
                  </p>
                  <p className="mt-4 border-t border-white/10 pt-3 text-[11px] uppercase tracking-[0.16em] text-[#8E9CB5]">
                    {mentor.focus}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs text-[#F4EFE6]/60">
          Mentor profiles are illustrative demo content created for this design
          concept.
        </p>
      </div>
    </section>
  );
}
