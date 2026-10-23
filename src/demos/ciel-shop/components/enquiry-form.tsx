"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const inputClass =
  "w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-[#F4F1EC] placeholder:text-[#8A8F96]/60 transition-colors focus:border-[#A9D6E5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9D6E5]";

/**
 * Demonstration enquiry form.
 *
 * Nothing is transmitted or stored: on submit the visitor sees an explicit
 * demo confirmation and the details are only kept in local component state.
 */
export function CielEnquiryForm({
  subject = "Made-to-order enquiry",
  pieceOptions,
  className,
}: {
  subject?: string;
  pieceOptions?: string[];
  className?: string;
}) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    piece: pieceOptions?.[0] ?? "Made to order",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [attempted, setAttempted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validate(next: typeof values): Errors {
    const nextErrors: Errors = {};
    if (next.name.trim().length < 2) nextErrors.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email.trim())) {
      nextErrors.email = "Please add a valid email address.";
    }
    if (next.message.trim().length < 10) {
      nextErrors.message = "Tell us a little more (at least 10 characters).";
    }
    return nextErrors;
  }

  function update<K extends keyof typeof values>(key: K, value: string) {
    const next = { ...values, [key]: value };
    setValues(next);
    if (attempted) setErrors(validate(next));
  }

  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        const nextErrors = validate(values);
        setErrors(nextErrors);
        setAttempted(true);
        if (Object.keys(nextErrors).length === 0) setSubmitted(true);
      }}
      className={cn("space-y-4", className)}
      aria-describedby="ciel-enquiry-note"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="ciel-enquiry-name"
            className="text-[10px] uppercase tracking-[0.2em] text-[#8A8F96]"
          >
            Name
          </label>
          <input
            id="ciel-enquiry-name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            className={cn(inputClass, "mt-2", errors.name && "border-[#E0A3A3]")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "ciel-enquiry-name-error" : undefined}
            placeholder="Your name"
            autoComplete="name"
          />
          {errors.name ? (
            <p id="ciel-enquiry-name-error" className="mt-1.5 text-[11px] text-[#E0A3A3]">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="ciel-enquiry-email"
            className="text-[10px] uppercase tracking-[0.2em] text-[#8A8F96]"
          >
            Email
          </label>
          <input
            id="ciel-enquiry-email"
            type="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            className={cn(inputClass, "mt-2", errors.email && "border-[#E0A3A3]")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "ciel-enquiry-email-error" : undefined}
            placeholder="you@email.com"
            autoComplete="email"
          />
          {errors.email ? (
            <p id="ciel-enquiry-email-error" className="mt-1.5 text-[11px] text-[#E0A3A3]">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      {pieceOptions && pieceOptions.length > 0 ? (
        <div>
          <label
            htmlFor="ciel-enquiry-piece"
            className="text-[10px] uppercase tracking-[0.2em] text-[#8A8F96]"
          >
            Piece
          </label>
          <select
            id="ciel-enquiry-piece"
            value={values.piece}
            onChange={(event) => update("piece", event.target.value)}
            className={cn(inputClass, "mt-2 bg-[#0E0E10]")}
          >
            {pieceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      <div>
        <label
          htmlFor="ciel-enquiry-message"
          className="text-[10px] uppercase tracking-[0.2em] text-[#8A8F96]"
        >
          Brief
        </label>
        <textarea
          id="ciel-enquiry-message"
          rows={4}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          className={cn(inputClass, "mt-2 resize-y", errors.message && "border-[#E0A3A3]")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "ciel-enquiry-message-error" : undefined}
          placeholder="What are you looking for — size range, piece, timeline?"
        />
        {errors.message ? (
          <p id="ciel-enquiry-message-error" className="mt-1.5 text-[11px] text-[#E0A3A3]">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 bg-[#F4F1EC] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0E0E10] transition-colors hover:bg-[#A9D6E5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A9D6E5] sm:w-auto"
      >
        <Send aria-hidden className="h-3.5 w-3.5" />
        Send {subject.toLowerCase()}
      </button>

      <p id="ciel-enquiry-note" className="text-[11px] leading-relaxed text-[#8A8F96]">
        This is a demonstration form — nothing is sent or stored. Confirm current
        contact details with the brand before ordering.
      </p>

      {submitted ? (
        <div
          role="status"
          className="flex gap-3 border border-[#A9D6E5]/40 bg-[#A9D6E5]/[0.06] p-4"
        >
          <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#A9D6E5]" />
          <div>
            <p className="text-sm text-[#F4F1EC]">
              Demo enquiry prepared for {values.name.trim()}.
            </p>
            <p className="mt-1 text-xs leading-relaxed text-[#8A8F96]">
              No message was sent and no data was saved — this store is a design
              concept. In a live build this would reach the brand at
              info@cielshop.in.
            </p>
          </div>
        </div>
      ) : null}
    </form>
  );
}
