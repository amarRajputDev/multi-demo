import { tmContact, tmDemoNotice } from "../data";

/**
 * Slim, honest announcement strip. No fake offers, countdowns or shipping
 * claims — only the brand's actual positioning plus the demo disclosure.
 */
export function AnnouncementStrip() {
  return (
    <div className="border-b border-[#1C1A17]/10 bg-[#1C1A17] text-[#FAF7F2]">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2 text-[10px] tracking-[0.18em] uppercase sm:px-8">
        <p>
          TM SONS · Women&rsquo;s Fashion &amp; Wholesale Enquiries ·{" "}
          <span className="text-[#E9B7AE]">{tmContact.locationCity}</span>
        </p>
        <p className="hidden text-[#FAF7F2]/55 sm:block">
          Website concept by Vizo Technology — details require confirmation
        </p>
      </div>
      <span className="sr-only">{tmDemoNotice}</span>
    </div>
  );
}
