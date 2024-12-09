
import { FeatureProduct } from "../utlis/content";
export default function FeatureItems()
{
    return (<>
    <section className="py-12 bg-white sm:py-16 lg:py-20">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Featured Items</h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-12 text-center sm:grid-cols-2 lg:gap-5 lg:grid-cols-4 sm:mt-16">
      
            {FeatureProduct.map((product) => (<div className=" bg-[#F5F5F5] overflow-hidden flex flex-col">
                <div >
                    <div className="overflow-hidden aspect-w-1 aspect-h-1">
                        <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110" src={product.image} alt="" />
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
            </div>))}
         

           
        </div>
    </div>
</section>
    </>);
}