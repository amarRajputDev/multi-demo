import { Reveal } from "@/components/shared/reveal";

interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: string;
  lead?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
}: SectionHeadingProps) {
  return (
    <Reveal className="max-w-3xl">
      <p className="font-quantum-mono flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-[#22D3EE]">
        {index ? (
          <span aria-hidden className="text-[#7C93B8]">
            {index}
          </span>
        ) : null}
        <span>{eyebrow}</span>
        <span aria-hidden className="h-px flex-1 bg-[#22D3EE]/25" />
      </p>
      <h2 className="font-quantum-display mt-5 text-[clamp(1.7rem,3.2vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.015em] text-[#EAF2FF] [text-wrap:balance]">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#7C93B8] sm:text-lg">
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
