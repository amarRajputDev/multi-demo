import { cn } from "@/lib/utils";

interface GridBackdropProps {
  className?: string;
  /** Tailwind opacity utility for the grid lines. */
  lineOpacity?: string;
  gridSize?: string;
  /** Fade the grid out towards the bottom instead of the top. */
  fadeFrom?: "top" | "bottom" | "none";
}

/**
 * Static fine-grid backdrop (CSS-only, no animation). White ~4–5% lines on the
 * midnight shell, optionally masked so the grid fades rather than ending hard.
 */
export function GridBackdrop({
  className,
  lineOpacity = "0.045",
  gridSize = "56px",
  fadeFrom = "top",
}: GridBackdropProps) {
  const mask =
    fadeFrom === "none"
      ? undefined
      : fadeFrom === "top"
        ? "radial-gradient(ellipse 95% 75% at 50% 0%, black 30%, transparent 80%)"
        : "radial-gradient(ellipse 95% 75% at 50% 100%, black 30%, transparent 80%)";

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: `linear-gradient(rgba(234, 242, 255, ${lineOpacity}) 1px, transparent 1px), linear-gradient(90deg, rgba(234, 242, 255, ${lineOpacity}) 1px, transparent 1px)`,
        backgroundSize: `${gridSize} ${gridSize}`,
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    />
  );
}
