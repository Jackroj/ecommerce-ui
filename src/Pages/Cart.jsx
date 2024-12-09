import { useNavigate } from "react-router";
import PriceLabel from "../Component/PriceLabel";
import { CartItems } from "../utlis/content";
import Layout from "./Layout";

export default function Cart() {
    const subtotal = CartItems.reduce((total, item) => total + item.price * item.no_of_items, 0);
    const tax = 0; 
    const shipping = 10;
    const total = subtotal + tax + shipping;
    let navigation = useNavigate();

    const handleCheckOut = () => {
        navigation('/checkout');
    }
    return (<>
    <Layout>
    <section className="py-12 bg-white sm:py-16 lg:py-20">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 lg:items-start xl:grid-cols-6 gap-y-10 lg:gap-x-12 xl:gap-x-16">
                <div className="lg:col-span-3 xl:col-span-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-900">Your Cart</h1>

                        <p className="text-sm font-medium text-gray-500">4 Items in cart</p>
                    </div>

                    <hr className="mt-6 border-gray-200" />

                    <div className="flow-root mt-7">
                        <ul className="divide-y divide-gray-200 -my-7">
                            {CartItems.map((product)=>(<li key={product.id} className="flex py-7">
                                <div className="flex-shrink-0">
                                    <img className="object-cover w-16 h-16 rounded-lg" src={product.image} alt="" />
                                </div>

                                <div className="flex-1 ml-5">
                                    <div className=" sm:grid sm:grid-cols-2 sm:gap-x-5">
                                        <div className="pr-9 sm:pr-5">
                                            <p className="text-base font-bold text-gray-900">{product.title}</p>
                                            <p className="mt-1.5 text-sm font-medium text-gray-500">{product.category}</p>
                                        </div>

                                        <div className="flex items-end justify-between mt-3 sm:justify-end sm:pr-14 sm:items-start sm:mt-0">
                                            <p className="flex-shrink-0 w-20 text-base font-bold text-left text-gray-900 sm:text-right sm:order-2 sm:ml-8">${product.price}</p>

                                            <div className="sm:order-1">
                                                <select name="" id="" className="block w-20 py-2 pl-4 pr-8 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md caret-gray-900 focus:ring-gray-900 focus:border-gray-900">
                                                    {product.no_of_items && <option value="" selected>{product.no_of_items}</option>}
                                                    {[1,2,3,4].map((item, index)=>(<>{item == product.no_of_items ? <></> : <option value="">{item}</option>}</>))}
                                                </select>
                                            </div>

                                            <div className="absolute top-0 right-0 flex">
                                                <button type="button" className="inline-flex p-2 -m-2 text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:text-gray-900">
                                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>))}

                        </ul>
                    </div>
                </div>

                <div className="lg:col-span-2 lg:top-6 lg:mt-14">
                    <div className="overflow-hidden rounded bg-gray-50">
                        <div className="px-4 py-6 sm:p-6 lg:p-8">
                            <div className="flow-root">
                                <div className="-my-5 divide-y divide-gray-200">
                                    <PriceLabel text={'Subtotal'} price={subtotal}/>
                                    <PriceLabel text={'Tax'} price={tax.toFixed(2)}/>
                                    <PriceLabel text={'Shipping'} price={shipping.toFixed(2)}/>
                                    <PriceLabel text={'Total'} price={total.toFixed(2)}/>
                                </div>
                            </div>

                            <div className="mt-6 space-y-4">
                                <button
                                    type="button"
                                    onClick={handleCheckOut}
                                    className="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                                >
                                    Check Out
                                </button>

                                <button
                                    type="button"
                                    className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        w-full
                                        px-6
                                        py-4
                                        text-sm
                                        font-bold
                                        text-gray-900
                                        transition-all
                                        duration-200
                                        bg-transparent
                                        border-2 border-gray-300
                                        rounded-md
                                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
                                        hover:bg-gray-200
                                        focus:bg-gray-200
                                    "
                                >
                                    Continue Shopping
                                </button>
                            </div>
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