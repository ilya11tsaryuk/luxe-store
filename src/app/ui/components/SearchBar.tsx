'use client'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { SearchInput } from './SearchInput';
import { permanentRedirect, redirect } from 'next/navigation';

export const SearchBar = () => {
    async function onSubmit(formData: FormData) {
        const search = formData.get("search") as string;
        if (search && search.trim().length > 0) {
            permanentRedirect(`/search?query=${search}`)
        }
    }

    return (
        <form
            action={onSubmit}
            className="ml-auto flex rounded-md w-full px-2 py-1 relative items-center"
        >
            <label className="w-full">
                <span className="sr-only">search for products</span>
                <SearchInput />
            </label>
            <div className="absolute  right-1">
                <button
                    type="submit"
                    className="inline-flex aspect-square w-10 items-center justify-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 group-invalid:pointer-events-none group-invalid:opacity-80"
                >
                    <SearchOutlinedIcon />
                </button>
            </div>
        </form>
    );
};
