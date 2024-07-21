"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Category } from "@/types"

interface MainNavProps {
    data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({
    data
}) => {
    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }))

    return (
        <nav className="flex w-full justify-between px-24 lg:px-36">
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "text-sm font-semibold transition-colors hover:text-black uppercase",
                         route.active ? "text-black" : "text-neutral-500"
                    )}
                >
                    {route.label.replace("'", "")}
                </Link>
            ))}
        </nav>
    );
}

export default MainNav;