import Link from "next/link";
import { InstagramGlyph } from "./icons";
import { MapPin, Phone, ShieldCheck } from "lucide-react";
import { siteYear } from "@/lib/site-year";
import {
  tmCollectionNav,
  tmContact,
  tmDemoNotice,
  tmFooterNav,
  tmHomeHref,
} from "../data";
import { BrandMark } from "./brand-mark";

export async function SiteFooter() {
  return (
    <footer className="border-t border-[#1C1A17]/12 bg-[#F1EBE2]">
      <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Link
              href={tmHomeHref}
              className="inline-flex focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B23B2E]"
              aria-label="TM SONS — home"
            >
              <BrandMark size={56} withWordmark subWordmark="Ludhiana · Punjab" />
            </Link>
            <div aria-hidden className="mt-5 h-px w-16 bg-[#B23B2E]" />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[#6F6A61]">
              A women&rsquo;s apparel business based in Ludhiana, with clothing
              collections spanning winterwear, coordinated styles and ethnic
              fashion. Retail customers and wholesale buyers can enquire about
              available products and current collection details.{" "}
              <span className="italic">Proposed demonstration copy.</span>
            </p>
            <a
              href={tmContact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-2.5 border border-[#1C1A17]/20 px-4 text-[11px] tracking-[0.16em] text-[#1C1A17] uppercase transition-colors hover:border-[#B23B2E] hover:text-[#B23B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
            >
              <InstagramGlyph aria-hidden className="h-4 w-4" />
              {tmContact.instagramHandle}
            </a>
          </div>

          <nav aria-label="Shop" className="lg:col-span-3">
            <h2 className="text-[10px] font-semibold tracking-[0.28em] text-[#B23B2E] uppercase">
              Shop
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {tmFooterNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#1C1A17] transition-colors hover:text-[#B23B2E]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Collections" className="lg:col-span-2">
            <h2 className="text-[10px] font-semibold tracking-[0.28em] text-[#B23B2E] uppercase">
              Collections
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {tmCollectionNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#1C1A17] transition-colors hover:text-[#B23B2E]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-[10px] font-semibold tracking-[0.28em] text-[#B23B2E] uppercase">
              Contact
            </h2>
            <ul className="mt-5 space-y-3.5 text-sm text-[#1C1A17]">
              {tmContact.phones.map((phone) => (
                <li key={phone.telHref}>
                  <a
                    href={phone.telHref}
                    className="flex min-h-6 items-start gap-2.5 transition-colors hover:text-[#B23B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
                  >
                    <Phone
                      aria-hidden
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B23B2E]"
                    />
                    <span>
                      <span className="block">{phone.display}</span>
                      <span className="block text-[11px] tracking-[0.12em] text-[#6F6A61] uppercase">
                        {phone.label}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2.5">
                <MapPin
                  aria-hidden
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B23B2E]"
                />
                <address className="not-italic">
                  {tmContact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
            </ul>

            <p className="mt-5 text-[11px] leading-relaxed text-[#6F6A61]">
              No email address or opening hours are published until the business
              confirms them.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-[#1C1A17]/12 pt-7">
          <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-3 text-xs text-[#6F6A61]">
            <p className="max-w-xl leading-relaxed">
              <ShieldCheck
                aria-hidden
                className="mr-1.5 -mt-0.5 inline h-3.5 w-3.5 text-[#B23B2E]"
              />
              {tmDemoNotice}
            </p>
            <p className="inline-flex items-center gap-3">
              <Link
                href="/demos/tm-sons/about"
                className="underline underline-offset-4 transition-colors hover:text-[#1C1A17]"
              >
                Privacy (placeholder)
              </Link>
              <Link
                href="/demos/tm-sons/about"
                className="underline underline-offset-4 transition-colors hover:text-[#1C1A17]"
              >
                Terms (placeholder)
              </Link>
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-2 border-t border-[#1C1A17]/8 pt-5 text-xs text-[#6F6A61] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {await siteYear()} TM SONS, Ludhiana — concept site, not a live
              store.
            </p>
            <p>
              Website concept by{" "}
              <span className="font-medium text-[#1C1A17]">Vizo Technology</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
