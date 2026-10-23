import Image from "next/image";
import type { DemoSlug } from "@/lib/registry";
import { SyImage } from "@/demos/sy-collections/components/sy-image";
import { syImages } from "@/demos/sy-collections/images";

/**
 * CSS miniature previews of each concept — each card recreates the demo's own
 * visual language (palette, type, composition) instead of a generic thumbnail.
 */
export function MiniPreview({ slug }: { slug: DemoSlug }) {
  switch (slug) {
    case "aurora":
      return (
        <div className="font-aurora-body relative aspect-[16/10] overflow-hidden bg-[#0B1A33]">
          <div className="absolute inset-0">
            <Image
              src="/images/aurora/hero-lecture.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A33] via-[#0B1A33]/85 to-[#0B1A33]/20" />
          </div>
          <div className="relative flex h-full flex-col justify-between p-5">
            <div className="flex items-center justify-between">
              <span className="font-aurora-display text-[11px] tracking-[0.35em] text-[#F4EFE6]">
                AURORA
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
            </div>
            <div>
              <p className="font-aurora-display text-[clamp(15px,2.2vw,22px)] leading-tight text-[#F4EFE6]">
                Big Dreams Deserve
                <br />
                <span className="italic text-[#C9A227]">Exceptional</span>{" "}
                Preparation.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="rounded-full bg-[#C9A227] px-3 py-1 text-[9px] font-semibold text-[#0B1A33]">
                  Admissions Open
                </span>
                <span className="rounded-full border border-[#F4EFE6]/30 px-3 py-1 text-[9px] text-[#F4EFE6]/80">
                  JEE · NEET
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 border-t border-[#C9A227]/30 pt-2.5">
              {["12+ Yrs", "38 Hrs/wk", "96%ile"].map((s) => (
                <span key={s} className="text-[8px] tracking-wide text-[#F4EFE6]/70">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      );

    case "scholar-house":
      return (
        <div className="font-scholar-body relative aspect-[16/10] overflow-hidden bg-[#FBF8F1] text-[#1F3A2E]">
          <div className="flex h-full flex-col">
            <div className="border-b-2 border-[#1F3A2E] px-5 pb-2 pt-4">
              <div className="flex items-baseline justify-between">
                <span className="font-scholar-display text-[12px] font-semibold tracking-[0.2em]">
                  SCHOLAR HOUSE
                </span>
                <span className="hidden gap-2 text-[7px] uppercase tracking-widest sm:flex">
                  <span>Courses</span>
                  <span>Faculty</span>
                  <span>Admissions</span>
                </span>
              </div>
              <div className="mt-1 h-px bg-[#A8842C]" />
            </div>
            <div className="grid flex-1 grid-cols-[1.4fr_1fr]">
              <div className="flex flex-col justify-center px-5 py-3">
                <p className="font-scholar-display text-[clamp(13px,1.9vw,19px)] leading-snug">
                  Building Strong <em className="text-[#A8842C]">Foundations</em>{" "}
                  for Lifelong Success.
                </p>
                <div className="mt-3 space-y-1.5">
                  {[60, 80, 50].map((w, i) => (
                    <div key={i} className="h-1 bg-[#1F3A2E]/15" style={{ width: `${w}%` }} />
                  ))}
                </div>
                <span className="mt-3 w-fit rounded-sm bg-[#1F3A2E] px-2.5 py-1 text-[8px] font-semibold text-[#FBF8F1]">
                  Enquire Now
                </span>
              </div>
              <div className="relative m-3 ml-0 overflow-hidden border border-[#A8842C]/40">
                <Image
                  src="/images/scholar-house/hero-teacher.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      );

    case "pulse-prep":
      return (
        <div className="font-pulse-body relative aspect-[16/10] overflow-hidden bg-white text-[#0A1B4D]">
          <div className="absolute -right-6 -top-6 h-20 w-20 rotate-12 rounded-2xl bg-[#D8FF3E]" />
          <div className="absolute right-8 top-10 h-10 w-10 rounded-full border-4 border-[#2447F0]" />
          <div className="relative flex h-full flex-col gap-3 p-5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black tracking-tight">
                PULSE<span className="text-[#2447F0]">PREP</span>
              </span>
              <span className="rounded-full bg-[#2447F0] px-2.5 py-1 text-[8px] font-bold text-white">
                Free Mock Test
              </span>
            </div>
            <div className="grid grid-cols-[1.3fr_1fr] gap-3">
              <div>
                <p className="text-[clamp(15px,2.4vw,24px)] font-black uppercase leading-[0.95] tracking-tight">
                  Prepare
                  <br />
                  Smarter.
                  <br />
                  <span className="bg-[#2447F0] px-1 text-white">Compete</span>
                  <br />
                  Stronger.
                </p>
              </div>
              <div className="flex flex-col justify-end gap-1.5">
                <div className="rounded-lg bg-[#F2F5FF] p-2">
                  <div className="flex items-center justify-between text-[7px] font-semibold">
                    <span>Rank Predictor</span>
                    <span className="text-[#2447F0]">↑ 18%</span>
                  </div>
                  <div className="mt-1 h-1 rounded bg-[#2447F0]/20">
                    <div className="h-1 w-3/4 rounded bg-[#2447F0]" />
                  </div>
                </div>
                <div className="rounded-lg bg-[#0A1B4D] p-2 text-[7px] text-white">
                  7-day sprint plan →
                </div>
              </div>
            </div>
            <div className="mt-auto grid grid-cols-3 gap-1.5 border-t-2 border-[#0A1B4D] pt-2 text-[7px] font-bold">
              <span>240 Tests</span>
              <span>Daily DPP</span>
              <span className="text-[#2447F0]">Live Analysis</span>
            </div>
          </div>
        </div>
      );

    case "northstar":
      return (
        <div className="font-northstar-body relative aspect-[16/10] overflow-hidden bg-[#F7F4EF] text-[#26241F]">
          <div className="flex h-full flex-col p-5">
            <div className="flex items-center justify-between border-b border-[#26241F]/20 pb-2">
              <span className="text-[9px] uppercase tracking-[0.3em]">
                Northstar Institute
              </span>
              <span className="text-[8px] text-[#9C4F36]">Est. Mentorship</span>
            </div>
            <div className="grid flex-1 grid-cols-[1fr_1.2fr] gap-4 pt-4">
              <div className="flex flex-col justify-center">
                <span className="text-[7px] uppercase tracking-[0.25em] text-[#9C4F36]">
                  Prospectus 01
                </span>
                <p className="mt-2 font-northstar-display text-[clamp(13px,1.9vw,19px)] leading-tight">
                  Clarity of Purpose.{" "}
                  <span className="italic text-[#9C4F36]">Confidence</span> in
                  Preparation.
                </p>
                <span className="mt-3 w-fit border-b border-[#26241F] pb-0.5 text-[8px] uppercase tracking-widest">
                  Read the roadmap
                </span>
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src="/images/northstar/hero-desk.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-cover grayscale-[0.35]"
                />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-3 border-t border-[#26241F]/20 pt-2 text-[7px] uppercase tracking-widest text-[#6E6A62]">
              <span>UPSC</span>
              <span className="h-2 w-px bg-[#26241F]/30" />
              <span>SSC</span>
              <span className="h-2 w-px bg-[#26241F]/30" />
              <span>Banking</span>
            </div>
          </div>
        </div>
      );

    case "quantum":
      return (
        <div className="font-quantum-body relative aspect-[16/10] overflow-hidden bg-[#050A18] text-[#EAF2FF]">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
          <svg
            viewBox="0 0 200 120"
            className="absolute -right-4 -top-4 h-32 w-40 text-[#22D3EE]/40"
            aria-hidden
          >
            <ellipse cx="100" cy="60" rx="70" ry="26" fill="none" stroke="currentColor" strokeWidth="0.6" />
            <ellipse cx="100" cy="60" rx="70" ry="26" fill="none" stroke="currentColor" strokeWidth="0.6" transform="rotate(60 100 60)" />
            <circle cx="100" cy="60" r="4" fill="currentColor" />
          </svg>
          <div className="relative flex h-full flex-col justify-between p-5">
            <div className="flex items-center justify-between">
              <span className="font-quantum-mono text-[10px] tracking-[0.25em] text-[#22D3EE]">
                QUANTUM_
              </span>
              <span className="hidden rounded border border-[#22D3EE]/40 px-2 py-0.5 font-quantum-mono text-[7px] text-[#22D3EE] sm:inline">
                STEM · JEE · CODE
              </span>
            </div>
            <div>
              <p className="font-quantum-display text-[clamp(14px,2.1vw,21px)] font-semibold leading-tight">
                Master the Concepts.
                <br />
                <span className="text-[#22D3EE]">Understand</span> the
                Possibilities.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="rounded-sm bg-[#22D3EE] px-3 py-1 text-[9px] font-bold text-[#050A18]">
                  Start Diagnostic
                </span>
                <span className="font-quantum-mono text-[8px] text-[#7C93B8]">
                  v2.6 syllabus map
                </span>
              </div>
            </div>
            <div className="flex gap-4 border-t border-white/10 pt-2 font-quantum-mono text-[8px] text-[#7C93B8]">
              <span>Δ concept graph</span>
              <span>live doubt labs</span>
            </div>
          </div>
        </div>
      );

    case "bloom":
      return (
        <div className="font-bloom-body relative aspect-[16/10] overflow-hidden bg-[#FBF7F2] text-[#3B3358]">
          <div className="absolute -left-8 -top-10 h-28 w-32 rounded-[45%] bg-[#E8836F]/25" />
          <div className="absolute -bottom-12 -right-6 h-32 w-36 rounded-[50%] bg-[#F5C86B]/30" />
          <div className="relative flex h-full flex-col gap-3 p-5">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[11px] font-bold">
                <span className="inline-block h-3.5 w-3.5 rounded-full bg-[#E8836F]" />
                Bloom
              </span>
              <span className="rounded-full bg-[#3B3358] px-2.5 py-1 text-[8px] font-semibold text-white">
                Book a visit
              </span>
            </div>
            <div className="grid flex-1 grid-cols-[1.3fr_1fr] items-center gap-3">
              <div>
                <p className="font-bloom-display text-[clamp(13px,1.9vw,19px)] font-semibold leading-tight">
                  Every student has the{" "}
                  <span className="text-[#E8836F]">potential to shine.</span>
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {["Classes 5–10", "Olympiad"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#3B3358]/15 bg-white px-2 py-0.5 text-[7px] shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src="/images/bloom/hero-kids.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1.5 text-[7px]">
              {[
                ["Warm", "mentors"],
                ["Small", "batches"],
                ["Happy", "parents"],
              ].map(([a, b]) => (
                <div key={a} className="rounded-xl bg-white px-2 py-1.5 shadow-sm">
                  <span className="font-bold text-[#E8836F]">{a}</span> {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case "tm-sons":
      return (
        <div className="font-tmsons-body relative aspect-[16/10] overflow-hidden bg-[#FAF7F2] text-[#1C1A17]">
          <div className="flex h-full flex-col p-5">
            <div className="flex items-center justify-between border-b border-[#1C1A17]/15 pb-2">
              <span className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="h-3.5 w-3.5 rounded-full border-2 border-[#B23B2E]"
                />
                <span className="font-tmsons-display text-[10px] tracking-[0.3em] text-[#1C1A17] uppercase">
                  TM SONS
                </span>
              </span>
              <span className="text-[7px] tracking-[0.2em] text-[#6F6A61] uppercase">
                Wholesale
              </span>
            </div>

            <div className="grid flex-1 grid-cols-[1.25fr_1fr] gap-3 pt-3">
              <div className="flex flex-col justify-center">
                <span className="text-[7px] tracking-[0.28em] text-[#B23B2E] uppercase">
                  Ludhiana
                </span>
                <p className="font-tmsons-display mt-2 text-[clamp(12px,1.75vw,18px)] leading-[1.15]">
                  Women&rsquo;s Fashion, Curated for{" "}
                  <em className="text-[#B23B2E]">Every Collection.</em>
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="bg-[#1C1A17] px-2.5 py-1 text-[7px] tracking-[0.16em] text-[#FAF7F2] uppercase">
                    Explore
                  </span>
                  <span className="border border-[#1C1A17]/30 px-2.5 py-1 text-[7px] tracking-[0.16em] text-[#1C1A17] uppercase">
                    Wholesale
                  </span>
                </div>
              </div>
              <div className="relative overflow-hidden border border-[#1C1A17]/12">
                <Image
                  src="/images/tm-sons/products/premium-cardigan.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-3 grid grid-cols-4 gap-1.5 border-t border-[#1C1A17]/15 pt-2 text-[7px] tracking-[0.1em] text-[#6F6A61] uppercase">
              <span>Cardigans</span>
              <span>Co-ords</span>
              <span>Farshi</span>
              <span className="text-[#B23B2E]">Quote req.</span>
            </div>
          </div>
        </div>
      );

    case "sy-collections":
      return (
        <div className="font-sy-body relative aspect-[16/10] overflow-hidden bg-[#FBF6F2] text-[#2C1F26]">
          <div className="flex h-full">
            <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
              <span className="text-[7.5px] tracking-[0.3em] text-[#A63D57] uppercase">
                Everyday Style. Thoughtfully Priced.
              </span>
              <div>
                <p className="font-sy-display text-[clamp(13px,2vw,21px)] leading-[1.06]">
                  Everyday Elegance,
                  <br />
                  <em className="text-[#A63D57] italic">Made Yours.</em>
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-[#2C1F26] px-2.5 py-1 text-[7px] tracking-[0.16em] text-[#FBF6F2] uppercase">
                    Shop the collection
                  </span>
                  <span className="rounded-full border border-[#DCCFC9] px-2.5 py-1 text-[7px] tracking-[0.16em] text-[#4B2C3B] uppercase">
                    Kurti sets
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5 border-t border-[#EADFDB] pt-2 text-[6.5px] tracking-[0.12em] text-[#8B7B81] uppercase">
                <span>Kurtis</span>
                <span>Cotton</span>
                <span className="text-[#A63D57]">Sets</span>
              </div>
            </div>

            <div className="relative w-[42%] shrink-0 overflow-hidden">
              <SyImage
                src={syImages.burgundyOnForm}
                alt=""
                aspectClassName="h-full"
                className="h-full"
                loading="eager"
                imgClassName="object-cover"
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#2C1F26]/70 via-transparent to-transparent"
              />
              <span className="absolute inset-x-0 bottom-0 p-2.5 text-[7px] tracking-[0.18em] text-[#FBF6F2] uppercase">
                Kurti-Pant Sets
              </span>
            </div>
          </div>
        </div>
      );

    case "ciel-shop":
      return (
        <div className="font-ciel-body relative aspect-[16/10] overflow-hidden bg-[#0E0E10] text-[#F4F1EC]">
          <Image
            src="/images/cielshop/brand/brand-931905-full.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 90vw, 40vw"
            className="object-cover object-[60%_20%] opacity-60"
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-[#0E0E10] via-[#0E0E10]/80 to-transparent"
          />
          <div className="relative flex h-full flex-col justify-between p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <span className="ciel-wordmark text-[11px] tracking-[0.28em]">
                CIÈL
              </span>
              <span className="text-[7px] tracking-[0.24em] text-[#A9D6E5] uppercase">
                Streetwear
              </span>
            </div>
            <div>
              <p className="font-ciel-display text-[clamp(14px,2.2vw,23px)] leading-[0.98]">
                WHERE THE SKY
                <br />
                <span className="text-[#8A8F96]">KNOWS NO LIMITS.</span>
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                <span className="bg-[#F4F1EC] px-2.5 py-1 text-[7px] tracking-[0.16em] text-[#0E0E10] uppercase">
                  Explore collection
                </span>
                <span className="border border-white/25 px-2.5 py-1 text-[7px] tracking-[0.16em] text-[#F4F1EC]/80 uppercase">
                  New arrivals
                </span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-1.5 border-t border-white/15 pt-2 text-[6.5px] tracking-[0.12em] text-[#8A8F96] uppercase">
              <span>Upper</span>
              <span>Bottom</span>
              <span>Co-ords</span>
              <span className="text-[#A9D6E5]">One of one</span>
            </div>
          </div>
        </div>
      );

    case "khaleezi-designs":
      return (
        <div className="font-khaleezi-body relative aspect-[16/10] overflow-hidden bg-[#F7F2E9] text-[#2A2320]">
          <div className="flex h-full">
            <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
              <span className="khaleezi-eyebrow text-[7px] text-[#2F6D72]">
                Ethnicwear · small to 7XL
              </span>
              <div>
                <p className="font-khaleezi-display text-[clamp(13px,2.1vw,21px)] leading-[1.02]">
                  Ethnicwear, cut for
                  <br />
                  <em className="italic text-[#2F6D72]">every</em> body.
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  <span className="bg-[#2F6D72] px-2.5 py-1 text-[7px] tracking-[0.14em] text-[#FBF8F2] uppercase">
                    Shop collection
                  </span>
                  <span className="border border-[#2A2320]/25 px-2.5 py-1 text-[7px] tracking-[0.14em] text-[#2A2320]/80 uppercase">
                    Size guide
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-1 border-t border-[#E4DCD0] pt-2 text-[6px] tracking-[0.1em] text-[#7A6E67] uppercase">
                <span>Dupatta sets</span>
                <span>Cotton</span>
                <span>Pants</span>
                <span className="text-[#2F6D72]">S – 7XL</span>
              </div>
            </div>

            <div className="relative w-[38%] shrink-0 overflow-hidden border-l border-[#E4DCD0]">
              <div className="khaleezi-weave h-full w-full bg-[linear-gradient(155deg,#EFF2ED_0%,#CFDCD6_100%)]" />
              <span className="absolute inset-x-0 bottom-0 p-2.5 text-[6.5px] tracking-[0.16em] text-[#2F6D72] uppercase">
                Artwork pending
              </span>
            </div>
          </div>
        </div>
      );
  }
}
