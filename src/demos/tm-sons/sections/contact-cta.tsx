import Link from "next/link";
import { InstagramGlyph } from "../components/icons";
import { MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { tmContact } from "../data";

export function ContactCta() {
  return (
    <section className="bg-[#FFFDFA] py-14 sm:py-20">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal>
          <div className="grid gap-8 border border-[#1C1A17]/12 bg-[#FAF7F2] p-7 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-[10px] tracking-[0.32em] text-[#B23B2E] uppercase">
                07 — Talk to the showroom
              </p>
              <h2 className="font-tmsons-display mt-4 text-[clamp(1.6rem,3vw,2.4rem)] leading-tight text-[#1C1A17]">
                Questions on a piece?{" "}
                <span className="italic text-[#B23B2E]">Call us directly.</span>
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#6F6A61]">
                There is no checkout on this concept. Pick up the phone or send
                an enquiry list, and the TM SONS team confirms availability,
                colours and pricing themselves.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {tmContact.phones.map((phone) => (
                <a
                  key={phone.telHref}
                  href={phone.telHref}
                  className="group flex min-h-14 items-center justify-between gap-4 border border-[#1C1A17]/20 bg-[#FFFDFA] px-5 transition-colors hover:border-[#B23B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
                >
                  <span className="flex items-center gap-3">
                    <Phone
                      aria-hidden
                      className="h-4 w-4 text-[#B23B2E] transition-transform group-hover:-rotate-12"
                    />
                    <span>
                      <span className="block font-tmsons-display text-[1.05rem] text-[#1C1A17]">
                        {phone.display}
                      </span>
                      <span className="block text-[9px] tracking-[0.2em] text-[#6F6A61] uppercase">
                        {phone.label}
                      </span>
                    </span>
                  </span>
                  <span className="text-[10px] tracking-[0.18em] text-[#B23B2E] uppercase">
                    Call
                  </span>
                </a>
              ))}

              <div className="mt-1 flex flex-wrap gap-3">
                <Link
                  href="/demos/tm-sons/wholesale"
                  className="inline-flex min-h-12 flex-1 items-center justify-center bg-[#1C1A17] px-6 text-[11px] tracking-[0.2em] text-[#FAF7F2] uppercase transition-colors hover:bg-[#B23B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
                >
                  Send an enquiry
                </Link>
                <a
                  href={tmContact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 border border-[#1C1A17]/25 px-6 text-[11px] tracking-[0.2em] text-[#1C1A17] uppercase transition-colors hover:border-[#1C1A17] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
                >
                  <InstagramGlyph aria-hidden className="h-4 w-4" />
                  Instagram
                </a>
              </div>

              <p className="mt-1 flex items-start gap-2 text-[11px] leading-relaxed text-[#6F6A61]">
                <MapPin
                  aria-hidden
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B23B2E]"
                />
                {tmContact.locationShort} — address pending owner confirmation.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
