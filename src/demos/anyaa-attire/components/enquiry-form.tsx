"use client";

import { useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { anyaaContact } from "../data";
import { anyaaProducts } from "../products";
import { BotanicalSprig } from "./icons";

interface EnquiryValues {
  name: string;
  email: string;
  interest: string;
  message: string;
}

type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>;

function validate(values: EnquiryValues): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (!values.name.trim()) errors.name = "Please tell us your name.";
  if (!values.email.trim()) {
    errors.email = "Please add an email so a reply can reach you.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "That email address does not look complete.";
  }
  if (!values.message.trim()) {
    errors.message = "Please add a short message about what you're looking for.";
  }
  return errors;
}

/**
 * Client-side enquiry form for the concept. Validation and confirmation happen
 * entirely on screen - nothing is transmitted to a backend, because no
 * verified business contact channel exists for this brand yet.
 */
export function EnquiryForm() {
  const [values, setValues] = useState<EnquiryValues>({
    name: "",
    email: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [sent, setSent] = useState(false);

  const update = (field: keyof EnquiryValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSent(true);
  };

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-[3px] border border-[#2E6F62]/30 bg-white p-8 text-center"
      >
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#D3E5DF] text-[#2E6F62]">
          <Check aria-hidden className="h-6 w-6" />
        </span>
        <p className="font-anyaa-display mt-4 text-2xl text-[#22332F]">
          Enquiry noted - thank you, {values.name.trim().split(" ")[0]}.
        </p>
        <p className="font-anyaa-body mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#6E7C77]">
          This is a website concept: the form was validated on screen only and
          nothing was transmitted. To reach the brand, message{" "}
          <a
            href={anyaaContact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E6F62] underline decoration-[#DFE7E2] underline-offset-4"
          >
            {anyaaContact.instagramHandle}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setValues({ name: "", email: "", interest: "", message: "" });
          }}
          className="font-anyaa-body mt-6 rounded-full border border-[#2E6F62]/40 px-6 py-3 text-[11px] font-medium tracking-[0.2em] text-[#22332F] uppercase transition hover:bg-white"
        >
          Write another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[3px] border border-[#DFE7E2] bg-white p-6 sm:p-8"
    >
      <BotanicalSprig className="h-6 w-16 text-[#2E6F62]/60" />
      <p className="font-anyaa-display mt-3 text-[1.6rem] leading-snug text-[#22332F]">
        Send an enquiry
      </p>
      <p className="font-anyaa-body mt-2 text-[13px] leading-relaxed text-[#6E7C77]">
        Ask about a piece, a size or the current edit. This form is demonstration
        only - it validates on screen and sends nothing.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field
          id="enq-name"
          label="Your name"
          required
          error={errors.name}
          value={values.name}
          onChange={(value) => update("name", value)}
          placeholder="Full name"
        />
        <Field
          id="enq-email"
          label="Email"
          type="email"
          required
          error={errors.email}
          value={values.email}
          onChange={(value) => update("email", value)}
          placeholder="you@example.com"
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="enq-interest"
          className="font-anyaa-body block text-[10px] tracking-[0.26em] text-[#6E7C77] uppercase"
        >
          Piece of interest
        </label>
        <select
          id="enq-interest"
          value={values.interest}
          onChange={(event) => update("interest", event.target.value)}
          className="font-anyaa-body mt-2 w-full appearance-none rounded-[2px] border border-[#DFE7E2] bg-white px-4 py-3 text-sm text-[#22332F] transition focus:border-[#2E6F62] focus:outline-none"
        >
          <option value="">General enquiry</option>
          {anyaaProducts.map((product) => (
            <option key={product.slug} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <Field
          id="enq-message"
          label="Message"
          required
          textarea
          error={errors.message}
          value={values.message}
          onChange={(value) => update("message", value)}
          placeholder="What would you like to know?"
        />
      </div>

      <button
        type="submit"
        className="font-anyaa-body mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#2E6F62] px-7 py-4 text-xs font-medium tracking-[0.2em] text-[#FAF8F3] uppercase transition hover:bg-[#22332F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22332F]"
      >
        <Send aria-hidden className="h-4 w-4" />
        Submit enquiry
      </button>
      <p className="font-anyaa-body mt-3 text-[11px] leading-relaxed text-[#6E7C77]">
        No verified email or phone is published for the brand in this concept,
        so this form demonstrates the interaction a real channel would power.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  required = false,
  textarea = false,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
}) {
  const shared =
    "font-anyaa-body mt-2 w-full rounded-[2px] border bg-white px-4 py-3 text-sm text-[#22332F] placeholder:text-[#6E7C77]/60 transition focus:outline-none";

  return (
    <div>
      <label
        htmlFor={id}
        className="font-anyaa-body block text-[10px] tracking-[0.26em] text-[#6E7C77] uppercase"
      >
        {label}
        {required ? <span className="text-[#2E6F62]"> *</span> : null}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={4}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          className={cn(
            shared,
            "resize-y",
            error ? "border-[#B4553F]" : "border-[#DFE7E2] focus:border-[#2E6F62]",
          )}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          className={cn(
            shared,
            error ? "border-[#B4553F]" : "border-[#DFE7E2] focus:border-[#2E6F62]",
          )}
        />
      )}
      {error ? (
        <p role="alert" className="font-anyaa-body mt-1.5 text-[11px] text-[#B4553F]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
