import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteYear } from "@/lib/site-year";
import {
  khaleeziBrand,
  khaleeziContact,
  khaleeziDemo,
  khaleeziNav,
} from "../data";
import { BrandMark } from "./brand";

export async function SiteFooter() {
  const year = await siteYear();

  return (
    <footer className="border-t border-[#E4DCD0] bg-[#F3EDE2]">
      <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <BrandMark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#7A6E67]">
              {khaleeziBrand.tagline} Pure cotton dupatta sets, straight pants and
              everyday ethnicwear in small to 7XL.
            </p>
            <a
              href={khaleeziContact.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-[#2F6D72] hover:underline"
            >
              {khaleeziBrand.instagramHandle}
              <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
            </a>
          </div>

          <div>
            <p className="khaleezi-eyebrow text-[9px] text-[#7A6E67]">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {khaleeziNav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#2A2320]/80 transition-colors hover:text-[#2F6D72]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="khaleezi-eyebrow text-[9px] text-[#7A6E67]">Ordering</p>
            <ul className="mt-4 space-y-2.5 text-sm text-[#2A2320]/80">
              <li>WhatsApp enquiry · worldwide shipping</li>
              <li className="text-[#7A6E67]">{khaleeziDemo.noCod}</li>
              <li>
                <a
                  href={khaleeziContact.instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[#2F6D72] hover:underline"
                >
                  Enquire on Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#E4DCD0] pt-6">
          <p className="max-w-3xl text-[11px] leading-relaxed text-[#7A6E67]">
            {khaleeziDemo.disclosure} {khaleeziContact.contactNote}
          </p>
          <div className="mt-4 flex flex-col gap-2 text-[10px] uppercase tracking-[0.16em] text-[#7A6E67]/80 sm:flex-row sm:items-center sm:justify-between">
            <span>© {year} {khaleeziBrand.name} concept</span>
            <span>No-index preview · Vizo Technology</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
