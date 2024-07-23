"use client"

import { cn } from '@/lib/utils';
import { Category } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface MobileLinks {
    data: Category[],
    className?: string,   
}

const MobileLinks: React.FC<MobileLinks> = ({ data, className, ...props }) => {
    const pathname = usePathname();
    
    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }))
    //const routes = [{href: "/", label: "Featured", active: pathname === "/"}, ...data_routes]
  return (
    <div className="px-4 space-y-4">
        <div className="flex lg:ml-0 gap-x-2 items-center">
            <img src="/logo.svg" alt="/logo.svg" className="h-[25px]"/>
            <p className="font-bold text-xl">STORE</p>
        </div>

        <nav className= "flex flex-col space-y-8">
            <Link href="/" 
                className={cn("text-sm font-semibold transition-colors hover:text-black uppercase",
                           (pathname === "/") ? "text-black" : "text-neutral-500")}
                {...props}
                >
                Featured
            </Link>

            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                    "text-sm font-semibold transition-colors hover:text-black uppercase",
                    route.active ? "text-black" : "text-neutral-500"
                    )}
                    {...props}
                >
                {route.label.replace("'", "")}
                </Link>
            ))}
        </nav>
    </div>
  )
}

export default MobileLinks