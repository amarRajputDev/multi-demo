"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  /** Total travel in px across the scroll range. */
  distance?: number;
}

/**
 * Cheap transform-based parallax. Only runs on large viewports and is fully
 * disabled for prefers-reduced-motion; renders a static container otherwise.
 */
export function Parallax({ children, className, distance = 20 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    function update() {
      setEnabled(query.matches && !reduce);
    }
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, [reduce]);

  if (!enabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
