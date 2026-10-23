import { Reveal } from "@/components/shared/reveal";
import { pulseTestimonials } from "../data";

const offsets = ["", "lg:translate-y-7", ""];

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-[#0A1B4D] text-white">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal y={16} duration={0.45} className="lg:col-span-7">
            <p className="text-[11px] font-bold tracking-[0.28em] text-[#D8FF3E] uppercase">
              From the pods
            </p>
            <h2
              id="testimonials-heading"
              className="font-pulse-display mt-3 text-[clamp(1.9rem,4.6vw,3.25rem)] leading-[0.92] font-black tracking-[-0.04em] uppercase"
            >
              What the week
              <br />
              actually feels like.
            </h2>
          </Reveal>
          <Reveal y={16} delay={0.08} duration={0.45} className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-white/60 lg:pb-2">
              Straight from students and parents in the 2025 cohort. Shared as
              written, shortened only for length.
            </p>
          </Reveal>
        </div>

        <ul className="mt-10 grid gap-5 lg:grid-cols-3 lg:gap-4">
          {pulseTestimonials.map((item, index) => (
            <li key={item.id} className={offsets[index]}>
              <Reveal y={20} delay={index * 0.08} duration={0.45}>
                <figure className="flex h-full flex-col rounded-3xl bg-white p-6 text-[#0A1B4D] transition-transform duration-200 hover:-translate-y-1.5 sm:p-7">
                  <span
                    aria-hidden
                    className="font-pulse-display block text-5xl leading-none font-black text-[#2447F0]"
                  >
                    “
                  </span>
                  <blockquote className="mt-2 text-[15px] leading-relaxed text-[#0A1B4D]/85">
                    {item.quote}
                  </blockquote>
                  <figcaption className="mt-auto flex items-center gap-3 border-t border-[#0A1B4D]/10 pt-5">
                    <span aria-hidden className="h-8 w-1.5 bg-[#D8FF3E]" />
                    <span>
                      <span className="font-pulse-display block text-sm font-black tracking-[-0.02em] uppercase">
                        {item.name}
                      </span>
                      <span className="block text-[11px] text-[#5A6A99]">
                        {item.role}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
