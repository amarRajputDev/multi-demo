/** Minimal class-name joiner (no external dependency). */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/**
 * Build a wa.me deep link from enquiry form data.
 * `number` must be digits only, including country code (e.g. 919876543210).
 * Demo-only: nothing is transmitted anywhere except WhatsApp itself when the
 * visitor chooses to continue.
 */
export function buildWhatsAppUrl(input: {
  number: string;
  brandName: string;
  name: string;
  className: string;
  course: string;
  phone: string;
  message?: string;
}): string {
  const digits = input.number.replace(/\D/g, "");
  const lines = [
    `Hi ${input.brandName}! I'd like to enquire about admissions.`,
    ``,
    `Name: ${input.name}`,
    `Class / Exam: ${input.className}`,
    `Course of interest: ${input.course}`,
    `Phone: ${input.phone}`,
  ];
  if (input.message?.trim()) {
    lines.push(``, `Message: ${input.message.trim()}`);
  }
  return `https://wa.me/${digits}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/** Placeholder demo phone — clearly not a real number. */
export const DEMO_PHONE_DISPLAY = "+91 90000 00000";
export const DEMO_PHONE_DIGITS = "919000000000";
export const DEMO_EMAIL = "hello@example.com";
