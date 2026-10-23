"use client";

import { useMemo, useState } from "react";
import { Check, Loader2, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, cn } from "@/lib/utils";

export interface EnquiryFormProps {
  /** Display name of the coaching brand (used in the WhatsApp message). */
  brandName: string;
  /** Course labels offered by this demo. */
  courses: string[];
  /** WhatsApp number in digits with country code, e.g. "919000000000". */
  whatsappNumber: string;
  className?: string;
  /** Override any of the internal pieces to match the demo's design system. */
  fieldClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
  noteClassName?: string;
  successClassName?: string;
  heading?: string;
  subheading?: string;
}

interface FormErrors {
  name?: string;
  className?: string;
  course?: string;
  phone?: string;
}

const DEFAULT_INPUT =
  "w-full rounded-none border px-4 py-3 text-sm outline-none transition-colors duration-200 bg-transparent";

/**
 * Demo-only enquiry form.
 *
 * - Validates on submit, then per-field on change after first submit attempt.
 * - Never sends data to a server. On success it clearly states the enquiry is
 *   a demo and offers a prefilled WhatsApp message the visitor can send.
 */
export function EnquiryForm({
  brandName,
  courses,
  whatsappNumber,
  className,
  fieldClassName,
  labelClassName,
  inputClassName,
  buttonClassName,
  noteClassName,
  successClassName,
  heading = "Request a callback",
  subheading = "Tell us about the student and our counsellor will call you back.",
}: EnquiryFormProps) {
  const [values, setValues] = useState({
    name: "",
    className: "",
    course: courses[0] ?? "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  const whatsappUrl = useMemo(
    () =>
      buildWhatsAppUrl({
        number: whatsappNumber,
        brandName,
        name: values.name.trim(),
        className: values.className.trim(),
        course: values.course,
        phone: values.phone.trim(),
        message: values.message,
      }),
    [brandName, values, whatsappNumber],
  );

  function validate(next: typeof values): FormErrors {
    const nextErrors: FormErrors = {};
    if (next.name.trim().length < 2) {
      nextErrors.name = "Please enter the student's full name.";
    }
    if (!next.className.trim()) {
      nextErrors.className = "Please enter the class or exam target.";
    }
    if (!next.course) {
      nextErrors.course = "Please choose a course.";
    }
    const digits = next.phone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 15) {
      nextErrors.phone = "Enter a valid phone number (10–15 digits).";
    }
    return nextErrors;
  }

  function update<K extends keyof typeof values>(key: K, value: string) {
    const next = { ...values, [key]: value };
    setValues(next);
    if (submitAttempted) {
      setErrors(validate(next));
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = document.querySelector<HTMLElement>(
        "[aria-invalid='true']",
      );
      firstInvalid?.focus();
      return;
    }
    setStatus("submitting");
    // Demo only: no network request, no storage. Simulate a short delay.
    window.setTimeout(() => setStatus("done"), 700);
  }

  const errorText = (key: keyof FormErrors) =>
    submitAttempted && errors[key] ? errors[key] : undefined;

  const invalid = (key: keyof FormErrors) => Boolean(errorText(key));

  return (
    <div className={className}>
      <h3 className="text-2xl font-semibold tracking-tight">{heading}</h3>
      {subheading ? (
        <p className={cn("mt-2 text-sm opacity-80", noteClassName)}>
          {subheading}
        </p>
      ) : null}

      {status === "done" ? (
        <div
          role="status"
          className={cn(
            "mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5",
            successClassName,
          )}
        >
          <p className="flex items-center gap-2 text-sm font-semibold">
            <Check aria-hidden className="h-4 w-4" /> Enquiry ready (demo
            only).
          </p>
          <p className="mt-2 text-sm opacity-80">
            This is a demonstration site, so nothing was stored or sent. You
            can still continue the conversation on WhatsApp — the message is
            prefilled with the details you entered.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]",
              buttonClassName,
            )}
          >
            <MessageCircle aria-hidden className="h-4 w-4" />
            Continue on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setSubmitAttempted(false);
              setValues({
                name: "",
                className: "",
                course: courses[0] ?? "",
                phone: "",
                message: "",
              });
            }}
            className="mt-3 block text-xs underline underline-offset-4 opacity-70 hover:opacity-100"
          >
            Send another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
          <div className={fieldClassName}>
            <label
              htmlFor="enquiry-name"
              className={cn("block text-xs font-medium uppercase tracking-wider", labelClassName)}
            >
              Student name
            </label>
            <input
              id="enquiry-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
              aria-invalid={invalid("name")}
              aria-describedby={errorText("name") ? "enquiry-name-error" : undefined}
              className={cn(
                DEFAULT_INPUT,
                errorText("name") ? "border-red-500" : "border-current/25",
                inputClassName,
              )}
              placeholder="e.g. Aarav Sharma"
            />
            {errorText("name") && (
              <p id="enquiry-name-error" className="mt-1 text-xs text-red-500" role="alert">
                {errorText("name")}
              </p>
            )}
          </div>

          <div className={fieldClassName}>
            <label
              htmlFor="enquiry-class"
              className={cn("block text-xs font-medium uppercase tracking-wider", labelClassName)}
            >
              Class / exam target
            </label>
            <input
              id="enquiry-class"
              name="className"
              type="text"
              required
              value={values.className}
              onChange={(e) => update("className", e.target.value)}
              aria-invalid={invalid("className")}
              aria-describedby={errorText("className") ? "enquiry-class-error" : undefined}
              className={cn(
                DEFAULT_INPUT,
                errorText("className") ? "border-red-500" : "border-current/25",
                inputClassName,
              )}
              placeholder="e.g. Class 11 · JEE 2027"
            />
            {errorText("className") && (
              <p id="enquiry-class-error" className="mt-1 text-xs text-red-500" role="alert">
                {errorText("className")}
              </p>
            )}
          </div>

          <div className={fieldClassName}>
            <label
              htmlFor="enquiry-course"
              className={cn("block text-xs font-medium uppercase tracking-wider", labelClassName)}
            >
              Course of interest
            </label>
            <select
              id="enquiry-course"
              name="course"
              value={values.course}
              onChange={(e) => update("course", e.target.value)}
              aria-invalid={invalid("course")}
              className={cn(
                DEFAULT_INPUT,
                errorText("course") ? "border-red-500" : "border-current/25",
                inputClassName,
              )}
            >
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          <div className={fieldClassName}>
            <label
              htmlFor="enquiry-phone"
              className={cn("block text-xs font-medium uppercase tracking-wider", labelClassName)}
            >
              Phone number
            </label>
            <input
              id="enquiry-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
              aria-invalid={invalid("phone")}
              aria-describedby={errorText("phone") ? "enquiry-phone-error" : undefined}
              className={cn(
                DEFAULT_INPUT,
                errorText("phone") ? "border-red-500" : "border-current/25",
                inputClassName,
              )}
              placeholder="e.g. 98765 43210"
            />
            {errorText("phone") && (
              <p id="enquiry-phone-error" className="mt-1 text-xs text-red-500" role="alert">
                {errorText("phone")}
              </p>
            )}
          </div>

          <div className={fieldClassName}>
            <label
              htmlFor="enquiry-message"
              className={cn("block text-xs font-medium uppercase tracking-wider", labelClassName)}
            >
              Message <span className="opacity-60">(optional)</span>
            </label>
            <textarea
              id="enquiry-message"
              name="message"
              rows={3}
              value={values.message}
              onChange={(e) => update("message", e.target.value)}
              className={cn(
                DEFAULT_INPUT,
                "border-current/25 resize-y",
                inputClassName,
              )}
              placeholder="Anything specific you'd like to know?"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className={cn(
              "inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60",
              buttonClassName,
            )}
          >
            {status === "submitting" ? (
              <>
                <Loader2 aria-hidden className="h-4 w-4 animate-spin" />
                Preparing…
              </>
            ) : (
              "Submit enquiry"
            )}
          </button>
          <p className={cn("text-[11px] opacity-60", noteClassName)}>
            Demo form — your details stay in your browser and are never
            uploaded. Submitting prepares a WhatsApp message you can send
            yourself.
          </p>
        </form>
      )}
    </div>
  );
}
