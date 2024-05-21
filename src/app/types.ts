export type ProductType = {
    id: number,
    name: string,
    category: string,
    price: number,
    url: string,
    variants?: number[],
    description?: string,
    popular?: boolean
}

export type ProductListType = ProductType[]
