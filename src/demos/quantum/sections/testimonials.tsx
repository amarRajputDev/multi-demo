import { Reveal } from "@/components/shared/reveal";
import { quantumTestimonials } from "../data";

export function Testimonials() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="font-quantum-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[#22D3EE]">
            In their words
          </p>
          <h2 className="font-quantum-display mt-5 text-[clamp(1.7rem,3.2vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.015em] text-[#EAF2FF] [text-wrap:balance]">
            What families notice first is the honesty of the data.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px bg-white/10 lg:grid-cols-3">
          {quantumTestimonials.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 0.08}
              className="bg-[#0B1430]"
            >
              <figure className="flex h-full flex-col p-6 sm:p-8">
                <span
                  aria-hidden
                  className="font-quantum-display text-5xl leading-none text-[#8B5CF6]"
                >
                  “
                </span>
                <blockquote className="font-quantum-display mt-4 flex-1 text-lg font-medium leading-snug text-[#EAF2FF] sm:text-xl">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <span className="block text-sm font-semibold text-[#EAF2FF]/85">
                    {item.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-[#7C93B8]">
                    {item.role}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-xs text-[#7C93B8]">
          Quotes are illustrative demo content written for this design concept.
        </p>
      </div>
    </section>
  );
}
