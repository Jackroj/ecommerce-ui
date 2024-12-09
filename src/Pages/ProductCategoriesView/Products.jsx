import { useNavigate } from "react-router";
import { Products as productList } from "../../utlis/content";

export default function Products() {
    let navigation = useNavigate();
    return (<>
    <section className="">
        <div className="grid grid-cols-2 gap-5 text-center lg:grid-cols-3 lg:gap-0">
           

           {productList.map((product)=>(<div className="flex flex-col border border-gray-200 lg:-ml-px">
                <div className="flex-shrink-0">
                    <img className="object-contain mx-auto mix-blend-multiply" src={product.imageSrc} alt="" />
                </div>
                <div className="flex flex-col items-center flex-1 px-4 pb-8">
                    <h3 className="text-base font-bold text-gray-900 mt-2.5">
                        <a href="#" title="" className=""> {product.name} </a>
                    </h3>
                    <p className="flex-1 mt-3 text-base font-bold text-gray-500">{product.price}</p>
                    <button type="button" onClick={()=> navigation('/cart')} className="inline-flex items-center justify-center px-6 py-3 mt-6 text-sm font-bold text-white transition-all duration-200 bg-gray-900 rounded-md sm:px-12 focus:outline-none hover:bg-gray-700">Buy Now</button>
                </div>
            </div>))}

           
        </div>
</section> 
    </>);
}