import Image from "next/image";
import { ProductsList } from "./ui/components/ProductsList";
import { notFound } from "next/navigation";
import { getPopularProducts } from "./api/products";

export default async function Home() {

  const { data, error } = await getPopularProducts()
  if (error) {
    notFound()
  }

  return (
    <main>
      <ProductsList products={data} />
    </main>
  );
}
