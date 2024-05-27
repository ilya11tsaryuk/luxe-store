import { notFound } from "next/navigation";
import { ProductType } from "@/app/types";
import { ProductPage } from "@/app/pages/ProductPage";
import { getProductById } from "@/app/api/products";
// TODO generate metadata

export default async function Page({
    params,
    searchParams,
}: {
    params: { id: string, category: string };
    searchParams: { variant?: string };
}) {
    const { data: products, error } = await getProductById(Number(params.id))
    const product = products[0] || {}
    const selectedValue = searchParams.variant || ''
    if (error) {
        notFound();
    }

    return (
        <ProductPage product={product} selectedValue={selectedValue} />
    );
}
