
import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import getFeaturedBillboard from "@/actions/get-featured-billboard";
import FeaturedBillboards from "@/components/featured-billboards";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured:true })
    const billboards = await getFeaturedBillboard()

    return (
        <div>
            
        <Container>
            <div className="flex w-full relative">
                <FeaturedBillboards billboards={billboards}/>
            </div>
            <div className="space-y-10 pb-10">
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products}/>
                </div>
            </div>
        </Container>
        </div>
    )
}

export default HomePage;