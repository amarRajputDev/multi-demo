import Link from "next/link";
import { sakshiBrand, sakshiCategories, sakshiContact, sakshiDemo, sakshiHomeHref, sakshiNav } from "../data";
import { SAKSHI_DATA_NOTE } from "../products";
import { InstagramGlyph, PetalMotif } from "./icons";
import { SakshiWordmark } from "./logo";

/**
 * Footer: wordmark, navigation, collections, Instagram contact (the only
 * published channel) and honesty disclosures. Phone, email and address are
 * not published by the brand, so nothing is rendered for them.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-[#E9DDD4] bg-[#F6EEE6]">
      <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <SakshiWordmark size="md" />
            <p className="font-sakshi-display mt-5 max-w-sm text-[1.4rem] leading-snug text-[#3B1F24]">
              &ldquo;{sakshiBrand.positionLine}&rdquo;
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#7A6461]">
              {sakshiBrand.tagline}
            </p>
            <a
              href={sakshiContact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#D8C3BB] bg-[#FBF6EF] px-4 py-2.5 text-[11px] tracking-[0.2em] text-[#3B1F24] uppercase transition hover:border-[#8E3B47] hover:text-[#8E3B47]"
            >
              <InstagramGlyph className="h-4 w-4" />
              {sakshiContact.instagramHandle}
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-[10px] tracking-[0.3em] text-[#8E3B47] uppercase">
              Navigate
            </p>
            <ul className="mt-4 grid gap-2.5">
              {sakshiNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#3B1F24] transition hover:text-[#8E3B47]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Collections">
            <p className="text-[10px] tracking-[0.3em] text-[#8E3B47] uppercase">
              Collections
            </p>
            <ul className="mt-4 grid gap-2.5">
              <li>
                <Link
                  href={`${sakshiHomeHref}/collections`}
                  className="text-sm text-[#3B1F24] transition hover:text-[#8E3B47]"
                >
                  Shop all pieces
                </Link>
              </li>
              {sakshiCategories.map((category) => (
                <li key={category.key}>
                  <Link
                    href={category.href}
                    className="text-sm text-[#3B1F24] transition hover:text-[#8E3B47]"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[10px] tracking-[0.3em] text-[#8E3B47] uppercase">
              Contact
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-[#3B1F24]">
              <li className="flex items-start gap-2.5">
                <InstagramGlyph className="mt-0.5 h-4 w-4 shrink-0 text-[#8E3B47]" />
                <a
                  href={sakshiContact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#8E3B47]"
                >
                  {sakshiContact.instagramHandle} — DM to order
                </a>
              </li>
            </ul>
            <p className="mt-4 text-[11px] leading-relaxed text-[#7A6461]">
              {sakshiContact.verificationNote}
            </p>
            <p className="mt-4 text-[11px] leading-relaxed text-[#7A6461]">
              {SAKSHI_DATA_NOTE}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-[#E4D6CE] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-[11px] leading-relaxed text-[#7A6461]">
            {sakshiDemo.disclosure}
          </p>
          <p className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] text-[#7A6461] uppercase">
            <PetalMotif className="h-3 w-3 text-[#8E3B47]" />
            {sakshiDemo.footerNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
