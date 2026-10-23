import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { bloomFaculty } from "../data";

export function Faculty() {
  return (
    <section
      aria-labelledby="faculty-heading"
      className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <Reveal y={16}>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#E8836F]/12 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#B34832] uppercase">
              Meet the mentors
            </p>
            <h2
              id="faculty-heading"
              className="mt-4 font-bloom-display text-[clamp(1.9rem,4vw,2.75rem)] leading-tight font-semibold tracking-tight text-[#3B3358]"
            >
              Kind faces,
              <br className="hidden sm:block" /> serious craft
            </h2>
          </div>
          <Link
            href="/demos/bloom/faculty"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#3B3358] shadow-[0_2px_12px_rgba(59,51,88,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#B34832] hover:shadow-[0_6px_18px_rgba(59,51,88,0.1)] focus-visible:ring-2 focus-visible:ring-[#D96A54] focus-visible:ring-offset-2 focus-visible:outline-none sm:self-auto"
          >
            Meet the whole team
            <ArrowRight
              aria-hidden
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </Reveal>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {bloomFaculty.map((member, index) => (
          <li key={member.id}>
            <Reveal delay={index * 0.07} y={20}>
              <article className="group h-full rounded-[26px] border border-[#3B3358]/8 bg-white p-4 shadow-[0_2px_16px_rgba(59,51,88,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(59,51,88,0.1)]">
                <RevealImage>
                  <Image
                    src={member.image}
                    alt={member.alt}
                    width={1400}
                    height={[1400, 2100, 933, 929][index] ?? 1400}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 270px"
                    className="aspect-[3/4] w-full rounded-[20px] object-cover object-top"
                  />
                </RevealImage>
                <div className="px-2 pt-5 pb-3">
                  <h3 className="font-bloom-display text-xl font-semibold text-[#3B3358]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[11px] font-semibold tracking-[0.12em] text-[#B34832] uppercase">
                    {member.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#5F5878]">
                    {member.credentials}
                  </p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
