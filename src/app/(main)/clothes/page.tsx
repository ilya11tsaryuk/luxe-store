import { getProductsByCategory } from "@/app/api/products";
import { clothesCategory } from "@/app/constants";
import { ProductsList } from "@/app/ui/components/ProductsList";
import { notFound } from "next/navigation";

export default async function Page() {
    const { data, error } = await getProductsByCategory(clothesCategory)

    if (error) {
        notFound()
    }
    return (
        <ProductsList products={data} />
    )
};
