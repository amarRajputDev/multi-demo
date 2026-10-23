"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { khaleeziWhatsAppUrl } from "../data";
import { KHALEEZI_PRODUCTS, KHALEEZI_SIZES } from "../products";

interface Values {
  name: string;
  phone: string;
  piece: string;
  size: string;
  message: string;
}

type Errors = Partial<Record<keyof Values, string>>;

const inputClass =
  "w-full border border-[#2A2320]/20 bg-transparent px-4 py-3 text-sm text-[#2A2320] placeholder:text-[#7A6E67]/60 transition-colors focus:border-[#2F6D72] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6D72]";

/**
 * Demo enquiry form. Validates in the browser, never posts to a server, and
 * offers an optional prefilled WhatsApp message the visitor can send himself.
 */
export function KhaleeziEnquiryForm({ className }: { className?: string }) {
  const [values, setValues] = useState<Values>({
    name: "",
    phone: "",
    piece: KHALEEZI_PRODUCTS[0]?.name ?? "General enquiry",
    size: "M",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [attempted, setAttempted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validate(next: Values): Errors {
    const nextErrors: Errors = {};
    if (next.name.trim().length < 2) nextErrors.name = "Please add your name.";
    if (!/^[0-9+\s-]{8,}$/.test(next.phone.trim())) {
      nextErrors.phone = "Add a phone number the label can reply to.";
    }
    if (next.message.trim().length < 8) {
      nextErrors.message = "A short note helps — 8 characters or more.";
    }
    return nextErrors;
  }

  function update<K extends keyof Values>(key: K, value: string) {
    const next = { ...values, [key]: value };
    setValues(next);
    if (attempted) setErrors(validate(next));
  }

  const whatsappUrl = khaleeziWhatsAppUrl(
    `Hi Khaleezi Designs! I'm ${values.name || "…"}.\nPiece: ${values.piece}\nSize: ${values.size}\n${values.message}`,
  );

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
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="kh-name" className="khaleezi-eyebrow text-[9px] text-[#7A6E67]">
            Name
          </label>
          <input
            id="kh-name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            className={cn(inputClass, "mt-2", errors.name && "border-[#8E3B47]")}
          />
          {errors.name ? (
            <p className="mt-1.5 text-[11px] text-[#8E3B47]">{errors.name}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="kh-phone" className="khaleezi-eyebrow text-[9px] text-[#7A6E67]">
            Phone / WhatsApp
          </label>
          <input
            id="kh-phone"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            placeholder="+91 …"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            className={cn(inputClass, "mt-2", errors.phone && "border-[#8E3B47]")}
          />
          {errors.phone ? (
            <p className="mt-1.5 text-[11px] text-[#8E3B47]">{errors.phone}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-[1.6fr_1fr]">
        <div>
          <label htmlFor="kh-piece" className="khaleezi-eyebrow text-[9px] text-[#7A6E67]">
            Piece
          </label>
          <select
            id="kh-piece"
            value={values.piece}
            onChange={(event) => update("piece", event.target.value)}
            className={cn(inputClass, "mt-2 bg-[#FBF8F2]")}
          >
            <option value="General enquiry">General enquiry</option>
            {KHALEEZI_PRODUCTS.map((product) => (
              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="kh-size" className="khaleezi-eyebrow text-[9px] text-[#7A6E67]">
            Size
          </label>
          <select
            id="kh-size"
            value={values.size}
            onChange={(event) => update("size", event.target.value)}
            className={cn(inputClass, "mt-2 bg-[#FBF8F2]")}
          >
            {KHALEEZI_SIZES.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="kh-message" className="khaleezi-eyebrow text-[9px] text-[#7A6E67]">
          Message
        </label>
        <textarea
          id="kh-message"
          rows={4}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          placeholder="Ask for price, size chart, fabric or delivery timeline"
          aria-invalid={Boolean(errors.message)}
          className={cn(inputClass, "mt-2 resize-y", errors.message && "border-[#8E3B47]")}
        />
        {errors.message ? (
          <p className="mt-1.5 text-[11px] text-[#8E3B47]">{errors.message}</p>
        ) : null}
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 bg-[#2F6D72] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FBF8F2] transition-colors hover:bg-[#255A5E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6D72] sm:w-auto"
      >
        <Send aria-hidden className="h-3.5 w-3.5" />
        Prepare enquiry
      </button>

      <p className="text-[11px] leading-relaxed text-[#7A6E67]">
        Demonstration form — nothing is sent or stored. Optional WhatsApp
        hand-off uses the publicly posted number and needs confirmation.
      </p>

      {submitted ? (
        <div
          role="status"
          className="border border-[#2F6D72]/35 bg-[#2F6D72]/[0.06] p-4"
        >
          <p className="flex items-center gap-2 text-sm text-[#2A2320]">
            <Check aria-hidden className="h-4 w-4 text-[#2F6D72]" />
            Demo enquiry prepared for {values.name.trim()}.
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-[#7A6E67]">
            No message was sent and no data was saved. To continue for real, open
            the prefilled WhatsApp message or send an Instagram DM.
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="border border-[#2F6D72] px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-[#2F6D72] hover:bg-[#2F6D72] hover:text-[#FBF8F2]"
              >
                Continue on WhatsApp
              </a>
            ) : null}
            <a
              href="https://www.instagram.com/khaleezidesigns/"
              target="_blank"
              rel="noreferrer noopener"
              className="border border-[#2A2320]/25 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-[#2A2320] hover:border-[#2A2320]"
            >
              Instagram DM
            </a>
          </div>
        </div>
      ) : null}
    </form>
  );
}
