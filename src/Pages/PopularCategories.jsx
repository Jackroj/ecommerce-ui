import { CategoriesItem } from "../utlis/content";

export default function PopularCategories()
{
    
    return (<>
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Popular Categories</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
         

            {CategoriesItem.map((product)=>(<div key={product.id} className="relative overflow-hidden group">
                <div className="absolute inset-0">
                    <img className="object-cover w-full h-full transition-all duration-300 group-hover:-rotate-3 group-hover:scale-125" src={product.image} alt="" />
                </div>

                <div className="relative p-6">
                    <p className="text-lg font-bold text-white">{product.title}</p>
                    <p className="mt-1.5 text-sm font-medium text-white">{product.stock} Products</p>

                    <div className="mt-24">
                        <a
                            href={`/categories/view/${product.type}`}
                            title=""
                            className="inline-flex items-center justify-center px-3 py-2 text-xs font-medium text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                        >
                            Shop Now
                            <span className="absolute inset-0" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
            </div>))}

        </div>
    </div>
</section>
    </>);
}