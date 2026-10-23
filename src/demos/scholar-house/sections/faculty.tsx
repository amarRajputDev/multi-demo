import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { scholarFaculty } from "../data";

export function Faculty() {
  return (
    <section
      aria-labelledby="faculty-heading"
      className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 lg:px-8"
    >
      <Reveal y={16}>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#A8842C] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#A8842C]" />
              Our Mentors
            </p>
            <h2
              id="faculty-heading"
              className="mt-4 font-scholar-display text-4xl leading-tight font-medium tracking-tight text-[#1F3A2E] sm:text-5xl"
            >
              Taught by people
              <br className="hidden sm:block" /> who stay
            </h2>
          </div>
          <Link
            href="/demos/scholar-house/faculty"
            className="group inline-flex shrink-0 items-center gap-2 self-start border-b border-[#A8842C] py-1 text-sm font-medium text-[#1F3A2E] transition-colors hover:text-[#A8842C] sm:self-auto"
          >
            Meet the full faculty
            <ArrowRight
              aria-hidden
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
        <div aria-hidden className="mt-6 border-t-2 border-b border-[#1F3A2E]/20 pt-1">
          <div className="border-t border-[#A8842C]/40" />
        </div>
      </Reveal>

      <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {scholarFaculty.map((member, index) => (
          <li key={member.id}>
            <Reveal delay={index * 0.07} y={20}>
              <RevealImage>
                <Image
                  src={member.image}
                  alt={member.alt}
                  width={1400}
                  height={2100}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 240px"
                  className="aspect-[3/4] w-full object-cover object-top"
                />
              </RevealImage>
              <div aria-hidden className="mt-4 h-px w-8 bg-[#A8842C]" />
              <h3 className="mt-3 font-scholar-display text-xl font-medium text-[#1F3A2E]">
                {member.name}
              </h3>
              <p className="mt-0.5 text-xs font-semibold tracking-[0.14em] text-[#A8842C] uppercase">
                {member.role}
              </p>
              <p className="mt-2 text-sm text-[#5C6B60]">{member.credentials}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
