import Image from "next/image";
import { ProductType } from "../types";
import { VariantSelector } from "../ui/components/VariantSelector";
import { CustomButton } from "../ui/components/atoms/CustomButton";
import { redirect } from "next/navigation";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export const ProductPage = (props: { product: ProductType, selectedValue: number }) => {
    const { product, selectedValue } = props
    async function addItem() {
        "use server";
        console.log(selectedValue, 'selec')
        // TODO save to cookie
        // revalidatePath("/");
        redirect("/");

    }
    return (
        <section className="mx-auto grid max-w-7xl p-8">
            <form className="grid gap-2 sm:grid-cols-2 lg:grid-cols-8" action={addItem}>
                <div className="md:col-span-1 lg:col-span-5">
                    <Image
                        priority={true}
                        alt={product.name ?? ""}
                        width={1024}
                        height={1024}
                        src={product.url}
                    />
                </div>
                <div className="flex flex-col pt-6 sm:col-span-1 sm:px-6 sm:pt-0 lg:col-span-3 lg:pt-16">
                    <div>
                        <h1 className="mb-4 flex-auto text-3xl font-medium tracking-tight text-neutral-900">
                            {product?.name}
                        </h1>
                        <div className="flex items-center gap-2 my-2" data-testid="ProductElement_Price">
                            <p className=" text-neutral-500">price:</p>
                            <p>{product.price}$</p>
                        </div>
                        {product.variants && (
                            <VariantSelector selectedValue={selectedValue} variants={product.variants} />
                        )}
                        <div className="mt-8">
                            <CustomButton type="submit" disabled={!selectedValue && !!product.variants} startIcon={<AddOutlinedIcon />}>add to basket</CustomButton>
                        </div>
                        {product.description && (
                            <div className="mt-8 space-y-6 text-sm text-neutral-500">
                                <div>{product.description}</div>
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </section>
    )
};
