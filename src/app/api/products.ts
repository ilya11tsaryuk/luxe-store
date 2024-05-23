import { notFound } from "next/navigation"
import { supabase } from "./supabase"

export const getAllProducts = async () => {
    const res = await supabase
        .from('products')
        .select('*')

    return res
}

export const getProductsByCategory = async (category: string) => {
    const res = await supabase
        .from('products')
        .select('*')
        .eq('category', category)

    return res
}

export const getPopularProducts = async () => {
    const res = await supabase
        .from('products')
        .select('*')
        .eq('popular', 'yes')

    return res
}

export const getProductById = async (id: number) => {
    const res = await supabase
        .from('products')
        .select('*')
        .eq('id', id)

    return res
}

export const getSelectedProducts = async (ids: number[]) => {
    const promises = ids.map(async (id) => {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .eq('id', id);

        if (error) {
            notFound()
        }

        return data;
    });

    const results = await Promise.all(promises);
    const products = results.filter(data => data !== null && data.length > 0).flat();

    return products;
}

export const getSearchProducts = async (query: string) => {

    if (query) {
        const res = await supabase
            .from('products')
            .select('*')
            .ilike('name', `%${query}%`);
        return res
    } else {
        const res = await supabase
            .from('products')
            .select('*')
        return res
    }

}