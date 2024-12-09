import { useNavigate } from "react-router";
import { AllProducts } from "../../utlis/content";

export default function Products({type}) {
    let navigation = useNavigate();
    let FilteredProductList = [];

    if (type === "rings") {
        FilteredProductList = AllProducts.slice(0, 5);
    } else if (type === "necklace") {
        FilteredProductList = AllProducts.slice(15, 19);
    } else if (type === "bracelets") {
        FilteredProductList = AllProducts.slice(11, 15);
    } else if (type === "earrings") {
        FilteredProductList = AllProducts.slice(6, 11);
    }
    return (<>
    <section className="">
        <div className="grid grid-cols-2 gap-5 text-center lg:grid-cols-3 lg:gap-0">
           

           {FilteredProductList.map((product)=>(<div className="flex flex-col border border-gray-200 lg:-ml-px">
                <div className="flex-shrink-0">
                    <img className="object-contain mx-auto mix-blend-multiply" src={product.images[0]} alt="" />
                </div>
                <div className="flex flex-col items-center flex-1 px-4 pb-8">
                    <h3 className="text-base font-bold text-gray-900 mt-2.5">
                        <a href="#" title="" className=""> {product.title} </a>
                    </h3>
                    <p className="flex-1 mt-3 text-base font-bold text-gray-500">{product.price}</p>
                    <del>{product.delPrice}</del>
                    <button type="button" onClick={()=> {window.scrollTo(0, 0); navigation('/cart')}} className="inline-flex items-center justify-center px-6 py-3 mt-6 text-sm font-bold text-white transition-all duration-200 bg-gray-900 rounded-md sm:px-12 focus:outline-none hover:bg-gray-700">Buy Now</button>
                </div>
            </div>))}

           
        </div>
</section> 
    </>);
}