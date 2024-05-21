import { notFound } from "next/navigation";
import { ProductType } from "@/app/types";
import { products } from "@/app/constants";
import { ProductPage } from "@/app/pages/ProductPage";
// TODO generate metadata

export default async function Page({
    params,
    searchParams,
}: {
    params: { id: string, category: string };
    searchParams: { variant?: string };
}) {
    const product: ProductType = products[0]
    const selectedValue = Number(searchParams.variant)
    if (!product) {
        notFound();
    }

    return (
        <ProductPage product={product} selectedValue={selectedValue} />
    );
}
