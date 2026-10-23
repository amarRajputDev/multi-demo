"use client";

import { useMemo, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { sakshiContact } from "../data";
import { InstagramGlyph } from "./icons";

interface FormErrors {
  name?: string;
  contact?: string;
  message?: string;
}

const DEFAULT_INPUT =
  "w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-200 bg-white text-[#3B1F24] placeholder:text-[#B4A19C]";

/**
 * Demo enquiry form: validates on submit, then per-field after the first
 * attempt. Never sends data anywhere — success shows an on-screen
 * confirmation plus a prefilled Instagram DM prompt (the brand's documented
 * ordering channel), not a fake endpoint.
 */
export function EnquiryForm({
  defaultMessage,
  className,
}: {
  defaultMessage?: string;
  className?: string;
}) {
  const [values, setValues] = useState({
    name: "",
    contact: "",
    message: defaultMessage ?? "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  const dmText = useMemo(() => {
    const lines = [
      `Hi ${sakshiContact.instagramHandle.replace("@", "")}! ${values.name.trim() || "I"} would like to enquire.`,
      values.message.trim(),
      values.contact.trim() ? `My contact: ${values.contact.trim()}` : "",
    ].filter(Boolean);
    return lines.join("\n");
  }, [values]);

  const dmUrl = `https://www.instagram.com/direct/inbox/?text=${encodeURIComponent(dmText)}`;

  function validate(next: typeof values): FormErrors {
    const nextErrors: FormErrors = {};
    if (next.name.trim().length < 2) {
      nextErrors.name = "Please enter your name.";
    }
    const contact = next.contact.trim();
    if (!contact) {
      nextErrors.contact = "Add a phone number or Instagram handle so the seller can reply.";
    } else if (!contact.startsWith("@") && contact.replace(/\D/g, "").length < 10) {
      nextErrors.contact = "Enter a valid phone number (10+ digits) or an @handle.";
    }
    if (next.message.trim().length < 5) {
      nextErrors.message = "Tell the seller a little about what you're looking for.";
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
      document.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
      return;
    }
    setStatus("submitting");
    // Demo only: no network request, no storage. Short simulated delay.
    window.setTimeout(() => setStatus("done"), 700);
  }

  const errorText = (key: keyof FormErrors) =>
    submitAttempted && errors[key] ? errors[key] : undefined;
  const invalid = (key: keyof FormErrors) => Boolean(errorText(key));

  if (status === "done") {
    return (
      <div
        role="status"
        className={cn(
          "sakshi-panel rounded-2xl border p-6",
          className,
        )}
      >
        <p className="font-sakshi-display flex items-center gap-2 text-xl text-[#3B1F24]">
          <Check aria-hidden className="h-5 w-5 text-[#8E3B47]" />
          Enquiry prepared (demo only)
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#7A6461]">
          This is a demonstration website — nothing was stored or sent. To
          reach the seller, continue on Instagram: your DM is prefilled with
          the details you entered.
        </p>
        <a
          href={dmUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#8E3B47] px-6 py-3 text-[12px] font-semibold tracking-[0.16em] text-[#FBF6EF] uppercase transition hover:bg-[#7A3140]"
        >
          <InstagramGlyph aria-hidden className="h-4 w-4" />
          Continue on Instagram DM
        </a>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setSubmitAttempted(false);
            setValues({ name: "", contact: "", message: defaultMessage ?? "" });
          }}
          className="mt-4 block text-xs tracking-[0.14em] text-[#7A6461] uppercase underline underline-offset-4 transition hover:text-[#8E3B47]"
        >
          Start another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={cn("grid gap-4", className)}>
      <div>
        <label
          htmlFor="kbs-enquiry-name"
          className="block text-[11px] font-semibold tracking-[0.2em] text-[#3B1F24] uppercase"
        >
          Your name
        </label>
        <input
          id="kbs-enquiry-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
          aria-invalid={invalid("name")}
          aria-describedby={errorText("name") ? "kbs-enquiry-name-error" : undefined}
          className={cn(
            DEFAULT_INPUT,
            "mt-1.5",
            errorText("name") ? "border-[#8E3B47]" : "border-[#D8C3BB]",
          )}
          placeholder="e.g. Ananya Verma"
        />
        {errorText("name") ? (
          <p id="kbs-enquiry-name-error" role="alert" className="mt-1 text-xs text-[#8E3B47]">
            {errorText("name")}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="kbs-enquiry-contact"
          className="block text-[11px] font-semibold tracking-[0.2em] text-[#3B1F24] uppercase"
        >
          Phone or Instagram handle
        </label>
        <input
          id="kbs-enquiry-contact"
          name="contact"
          type="text"
          required
          value={values.contact}
          onChange={(event) => update("contact", event.target.value)}
          aria-invalid={invalid("contact")}
          aria-describedby={errorText("contact") ? "kbs-enquiry-contact-error" : undefined}
          className={cn(
            DEFAULT_INPUT,
            "mt-1.5",
            errorText("contact") ? "border-[#8E3B47]" : "border-[#D8C3BB]",
          )}
          placeholder="e.g. 98765 43210 or @yourhandle"
        />
        {errorText("contact") ? (
          <p id="kbs-enquiry-contact-error" role="alert" className="mt-1 text-xs text-[#8E3B47]">
            {errorText("contact")}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="kbs-enquiry-message"
          className="block text-[11px] font-semibold tracking-[0.2em] text-[#3B1F24] uppercase"
        >
          What are you looking for?
        </label>
        <textarea
          id="kbs-enquiry-message"
          name="message"
          rows={4}
          required
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={invalid("message")}
          aria-describedby={errorText("message") ? "kbs-enquiry-message-error" : undefined}
          className={cn(
            DEFAULT_INPUT,
            "mt-1.5 resize-y",
            errorText("message") ? "border-[#8E3B47]" : "border-[#D8C3BB]",
          )}
          placeholder="Sizes, colours, pieces from the enquiry list…"
        />
        {errorText("message") ? (
          <p id="kbs-enquiry-message-error" role="alert" className="mt-1 text-xs text-[#8E3B47]">
            {errorText("message")}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3B1F24] px-6 py-3.5 text-[12px] font-semibold tracking-[0.18em] text-[#FBF6EF] uppercase transition hover:bg-[#8E3B47] disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 aria-hidden className="h-4 w-4 animate-spin" />
            Preparing…
          </>
        ) : (
          <>
            <InstagramGlyph aria-hidden className="h-4 w-4" />
            Prepare enquiry
          </>
        )}
      </button>
      <p className="text-[11px] leading-relaxed text-[#7A6461]">
        Demo form — your details stay in your browser and are never uploaded.
        Submitting prepares an Instagram DM you can send yourself; the brand
        does not operate a website checkout.
      </p>
    </form>
  );
}
