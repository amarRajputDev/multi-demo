import { PetalMotif } from "./icons";

/**
 * Text wordmark lock-up. The demo deliberately uses no logo image: the only
 * candidate asset could not be confirmed as @kurtis_by_sakshi's (see
 * ../images.ts), so the brand name is set in the brand serif instead.
 */
export function SakshiWordmark({
  size = "md",
  className,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const scales = {
    sm: { name: "text-lg", sub: "text-[8px]", icon: "h-3 w-3", gap: "gap-1" },
    md: { name: "text-2xl", sub: "text-[9px]", icon: "h-3.5 w-3.5", gap: "gap-1.5" },
    lg: { name: "text-4xl sm:text-5xl", sub: "text-[10px]", icon: "h-4 w-4", gap: "gap-2" },
  } as const;
  const scale = scales[size];

  return (
    <span
      className={`inline-flex flex-col items-center leading-none ${scale.gap} ${className ?? ""}`}
    >
      <span
        className={`font-sakshi-display ${scale.name} tracking-[0.06em] text-[#3B1F24]`}
      >
        Kurtis{" "}
        <span className="italic text-[#8E3B47]">by</span> Sakshi
      </span>
      <span
        className={`font-sakshi-body ${scale.sub} sakshi-eyebrow inline-flex items-center gap-1 text-[#7A6461]`}
      >
        <PetalMotif className={scale.icon} />
        Enquire to order
        <PetalMotif className={scale.icon} />
      </span>
    </span>
  );
}
