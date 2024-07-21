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
  return (
    <nav className= "flex flex-col space-y-4 px-4 pt-4">
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
  )
}

export default MobileLinks