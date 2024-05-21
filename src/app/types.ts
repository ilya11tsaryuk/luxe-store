export type ProductType = {
    id: number,
    name: string,
    category: string,
    price: number,
    url: string,
    variants?: number[],
    description?: string
}

export type ProductListType = ProductType[]
