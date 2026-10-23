import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sprout } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { Journey } from "../sections/journey";
import { Trust } from "../sections/trust";
import { bloomValues } from "../data";
import { FlowerMark } from "../components/illustrations";

export default function BloomAboutPage() {
  return (
    <>
      <section aria-labelledby="about-hero" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 -right-20 h-60 w-60 rounded-[58%_42%_50%_50%/48%_55%_45%_52%] bg-[#F5C86B]/25"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-16 h-52 w-52 rounded-[45%_55%_55%_45%/55%_45%_50%_50%] bg-[#F3EDF8]"
        />
        <div className="relative mx-auto max-w-[1200px] px-4 pt-14 pb-12 sm:px-6 lg:px-8">
          <Reveal y={14}>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#E8836F]/12 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#B34832] uppercase">
              <FlowerMark className="h-4 w-4 text-[#E8836F]" />
              About Bloom
            </p>
            <h1
              id="about-hero"
              className="mt-4 max-w-3xl font-bloom-display text-[clamp(2.1rem,5vw,3.25rem)] leading-[1.1] font-semibold tracking-tight text-[#3B3358]"
            >
              A neighbourhood learning home where{" "}
              <span className="text-[#C2503A]">children bloom</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5F5878] sm:text-lg">
              Bloom Learning was founded on one simple belief: young students
              flourish when teaching is warm, personal, and genuinely joyful.
              Years later, that belief still shapes every batch, every
              timetable, and every conversation with a family.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="about-story"
        className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-16">
          <Reveal y={16}>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#F5C86B]/25 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#3B3358] uppercase">
              <Sprout aria-hidden className="h-3.5 w-3.5 text-[#E8836F]" />
              Our Story
            </p>
            <h2
              id="about-story"
              className="mt-4 font-bloom-display text-[clamp(1.75rem,4vw,2.5rem)] leading-tight font-semibold tracking-tight text-[#3B3358]"
            >
              Grown gently, from one small batch
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[#5F5878]">
              Bloom began with a single batch of eleven children, a borrowed
              room, and a promise to their parents: every child would be known
              by name, and no child would be rushed. That promise still holds.
              We have grown into a full foundation and school-coaching centre,
              but batches remain small, mentors remain stable, and the reading
              corner remains the happiest nook in the building.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5F5878]">
              We teach Classes 5 to 10 across Maths, Science and English,
              alongside a weekend Olympiad circle and a Reading &amp; Reasoning
              Lab for curious minds that want to stretch further. What we do
              not do is chase volume. Growth, for us, has always been a
              by-product of teaching well and caring deeply. (This is
              illustrative demo copy for a design demonstration.)
            </p>
          </Reveal>
          <RevealImage delay={0.1}>
            <figure>
              <Image
                src="/images/bloom/learning.jpg"
                alt="A Bloom Learning mentor sitting beside a student, working through a problem together"
                width={1400}
                height={933}
                sizes="(max-width: 1024px) 100vw, 400px"
                className="h-auto w-full rounded-[26px] object-cover shadow-[0_8px_28px_rgba(59,51,88,0.1)]"
              />
              <figcaption className="mt-3 text-xs text-[#7A7295] italic">
                Side by side — how the best learning happens here.
              </figcaption>
            </figure>
          </RevealImage>
        </div>
      </section>

      <Trust />

      <section
        aria-labelledby="about-values"
        className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8"
      >
        <Reveal y={16}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#F3EDF8] px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#3B3358] uppercase">
              Our Values
            </p>
            <h2
              id="about-values"
              className="mt-4 font-bloom-display text-[clamp(1.75rem,4vw,2.5rem)] leading-tight font-semibold tracking-tight text-[#3B3358]"
            >
              What we hold to, every day
            </h2>
          </div>
        </Reveal>
        <dl className="mt-10 grid gap-5 sm:grid-cols-2">
          {bloomValues.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.06} y={18}>
              <div className="h-full rounded-[24px] border border-[#3B3358]/8 bg-white p-6 shadow-[0_2px_14px_rgba(59,51,88,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(59,51,88,0.1)]">
                <dt className="font-bloom-display text-xl font-semibold text-[#3B3358]">
                  {value.title}
                </dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-[#5F5878]">
                  {value.description}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
        <Reveal y={14}>
          <div className="mt-12 text-center">
            <Link
              href="/demos/bloom/contact"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-[#C2503A] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(194,80,58,0.3)] transition-all duration-200 hover:scale-[1.03] hover:bg-[#A8402D] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#3B3358] focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Visit our learning home
              <ArrowRight
                aria-hidden
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </section>

      <Journey />
    </>
  );
}
