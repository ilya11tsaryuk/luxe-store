import { ProductListType } from "./types"

export const navUrls = [
    {
        name: 'ALL',
        href: '/all'
    },
    {
        name: 'CLOTHES',
        href: '/clothes'
    },
    {
        name: 'SNEAKERS',
        href: '/sneakers'
    },

]

export const products: ProductListType = [
    { name: 'футболка', id: 1, category: 'clothes', price: 30, url: 'https://mojem.com/netcat_files/187_322.jpg?1692956256', description: 'Футболка белая из хлопка', variants: [39, 41, 42] },
    { name: 'свитер', id: 2, category: 'clothes', price: 130, url: 'https://mslanavi.com/s/img/wp-content/uploads/2015/10/%D0%9A%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%B8%D0%B5-%D0%B2%D1%8F%D0%B7%D0%B0%D0%BD%D1%8B%D0%B5-%D1%81%D0%B2%D0%B8%D1%82%D0%B5%D1%80%D0%B0-1.jpg' },
    { name: 'кроссовки', id: 2, category: 'sneakers', price: 50, url: 'https://n1s2.hsmedia.ru/c7/c0/f0/c7c0f074c3eb0522c76c8aeb86302719/728x546_1_ff9d91796e16be65d13f7997d62b30e8@1280x960_0xac120003_6128636291652972718.jpeg' },
]