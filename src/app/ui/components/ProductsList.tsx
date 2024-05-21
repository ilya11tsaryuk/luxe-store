import { ProductListType } from "@/app/types";
import { ProductElement } from "./ProductElement";

export const ProductsList = (prop: { products: ProductListType }) => {
    return (
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl p-8 pb-16">
            {prop.products.map((product) => (
                <ProductElement
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    category={product.category}
                    url={product.url}
                />
            ))}
        </ul>
    )
};

