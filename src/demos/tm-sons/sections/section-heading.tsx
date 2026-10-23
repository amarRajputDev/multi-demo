import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  /** Renders the thin red rule above the eyebrow. */
  rule?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
  rule = true,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {rule && (
        <div
          aria-hidden
          className={cn(
            "mb-5 h-px w-12 bg-[#B23B2E]",
            centered && "mx-auto",
          )}
        />
      )}
      <p
        className={cn(
          "text-[10px] tracking-[0.32em] text-[#B23B2E] uppercase",
          centered && "text-center",
        )}
      >
        {eyebrow}
      </p>
      <h2 className="font-tmsons-display mt-4 text-[clamp(1.85rem,3.6vw,3rem)] leading-[1.06] tracking-[-0.01em] text-[#1C1A17]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-[15px] leading-relaxed text-[#6F6A61] sm:text-base">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
