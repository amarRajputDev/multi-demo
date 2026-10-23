import { Reveal } from "@/components/shared/reveal";
import { auroraTestimonials } from "../data";

export function Testimonials() {
  return (
    <section className="border-b border-white/10 bg-[#0A1729]">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
            In their words
          </p>
          <h2 className="font-aurora-display mt-5 text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.08] tracking-[-0.01em] text-[#F4EFE6] [text-wrap:balance]">
            What families notice first is the attention.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px bg-white/10 lg:grid-cols-3">
          {auroraTestimonials.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 0.08}
              className="bg-[#0A1729]"
            >
              <figure className="flex h-full flex-col p-6 sm:p-8">
                <span
                  aria-hidden
                  className="font-aurora-display text-5xl leading-none text-[#C9A227]"
                >
                  “
                </span>
                <blockquote className="font-aurora-display mt-4 flex-1 text-lg leading-snug text-[#F4EFE6] sm:text-xl">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <span className="block text-sm font-semibold text-[#F4EFE6]/85">
                    {item.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-[#F4EFE6]/60">
                    {item.role}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-xs text-[#F4EFE6]/60">
          Quotes are illustrative demo content written for this design concept.
        </p>
      </div>
    </section>
  );
}
