import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import {
  exotixBrand,
  exotixCategories,
  exotixContact,
  exotixDemo,
  exotixFooterNote,
  exotixNav,
} from "../data";
import { ExotixWordmark } from "./site-header";

/** Footer: wordmark, navigation, categories, contact (both emails) and disclosures. */
export function SiteFooter() {
  return (
    <footer className="border-t border-[#232327] bg-[#0A0A0C]">
      <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <ExotixWordmark className="text-2xl" />
            <p className="font-exotix-display mt-5 max-w-sm text-[1.3rem] leading-snug text-[#F2EFEA]">
              {exotixBrand.positionLine}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#8A8A92]">
              {exotixBrand.tagline}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={exotixContact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-exotix-mono inline-flex items-center gap-2 rounded-sm border border-[#2A2A30] px-4 py-2.5 text-[11px] tracking-[0.18em] text-[#B9BDC4] uppercase transition hover:border-[#E23B2E] hover:text-[#F2EFEA]"
              >
                {exotixContact.instagramHandle}
                <ArrowUpRight aria-hidden className="h-3 w-3" />
              </a>
              <a
                href={exotixContact.linkHub}
                target="_blank"
                rel="noopener noreferrer"
                className="font-exotix-mono inline-flex items-center gap-2 rounded-sm border border-[#2A2A30] px-4 py-2.5 text-[11px] tracking-[0.18em] text-[#B9BDC4] uppercase transition hover:border-[#E23B2E] hover:text-[#F2EFEA]"
              >
                Link hub
                <ArrowUpRight aria-hidden className="h-3 w-3" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <p className="font-exotix-mono text-[10px] tracking-[0.3em] text-[#E23B2E] uppercase">
              Navigate
            </p>
            <ul className="mt-4 grid gap-2.5">
              {exotixNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#B9BDC4] transition hover:text-[#E23B2E]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Product categories">
            <p className="font-exotix-mono text-[10px] tracking-[0.3em] text-[#E23B2E] uppercase">
              Lanes
            </p>
            <ul className="mt-4 grid gap-2.5">
              {exotixCategories.map((category) => (
                <li key={category.key}>
                  <Link
                    href={category.href}
                    className="text-sm text-[#B9BDC4] transition hover:text-[#E23B2E]"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-exotix-mono text-[10px] tracking-[0.3em] text-[#E23B2E] uppercase">
              Contact
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-[#B9BDC4]">
              <li className="flex items-start gap-2.5">
                <Phone aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#E23B2E]" />
                <a
                  href={`tel:${exotixContact.phoneHref}`}
                  className="transition hover:text-[#E23B2E]"
                >
                  {exotixContact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#E23B2E]" />
                <span className="grid gap-1">
                  <a
                    href={`mailto:${exotixContact.emailHeader}`}
                    className="break-all transition hover:text-[#E23B2E]"
                  >
                    {exotixContact.emailHeader}
                  </a>
                  <span className="font-exotix-mono text-[10px] tracking-[0.14em] text-[#8A8A92] uppercase">
                    or
                  </span>
                  <a
                    href={`mailto:${exotixContact.emailContactPage}`}
                    className="break-all transition hover:text-[#E23B2E]"
                  >
                    {exotixContact.emailContactPage}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#E23B2E]" />
                <span>
                  {exotixContact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            </ul>

            <p className="mt-4 text-[11px] leading-relaxed text-[#8A8A92]">
              Two email addresses are published on the brand&apos;s own site —
              both are listed as alternatives. {exotixContact.verificationNote}
            </p>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[11px] tracking-[0.14em] uppercase">
              <a
                href={exotixContact.shippingPolicy}
                target="_blank"
                rel="noopener noreferrer"
                className="font-exotix-mono inline-flex items-center gap-1 text-[#B9BDC4] underline decoration-[#2A2A30] underline-offset-4 transition hover:text-[#E23B2E]"
              >
                Shipping policy
                <ArrowUpRight aria-hidden className="h-3 w-3" />
              </a>
              <a
                href={exotixContact.refundPolicy}
                target="_blank"
                rel="noopener noreferrer"
                className="font-exotix-mono inline-flex items-center gap-1 text-[#B9BDC4] underline decoration-[#2A2A30] underline-offset-4 transition hover:text-[#E23B2E]"
              >
                Returns policy
                <ArrowUpRight aria-hidden className="h-3 w-3" />
              </a>
              <a
                href={exotixContact.privacyPolicy}
                target="_blank"
                rel="noopener noreferrer"
                className="font-exotix-mono inline-flex items-center gap-1 text-[#B9BDC4] underline decoration-[#2A2A30] underline-offset-4 transition hover:text-[#E23B2E]"
              >
                Privacy
                <ArrowUpRight aria-hidden className="h-3 w-3" />
              </a>
              <a
                href={exotixContact.sourceSite}
                target="_blank"
                rel="noopener noreferrer"
                className="font-exotix-mono inline-flex items-center gap-1 text-[#B9BDC4] underline decoration-[#2A2A30] underline-offset-4 transition hover:text-[#E23B2E]"
              >
                Official site
                <ArrowUpRight aria-hidden className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#232327] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-[11px] leading-relaxed text-[#8A8A92]">
            {exotixDemo.disclosure}
          </p>
          <p className="font-exotix-mono text-[11px] tracking-[0.16em] text-[#5A5A62] uppercase">
            {exotixFooterNote}
          </p>
        </div>

        <p className="mt-4 text-[11px] leading-relaxed text-[#5A5A62]">
          Unofficial redesign concept for {exotixBrand.name}. Not affiliated
          with, endorsed by or operated by the brand. Product imagery belongs to
          Exotix and is referenced directly from its live store CDN.
        </p>
      </div>
    </footer>
  );
}
