import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { pulseFaculty } from "../data";

const offsets = ["lg:mt-0", "lg:mt-12", "lg:mt-4", "lg:mt-16"];

interface FacultyProps {
  showLink?: boolean;
  eyebrow?: string;
  heading?: React.ReactNode;
}

export function Faculty({
  showLink = true,
  eyebrow = "The people at the desk",
  heading = (
    <>
      Faculty who still
      <br />
      solve the paper first.
    </>
  ),
}: FacultyProps) {
  return (
    <section aria-labelledby="faculty-heading" className="bg-[#F2F5FF]">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <Reveal y={16} duration={0.45}>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold tracking-[0.28em] text-[#2447F0] uppercase">
                {eyebrow}
              </p>
              <h2
                id="faculty-heading"
                className="font-pulse-display mt-3 max-w-2xl text-[clamp(1.9rem,4.6vw,3.25rem)] leading-[0.92] font-black tracking-[-0.04em] text-[#0A1B4D] uppercase"
              >
                {heading}
              </h2>
            </div>
            {showLink ? (
              <Link
                href="/demos/pulse-prep/faculty"
                className="group inline-flex min-h-11 shrink-0 items-center gap-2 self-start rounded-full border border-[#0A1B4D]/20 bg-white px-5 py-3 text-[11px] font-bold tracking-[0.16em] text-[#0A1B4D] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2447F0] hover:text-[#2447F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2447F0] sm:self-auto"
              >
                Meet the full team
                <ArrowUpRight
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            ) : null}
          </div>
        </Reveal>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-4 lg:grid-cols-4 lg:gap-4">
          {pulseFaculty.map((member, index) => (
            <li key={member.id} className={offsets[index]}>
              <Reveal y={18} delay={index * 0.07} duration={0.45}>
                <article className="group h-full overflow-hidden rounded-3xl border border-[#0A1B4D]/10 bg-white transition-transform duration-200 hover:-translate-y-1.5">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#0A1B4D]">
                    <Image
                      src={member.image}
                      alt={member.alt}
                      width={1400}
                      height={2100}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 24vw"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full bg-[#2447F0] px-3 py-1.5 text-[9px] font-bold tracking-[0.16em] text-white uppercase">
                      {member.role.split("·")[1]?.trim() ?? member.role}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-pulse-display text-lg leading-tight font-black tracking-[-0.03em] text-[#0A1B4D] uppercase">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-[11px] font-bold tracking-[0.14em] text-[#2447F0] uppercase">
                      {member.role.split("·")[0]?.trim()}
                    </p>
                    <p className="mt-3 text-xs font-medium text-[#5A6A99]">
                      {member.credentials}
                    </p>
                    <p className="mt-3 border-t border-[#0A1B4D]/10 pt-3 text-[13px] leading-relaxed text-[#5A6A99]">
                      {member.bio}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
