'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const SearchInput = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [searchValue, setSearchValue] = useState(searchParams.get('query') || '');

    useEffect(() => {
        const currentQuery = searchParams.get('query');
        if (!currentQuery) {
            setSearchValue('');
        }
    }, [searchParams]);

    const handleChange = (term: string) => {
        setSearchValue(term)
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }
    return (
        <input
            type="text"
            onChange={(e) => handleChange(e.target.value)}
            name="search"
            placeholder="Search for products..."
            autoComplete="on"
            required
            value={searchValue}
            defaultValue={searchParams.get('query')?.toString()}
            className="h-10 w-full rounded-md border border-neutral-300 bg-transparent bg-white px-4 py-2 pr-10 text-sm text-black placeholder:text-neutral-500 focus:border-black focus:ring-black"
        />
    )
};
