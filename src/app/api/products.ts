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