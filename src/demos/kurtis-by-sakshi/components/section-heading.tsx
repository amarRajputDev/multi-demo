interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  blurb?: string;
  align?: "center" | "left";
}

/** Shared section heading with ornamental eyebrow. */
export function SectionHeading({
  eyebrow,
  title,
  blurb,
  align = "center",
}: SectionHeadingProps) {
  return (
    <header className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="sakshi-eyebrow text-[10px] text-[#8E3B47]">{eyebrow}</p>
      <h2 className="font-sakshi-display mt-3 text-[clamp(1.9rem,3.6vw,2.8rem)] leading-tight text-[#3B1F24]">
        {title}
      </h2>
      {blurb ? (
        <p className="mt-4 text-[15px] leading-relaxed text-[#7A6461]">
          {blurb}
        </p>
      ) : null}
    </header>
  );
}
