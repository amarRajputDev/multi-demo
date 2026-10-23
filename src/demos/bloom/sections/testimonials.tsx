import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { bloomTestimonials } from "../data";

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <Reveal y={16}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#F5C86B]/25 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#3B3358] uppercase">
            Family voices
          </p>
          <h2
            id="testimonials-heading"
            className="mt-4 font-bloom-display text-[clamp(1.9rem,4vw,2.75rem)] leading-tight font-semibold tracking-tight text-[#3B3358]"
          >
            What parents and students
            <br className="hidden sm:block" /> tell us (demo stories)
          </h2>
        </div>
      </Reveal>

      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {bloomTestimonials.map((item, index) => (
          <li key={item.id} className="h-full">
            <Reveal delay={index * 0.08} y={18}>
              <figure
                className={`flex h-full flex-col rounded-[26px] border border-[#3B3358]/8 p-7 shadow-[0_2px_16px_rgba(59,51,88,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(59,51,88,0.1)] ${
                  index === 1
                    ? "bg-[#3B3358] text-white md:-translate-y-3 md:hover:-translate-y-4"
                    : "bg-white"
                }`}
              >
                <Quote
                  aria-hidden
                  className={`h-6 w-6 ${index === 1 ? "text-[#F5C86B]" : "text-[#E8836F]"}`}
                />
                <blockquote className="mt-4 flex-1">
                  <p
                    className={`font-bloom-display text-lg leading-relaxed ${
                      index === 1 ? "text-white" : "text-[#3B3358]"
                    }`}
                  >
                    {item.quote}
                  </p>
                </blockquote>
                <figcaption
                  className={`mt-6 border-t pt-4 ${
                    index === 1 ? "border-white/15" : "border-[#3B3358]/10"
                  }`}
                >
                  <p
                    className={`text-sm font-semibold ${
                      index === 1 ? "text-white" : "text-[#3B3358]"
                    }`}
                  >
                    {item.name}
                  </p>
                  <p
                    className={`mt-0.5 text-xs ${
                      index === 1 ? "text-white/70" : "text-[#7A7295]"
                    }`}
                  >
                    {item.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal y={14}>
        <div className="mt-12 text-center">
          <Link
            href="/demos/bloom/contact"
            className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-[#C2503A] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(194,80,58,0.3)] transition-all duration-200 hover:scale-[1.03] hover:bg-[#A8402D] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#3B3358] focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Come see Bloom in action
            <ArrowRight
              aria-hidden
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
