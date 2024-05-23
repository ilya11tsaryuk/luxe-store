import { getProductsByCategory, getSearchProducts } from "@/app/api/products";
import { clothesCategory, products } from "@/app/constants";
import { ProductsList } from "@/app/ui/components/ProductsList";
import { notFound } from "next/navigation";

export default async function Page({ searchParams }: { searchParams: { query: string } }) {
    const { data, error } = await getSearchProducts(searchParams.query)
    if (error) {
        notFound()
    }
    return (
        <ProductsList products={data} />
    )
};
