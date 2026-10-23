"use client";

import { useMemo, useRef, useState } from "react";
import { Link2, Pencil, Phone, Plus, Send, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { TmProductImage } from "./product-image";
import { useTmEnquiry } from "./enquiry-provider";
import {
  tmCategoryBySlug,
  tmContact,
  tmDemoNotice,
  tmEnquiryFields,
  tmProducts,
  tmSortedProducts,
} from "../data";

type FormValues = {
  business: string;
  contactPerson: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  notes: string;
};

const EMPTY: FormValues = {
  business: "",
  contactPerson: "",
  phone: "",
  email: "",
  city: "",
  state: "",
  notes: "",
};

type FormErrors = Partial<Record<keyof FormValues | "items", string>>;

const FIELD_BASE =
  "w-full border px-4 py-3 text-sm text-[#1C1A17] outline-none transition-colors duration-200 bg-[#FFFDFA] placeholder:text-[#6F6A61]/60";

function validate(values: FormValues, itemCount: number): FormErrors {
  const errors: FormErrors = {};

  if (values.business.trim().length < 2) {
    errors.business = "Enter your business or boutique name.";
  }
  if (values.contactPerson.trim().length < 2) {
    errors.contactPerson = "Enter the name of the person we should speak to.";
  }

  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) {
    errors.phone = "Enter a valid phone number (10–15 digits).";
  }

  const email = values.email.trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address, or leave it blank.";
  }

  if (!values.city.trim()) errors.city = "Enter your city.";
  if (!values.state.trim()) errors.state = "Enter your state.";

  if (itemCount === 0) {
    errors.items = "Add at least one product from the catalogue.";
  }

  return errors;
}

interface QuoteBuilderProps {
  heading?: string;
  description?: string;
}

/**
 * Wholesale quote builder.
 *
 * Nothing is transmitted. Submitting assembles an on-screen preview the buyer
 * can copy or read aloud on a call — plus an explicit statement that no
 * enquiry has reached TM SONS.
 */
export function QuoteBuilder({
  heading = "Wholesale enquiry form",
  description = "Tell us who you are and what you would like quoted. Nothing is sent from this concept — the final step is an on-screen preview.",
}: QuoteBuilderProps) {
  const {
    items,
    hydrated,
    setQuantity,
    setNote,
    removeItem,
    clear,
    addItem,
  } = useTmEnquiry();

  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [status, setStatus] = useState<"idle" | "previewing">("idle");
  const [copied, setCopied] = useState(false);
  const [picker, setPicker] = useState("");
  const [pickerError, setPickerError] = useState("");
  const previewRef = useRef<HTMLDivElement>(null);

  const available = useMemo(() => {
    const chosen = new Set(items.map((item) => item.slug));
    return tmSortedProducts(tmProducts).filter(
      (product) => !chosen.has(product.slug),
    );
  }, [items]);

  function update(key: keyof FormValues, value: string) {
    const next = { ...values, [key]: value };
    setValues(next);
    if (submitAttempted) setErrors(validate(next, items.length));
  }

  function handleAddProduct() {
    if (!picker) {
      setPickerError("Choose a product first.");
      return;
    }
    const product = tmProducts.find((entry) => entry.slug === picker);
    if (!product) return;
    addItem({
      slug: product.slug,
      title: product.title,
      image: product.imageId,
      alt: product.alt,
      categoryLabel:
        tmCategoryBySlug(product.categories[0])?.label ?? "Collection",
    });
    setPicker("");
    setPickerError("");
    if (submitAttempted) {
      setErrors(validate(values, items.length + 1));
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);
    const nextErrors = validate(values, items.length);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      window.requestAnimationFrame(() => {
        document
          .querySelector<HTMLElement>("[aria-invalid='true']")
          ?.focus();
      });
      return;
    }

    setStatus("previewing");
    window.requestAnimationFrame(() => {
      previewRef.current?.focus();
      previewRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
    });
  }

  const summary = useMemo(() => {
    const lines = [
      `WHOLESALE ENQUIRY — TM SONS (concept form)`,
      ``,
      `Business: ${values.business.trim()}`,
      `Contact: ${values.contactPerson.trim()}`,
      `Phone: ${values.phone.trim()}`,
      values.email.trim() ? `Email: ${values.email.trim()}` : `Email: (not given)`,
      `City: ${values.city.trim()}, ${values.state.trim()}`,
      ``,
      `Products requested:`,
      ...items.map(
        (item) =>
          `- ${item.title} × ${item.quantity}${
            item.note.trim() ? ` (${item.note.trim()})` : ""
          }`,
      ),
    ];
    if (values.notes.trim()) lines.push(``, `Notes: ${values.notes.trim()}`);
    lines.push(``, tmDemoNotice);
    return lines.join("\n");
  }, [values, items]);

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  }

  const errorFor = (key: keyof FormErrors) =>
    submitAttempted ? errors[key] : undefined;

  const inputClass = (key: keyof FormErrors) =>
    cn(
      FIELD_BASE,
      errorFor(key)
        ? "border-[#B23B2E]"
        : "border-[#1C1A17]/20 focus:border-[#1C1A17]",
    );

  if (status === "previewing") {
    return (
      <div
        ref={previewRef}
        tabIndex={-1}
        className="border border-[#1C1A17]/15 bg-[#FFFDFA] p-6 outline-none sm:p-8"
      >
        <p className="flex items-center gap-2 text-[10px] tracking-[0.24em] text-[#B23B2E] uppercase">
          <Send aria-hidden className="h-3.5 w-3.5" />
          Submission preview
        </p>
        <h3 className="font-tmsons-display mt-3 text-2xl text-[#1C1A17]">
          Your enquiry is ready to send
        </h3>

        <div
          role="status"
          className="mt-5 border-l-2 border-[#B23B2E] bg-[#B23B2E]/[0.06] px-4 py-3.5 text-sm leading-relaxed text-[#1C1A17]"
        >
          <strong className="font-semibold">Demo only — nothing was sent.</strong>{" "}
          TM SONS has <em>not</em> received this enquiry. This concept has no
          backend. Copy the summary below and send it yourself, or call the
          showroom.
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="text-[9px] tracking-[0.22em] text-[#6F6A61] uppercase">
                Business
              </dt>
              <dd className="mt-1 text-[#1C1A17]">{values.business.trim()}</dd>
            </div>
            <div>
              <dt className="text-[9px] tracking-[0.22em] text-[#6F6A61] uppercase">
                Contact person
              </dt>
              <dd className="mt-1 text-[#1C1A17]">
                {values.contactPerson.trim()}
              </dd>
            </div>
            <div>
              <dt className="text-[9px] tracking-[0.22em] text-[#6F6A61] uppercase">
                Phone
              </dt>
              <dd className="mt-1 text-[#1C1A17]">{values.phone.trim()}</dd>
            </div>
            <div>
              <dt className="text-[9px] tracking-[0.22em] text-[#6F6A61] uppercase">
                Email
              </dt>
              <dd className="mt-1 text-[#1C1A17]">
                {values.email.trim() || "Not given"}
              </dd>
            </div>
            <div>
              <dt className="text-[9px] tracking-[0.22em] text-[#6F6A61] uppercase">
                Location
              </dt>
              <dd className="mt-1 text-[#1C1A17]">
                {values.city.trim()}, {values.state.trim()}
              </dd>
            </div>
          </dl>

          <div>
            <p className="text-[9px] tracking-[0.22em] text-[#6F6A61] uppercase">
              Products requested
            </p>
            <ul className="mt-2 space-y-2">
              {items.map((item) => (
                <li
                  key={item.slug}
                  className="flex items-baseline justify-between gap-3 border-b border-[#1C1A17]/10 pb-2 text-sm"
                >
                  <span className="text-[#1C1A17]">
                    {item.title}
                    {item.note.trim() ? (
                      <span className="block text-xs text-[#6F6A61]">
                        {item.note.trim()}
                      </span>
                    ) : null}
                  </span>
                  <span className="shrink-0 tabular-nums text-[#B23B2E]">
                    × {item.quantity}
                  </span>
                </li>
              ))}
            </ul>
            {values.notes.trim() ? (
              <p className="mt-4 text-sm leading-relaxed text-[#6F6A61]">
                <span className="block text-[9px] tracking-[0.22em] text-[#6F6A61] uppercase">
                  Notes
                </span>
                {values.notes.trim()}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={copySummary}
            className="inline-flex min-h-12 items-center gap-2 bg-[#B23B2E] px-6 text-[11px] tracking-[0.18em] text-white uppercase transition-colors hover:bg-[#8F2E23] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1A17]"
          >
            <Link2 aria-hidden className="h-4 w-4" />
            {copied ? "Copied" : "Copy enquiry"}
          </button>
          <a
            href={tmContact.phones[0].telHref}
            className="inline-flex min-h-12 items-center gap-2 border border-[#1C1A17]/25 px-6 text-[11px] tracking-[0.18em] text-[#1C1A17] uppercase transition-colors hover:border-[#1C1A17] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
          >
            <Phone aria-hidden className="h-4 w-4" />
            {tmContact.phones[0].display}
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="inline-flex min-h-12 items-center gap-2 px-4 text-[11px] tracking-[0.18em] text-[#6F6A61] uppercase underline underline-offset-4 transition-colors hover:text-[#1C1A17]"
          >
            <Pencil aria-hidden className="h-4 w-4" />
            Edit details
          </button>
        </div>

        <p className="mt-5 text-[11px] leading-relaxed text-[#6F6A61]">
          {tmDemoNotice}
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-12">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="border border-[#1C1A17]/15 bg-[#FFFDFA] p-6 sm:p-8"
      >
        <h3 className="font-tmsons-display text-2xl text-[#1C1A17]">
          {heading}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#6F6A61]">
          {description}
        </p>

        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          {tmEnquiryFields.map((field) => {
            const key = field.name as keyof FormValues;
            const message = errorFor(key as keyof FormErrors);
            const isWide = field.type === "textarea";

            return (
              <div
                key={field.id}
                className={isWide ? "sm:col-span-2" : undefined}
              >
                <label
                  htmlFor={field.id}
                  className="block text-[10px] font-medium tracking-[0.18em] text-[#1C1A17] uppercase"
                >
                  {field.label}
                  {field.required ? (
                    <span className="text-[#B23B2E]"> *</span>
                  ) : (
                    <span className="text-[#6F6A61]"> (optional)</span>
                  )}
                </label>

                {field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    name={field.name}
                    rows={4}
                    value={values[key]}
                    onChange={(event) => update(key, event.target.value)}
                    aria-invalid={Boolean(message)}
                    aria-describedby={
                      message ? `${field.id}-error` : undefined
                    }
                    placeholder={field.placeholder}
                    className={cn(
                      inputClass(key as keyof FormErrors),
                      "mt-2 resize-y",
                    )}
                  />
                ) : (
                  <input
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    inputMode={field.type === "tel" ? "tel" : undefined}
                    autoComplete={field.autoComplete}
                    value={values[key]}
                    onChange={(event) => update(key, event.target.value)}
                    aria-invalid={Boolean(message)}
                    aria-describedby={
                      message ? `${field.id}-error` : undefined
                    }
                    placeholder={field.placeholder}
                    className={cn(inputClass(key as keyof FormErrors), "mt-2")}
                  />
                )}

                {field.hint && !message ? (
                  <p className="mt-1.5 text-[11px] text-[#6F6A61]">
                    {field.hint}
                  </p>
                ) : null}
                {message ? (
                  <p
                    id={`${field.id}-error`}
                    role="alert"
                    className="mt-1.5 text-xs text-[#B23B2E]"
                  >
                    {message}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-8 border-t border-[#1C1A17]/12 pt-6">
          <label
            htmlFor="tm-product-picker"
            className="block text-[10px] font-medium tracking-[0.18em] text-[#1C1A17] uppercase"
          >
            Add a product to this enquiry
          </label>
          <div className="mt-2 flex flex-wrap gap-3">
            <select
              id="tm-product-picker"
              value={picker}
              onChange={(event) => {
                setPicker(event.target.value);
                setPickerError("");
              }}
              className={cn(
                FIELD_BASE,
                "min-w-0 flex-1 border-[#1C1A17]/20 focus:border-[#1C1A17]",
              )}
            >
              <option value="">
                {available.length > 0
                  ? "Choose a product…"
                  : "Every product is already in your list"}
              </option>
              {available.map((product) => (
                <option key={product.slug} value={product.slug}>
                  {product.title}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={handleAddProduct}
              disabled={available.length === 0}
              className="inline-flex min-h-12 items-center gap-2 border border-[#1C1A17]/25 px-5 text-[11px] tracking-[0.18em] text-[#1C1A17] uppercase transition-colors hover:border-[#1C1A17] disabled:opacity-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
            >
              <Plus aria-hidden className="h-4 w-4" />
              Add
            </button>
          </div>
          {pickerError ? (
            <p role="alert" className="mt-1.5 text-xs text-[#B23B2E]">
              {pickerError}
            </p>
          ) : null}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[#1C1A17]/12 pt-6">
          <button
            type="submit"
            className="inline-flex min-h-13 items-center gap-2.5 bg-[#1C1A17] px-8 text-[11px] tracking-[0.2em] text-[#FAF7F2] uppercase transition-colors hover:bg-[#B23B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
          >
            <Send aria-hidden className="h-4 w-4" />
            Preview enquiry
          </button>
          <p className="max-w-sm text-[11px] leading-relaxed text-[#6F6A61]">
            Demo form — your details stay in this browser and are never
            uploaded.
          </p>
        </div>
      </form>

      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="border border-[#1C1A17]/15 bg-[#F1EBE2] p-5">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-tmsons-display text-lg text-[#1C1A17]">
              Your list
            </h3>
            <span className="text-[10px] tracking-[0.2em] text-[#6F6A61] uppercase">
              {hydrated ? `${items.length} selected` : "Loading…"}
            </span>
          </div>

          {hydrated && items.length === 0 ? (
            <div className="mt-4 border border-dashed border-[#1C1A17]/25 px-4 py-7 text-center">
              <p className="text-sm leading-relaxed text-[#6F6A61]">
                Your enquiry list is empty. Add pieces from the catalogue, or
                use the picker above.
              </p>
            </div>
          ) : null}

          {hydrated && items.length > 0 ? (
            <>
              <ul className="mt-4 space-y-4">
                {items.map((item) => (
                  <li
                    key={item.slug}
                    className="border-b border-[#1C1A17]/10 pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex gap-3">
                      <span className="w-14 shrink-0">
                        <TmProductImage
                          imageId={item.image}
                          alt={item.alt}
                          sizes="56px"
                        />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-tmsons-display text-sm leading-snug text-[#1C1A17]">
                          {item.title}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <label className="sr-only">
                            Quantity of {item.title}
                          </label>
                          <input
                            type="number"
                            min={1}
                            max={9999}
                            inputMode="numeric"
                            value={item.quantity}
                            onChange={(event) =>
                              setQuantity(
                                item.slug,
                                Number(event.target.value || 1),
                              )
                            }
                            className="h-9 w-16 border border-[#1C1A17]/20 bg-[#FFFDFA] text-center text-sm text-[#1C1A17] outline-none focus:border-[#B23B2E] [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                          />
                          <button
                            type="button"
                            onClick={() => removeItem(item.slug)}
                            aria-label={`Remove ${item.title}`}
                            className="grid h-9 w-9 place-items-center border border-[#1C1A17]/15 text-[#6F6A61] transition-colors hover:border-[#B23B2E] hover:text-[#B23B2E]"
                          >
                            <Trash2 aria-hidden className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <label className="mt-2 block">
                          <span className="sr-only">
                            Preference note for {item.title}
                          </span>
                          <input
                            type="text"
                            value={item.note}
                            onChange={(event) =>
                              setNote(item.slug, event.target.value)
                            }
                            placeholder="Colour / preference (optional)"
                            className="w-full border-b border-dashed border-[#1C1A17]/25 bg-transparent py-1.5 text-xs text-[#1C1A17] placeholder:text-[#6F6A61]/70 focus:border-[#B23B2E] focus:outline-none"
                          />
                        </label>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={clear}
                className="mt-5 text-[11px] tracking-[0.16em] text-[#6F6A61] uppercase underline underline-offset-4 transition-colors hover:text-[#B23B2E]"
              >
                Clear list
              </button>
            </>
          ) : null}

          {errorFor("items") ? (
            <p role="alert" className="mt-3 text-xs text-[#B23B2E]">
              {errors.items}
            </p>
          ) : null}

          <div className="mt-5 border-t border-[#1C1A17]/12 pt-4">
            <p className="text-[11px] leading-relaxed text-[#6F6A61]">
              Prefer to talk first?{" "}
              {tmContact.phones.map((phone, index) => (
                <span key={phone.telHref}>
                  {index > 0 ? " · " : ""}
                  <a
                    href={phone.telHref}
                    className="text-[#B23B2E] underline underline-offset-2"
                  >
                    {phone.display}
                  </a>
                </span>
              ))}
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
