"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Animation delay in seconds */
  delay?: number;
  /** Initial vertical offset in px */
  y?: number;
  /** Initial horizontal offset in px */
  x?: number;
  /** Duration in seconds */
  duration?: number;
  /** Viewport margin for triggering (Motion format, e.g. "-10% 0px") */
  margin?: string;
  once?: boolean;
}

/**
 * Scroll-reveal wrapper. Respects prefers-reduced-motion (renders statically).
 * Animates opacity + transform only.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  x = 0,
  duration = 0.7,
  margin = "-12% 0px",
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

interface RevealImageProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

/**
 * Masked image reveal — children slide up behind an overflow-hidden frame.
 */
export function RevealImage({
  children,
  className,
  delay = 0,
  duration = 0.9,
}: RevealImageProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        whileInView={{ clipPath: "inset(0% 0 0 0)" }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration, delay, ease: [0.65, 0, 0.35, 1] }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
