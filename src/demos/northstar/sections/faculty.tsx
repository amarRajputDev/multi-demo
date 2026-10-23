import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { northstarFaculty } from "../data";

const [director, ...mentors] = northstarFaculty;

export function Faculty() {
  return (
    <section
      aria-labelledby="faculty-heading"
      className="border-y border-[#26241F]/12 bg-[#F1ECE3]"
    >
      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28">
        <Reveal y={14} duration={0.8}>
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#9C4F36] uppercase">
            <span aria-hidden className="h-px w-8 bg-[#9C4F36]" />
            The mentors
          </p>
          <h2
            id="faculty-heading"
            className="mt-5 max-w-2xl text-[2rem] leading-[1.12] tracking-tight text-[#26241F] sm:text-4xl"
          >
            You are not taught by a brand.
            <span className="text-[#9C4F36] italic"> By a person.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <RevealImage duration={0.9}>
              <figure>
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={director.image}
                    alt={director.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="mt-3 text-xs text-[#6E6A62] italic">
                  S. Krishnan, in conversation after a Polity session.
                </figcaption>
              </figure>
            </RevealImage>
          </div>

          <div className="lg:col-span-7">
            <Reveal y={18} duration={0.8} delay={0.08}>
              <p className="text-[10px] font-semibold tracking-[0.24em] text-[#9C4F36] uppercase">
                {director.role}
              </p>
              <h3 className="mt-3 font-northstar-display text-[2rem] leading-tight text-[#26241F] sm:text-[2.5rem]">
                {director.name}
              </h3>
              <div aria-hidden className="mt-4 h-px w-14 bg-[#9C4F36]" />
              <p className="mt-5 text-sm font-medium tracking-[0.06em] text-[#26241F]/80">
                {director.credentials}
              </p>
              <p className="mt-5 max-w-2xl text-[1.0625rem] leading-[1.75] text-[#6E6A62]">
                {director.bio}
              </p>
            </Reveal>

            <ul className="mt-12 grid gap-px border border-[#26241F]/15 bg-[#26241F]/15 sm:grid-cols-3">
              {mentors.map((member, index) => (
                <li key={member.id} className="bg-[#F1ECE3]">
                  <Reveal delay={0.08 + index * 0.06} duration={0.8} y={16} className="h-full">
                    <div className="flex h-full flex-col px-6 py-7">
                      <div className="relative mb-5 aspect-[4/5] w-full">
                        <Image
                          src={member.image}
                          alt={member.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, 220px"
                          className="object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-[9px] font-semibold tracking-[0.2em] text-[#9C4F36] uppercase">
                        {member.role}
                      </p>
                      <h4 className="mt-2 font-northstar-display text-xl text-[#26241F]">
                        {member.name}
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-[#6E6A62]">
                        {member.credentials}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal y={12} duration={0.8}>
              <div className="mt-10">
                <Link
                  href="/demos/northstar/faculty"
                  className="group inline-flex min-h-12 items-center gap-2 border-b border-[#9C4F36] pb-0.5 text-[13px] tracking-[0.14em] text-[#26241F] uppercase transition-colors hover:text-[#9C4F36] focus-visible:ring-2 focus-visible:ring-[#9C4F36] focus-visible:ring-offset-4 focus-visible:outline-none"
                >
                  Meet every mentor
                  <ArrowRight
                    aria-hidden
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
