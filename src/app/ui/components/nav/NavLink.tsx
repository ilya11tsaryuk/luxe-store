import Link from "next/link";

export const NavLink = (url: { name: string, href: string }) => {
    return (
        <li key={url.name} className="text-sm font-medium opacity-75">
            <Link href={url.href}>{url.name}</Link>
        </li>
    )
};
