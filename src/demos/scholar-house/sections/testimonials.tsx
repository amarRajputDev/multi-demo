import { Reveal } from "@/components/shared/reveal";
import { scholarTestimonials } from "../data";

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 lg:px-8"
    >
      <Reveal y={16}>
        <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#A8842C] uppercase">
          <span aria-hidden className="h-px w-8 bg-[#A8842C]" />
          From Our Families
        </p>
        <h2
          id="testimonials-heading"
          className="mt-4 max-w-2xl font-scholar-display text-4xl leading-tight font-medium tracking-tight text-[#1F3A2E] sm:text-5xl"
        >
          What parents and students say
        </h2>
        <div aria-hidden className="mt-6 border-t-2 border-b border-[#1F3A2E]/20 pt-1">
          <div className="border-t border-[#A8842C]/40" />
        </div>
      </Reveal>

      <ul className="mt-10 grid gap-8 md:grid-cols-3">
        {scholarTestimonials.map((item, index) => (
          <li key={item.id}>
            <Reveal delay={index * 0.08} y={20}>
              <figure className="flex h-full flex-col border border-[#1F3A2E]/12 bg-[#F5EFE1] p-7">
                <span
                  aria-hidden
                  className="font-scholar-display text-5xl leading-none text-[#A8842C]/60"
                >
                  “
                </span>
                <blockquote className="mt-2 flex-1">
                  <p className="font-scholar-display text-lg leading-relaxed text-[#1F3A2E]">
                    {item.quote}
                  </p>
                </blockquote>
                <figcaption className="mt-6 border-t border-[#1F3A2E]/12 pt-4">
                  <p className="text-sm font-semibold text-[#1F3A2E]">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-xs text-[#5C6B60]">{item.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
