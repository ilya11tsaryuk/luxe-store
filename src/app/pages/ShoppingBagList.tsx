import Image from "next/image";
import { ProductListType } from "../types";
import { CustomButton } from "../ui/components/atoms/CustomButton";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const ShoppingBagList = (props: { products: ProductListType }) => {
    const total = props.products.reduce((acc, item) => acc + item.price, 0);
    async function deleteAll() {
        'use server'
        const items = cookies()
            .getAll()
            .filter((cookie) => cookie.name.includes('item'))
            .map((item) => item.name)

        items.forEach((item) => {
            cookies().delete(item)
        })
        redirect('/')
    }

    async function removeItem(formData: FormData) {
        'use server'
        const id = formData.get("id") as string;
        console.log(id, 'id');

        cookies().delete(`${id}-item`);
        revalidatePath('/basket');
        redirect('/basket');
    }

    return (
        <section className="mx-auto max-w-7xl p-8">
            <h1 className="mt-8 text-3xl font-bold text-neutral-900">Твоя корзина</h1>
            <form className="mt-12">
                <ul
                    data-testid="CartProductList"
                    role="list"
                    className="divide-y divide-neutral-200 border-b border-t border-neutral-200"
                >
                    {props.products.map((item) => (
                        <li key={item.id} className="flex py-4">
                            <div className="aspect-square h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border bg-neutral-50 sm:h-32 sm:w-32">
                                {item.url && (
                                    <Image
                                        src={item.url}
                                        alt={item.name ?? ""}
                                        width={200}
                                        height={200}
                                        className="h-full w-full object-contain object-center"
                                    />
                                )}
                            </div>
                            <div className="relative flex flex-1 flex-col justify-between p-4 py-2">
                                <div className="flex justify-between justify-items-start gap-4">
                                    <div>
                                        <h2 className="font-medium text-neutral-700">{item.name}</h2>
                                        <h2 className="font-medium text-neutral-400">{item.description}</h2>
                                    </div>
                                    <p className="text-right font-semibold text-neutral-900">
                                        Цена: {item.price}$
                                    </p>
                                </div>
                                <div className="flex justify-end">
                                    {/* <RemoveItemElem id={item.id} removeItem={removeItem} /> */}
                                    <input type="hidden" name="id" value={item.id} />
                                    <button
                                        className="text-sm text-neutral-500 hover:text-neutral-900"
                                        formAction={removeItem}>
                                        Удалить
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="mt-12">
                    <div className="rounded border bg-neutral-50 px-4 py-2">
                        <div className="flex items-center justify-between gap-2 py-2">
                            <div>
                                <p className="font-semibold text-neutral-900">Всего</p>
                                {/* <p className="mt-1 text-sm text-neutral-500">Shipping will be calculated in the next step</p> */}
                            </div>
                            <div className="font-medium text-neutral-900">
                                {total}$
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <button
                            disabled={!total}
                            formAction={deleteAll}
                            className={`inline-block max-w-full rounded border border-transparent bg-neutral-900 px-6 py-3 text-center font-medium text-neutral-50 ${!!total ? 'hover:bg-neutral-800' : ''} disabled:cursor-not-allowed  sm:px-16`}
                        >
                            Удалить все
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
};
