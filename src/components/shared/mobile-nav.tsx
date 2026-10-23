"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface MobileNavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  links: MobileNavLink[];
  /** Rendered inside the sheet, e.g. the demo's CTA button. */
  cta?: React.ReactNode;
  className?: string;
  panelClassName?: string;
  linkClassName?: string;
  /** Accessible name for the dialog. */
  label?: string;
}

/**
 * Accessible slide-in mobile menu used (with per-demo styling) by every demo.
 * Closes on navigation, Escape, and backdrop click; locks background scroll.
 */
export function MobileNav({
  open,
  onClose,
  links,
  cta,
  className,
  panelClassName,
  linkClassName,
  label = "Mobile navigation",
}: MobileNavProps) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onCloseRef.current();
    }
    document.addEventListener("keydown", onKey);
    // Move focus into the panel for keyboard users.
    const first = panelRef.current?.querySelector<HTMLElement>(
      "a, button, [tabindex]:not([tabindex='-1'])",
    );
    first?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close automatically when the route changes.
  const pathnameRef = useRef(pathname);
  useEffect(() => {
    if (pathnameRef.current !== pathname) {
      pathnameRef.current = pathname;
      if (open) onCloseRef.current();
    }
  }, [pathname, open]);

  return (
    <AnimatePresence>
      {open && (
        <div className={cn("fixed inset-0 z-[90]", className)}>
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={label}
            initial={reduce ? { opacity: 0 } : { x: "100%" }}
            animate={reduce ? { opacity: 1 } : { x: 0 }}
            exit={reduce ? { opacity: 0 } : { x: "100%" }}
            transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
            className={cn(
              "absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col overflow-y-auto p-6 pt-20",
              panelClassName,
            )}
          >
            <nav aria-label={label} className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base transition-colors",
                    pathname === link.href ? "opacity-100" : "opacity-80",
                    linkClassName,
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            {cta ? <div className="mt-6">{cta}</div> : null}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
