import Image from "next/image";
import { ProductsList } from "./ui/components/ProductsList";
import { products } from "./constants";

export default function Home() {

  return (
    <main>
      <ProductsList products={products} />
    </main>
  );
}
