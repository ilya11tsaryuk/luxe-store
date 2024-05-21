import Link from "next/link"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { MenuButton } from "./MenuButton";
import { SearchBar } from "./SearchBar";
import { NavList } from "./nav/NavList";
import { IconButton } from "@mui/material";

export const Header = () => {

    return (
        <header className="sticky top-0 z-20 bg-neutral-100 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-3 sm:px-8">
                <div className="flex items-center h-16 justify-between gap-4 md:gap-8">
                    <Link href={'/'}>
                        <div className="font-bold cursor-pointer">LUXE</div>
                    </Link>
                    <nav className="flex-1 flex gap-4 md:gap-8 items-center">
                        <NavList />
                        <SearchBar />
                        <div className="ml-auto md:ml-0 flex gap-8">
                            <MenuButton />
                            <Link className="" href={'/basket'}>
                                <IconButton>
                                    <ShoppingBagOutlinedIcon />
                                </IconButton>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
};
