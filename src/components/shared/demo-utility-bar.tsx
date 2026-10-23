import Link from "next/link";
import { LayoutGrid, ArrowLeft } from "lucide-react";
import { DEMOS, type DemoSlug } from "@/lib/registry";
import { cn } from "@/lib/utils";

interface DemoUtilityBarProps {
  current: DemoSlug;
  className?: string;
  /** Visual tone so the bar can sit on dark or light demo shells. */
  tone?: "dark" | "light";
}

/**
 * Discreet per-demo utility bar: returns visitors to the showcase and offers
 * prev/next concept navigation without competing with the demo's own brand.
 */
export function DemoUtilityBar({
  current,
  className,
  tone = "light",
}: DemoUtilityBarProps) {
  const index = DEMOS.findIndex((d) => d.slug === current);
  const prev = DEMOS[(index - 1 + DEMOS.length) % DEMOS.length];
  const next = DEMOS[(index + 1) % DEMOS.length];

  return (
    <div
      className={cn(
        "border-b text-[11px] tracking-wide",
        tone === "dark"
          ? "border-white/10 bg-black/30 text-white/70 backdrop-blur-sm"
          : "border-black/5 bg-black/[0.03] text-black/60",
        className,
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4 py-1.5 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-current"
        >
          <LayoutGrid aria-hidden className="h-3 w-3" />
          All concepts
        </Link>
        <span className="hidden truncate opacity-80 sm:inline">
          Live design demo · {DEMOS[index]?.name}
        </span>
        <span className="flex items-center gap-3">
          <Link
            href={prev.path}
            className="inline-flex items-center gap-1 transition-opacity hover:opacity-70"
          >
            <ArrowLeft aria-hidden className="h-3 w-3" />
            {prev.shortName}
          </Link>
          <span aria-hidden className="opacity-40">
            ·
          </span>
          <Link
            href={next.path}
            className="transition-opacity hover:opacity-70"
          >
            {next.shortName} →
          </Link>
        </span>
      </div>
    </div>
  );
}
