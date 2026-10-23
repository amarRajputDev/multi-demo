"use cache";

/**
 * Year for copyright lines. Cached because `new Date()` is an unstable value
 * during static prerendering (Cache Components requires cached or dynamic
 * access instead).
 */
export async function siteYear(): Promise<number> {
  return new Date().getFullYear();
}
