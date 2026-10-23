import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { northstarContact } from "../data";

export function ContactCta() {
  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="border-t border-[#26241F]/12 bg-[#26241F] text-[#F7F4EF]"
    >
      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal y={14} duration={0.8}>
              <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#E5C9BC] uppercase">
                <span aria-hidden className="h-px w-8 bg-[#E5C9BC]" />
                Begin
              </p>
              <h2
                id="contact-cta-heading"
                className="mt-5 text-[2.125rem] leading-[1.1] tracking-tight sm:text-[3rem]"
              >
                One honest conversation
                <br className="hidden sm:block" />{" "}
                <span className="text-[#E5C9BC] italic">
                  is worth a hundred brochures.
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#F7F4EF]/70">
                Tell us the examination, the timeline and the constraints. A
                counsellor will reply within one working day — and if a smaller
                or shorter programme serves you better, we will say so.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href="/demos/northstar/contact"
                  className="group inline-flex min-h-12 items-center gap-3 bg-[#F7F4EF] px-8 py-3.5 text-[13px] tracking-[0.16em] text-[#26241F] uppercase transition-colors duration-300 hover:bg-[#E5C9BC] focus-visible:ring-2 focus-visible:ring-[#E5C9BC] focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  Send an enquiry
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
                <a
                  href={`tel:${northstarContact.phoneDigits}`}
                  className="inline-flex min-h-12 items-center gap-2 border-b border-[#E5C9BC] text-[13px] tracking-[0.16em] uppercase transition-colors hover:text-[#E5C9BC] focus-visible:ring-2 focus-visible:ring-[#E5C9BC] focus-visible:ring-offset-4 focus-visible:outline-none"
                >
                  <Phone aria-hidden className="h-4 w-4" />
                  {northstarContact.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pt-10">
            <Reveal y={16} duration={0.8} delay={0.08}>
              <div className="border-t border-[#F7F4EF]/20 pt-6">
                <p className="text-[10px] font-semibold tracking-[0.28em] text-[#E5C9BC] uppercase">
                  Counselling hours
                </p>
                <p className="mt-3 font-northstar-display text-xl text-[#F7F4EF]">
                  {northstarContact.hours}
                </p>
                <p className="mt-6 text-sm leading-relaxed text-[#F7F4EF]/65">
                  {northstarContact.addressLines.join(" · ")}
                </p>
                <a
                  href={`https://wa.me/${northstarContact.whatsappDigits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm text-[#F7F4EF] transition-colors hover:text-[#E5C9BC] focus-visible:ring-2 focus-visible:ring-[#E5C9BC] focus-visible:ring-offset-4 focus-visible:outline-none"
                >
                  <MessageCircle aria-hidden className="h-4 w-4" />
                  WhatsApp the front desk
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
