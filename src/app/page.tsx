import Image from "next/image";
import { ProductsList } from "./ui/components/ProductsList";
import { products } from "./constants";
import { notFound } from "next/navigation";
import { getPopularProducts } from "./api/products";

export default async function Home() {

  const { data, error } = await getPopularProducts()
  if (error) {
    notFound()
  }
  // console.log(data)
  return (
    <main>
      <ProductsList products={data} />
    </main>
  );
}
