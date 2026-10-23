"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { exotixContact } from "../data";

interface EnquiryFormProps {
  /** Optional product name to prefill the subject line. */
  productName?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

/**
 * Client-side enquiry form: validates in the browser and shows an on-screen
 * confirmation. Nothing is submitted to a backend - the concept never
 * contacts the brand on the visitor's behalf. The confirmation copy tells the
 * visitor to send their message through the brand's official channels.
 */
export function EnquiryForm({ productName }: EnquiryFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(
    productName ? `Enquiry — ${productName}` : "",
  );
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (name.trim().length < 2) next.name = "Tell us your name (2+ characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (message.trim().length < 10) {
      next.message = "Add a little more detail (10+ characters).";
    }
    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
    }
  }

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-sm border border-[#E23B2E]/40 bg-[#141416] p-8 text-center"
      >
        <CheckCircle2 aria-hidden className="mx-auto h-8 w-8 text-[#E23B2E]" />
        <p className="font-exotix-display mt-4 text-xl text-[#F2EFEA]">
          Enquiry staged
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#B9BDC4]">
          Thanks {name.trim()} — this demo has validated your message on screen
          only; nothing was sent from this concept. To reach the real team,
          message Exotix on one of the official channels below and paste your
          note there.
        </p>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={exotixContact.contactPage}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-[#E23B2E] px-5 py-3 text-xs font-medium tracking-[0.18em] text-[#F2EFEA] uppercase transition hover:bg-[#C7301F]"
          >
            Official contact page
          </a>
          <a
            href={`mailto:${exotixContact.emailContactPage}?subject=${encodeURIComponent(subject || "Enquiry")}&body=${encodeURIComponent(message)}`}
            className="rounded-sm border border-[#2A2A30] px-5 py-3 text-xs font-medium tracking-[0.18em] text-[#B9BDC4] uppercase transition hover:border-[#E23B2E] hover:text-[#F2EFEA]"
          >
            Draft an email
          </a>
          <button
            type="button"
            onClick={() => {
              setSent(false);
              setMessage("");
            }}
            className="font-exotix-mono text-[11px] tracking-[0.16em] text-[#8A8A92] uppercase underline decoration-[#2A2A30] underline-offset-4 hover:text-[#F2EFEA]"
          >
            Edit again
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="grid gap-5 rounded-sm border border-[#232327] bg-[#101013] p-6 sm:p-8"
    >
      <Field
        id="enquiry-name"
        label="Name"
        error={errors.name}
        input={
          <input
            id="enquiry-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
            className={inputClass(Boolean(errors.name))}
            placeholder="Your name"
          />
        }
      />
      <Field
        id="enquiry-email"
        label="Email"
        error={errors.email}
        input={
          <input
            id="enquiry-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            className={inputClass(Boolean(errors.email))}
            placeholder="you@example.com"
          />
        }
      />
      <Field
        id="enquiry-subject"
        label="Subject"
        input={
          <input
            id="enquiry-subject"
            type="text"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            className={inputClass(false)}
            placeholder="Size request, order question…"
          />
        }
      />
      <Field
        id="enquiry-message"
        label="Message"
        error={errors.message}
        input={
          <textarea
            id="enquiry-message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={5}
            className={cn(inputClass(Boolean(errors.message)), "resize-y")}
            placeholder="Which piece, which size, and anything else the brand should know."
          />
        }
      />

      <p className="font-exotix-mono text-[10px] leading-relaxed tracking-[0.12em] text-[#5A5A62] uppercase">
        Demonstration form — validated in your browser only. No data leaves
        this page and nothing is sent to the brand.
      </p>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#E23B2E] px-6 py-4 text-xs font-medium tracking-[0.2em] text-[#F2EFEA] uppercase transition hover:bg-[#C7301F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E23B2E]"
      >
        <Send aria-hidden className="h-4 w-4" />
        Stage enquiry
      </button>
    </form>
  );
}

function inputClass(invalid: boolean) {
  return cn(
    "w-full rounded-sm border bg-[#0C0C0E] px-4 py-3 text-sm text-[#F2EFEA] placeholder:text-[#5A5A62] focus:outline-none",
    invalid ? "border-[#E23B2E]" : "border-[#2A2A30] focus:border-[#B9BDC4]",
  );
}

function Field({
  id,
  label,
  error,
  input,
}: {
  id: string;
  label: string;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-exotix-mono mb-2 block text-[10px] tracking-[0.24em] text-[#8A8A92] uppercase"
      >
        {label}
      </label>
      {input}
      {error ? (
        <p role="alert" className="mt-1.5 text-[11px] text-[#E23B2E]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
