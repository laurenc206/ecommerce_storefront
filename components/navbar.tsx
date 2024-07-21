import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories"
import MobileMenu from "./mobile-menu";

export const revalidate = 0;

const Navbar = async () => {
 const categories = await getCategories();

 return (
    <div className="flex flex-col">
        <div className="border-b">
        <Container>
            <div className="relative px-6 flex py-1 mt-1 justify-between">
                  
                <Link href="/" className="flex lg:ml-0 gap-x-2 items-center">
                    <img src="/logo.svg" alt="/logo.svg" className="h-[25px]"/>
                    <p className="font-bold text-xl">STORE</p>
                </Link>
                <div className="flex space-x-6">
                    <MobileMenu data={categories} />
                    <NavbarActions />
                </div>
            </div>
        </Container>
        </div>
        <div className="border-b hidden md:block">
            <Container>
                <div className="px-6 py-2 relative">
                    <MainNav data={categories}/>   
                </div>
                
            </Container>
        </div>
    </div>
 );
}

export default Navbar;