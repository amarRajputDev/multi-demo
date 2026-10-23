import Image from "next/image";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { scholarWhy } from "../data";

export function Method() {
  return (
    <section
      aria-labelledby="method-heading"
      className="border-y border-[#1F3A2E]/12 bg-[#F5EFE1]"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-16">
          <RevealImage className="lg:sticky lg:top-24 lg:self-start">
            <figure>
              <Image
                src="/images/scholar-house/library.jpg"
                alt="The Scholar House library and reading room lined with bookshelves"
                width={1400}
                height={933}
                sizes="(max-width: 1024px) 100vw, 420px"
                className="h-auto w-full object-cover"
              />
              <figcaption className="mt-3 text-xs text-[#5C6B60] italic">
                The reading room — open to every enrolled student, every day.
              </figcaption>
            </figure>
          </RevealImage>

          <div>
            <Reveal y={16}>
              <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#A8842C] uppercase">
                <span aria-hidden className="h-px w-8 bg-[#A8842C]" />
                Why Scholar House
              </p>
              <h2
                id="method-heading"
                className="mt-4 font-scholar-display text-4xl leading-tight font-medium tracking-tight text-[#1F3A2E] sm:text-5xl"
              >
                The principles we
                <br className="hidden sm:block" /> will not compromise
              </h2>
            </Reveal>

            <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {scholarWhy.map((point, index) => (
                <Reveal key={point.title} delay={index * 0.07} y={18}>
                  <div>
                    <dt className="font-scholar-display text-xl font-medium text-[#1F3A2E]">
                      {point.title}
                    </dt>
                    <div aria-hidden className="mt-2 h-px w-6 bg-[#A8842C]" />
                    <dd className="mt-3 text-[15px] leading-relaxed text-[#5C6B60]">
                      {point.description}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
