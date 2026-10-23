import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { sakshiBrand, sakshiContact, sakshiDemo, sakshiHomeHref } from "../data";
import { OrnamentDivider, PetalMotif } from "../components/icons";
import { SakshiWordmark } from "../components/logo";

/** Hero: typographic lock-up on an ornamental rose/ivory field. */
export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative overflow-hidden bg-[linear-gradient(155deg,#F8EFE7_0%,#EFD9D5_48%,#F6ECE4_100%)]"
    >
      {/* Ornamental corner arcs */}
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -top-10 -right-10 h-64 w-64 text-[#8E3B47] opacity-25 sm:h-80 sm:w-80"
        fill="none"
        stroke="currentColor"
        strokeWidth={0.6}
      >
        <circle cx="100" cy="100" r="90" />
        <circle cx="100" cy="100" r="70" />
        <circle cx="100" cy="100" r="50" />
      </svg>
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -bottom-16 -left-12 h-56 w-56 text-[#8E3B47] opacity-20"
        fill="none"
        stroke="currentColor"
        strokeWidth={0.6}
      >
        <circle cx="100" cy="100" r="90" />
        <circle cx="100" cy="100" r="64" />
      </svg>

      <div className="sakshi-weave absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid max-w-[1320px] gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div>
          <p className="sakshi-eyebrow inline-flex items-center gap-2 text-[10px] font-semibold text-[#8E3B47]">
            <PetalMotif className="h-3 w-3" />
            Unofficial website concept
            <PetalMotif className="h-3 w-3" />
          </p>

          <h1 className="font-sakshi-display mt-5 text-[clamp(2.6rem,7vw,4.6rem)] leading-[1.04] tracking-[0.01em] text-[#3B1F24]">
            Kurtis,{" "}
            <span className="italic text-[#8E3B47]">curated</span>
            <br className="hidden sm:block" /> by Sakshi
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5C4644] sm:text-lg">
            {sakshiBrand.tagline} Browse the concept edit of everyday, printed,
            cotton and occasion kurtis — then enquire on Instagram for current
            pieces, pricing and sizes.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={`${sakshiHomeHref}/collections`}
              className="inline-flex items-center gap-2 rounded-full bg-[#8E3B47] px-7 py-3.5 text-[12px] font-semibold tracking-[0.18em] text-[#FBF6EF] uppercase transition hover:bg-[#7A3140] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B1F24]"
            >
              Explore the edit
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <a
              href={sakshiContact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#3B1F24]/30 px-7 py-3.5 text-[12px] font-semibold tracking-[0.18em] text-[#3B1F24] uppercase transition hover:border-[#8E3B47] hover:text-[#8E3B47]"
            >
              <MessageCircle aria-hidden className="h-4 w-4" />
              Enquire on Instagram
            </a>
          </div>

          <p className="mt-6 max-w-md text-[11px] leading-relaxed tracking-[0.06em] text-[#7A6461]">
            {sakshiDemo.disclosure}
          </p>
        </div>

        {/* Ornamental typographic panel (no unverified photography used). */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="sakshi-panel relative rounded-[2rem] border p-8 shadow-[0_24px_60px_rgba(59,31,36,0.1)] sm:p-10">
            <div className="rounded-[1.5rem] border border-[#8E3B47]/20 bg-[#FBF6EF]/80 px-6 py-10 text-center">
              <PetalMotif className="mx-auto h-5 w-5 text-[#8E3B47]" />
              <div className="mt-5">
                <SakshiWordmark size="lg" />
              </div>
              <OrnamentDivider className="mt-6" />
              <p className="font-sakshi-display mt-5 text-xl italic leading-snug text-[#3B1F24]">
                “{sakshiBrand.positionLine}”
              </p>
              <p className="mt-4 text-[10px] tracking-[0.28em] text-[#7A6461] uppercase">
                {sakshiContact.instagramHandle} · DM to order
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
