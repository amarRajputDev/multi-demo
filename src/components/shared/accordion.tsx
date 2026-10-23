"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  /** Class for each row wrapper */
  itemClassName?: string;
  /** Class applied to the question button */
  buttonClassName?: string;
  /** Class applied to the answer panel */
  answerClassName?: string;
  /** Icon/indicator element rendered on the right of each question */
  renderIndicator?: (open: boolean) => React.ReactNode;
  defaultOpenIndex?: number;
}

/**
 * Accessible single-open FAQ accordion.
 */
export function Accordion({
  items,
  className,
  itemClassName,
  buttonClassName,
  answerClassName,
  renderIndicator,
  defaultOpenIndex = -1,
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);
  const baseId = useId();
  const reduce = useReducedMotion();

  return (
    <div className={className}>
      {items.map((item, index) => {
        const open = openIndex === index;
        const buttonId = `${baseId}-btn-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question} className={itemClassName}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : index)}
                className={cn(
                  "flex w-full items-start justify-between gap-4 text-left",
                  buttonClassName,
                )}
              >
                <span>{item.question}</span>
                {renderIndicator ? (
                  renderIndicator(open)
                ) : (
                  <span
                    aria-hidden
                    className="mt-1 shrink-0 transition-transform duration-300"
                    style={{ transform: open ? "rotate(45deg)" : undefined }}
                  >
                    +
                  </span>
                )}
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className={answerClassName}>{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
