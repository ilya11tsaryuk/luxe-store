import Link from "next/link";
import { NavLink } from "./NavLink";
import { navUrls } from "@/app/constants";

export const NavList = () => {

    return (
        <ul className="md:flex gap-3 items-center hidden">
            {navUrls.map((url) => (
                <NavLink key={url.href} name={url.name} href={url.href} />
            ))}
        </ul>
    )
};
