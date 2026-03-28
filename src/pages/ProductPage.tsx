import { Separator } from "@/components/ui/separator"
const ProductPage = () => {
    return (
        <div className="min-h-screen w-full font-playfair"
            style={{
                background: "linear-gradient(160deg, #020408 0%, #04091a 25%, #060d24 50%, #04091a 75%, #020408 100%)",
            }}
        >
            {/* Page Title */}
            <div className="flex flex-col items-center pt-20 pb-12">
                <h1 className="font-playpen text-5xl md:text-7xl text-gray-200 tracking-wide">
                    Products
                </h1>
                <br />
            <Separator/>
            </div>
            

            <div className="text-white px-20">Aici urmeaza sa afisam produsele</div>

        </div>
    );
};

export default ProductPage;