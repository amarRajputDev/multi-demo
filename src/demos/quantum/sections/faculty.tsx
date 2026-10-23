import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { quantumFaculty } from "../data";
import { SectionHeading } from "./section-heading";

export function Faculty() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="05"
            eyebrow="Mentors"
            title="Subject specialists who own a batch for the full year."
            lead="One mentor carries a batch through the year — the same voice in class, the same name on the review sheet."
          />
          <Reveal delay={0.1} className="shrink-0">
            <Link
              href="/demos/quantum/faculty"
              className="inline-flex min-h-12 items-center gap-2 border-b border-[#22D3EE]/50 pb-1 text-sm font-semibold tracking-wide text-[#22D3EE] transition-colors hover:border-[#22D3EE] hover:text-[#67E8F9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE]"
            >
              Meet the faculty
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {quantumFaculty.map((mentor, index) => (
            <Reveal key={mentor.id} delay={index * 0.07}>
              <article className="flex h-full flex-col border border-white/10 bg-[#0B1430] p-4 transition-colors duration-300 hover:border-[#22D3EE]/45">
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
                    className="absolute inset-0 bg-gradient-to-t from-[#0B1430]/75 via-transparent to-transparent"
                  />
                </div>
                <div className="mt-5 flex flex-1 flex-col">
                  <p className="font-quantum-mono text-[11px] uppercase tracking-[0.2em] text-[#22D3EE]">
                    {mentor.role}
                  </p>
                  <h3 className="font-quantum-display mt-2 text-xl font-semibold text-[#EAF2FF]">
                    {mentor.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#7C93B8]">
                    {mentor.credential}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#7C93B8]">
                    {mentor.bio}
                  </p>
                  <p className="font-quantum-mono mt-4 border-t border-white/10 pt-3 text-[10px] uppercase tracking-[0.16em] text-[#8B5CF6]">
                    {mentor.focus}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs text-[#7C93B8]">
          Mentor profiles are illustrative demo content created for this design
          concept.
        </p>
      </div>
    </section>
  );
}
