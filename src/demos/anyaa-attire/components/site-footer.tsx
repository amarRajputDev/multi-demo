import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { BotanicalSprig, InstagramGlyph } from "./icons";
import {
  anyaaBrand,
  anyaaContact,
  anyaaDemo,
  anyaaFooterNote,
  anyaaHomeHref,
  anyaaNav,
} from "../data";
import { anyaaProductCount } from "../products";
import { AnyaaLogo } from "./logo";

/**
 * Footer: brand lock-up, navigation, categories, contact and disclosures.
 * Phone, email and address are unverified for this brand, so those fields are
 * null and are never rendered here.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-[#DFE7E2] bg-[#F2F5F1]">
      <div className="mx-auto max-w-[1360px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <AnyaaLogo size={54} withWordmark />
            <BotanicalSprig className="mt-5 h-8 w-24 text-[#2E6F62]/70" />
            <p className="font-anyaa-display mt-4 max-w-sm text-[1.35rem] leading-snug text-[#22332F]">
              &ldquo;{anyaaBrand.positionLine}&rdquo;
            </p>
            <p className="font-anyaa-body mt-3 max-w-sm text-sm leading-relaxed text-[#6E7C77]">
              {anyaaBrand.tagline}
            </p>
            <a
              href={anyaaContact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-anyaa-body mt-5 inline-flex items-center gap-2 rounded-full border border-[#2E6F62]/30 bg-white px-4 py-2.5 text-[11px] tracking-[0.2em] text-[#22332F] uppercase transition hover:border-[#2E6F62] hover:text-[#2E6F62]"
            >
              <InstagramGlyph className="h-4 w-4" />
              {anyaaContact.instagramHandle}
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <p className="font-anyaa-body text-[10px] tracking-[0.3em] text-[#2E6F62] uppercase">
              Navigate
            </p>
            <ul className="font-anyaa-body mt-4 grid gap-2.5">
              {anyaaNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#22332F] transition hover:text-[#2E6F62]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Product categories">
            <p className="font-anyaa-body text-[10px] tracking-[0.3em] text-[#2E6F62] uppercase">
              Collections
            </p>
            <ul className="font-anyaa-body mt-4 grid gap-2.5">
              <li>
                <Link
                  href={`${anyaaHomeHref}/collections`}
                  className="text-sm text-[#22332F] transition hover:text-[#2E6F62]"
                >
                  Shop all pieces
                </Link>
              </li>
              <li>
                <Link
                  href={`${anyaaHomeHref}/collections/everyday-fashion`}
                  className="text-sm text-[#22332F] transition hover:text-[#2E6F62]"
                >
                  Everyday fashion
                </Link>
              </li>
              <li>
                <Link
                  href={`${anyaaHomeHref}/collections/kurti-collection`}
                  className="text-sm text-[#22332F] transition hover:text-[#2E6F62]"
                >
                  Kurti collection
                </Link>
              </li>
              <li>
                <Link
                  href={`${anyaaHomeHref}/collections/floral-edits`}
                  className="text-sm text-[#22332F] transition hover:text-[#2E6F62]"
                >
                  Floral edits
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="font-anyaa-body text-[10px] tracking-[0.3em] text-[#2E6F62] uppercase">
              Contact
            </p>
            <ul className="font-anyaa-body mt-4 grid gap-3 text-sm text-[#22332F]">
              {anyaaContact.phoneDisplay && anyaaContact.phoneHref ? (
                <li className="flex items-start gap-2.5">
                  <Phone aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#2E6F62]" />
                  <a
                    href={`tel:${anyaaContact.phoneHref}`}
                    className="transition hover:text-[#2E6F62]"
                  >
                    {anyaaContact.phoneDisplay}
                  </a>
                </li>
              ) : null}
              {anyaaContact.email && anyaaContact.emailHref ? (
                <li className="flex items-start gap-2.5">
                  <Mail aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#2E6F62]" />
                  <a
                    href={anyaaContact.emailHref}
                    className="break-all transition hover:text-[#2E6F62]"
                  >
                    {anyaaContact.email}
                  </a>
                </li>
              ) : null}
              {anyaaContact.addressLines ? (
                <li className="flex items-start gap-2.5">
                  <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#2E6F62]" />
                  <span>
                    {anyaaContact.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </li>
              ) : null}
              <li className="flex items-start gap-2.5">
                <InstagramGlyph className="mt-0.5 h-4 w-4 shrink-0 text-[#2E6F62]" />
                <a
                  href={anyaaContact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#2E6F62]"
                >
                  {anyaaContact.instagramHandle}
                </a>
              </li>
            </ul>

            <p className="font-anyaa-body mt-4 text-[11px] leading-relaxed text-[#6E7C77]">
              No phone number, email or street address for {anyaaBrand.shortName}{" "}
              could be verified for this concept, so none is shown. The Instagram
              profile is the only verified public channel found.
            </p>

            <Link
              href={`${anyaaHomeHref}/#enquire`}
              className="font-anyaa-body mt-4 inline-flex items-center gap-2 rounded-full bg-[#2E6F62] px-5 py-3 text-[11px] font-medium tracking-[0.2em] text-[#FAF8F3] uppercase transition hover:bg-[#22332F]"
            >
              Send an enquiry
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#DFE7E2] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-anyaa-body max-w-2xl text-[11px] leading-relaxed text-[#6E7C77]">
            {anyaaDemo.disclosure}
          </p>
          <p className="font-anyaa-body text-[11px] tracking-[0.16em] text-[#6E7C77] uppercase">
            {anyaaFooterNote}
          </p>
        </div>

        <p className="font-anyaa-body mt-4 text-[11px] leading-relaxed text-[#6E7C77]/80">
          Unofficial website concept for {anyaaBrand.name}. Not affiliated with,
          endorsed by or operated by the brand. The {anyaaProductCount} entries
          shown are demonstration content, and the single archived garment image
          is a historical reference from 2023.
        </p>
      </div>
    </footer>
  );
}
