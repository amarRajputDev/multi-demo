import { ProductBrowser } from "../components/product-browser";
import { revProducts } from "../products";

/** Featured product grid with client-side search, filter and sort. */
export function Featured() {
  return (
    <section
      aria-labelledby="rev-featured-title"
      className="border-b border-[#E8D9DC] bg-[#FAF4F3]"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold tracking-[0.36em] text-[#B4707F] uppercase">
            The lookbook · {revProducts.length} demo entries
          </p>
          <h2
            id="rev-featured-title"
            className="font-rev-heading mt-3 text-[clamp(2.2rem,5vw,3.6rem)] leading-[0.95] text-[#1A1618]"
          >
            Featured pieces
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#5F5458]">
            Search, filter and sort the demonstration catalogue below. Every
            piece is shown as &ldquo;Enquire for Price&rdquo; - pricing is
            confirmed by the seller, never assumed here.
          </p>
        </div>

        <ProductBrowser className="mt-10" />
      </div>
    </section>
  );
}
