import { useEffect, useState } from "react";
import { getProducts, updateProducts } from "@/api/request";
import {toast} from "sonner"
import type {Product } from "@/api/types"

const ProductPage = () => {
    const [products, setProducts] = useState<Product[]>([])
    useEffect(()=>{
        getProducts().then((response)=>{
            setProducts(response.data)
        }).catch((error)=>{
            toast.error(error.message)
        })
    }, [])

    // const updateProduct = () =>{
    //     updateProducts().then((response)=>{

    //     })
    // }

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
            </div>
            

            <div className="text-white px-20">
                {products.map((product)=>{
                    return (<div key={product.id} className="p-4 flex flex-col gap-3 items-start border border-border">
                        <span>Product name: {product.name}</span>
                        <span>Product price: {product.price}</span>
                        <span>Product category: {product.category} </span>
                    </div>)
                })}
            </div>

        </div>
    );
};

export default ProductPage;