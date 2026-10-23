import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { Enquiry } from "../components/enquiry";
import { PageHero } from "../sections/page-hero";
import { pulseContact } from "../data";

const heroMeta = [
  { label: "Front desk", value: "Mon–Sat" },
  { label: "Walk-in tests", value: "Saturdays" },
  { label: "Callback", value: "1 working day" },
  { label: "WhatsApp", value: "Minutes" },
];

const details = [
  {
    icon: Phone,
    label: "Admissions desk",
    value: pulseContact.phoneDisplay,
    href: `tel:${pulseContact.phoneDigits}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: pulseContact.email,
    href: `mailto:${pulseContact.email}`,
  },
  {
    icon: MapPin,
    label: "Campus",
    value: pulseContact.addressLines.join(", "),
    href: null,
  },
  {
    icon: Clock,
    label: "Front desk hours",
    value: pulseContact.hours,
    href: null,
  },
];

export function ContactPage() {
  return (
    <>
      <PageHero
        headingId="contact-hero"
        eyebrow="Contact & admissions"
        heading={
          <>
            Talk to the desk.
            <br />
            No sales script.
          </>
        }
        intro="Call, WhatsApp, or send the enquiry form — whichever is easiest. A counsellor maps the target exam, weekly load and honest timeline before anyone mentions a fee. Details below are placeholders for this design demo."
        meta={heroMeta}
      />

      <section aria-labelledby="details-heading" className="bg-white">
        <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <Reveal y={16} duration={0.45}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-bold tracking-[0.28em] text-[#2447F0] uppercase">
                  The desk
                </p>
                <h2
                  id="details-heading"
                  className="font-pulse-display mt-3 text-[clamp(1.75rem,4vw,2.75rem)] leading-[0.95] font-black tracking-[-0.04em] text-[#0A1B4D] uppercase"
                >
                  Every channel,
                  <br />
                  one team.
                </h2>
              </div>
              <p className="max-w-sm rounded-2xl bg-[#F2F5FF] px-4 py-3 text-xs leading-relaxed text-[#5A6A99]">
                <span className="font-bold tracking-[0.12em] text-[#2447F0] uppercase">
                  Placeholder details
                </span>{" "}
                — phone, email and address are fictional values for this demo,
                not a live institute.
              </p>
            </div>
          </Reveal>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:gap-4">
            {details.map((item, index) => {
              const body = (
                <>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#2447F0] text-white">
                    <item.icon aria-hidden className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-bold tracking-[0.18em] text-[#5A6A99] uppercase">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-sm font-semibold break-words text-[#0A1B4D]">
                      {item.value}
                    </span>
                  </span>
                </>
              );
              return (
                <li key={item.label} className="h-full">
                  <Reveal
                    y={16}
                    delay={index * 0.06}
                    duration={0.45}
                    className="h-full"
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="group flex h-full min-h-14 items-center gap-3.5 rounded-2xl border border-[#0A1B4D]/10 bg-white px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2447F0] hover:shadow-[0_16px_30px_-24px_rgba(36,71,240,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2447F0]"
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="flex h-full min-h-14 items-center gap-3.5 rounded-2xl border border-[#0A1B4D]/10 bg-[#F2F5FF] px-4 py-4">
                        {body}
                      </div>
                    )}
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section aria-labelledby="map-heading" className="bg-[#F2F5FF]">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-16">
          <div className="lg:col-span-7">
            <Reveal y={18} duration={0.45}>
              <div className="relative overflow-hidden rounded-3xl border border-[#0A1B4D]/12 bg-white">
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(10,27,77,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,27,77,0.07) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div
                  aria-hidden
                  className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[#2447F0]/20 bg-[#2447F0]/5"
                />
                <div className="relative flex min-h-[280px] flex-col items-center justify-center gap-4 px-6 py-14 text-center sm:min-h-[320px]">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#2447F0] text-white shadow-[0_18px_36px_-20px_rgba(36,71,240,1)]">
                    <MapPin aria-hidden className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-pulse-display text-lg leading-tight font-black tracking-[-0.03em] text-[#0A1B4D] uppercase sm:text-xl">
                      Pulse Prep campus
                    </p>
                    <p className="mt-1.5 text-sm text-[#5A6A99]">
                      {pulseContact.addressLines.join(" · ")}
                    </p>
                  </div>
                  <span className="rounded-full bg-[#D8FF3E] px-3.5 py-2 text-[10px] font-bold tracking-[0.16em] text-[#0A1B4D] uppercase">
                    Map placeholder — no live map in this demo
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal y={16} delay={0.06} duration={0.45}>
              <p className="text-[11px] font-bold tracking-[0.28em] text-[#2447F0] uppercase">
                Finding the desk
              </p>
              <h2
                id="map-heading"
                className="font-pulse-display mt-3 text-[clamp(1.6rem,3.6vw,2.5rem)] leading-[0.95] font-black tracking-[-0.04em] text-[#0A1B4D] uppercase"
              >
                Walk in.
                <br />
                Or call ahead.
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-[#5A6A99]">
                <p>
                  The campus runs on the first floor above the row of shops —
                  look for the cobalt signboard. Street parking is available
                  after 5 PM on weekdays.
                </p>
                <p>
                  Walk-in diagnostics run every Saturday, 10 AM – 4 PM, with no
                  appointment needed. On weekdays, call first so a counsellor
                  can keep a slot free for you.
                </p>
              </div>
              <a
                href={`https://wa.me/${pulseContact.whatsappDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#0A1B4D] px-6 py-3.5 text-[11px] font-bold tracking-[0.16em] text-white uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2447F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2447F0]"
              >
                <MessageCircle aria-hidden className="h-4 w-4" />
                WhatsApp the desk
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="enquiry-heading" className="bg-white">
        <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 id="enquiry-heading" className="sr-only">
            Enquiry form
          </h2>
          <Reveal y={16} duration={0.45}>
            <Enquiry heading="Send an enquiry" />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="contact-walkin" className="bg-[#2447F0] text-white">
        <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:px-8 lg:py-14">
          <Reveal y={14} duration={0.45}>
            <p className="text-[11px] font-bold tracking-[0.28em] text-[#D8FF3E] uppercase">
              This Saturday
            </p>
            <h2
              id="contact-walkin"
              className="font-pulse-display mt-3 text-[clamp(1.7rem,4vw,2.6rem)] leading-[0.95] font-black tracking-[-0.04em] uppercase"
            >
              Free diagnostic,
              <br />
              no appointment.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85">
              10 AM – 4 PM at the campus. Forty-five minutes, a written
              blueprint, zero obligation — decide afterwards.
            </p>
          </Reveal>
          <Reveal y={14} delay={0.08} duration={0.45}>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/demos/pulse-prep/courses"
                className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-[#D8FF3E] px-6 py-3.5 text-xs font-black tracking-[0.16em] text-[#0A1B4D] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Compare programmes
                <ArrowRight
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/demos/pulse-prep/about"
                className="inline-flex min-h-12 items-center rounded-full border border-white/40 px-6 py-3.5 text-xs font-bold tracking-[0.16em] text-white uppercase transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                About the institute
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
