import { products } from "@/app/constants";
import { ProductsList } from "@/app/ui/components/ProductsList";

export default function Page() {
    return (
        <ProductsList products={products} />
    )
};
