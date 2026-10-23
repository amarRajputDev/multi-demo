import { notFound } from "next/navigation";
import TmSonsCollectionPage, {
  generateCollectionMetadata,
} from "@/demos/tm-sons/pages/collection";
import {
  TM_CATEGORY_SLUGS,
  tmCategoryBySlug,
} from "@/demos/tm-sons/data";

interface RouteProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return TM_CATEGORY_SLUGS.map((category) => ({ category }));
}

export async function generateMetadata({ params }: RouteProps) {
  const { category: slug } = await params;
  const category = tmCategoryBySlug(slug);
  if (!category) return {};
  return generateCollectionMetadata(category);
}

export default async function CollectionRoute({ params }: RouteProps) {
  const { category: slug } = await params;
  const category = tmCategoryBySlug(slug);
  if (!category) notFound();
  return <TmSonsCollectionPage category={category} />;
}
