import { useNavigate } from "react-router";
import PriceLabel from "../../Component/PriceLabel";
import { OrderDetails } from "../../utlis/content";
import Layout from "../Layout";
import ContactForm from "./ContactForm";
import ShippingForm from "./ShippingForm";
import PaymentForm from "./PaymentForm";

export default function CheckOut()
{

    const subtotal = OrderDetails.reduce((total, item) => total + item.price * item.no_of_items, 0);
    const tax = 0; 
    const shipping = 10;
    const total = subtotal + tax + shipping;
    let navigation = useNavigate();

    const handleConfirm = () => {
        navigation('/confirm/order');
    }
    return (<>
    <Layout>
    <section className="py-12 bg-white sm:py-16 lg:py-20">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-6xl mx-auto">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
            </div>

            <div className="grid grid-cols-1 mt-8 lg:grid-cols-5 lg:items-start xl:grid-cols-6 gap-y-10 lg:gap-x-12 xl:gap-x-16">
                <div className="lg:order-2 lg:top-6 lg:col-span-2">
                    <div className="overflow-hidden rounded bg-gray-50">
                        <div className="px-4 py-6 sm:p-6 lg:p-8">
                            <h3 className="text-xl font-bold text-gray-900">Order details</h3>

                            <div className="flow-root mt-8">
                                <ul className="divide-y divide-gray-200 -my-7">

                                    {OrderDetails.map((product) => (<li key={product.id} className="flex items-stretch justify-between space-x-5 py-7">
                                        <div className="flex-shrink-0">
                                            <img className="object-cover w-16 h-16 rounded-lg" src={product.image} alt="" />
                                        </div>

                                        <div className="flex flex-col justify-between flex-1 ml-5">
                                            <div className="flex-1">
                                                <p className="text-base font-bold text-gray-900">{product.title}</p>
                                                <p className="mt-1 text-sm font-medium text-gray-500">{product.category}</p>
                                            </div>
                                            <p className="mt-2 text-sm font-bold text-gray-900">${product.price}</p>
                                        </div>

                                        <div className="ml-auto">
                                            <button type="button" className="inline-flex p-2 -m-2 text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:text-gray-900">
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </li>))}
                                </ul>
                            </div>

                            <hr className="mt-6 border-gray-200" />

                            <div className="flow-root mt-5">
                                <div className="-my-5 divide-y divide-gray-200">
                                    <PriceLabel text={'Subtotal'} price={subtotal}/>
                                    <PriceLabel text={'Tax'} price={tax.toFixed(2)}/>
                                    <PriceLabel text={'Shipping'} price={shipping.toFixed(2)}/>
                                    <PriceLabel text={'Total'} price={total.toFixed(2)}/>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button
                                    type="button"
                                    onClick={handleConfirm}
                                    className="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                                >
                                    Confirm payment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-6 border-t border-gray-200 lg:order-1 lg:col-span-3 xl:col-span-4">
                    <div className="flow-root">
                        <div className="divide-y divide-gray-200 -my-7">
                            <ContactForm/>
                            <ShippingForm/>
                            <PaymentForm/>
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