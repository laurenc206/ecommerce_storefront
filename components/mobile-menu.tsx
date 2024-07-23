"use client";

import { Category } from "@/types"
import { Drawer, 
         DrawerTrigger, 
         DrawerTitle, 
         DrawerClose, 
         DrawerContent } from "./ui/drawer";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import MobileLinks from "./mobile-links";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
    data: Category[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ data }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const pathname = usePathname();
    const isDesktop = useMediaQuery("(min-width: 768px)");


  return (
    isDesktop ? <></> : 
   
        <Drawer direction="right" open={openMenu} onOpenChange={setOpenMenu}>
            <DrawerTrigger>
                <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerTitle/>
                    <div className="h-screen w-80 bg-white">
                        <div className="flex flex-col justify-between py-4 px-2 h-full overscroll-y-auto">
                            <DrawerClose asChild>

                                <MobileLinks data={data} />
                            </DrawerClose>
                        </div>          
                    </div>
            </DrawerContent>
        </Drawer>

  )
}

export default MobileMenu