"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

/**
 * Persistent client-side "enquiry bag" for the TM SONS wholesale quote builder.
 *
 * There is no backend in this demo: selections live in this browser only
 * (localStorage) and are never transmitted anywhere. The drawer lets a buyer
 * collect several products and quantities before building a quote request.
 *
 * The list is held in a tiny module-level store read through
 * `useSyncExternalStore`, so the server snapshot (empty) and the client
 * snapshot (localStorage) can never disagree during hydration.
 */

export interface TmEnquiryItem {
  slug: string;
  title: string;
  image: string;
  alt: string;
  categoryLabel: string;
  quantity: number;
  note: string;
}

const STORAGE_KEY = "tm-sons-enquiry-list-v1";
const EMPTY: TmEnquiryItem[] = [];

let store: TmEnquiryItem[] = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function notify() {
  for (const listener of listeners) listener();
}

function readStored(): TmEnquiryItem[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) return EMPTY;
    return parsed.filter(
      (entry): entry is TmEnquiryItem =>
        Boolean(entry) &&
        typeof (entry as TmEnquiryItem).slug === "string" &&
        typeof (entry as TmEnquiryItem).title === "string",
    );
  } catch {
    return EMPTY;
  }
}

function loadStore() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  store = readStored();
  notify();
}

function persist() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    /* Storage may be unavailable (private mode). The demo still works. */
  }
}

function commit(next: TmEnquiryItem[]) {
  store = next;
  persist();
  notify();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  // Defer the first read so React finishes subscribing before we notify.
  if (!loaded) queueMicrotask(loadStore);

  function onStorage(event: StorageEvent) {
    if (event.key === STORAGE_KEY || event.key === null) {
      store = readStored();
      notify();
    }
  }
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot(): TmEnquiryItem[] {
  return store;
}

function getServerSnapshot(): TmEnquiryItem[] {
  return EMPTY;
}

function getHydratedSnapshot(): boolean {
  return loaded;
}

function getServerHydratedSnapshot(): boolean {
  return false;
}

interface TmEnquiryContextValue {
  items: TmEnquiryItem[];
  /** False until localStorage has been read — avoids an SSR mismatch. */
  hydrated: boolean;
  count: number;
  drawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  addItem: (item: Omit<TmEnquiryItem, "quantity" | "note">) => void;
  removeItem: (slug: string) => void;
  setQuantity: (slug: string, quantity: number) => void;
  setNote: (slug: string, note: string) => void;
  clear: () => void;
  has: (slug: string) => boolean;
}

const TmEnquiryContext = createContext<TmEnquiryContextValue | null>(null);

export function TmEnquiryProvider({ children }: { children: ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const hydrated = useSyncExternalStore(
    subscribe,
    getHydratedSnapshot,
    getServerHydratedSnapshot,
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  const addItem = useCallback(
    (item: Omit<TmEnquiryItem, "quantity" | "note">) => {
      if (store.some((entry) => entry.slug === item.slug)) return;
      commit([...store, { ...item, quantity: 1, note: "" }]);
    },
    [],
  );

  const removeItem = useCallback((slug: string) => {
    const next = store.filter((entry) => entry.slug !== slug);
    if (next.length !== store.length) commit(next);
  }, []);

  const setQuantity = useCallback((slug: string, quantity: number) => {
    const safe = Math.max(1, Math.min(9999, quantity || 1));
    commit(
      store.map((entry) =>
        entry.slug === slug ? { ...entry, quantity: safe } : entry,
      ),
    );
  }, []);

  const setNote = useCallback((slug: string, note: string) => {
    commit(
      store.map((entry) =>
        entry.slug === slug ? { ...entry, note } : entry,
      ),
    );
  }, []);

  const clear = useCallback(() => {
    if (store.length > 0) commit(EMPTY);
  }, []);

  const has = useCallback(
    (slug: string) => items.some((entry) => entry.slug === slug),
    [items],
  );

  const value = useMemo<TmEnquiryContextValue>(
    () => ({
      items,
      hydrated,
      count: items.length,
      drawerOpen,
      openDrawer: () => setDrawerOpen(true),
      closeDrawer: () => setDrawerOpen(false),
      addItem,
      removeItem,
      setQuantity,
      setNote,
      clear,
      has,
    }),
    [
      items,
      hydrated,
      drawerOpen,
      addItem,
      removeItem,
      setQuantity,
      setNote,
      clear,
      has,
    ],
  );

  return (
    <TmEnquiryContext.Provider value={value}>
      {children}
    </TmEnquiryContext.Provider>
  );
}

export function useTmEnquiry(): TmEnquiryContextValue {
  const context = useContext(TmEnquiryContext);
  if (!context) {
    throw new Error("useTmEnquiry must be used inside <TmEnquiryProvider>");
  }
  return context;
}
