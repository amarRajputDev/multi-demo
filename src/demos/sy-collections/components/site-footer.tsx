import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { InstagramGlyph } from "./icons";
import {
  syBrand,
  syContact,
  syDemo,
  syFooterNote,
  syHomeHref,
  syNav,
} from "../data";
import { SyLogo } from "./logo";

/** Footer: brand lock-up, navigation, categories, contact and disclosures. */
export function SiteFooter() {
  return (
    <footer className="border-t border-[#EADFDB] bg-[#F7F1EC]">
      <div className="mx-auto max-w-[1360px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <SyLogo size={54} withWordmark />
            <p className="font-sy-display mt-5 max-w-sm text-[1.35rem] leading-snug text-[#2C1F26]">
              &ldquo;{syBrand.positionLine}&rdquo;
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#7A6A71]">
              {syBrand.tagline}
            </p>
            <a
              href={syContact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#DCCFC9] bg-white px-4 py-2.5 text-[11px] tracking-[0.2em] text-[#4B2C3B] uppercase transition hover:border-[#A63D57] hover:text-[#A63D57]"
            >
              <InstagramGlyph className="h-4 w-4" />
              {syContact.instagramHandle}
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-[10px] tracking-[0.3em] text-[#A63D57] uppercase">
              Navigate
            </p>
            <ul className="mt-4 grid gap-2.5">
              {syNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#4B2C3B] transition hover:text-[#A63D57]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Product categories">
            <p className="text-[10px] tracking-[0.3em] text-[#A63D57] uppercase">
              Categories
            </p>
            <ul className="mt-4 grid gap-2.5">
              <li>
                <Link
                  href={`${syHomeHref}/collections`}
                  className="text-sm text-[#4B2C3B] transition hover:text-[#A63D57]"
                >
                  Shop all pieces
                </Link>
              </li>
              <li>
                <Link
                  href={`${syHomeHref}/collections/everyday-kurtis`}
                  className="text-sm text-[#4B2C3B] transition hover:text-[#A63D57]"
                >
                  Everyday kurtis
                </Link>
              </li>
              <li>
                <Link
                  href={`${syHomeHref}/collections/premium-cotton`}
                  className="text-sm text-[#4B2C3B] transition hover:text-[#A63D57]"
                >
                  Premium cotton
                </Link>
              </li>
              <li>
                <Link
                  href={`${syHomeHref}/collections/kurti-pant-sets`}
                  className="text-sm text-[#4B2C3B] transition hover:text-[#A63D57]"
                >
                  Kurti-pant sets
                </Link>
              </li>
              <li>
                <Link
                  href={`${syHomeHref}/collections/tissue-silk`}
                  className="text-sm text-[#4B2C3B] transition hover:text-[#A63D57]"
                >
                  Tissue silk
                </Link>
              </li>
              <li>
                <Link
                  href={`${syHomeHref}/collections/bottomwear`}
                  className="text-sm text-[#4B2C3B] transition hover:text-[#A63D57]"
                >
                  Bottomwear
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-[10px] tracking-[0.3em] text-[#A63D57] uppercase">
              Contact
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-[#4B2C3B]">
              <li className="flex items-start gap-2.5">
                <Phone aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#A63D57]" />
                <a
                  href={`tel:${syContact.phoneHref}`}
                  className="transition hover:text-[#A63D57]"
                >
                  {syContact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#A63D57]" />
                <a
                  href={syContact.emailHref}
                  className="break-all transition hover:text-[#A63D57]"
                >
                  {syContact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#A63D57]" />
                <span>
                  {syContact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            </ul>

            <p className="mt-4 text-[11px] leading-relaxed text-[#8B7B81]">
              {syContact.verificationNote}
            </p>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[11px] tracking-[0.14em] uppercase">
              <a
                href={syContact.contactPage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#4B2C3B] underline decoration-[#DCCFC9] underline-offset-4 transition hover:text-[#A63D57]"
              >
                Contact page
                <ArrowUpRight aria-hidden className="h-3 w-3" />
              </a>
              <a
                href={syContact.aboutPage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#4B2C3B] underline decoration-[#DCCFC9] underline-offset-4 transition hover:text-[#A63D57]"
              >
                About the brand
                <ArrowUpRight aria-hidden className="h-3 w-3" />
              </a>
              <a
                href={syContact.sourceSite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#4B2C3B] underline decoration-[#DCCFC9] underline-offset-4 transition hover:text-[#A63D57]"
              >
                Shipping &amp; policies
                <ArrowUpRight aria-hidden className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#E4D8D3] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-[11px] leading-relaxed text-[#7A6A71]">
            {syDemo.disclosure}
          </p>
          <p className="text-[11px] tracking-[0.16em] text-[#8B7B81] uppercase">
            {syFooterNote}
          </p>
        </div>

        <p className="mt-4 text-[11px] leading-relaxed text-[#9A8A90]">
          Unofficial redesign concept for {syBrand.name}. Not affiliated with,
          endorsed by or operated by the brand. Product imagery belongs to
          S_Y COLLECTIONS and is referenced directly from its store CDN.
        </p>
      </div>
    </footer>
  );
}
