import { notFound } from "next/navigation";

/**
 * Catch-all for unknown demo slugs. Known demos (aurora, scholar-house, …)
 * are static folders that take precedence over this dynamic segment, so
 * anything reaching here is a 404.
 */
export default function UnknownDemo() {
  notFound();
}
