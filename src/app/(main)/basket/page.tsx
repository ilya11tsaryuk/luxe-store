import { getSelectedProducts } from "@/app/api/products";
import { ShoppingBagList } from "@/app/pages/ShoppingBagList";
import { cookies } from "next/headers";

export default async function Page() {
    const productsListId = cookies()
        .getAll()
        .filter((cookie) => cookie.name.includes('item'))
        .map((item) => {
            const id = Number(item.name.replace('-item', ''))
            return id
        })

    const products = await getSelectedProducts(productsListId)
    return (
        <ShoppingBagList products={products} />
    )
};
