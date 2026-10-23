"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import Link from "next/link";
import { Check, Heart, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { khaleeziBrand, khaleeziWhatsAppUrl } from "../data";
import { KHALEEZI_PRODUCTS, type KhaleeziProduct } from "../products";
import { PendingArtwork } from "./brand";
import {
  addEnquiryItem,
  clearEnquiry,
  getEnquiryServerSnapshot,
  getEnquirySnapshot,
  removeEnquiryItem,
  setEnquiryQty,
  subscribeEnquiry,
  toggleEnquiryWishlist,
  type EnquiryItem,
} from "./enquiry-store";

interface EnquiryValue {
  items: EnquiryItem[];
  wishlist: string[];
  open: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  add: (product: KhaleeziProduct, size: string, qty?: number) => void;
  setQty: (slug: string, size: string, qty: number) => void;
  remove: (slug: string, size: string) => void;
  clear: () => void;
  toggleWishlist: (slug: string) => void;
  isWished: (slug: string) => boolean;
  count: number;
  hydrated: boolean;
}

const EnquiryContext = createContext<EnquiryValue | null>(null);

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const snapshot = useSyncExternalStore(
    subscribeEnquiry,
    getEnquirySnapshot,
    getEnquiryServerSnapshot,
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const value = useMemo<EnquiryValue>(
    () => ({
      items: snapshot.items,
      wishlist: snapshot.wishlist,
      open,
      openDrawer: () => setOpen(true),
      closeDrawer: () => setOpen(false),
      add: (product, size, qty = 1) => {
        addEnquiryItem(product.slug, size, qty);
        setOpen(true);
      },
      setQty: setEnquiryQty,
      remove: removeEnquiryItem,
      clear: clearEnquiry,
      toggleWishlist: toggleEnquiryWishlist,
      isWished: (slug: string) => snapshot.wishlist.includes(slug),
      count: snapshot.items.reduce((total, item) => total + item.qty, 0),
      hydrated: snapshot.hydrated,
    }),
    [snapshot, open],
  );

  return (
    <EnquiryContext.Provider value={value}>
      {children}
      <EnquiryDrawer />
    </EnquiryContext.Provider>
  );
}

export function useEnquiry(): EnquiryValue {
  const context = useContext(EnquiryContext);
  if (!context) throw new Error("useEnquiry must be used inside EnquiryProvider");
  return context;
}

function EnquiryDrawer() {
  const { items, open, closeDrawer, setQty, remove, clear } = useEnquiry();

  const lines = items
    .map((item) => {
      const product = KHALEEZI_PRODUCTS.find(
        (candidate) => candidate.slug === item.slug,
      );
      return product ? { item, product } : null;
    })
    .filter(
      (line): line is { item: EnquiryItem; product: KhaleeziProduct } =>
        line !== null,
    );

  const message = [
    `Hi ${khaleeziBrand.name}! I'd like to enquire about:`,
    ...lines.map(
      ({ item, product }) => `- ${product.name} · size ${item.size} × ${item.qty}`,
    ),
    "Please share price and availability.",
  ].join("\n");
  const whatsappUrl = khaleeziWhatsAppUrl(message);

  return (
    <div
      className={cn("fixed inset-0 z-[90]", open ? "" : "pointer-events-none")}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-[#2A2320]/45 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={closeDrawer}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Enquiry list"
        className={cn(
          "absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-[#FBF8F2] transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-[#E4DCD0] px-5 py-4">
          <div>
            <p className="khaleezi-eyebrow text-[10px] text-[#2F6D72]">
              Enquiry list
            </p>
            <p className="font-khaleezi-display mt-1 text-lg text-[#2A2320]">
              {lines.length} {lines.length === 1 ? "piece" : "pieces"}
            </p>
          </div>
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close enquiry list"
            className="grid h-9 w-9 place-items-center text-[#2A2320]"
          >
            <X aria-hidden className="h-4.5 w-4.5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-khaleezi-display text-xl text-[#2A2320]">
                Nothing to enquire about yet.
              </p>
              <p className="mt-2 max-w-[16rem] text-xs leading-relaxed text-[#7A6E67]">
                Add a piece to build a WhatsApp enquiry. Prices are shared by the
                label directly.
              </p>
              <Link
                href={`${khaleeziBrand.homeHref}/collections`}
                onClick={closeDrawer}
                className="mt-6 bg-[#2F6D72] px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-[#FBF8F2]"
              >
                Browse the collection
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-[#E4DCD0]">
              {lines.map(({ item, product }) => (
                <li key={`${item.slug}-${item.size}`} className="flex gap-3 py-4">
                  <div className="h-24 w-20 shrink-0 overflow-hidden">
                    <PendingArtwork tone={product.tone} label={product.name} />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <Link
                      href={`${khaleeziBrand.homeHref}/products/${product.slug}`}
                      onClick={closeDrawer}
                      className="text-sm text-[#2A2320]"
                    >
                      {product.name}
                    </Link>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#7A6E67]">
                      Size {item.size} · enquire for price
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-[#2A2320]/20">
                        <button
                          type="button"
                          onClick={() => setQty(item.slug, item.size, item.qty - 1)}
                          aria-label={`Decrease ${product.name}`}
                          className="h-7 w-7 text-sm text-[#2A2320]"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-xs">{item.qty}</span>
                        <button
                          type="button"
                          onClick={() => setQty(item.slug, item.size, item.qty + 1)}
                          aria-label={`Increase ${product.name}`}
                          className="h-7 w-7 text-sm text-[#2A2320]"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(item.slug, item.size)}
                        className="text-[10px] uppercase tracking-[0.16em] text-[#7A6E67] hover:text-[#8E3B47]"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 ? (
          <div className="border-t border-[#E4DCD0] px-5 py-4">
            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="flex w-full items-center justify-center gap-2 bg-[#2F6D72] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FBF8F2] transition-colors hover:bg-[#255A5E]"
              >
                Continue on WhatsApp
              </a>
            ) : null}
            <p className="mt-3 text-[10px] leading-relaxed text-[#7A6E67]">
              Opens WhatsApp with your list prefilled. No order is placed and
              nothing is stored on a server. Number taken from a public post —
              confirm it is current.
            </p>
            <button
              type="button"
              onClick={clear}
              className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[#7A6E67] hover:text-[#2A2320]"
            >
              Clear list
            </button>
          </div>
        ) : null}
      </aside>
    </div>
  );
}

/** Wishlist heart used by cards and product detail. */
export function WishlistButton({ slug, name }: { slug: string; name: string }) {
  const { toggleWishlist, isWished } = useEnquiry();
  const saved = isWished(slug);
  return (
    <button
      type="button"
      onClick={() => toggleWishlist(slug)}
      aria-pressed={saved}
      aria-label={saved ? `Remove ${name} from wishlist` : `Save ${name}`}
      className={cn(
        "grid h-8 w-8 place-items-center rounded-full border backdrop-blur-sm transition-colors",
        saved
          ? "border-[#2F6D72] bg-[#FBF8F2] text-[#2F6D72]"
          : "border-[#2A2320]/15 bg-[#FBF8F2]/85 text-[#2A2320]/70 hover:text-[#2F6D72]",
      )}
    >
      <Heart aria-hidden className={cn("h-3.5 w-3.5", saved && "fill-current")} />
    </button>
  );
}

/** Small success chip shown after adding to the enquiry list. */
export function AddedChip({ show, label }: { show: boolean; label: string }) {
  if (!show) return null;
  return (
    <p className="mt-3 flex items-center gap-2 text-[11px] text-[#2F6D72]" role="status">
      <Check aria-hidden className="h-3.5 w-3.5" />
      {label}
    </p>
  );
}
