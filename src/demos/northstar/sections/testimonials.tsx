import { Reveal } from "@/components/shared/reveal";
import { northstarTestimonials } from "../data";

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28"
    >
      <Reveal y={14} duration={0.8}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2
            id="testimonials-heading"
            className="max-w-xl text-[2rem] leading-[1.12] tracking-tight text-[#26241F] sm:text-4xl"
          >
            In their own
            <span className="text-[#9C4F36] italic"> words.</span>
          </h2>
          <p className="text-[10px] tracking-[0.24em] text-[#6E6A62] uppercase italic">
            Demo testimonials · fictional attributions
          </p>
        </div>
      </Reveal>

      <ul className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-3">
        {northstarTestimonials.map((item, index) => (
          <li key={item.id}>
            <Reveal delay={index * 0.08} duration={0.8} y={18}>
              <figure className="flex h-full flex-col border-t border-[#26241F]/20 pt-6">
                <blockquote className="flex-1">
                  <p className="font-northstar-display text-[1.375rem] leading-[1.6] text-[#26241F]">
                    <span aria-hidden className="text-[#9C4F36]">“</span>
                    {item.quote}
                    <span aria-hidden className="text-[#9C4F36]">”</span>
                  </p>
                </blockquote>
                <figcaption className="mt-7">
                  <p className="text-sm font-semibold tracking-[0.08em] text-[#26241F]">
                    {item.name}
                  </p>
                  <p className="mt-1 text-xs tracking-[0.06em] text-[#6E6A62]">
                    {item.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
