"use client";

import { useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";
import { revContact } from "../data";

interface EnquiryFormProps {
  /** Optional product context prefilled from a product detail page. */
  productName?: string;
  compact?: boolean;
}

interface FormErrors {
  name?: string;
  message?: string;
}

/**
 * Client-side enquiry form with validation and an on-screen confirmation.
 * There is no backend: nothing is transmitted, stored or emailed.
 */
export function EnquiryForm({ productName, compact = false }: EnquiryFormProps) {
  const [name, setName] = useState("");
  const [contactValue, setContactValue] = useState("");
  const [interest, setInterest] = useState(productName ?? "");
  const [message, setMessage] = useState(
    productName
      ? `Hi ${revContact.instagramHandle}! I'd like to know more about the ${productName}.`
      : "",
  );
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: FormErrors = {};
    if (name.trim().length < 2) {
      nextErrors.name = "Please enter your name.";
    }
    if (message.trim().length < 10) {
      nextErrors.message = "Please add a little more detail (10+ characters).";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-[2px] border border-[#B4707F]/40 bg-[#F3DCE1]/70 p-6"
      >
        <p className="flex items-center gap-2.5 font-rev-heading text-lg text-[#1A1618]">
          <Check aria-hidden className="h-5 w-5 text-[#B4707F]" />
          Enquiry ready
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[#5F5458]">
          Thanks {name.trim()} - this demonstration form does not send
          anything. To reach {revContact.instagramHandle}, send your message as
          an Instagram direct message to the account.
        </p>
        <a
          href={revContact.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex rounded-[2px] bg-[#1A1618] px-5 py-3 text-[11px] font-semibold tracking-[0.2em] text-[#FAF4F3] uppercase transition hover:bg-[#B4707F]"
        >
          Open {revContact.instagramHandle}
        </a>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 block text-[11px] tracking-[0.16em] text-[#7C7073] uppercase underline underline-offset-4 transition hover:text-[#B4707F]"
        >
          Edit enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid gap-4"
      aria-label="Product enquiry form"
    >
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label
            htmlFor="rev-enquiry-name"
            className="text-[10px] tracking-[0.24em] text-[#7C7073] uppercase"
          >
            Your name *
          </label>
          <input
            id="rev-enquiry-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "rev-enquiry-name-error" : undefined}
            className="mt-1.5 w-full rounded-[2px] border border-[#E8D9DC] bg-white px-3.5 py-3 text-sm text-[#1A1618] focus:border-[#B4707F] focus:outline-none"
            placeholder="Your name"
          />
          {errors.name ? (
            <p
              id="rev-enquiry-name-error"
              role="alert"
              className="mt-1.5 text-[12px] text-[#B4707F]"
            >
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="rev-enquiry-contact"
            className="text-[10px] tracking-[0.24em] text-[#7C7073] uppercase"
          >
            Instagram or phone (optional)
          </label>
          <input
            id="rev-enquiry-contact"
            type="text"
            value={contactValue}
            onChange={(event) => setContactValue(event.target.value)}
            className="mt-1.5 w-full rounded-[2px] border border-[#E8D9DC] bg-white px-3.5 py-3 text-sm text-[#1A1618] focus:border-[#B4707F] focus:outline-none"
            placeholder="@yourhandle"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="rev-enquiry-interest"
          className="text-[10px] tracking-[0.24em] text-[#7C7073] uppercase"
        >
          Piece you&apos;re interested in
        </label>
        <input
          id="rev-enquiry-interest"
          type="text"
          value={interest}
          onChange={(event) => setInterest(event.target.value)}
          className="mt-1.5 w-full rounded-[2px] border border-[#E8D9DC] bg-white px-3.5 py-3 text-sm text-[#1A1618] focus:border-[#B4707F] focus:outline-none"
          placeholder="e.g. Cotton Maxi - Long Line"
        />
      </div>

      <div>
        <label
          htmlFor="rev-enquiry-message"
          className="text-[10px] tracking-[0.24em] text-[#7C7073] uppercase"
        >
          Message *
        </label>
        <textarea
          id="rev-enquiry-message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "rev-enquiry-message-error" : undefined
          }
          className="mt-1.5 w-full resize-y rounded-[2px] border border-[#E8D9DC] bg-white px-3.5 py-3 text-sm text-[#1A1618] focus:border-[#B4707F] focus:outline-none"
          placeholder="Ask about sizing, pricing, availability or shipping..."
        />
        {errors.message ? (
          <p
            id="rev-enquiry-message-error"
            role="alert"
            className="mt-1.5 text-[12px] text-[#B4707F]"
          >
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2.5 rounded-[2px] bg-[#1A1618] px-7 py-3.5 text-[11px] font-semibold tracking-[0.22em] text-[#FAF4F3] uppercase transition hover:bg-[#B4707F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4707F]"
        >
          <Send aria-hidden className="h-4 w-4" />
          Prepare enquiry
        </button>
        <p className="text-[11px] leading-relaxed text-[#7C7073]">
          Demonstration form - nothing is sent. Real enquiries go through a DM
          to {revContact.instagramHandle}.
        </p>
      </div>
    </form>
  );
}
