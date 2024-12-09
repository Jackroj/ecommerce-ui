import { AllProducts } from "../utlis/content";
import PriceLabel from "../Component/PriceLabel";
import Layout from "./Layout";
import { parsePrice } from "../utlis/helper";

export default function OrderConfirmed()
{
    let OrderedProducts= [];
    const subtotal = AllProducts.reduce((total, item) => total + parsePrice(item.price), 0);
    const total = subtotal;
    OrderedProducts = AllProducts.slice(3,8);
    return (<>
    <Layout>
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto">
            <nav className="flex">
                <ol role="list" className="flex flex-wrap gap-y-5 md:gap-y-0 items-center gap-x-1.5">
                    <li>
                        <div className="-m-1">
                            <a href="#" title="" className="inline-flex items-center p-1 text-sm font-medium text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:text-gray-900 focus:ring-gray-900 hover:text-gray-700">
                                Cart
                                <span className="inline-flex items-center justify-center w-5 h-5 ml-2 text-xs font-bold bg-gray-400 rounded-full text-gray-50"> 4 </span>
                            </a>
                        </div>
                    </li>

                    <li>
                        <div className="flex items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                            <div className="-m-1">
                                <a href="#" title="" className="p-1 ml-1.5 text-sm font-medium text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:text-gray-900 focus:ring-gray-900 hover:text-gray-700"> Personal Information </a>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="flex items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                            <div className="-m-1">
                                <a href="#" title="" className="p-1 ml-1.5 text-sm font-medium text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:text-gray-900 focus:ring-gray-900 hover:text-gray-700"> Shipping Address </a>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="flex items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                            <div className="-m-1">
                                <a href="#" title="" className="p-1 ml-1.5 text-sm font-medium text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:text-gray-900 focus:ring-gray-900 hover:text-gray-700"> Payment Method </a>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="flex items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                            <div className="-m-1">
                                <a href="#" title="" className="p-1 ml-1.5 text-sm font-medium text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:text-gray-900 focus:ring-gray-900 hover:text-gray-700" aria-current="page"> Confirmation </a>
                            </div>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="mt-6 overflow-hidden bg-white rounded-lg shadow md:mt-10">
                <div className="absolute top-4 right-4">
                    <button type="button" className="inline-flex items-center justify-center px-4 py-3 text-xs font-bold text-gray-900 transition-all duration-200 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-200">
                        View invoice
                    </button>
                </div>

                <div className="px-4 py-6 sm:px-8 sm:py-10">
                    <div className="-my-8 divide-y divide-gray-200">
                        <div className="pt-16 pb-8 text-center sm:py-8">
                            <svg className="w-10 h-10 mx-auto text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <h1 className="mt-4 text-2xl font-bold text-gray-900">We received your order!</h1>
                            <p className="mt-2 text-sm font-normal text-gray-600">Your order #2939993 is completed and ready to ship</p>
                        </div>

                        <div className="py-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-x-20">
                                <div>
                                    <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase">Shipping Address</h2>
                                    <p className="mt-6 text-sm font-medium text-gray-600">Wilson Baker</p>
                                    <p className="mt-3 text-sm font-medium text-gray-600">4517 Washington Ave. Manchester, Kentucky 39495, USA</p>
                                </div>

                                <div>
                                    <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase">Payment Info</h2>
                                    <p className="mt-6 text-sm font-medium text-gray-600">Credit Card</p>
                                    <p className="mt-1 text-sm font-medium text-gray-600">
                                        VISA<br />
                                        **** 4660
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="py-8">
                            <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase">Order Items</h2>

                            <div className="flow-root mt-8">
                                <ul className="divide-y divide-gray-200 -my-7">
                                   {OrderedProducts.map((product)=>( <li key={product.id} className="flex items-start justify-between space-x-5 py-7 md:items-stretch">
                                        <div className="flex items-stretch">
                                            <div className="flex-shrink-0">
                                                <img className="object-cover w-20 h-20 rounded-lg" src={product.images[0]} alt="" />
                                            </div>

                                            <div className="flex flex-col justify-between ml-5 w-44">
                                                <p className="flex-1 text-sm font-bold text-gray-900">{product.title}</p>
                                                <p className="mt-1.5 text-sm font-medium text-gray-500">{product.category}</p>
                                            </div>
                                        </div>

                                        <div className="ml-auto">
                                            <p className="text-sm font-bold text-right text-gray-900">{product.price}</p>
                                        </div>
                                    </li>))}
                                </ul>
                            </div>
                        </div>

                        <div className="py-8">
                            <ul className="space-y-4">
                                    <PriceLabel text={'Subtotal'} price={subtotal}/>
                                    <PriceLabel text={'Total'} price={total.toFixed(2)}/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</Layout>
    </>);
}