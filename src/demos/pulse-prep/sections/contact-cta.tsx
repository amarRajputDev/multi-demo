import Link from "next/link";
import { ArrowRight, Clock, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { pulseContact } from "../data";

const chips = [
  { icon: Phone, label: pulseContact.phoneDisplay, href: `tel:${pulseContact.phoneDigits}` },
  {
    icon: MessageCircle,
    label: "WhatsApp the desk",
    href: `https://wa.me/${pulseContact.whatsappDigits}`,
  },
  { icon: Clock, label: pulseContact.hours, href: "/demos/pulse-prep/contact" },
];

export function ContactCta() {
  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden bg-[#2447F0] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 hidden h-64 w-64 rotate-12 border-[6px] border-white/15 sm:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-8 left-6 hidden h-4 w-4 bg-[#D8FF3E] lg:block"
      />

      <div className="relative mx-auto grid max-w-[1240px] gap-9 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-24">
        <div className="lg:col-span-7">
          <Reveal y={16} duration={0.45}>
            <p className="text-[11px] font-bold tracking-[0.28em] text-[#D8FF3E] uppercase">
              Start with a number, not a promise
            </p>
            <h2
              id="cta-heading"
              className="font-pulse-display mt-4 text-[clamp(2.1rem,6vw,4.25rem)] leading-[0.9] font-black tracking-[-0.045em] uppercase"
            >
              Find out where
              <br />
              you actually stand.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              One free 45-minute diagnostic, a written blueprint, and an honest
              conversation about the timeline. That is step one — everything
              else is optional until you say otherwise.
            </p>
          </Reveal>

          <Reveal y={16} delay={0.08} duration={0.45}>
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/demos/pulse-prep/contact"
                className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-[#D8FF3E] px-7 py-3.5 text-xs font-black tracking-[0.16em] text-[#0A1B4D] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Book the free test
                <ArrowRight
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/demos/pulse-prep/courses"
                className="inline-flex min-h-12 items-center rounded-full border border-white/40 px-6 py-3.5 text-xs font-bold tracking-[0.16em] text-white uppercase transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Compare programmes
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal y={18} delay={0.12} duration={0.45} className="lg:col-span-5">
          <ul className="grid gap-2.5">
            {chips.map((chip) => (
              <li key={chip.label}>
                <a
                  href={chip.href}
                  target={chip.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    chip.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex min-h-12 items-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D8FF3E] hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0A1B4D] text-[#D8FF3E]">
                    <chip.icon aria-hidden className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-white">
                      {chip.label}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-white/80">
            Campus: {pulseContact.addressLines.join(", ")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
