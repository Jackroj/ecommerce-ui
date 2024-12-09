import { Link, useNavigate } from "react-router"
import { Products, AllProducts } from "../utlis/content";
  
  export default function ProductList() {
    const ProductFilter = AllProducts;
    const navigate = useNavigate();
    const handleNavigation = (id) =>{
      console.log("ckick", id);
      
      navigate(`/view/${id}`);
    }

    return (
      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {ProductFilter.slice(5, 14).map((product) => (
            <div key={product.id} onClick={()=> {  window.scrollTo(0, 0); navigate(`/view/${product.id}`)}}  className=" bg-[#F5F5F5] overflow-hidden shadow-md flex flex-col">
            <div >
                <div className="overflow-hidden aspect-w-1 aspect-h-1">
                    <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110" src={product.images[0]} alt="" />
                </div>
                <h3 className="text-base font-bold text-gray-900">
                    <a href="#" title="">
                        {product.title}
                        <span className="absolute inset-0" aria-hidden="true"></span>
                    </a>
                </h3>
            </div>
            <p className="mt-2 text-sm font-bold text-gray-500">{product.price}</p>
            <div className="relative mt-auto">
                <button type="button" className="relative flex items-center justify-center w-full px-4 py-4 mt-8 text-sm font-bold text-gray-900 transition-all duration-200 bg-transparent hover:text-white group">
                    <span className="absolute inset-0 h-full transition-all duration-200 origin-bottom translate-y-full bg-gray-900 group-hover:translate-y-0"></span>
                    <span className="relative"> Add to cart </span>
                </button>
            </div>
        </div>
          ))}
        </div>
      </div>
    </div>
    )
  }
  