import { getAllProducts } from "@/app/api/products";
import { ProductsList } from "@/app/ui/components/ProductsList";
import { notFound } from "next/navigation";

export default async function Page() {
    const { data, error } = await getAllProducts()
    console.log(data[0], 'data')
    if (error) {
        notFound()
    }
    return (
        <ProductsList products={data} />
    )
}