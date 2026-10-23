import { Reveal } from "@/components/shared/reveal";
import { Enquiry } from "../components/enquiry";
import { SproutMark } from "../components/illustrations";

export function ContactCta() {
  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="relative overflow-hidden pb-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 -left-24 h-64 w-64 rounded-[55%_45%_50%_50%/50%_55%_45%_50%] bg-[#F3EDF8]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[6%] -bottom-16 h-52 w-52 rounded-[45%_55%_55%_45%/55%_45%_50%_50%] bg-[#FDF0EA]"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal y={16}>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <SproutMark className="mx-auto h-10 w-10 text-[#E8836F]" />
            <h2
              id="contact-cta-heading"
              className="mt-4 font-bloom-display text-[clamp(1.9rem,4vw,2.75rem)] leading-tight font-semibold tracking-tight text-[#3B3358]"
            >
              Ready when you are
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5F5878]">
              Tell us a little about your child, and we will take it from there
              — warmly, honestly, and at your pace.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto max-w-[900px]">
          <Enquiry />
        </div>
      </div>
    </section>
  );
}
