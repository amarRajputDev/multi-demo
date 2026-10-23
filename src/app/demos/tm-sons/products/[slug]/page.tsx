import { notFound } from "next/navigation";
import TmSonsProductPage, {
  generateProductMetadata,
} from "@/demos/tm-sons/pages/product";
import { tmProducts, tmProductBySlug } from "@/demos/tm-sons/data";

interface RouteProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return tmProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: RouteProps) {
  const { slug } = await params;
  const product = tmProductBySlug(slug);
  if (!product) return {};
  return generateProductMetadata(product);
}

export default async function ProductRoute({ params }: RouteProps) {
  const { slug } = await params;
  const product = tmProductBySlug(slug);
  if (!product) notFound();
  return <TmSonsProductPage product={product} />;
}
