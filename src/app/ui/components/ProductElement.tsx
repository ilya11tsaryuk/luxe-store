import { ProductType } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

export const ProductElement = (product: ProductType) => {
    console.log(product, 'product in elem')
    return (
        <li data-testid="ProductElement" className="hover:bg-neutral-100 rounded-md">
            <Link href={`${product.category}/${product.id}`} key={product.id}>
                <div>
                    <Image
                        className="p-2"
                        src={product.url}
                        alt={product.name ?? ""}
                        width={512}
                        height={512} />
                    <div className="mt-2 flex justify-between px-4 py-2 rounded-md">
                        <div>
                            <h3 className="mt-1 text-sm font-semibold text-neutral-900">{product.name}</h3>

                        </div>
                        <p className="mt-1 text-sm font-medium text-neutral-900" data-testid="ProductElement_PriceRange">
                            {product.price}$
                        </p>
                    </div>
                </div>
            </Link>
        </li>
    )
};


{/* {product?.thumbnail?.url && (
                        <ProductImageWrapper
                            loading={loading}
                            src={product.thumbnail.url}
                            alt={product.thumbnail.alt ?? ""}
                            width={512}
                            height={512}
                            sizes={"512px"}
                            priority={priority}
                        />
                    )} */}


{/* <h3 className="mt-1 text-sm font-semibold text-neutral-900">{product.name}</h3>
                        <p className="mt-1 text-sm text-neutral-500" data-testid="ProductElement_Category">
                            {product.category?.name}
                        </p> */}