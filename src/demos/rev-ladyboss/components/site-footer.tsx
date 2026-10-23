import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InstagramGlyph } from "./icons";
import {
  revBrand,
  revContact,
  revDemo,
  revFooterNote,
  revHomeHref,
  revLookbook,
  revNav,
} from "../data";
import { RevLogo } from "./logo";

/** Footer: brand lock-up, navigation, collections, contact and disclosures. */
export function SiteFooter() {
  return (
    <footer className="border-t border-[#2A2226] bg-[#1A1618] text-[#F3DCE1]">
      <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <RevLogo size={54} withWordmark />
            <p className="font-rev-heading mt-5 max-w-sm text-[1.5rem] leading-[1.1] text-[#FAF4F3]">
              Bold pieces.
              <br />
              Ordered by DM.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#B9AAAF]">
              {revBrand.tagline}
            </p>
            <a
              href={revContact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-[2px] border border-[#3A3036] px-4 py-2.5 text-[11px] font-semibold tracking-[0.2em] text-[#F3DCE1] uppercase transition hover:border-[#B4707F] hover:text-[#D9A3AE]"
            >
              <InstagramGlyph aria-hidden className="h-4 w-4" />
              {revContact.instagramHandle}
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-[10px] tracking-[0.3em] text-[#B4707F] uppercase">
              Navigate
            </p>
            <ul className="mt-4 grid gap-2.5">
              {revNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#E4D6DA] transition hover:text-[#D9A3AE]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Lookbook collections">
            <p className="text-[10px] tracking-[0.3em] text-[#B4707F] uppercase">
              Lookbook
            </p>
            <ul className="mt-4 grid gap-2.5">
              {revLookbook.map((entry) => (
                <li key={entry.key}>
                  <Link
                    href={entry.href}
                    className="inline-flex items-baseline gap-2 text-sm text-[#E4D6DA] transition hover:text-[#D9A3AE]"
                  >
                    <span className="font-rev-display text-[10px] text-[#B4707F]">
                      {entry.index}
                    </span>
                    {entry.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`${revHomeHref}/collections`}
                  className="text-sm text-[#E4D6DA] transition hover:text-[#D9A3AE]"
                >
                  Shop all pieces
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-[10px] tracking-[0.3em] text-[#B4707F] uppercase">
              Contact
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-[#E4D6DA]">
              <li>
                <a
                  href={revContact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-[#D9A3AE]"
                >
                  <InstagramGlyph aria-hidden className="h-4 w-4 text-[#B4707F]" />
                  {revContact.instagramHandle}
                </a>
              </li>
              <li className="text-[13px] text-[#B9AAAF]">
                Ordering channel: {revContact.orderChannel}
              </li>
            </ul>

            <p className="mt-4 text-[11px] leading-relaxed text-[#9C8D93]">
              {revContact.verificationNote}
            </p>

            <p className="mt-4 text-[11px] leading-relaxed text-[#9C8D93]">
              {revDemo.codNote}
            </p>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[11px] tracking-[0.14em] uppercase">
              <Link
                href={`${revHomeHref}/contact`}
                className="inline-flex items-center gap-1 text-[#F3DCE1] underline decoration-[#3A3036] underline-offset-4 transition hover:text-[#D9A3AE]"
              >
                Contact &amp; enquiry
                <ArrowUpRight aria-hidden className="h-3 w-3" />
              </Link>
              <a
                href={revContact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#F3DCE1] underline decoration-[#3A3036] underline-offset-4 transition hover:text-[#D9A3AE]"
              >
                Instagram feed
                <ArrowUpRight aria-hidden className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#2A2226] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-[11px] leading-relaxed text-[#9C8D93]">
            Website concept by Vizo Technology. Product information, pricing,
            availability and business policies require confirmation.
          </p>
          <p className="text-[11px] tracking-[0.16em] text-[#7C7073] uppercase">
            {revFooterNote}
          </p>
        </div>

        <p className="mt-4 text-[11px] leading-relaxed text-[#7C7073]">
          Unofficial website concept for {revBrand.name} ({revContact.instagramHandle}).
          Not affiliated with, endorsed by or operated by the business. The
          logo image is referenced directly from its public listing URL and
          remains the property of the brand.
        </p>
      </div>
    </footer>
  );
}
