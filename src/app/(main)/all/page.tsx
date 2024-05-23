import { getAllProducts } from "@/app/api/products";
import { ProductsList } from "@/app/ui/components/ProductsList";
import { notFound } from "next/navigation";

export default async function Page() {
    const { data, error } = await getAllProducts()

    if (error) {
        notFound()
    }
    return (
        <ProductsList products={data} />
    )
}