import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import Layout from "./Layout";
import { AllProducts, ProductDetails } from "../utlis/content";
import Rating from "../Component/Ratings";
import BreadCrumbs from "../Component/Breacrumbs";

const productReviews = [
    {
        id: 1,
        name: 'Kristin Watson',
        profileImage: 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/product-details/2/avatar-1.png',
        comment: 'The quality of the gold is excellent, and the design is just as shown in the pictures. Highly recommend!',
        date: 'March 14, 2021',
        rating: 5
    },
    {
        id: 2,
        name: 'Ronald Richards',
        profileImage: 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/product-details/2/avatar-2.png',
        comment: 'I purchased a gold necklace from here, and it was a seamless experience. The delivery was fast too.',
        date: 'April 2, 2021',
        rating: 4
    },
    {
        id: 3,
        name: 'Jane Cooper',
        profileImage: 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/product-details/2/avatar-1.png',
        comment: 'The craftsmanship is remarkable. However, I felt the price was a bit on the higher side.',
        date: 'May 20, 2021',
        rating: 3
    },
    {
        id: 4,
        name: 'Leslie Alexander',
        profileImage: 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/product-details/2/avatar-3.png',
        comment: 'Beautiful gold rings! Bought one for an anniversary gift, and my partner loved it.',
        date: 'June 5, 2021',
        rating: 5
    }
]


const ProductView = () => {
    let params = useParams();
    const product = AllProducts.find((item) => item.id === parseInt(params.id));
    const [imagePreview, setImagePreview] = useState({
        id: 0,
        src: product.images[0]
    });
    let navigation = useNavigate();

  

    if (!product) {
        return <div>Product not found!</div>;
    }

    const handleAddCart = () =>{
        navigation('/cart');
    }

  return (
    <Layout>
        <section className="py-12 bg-gray-50 sm:py-16">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
       
    <BreadCrumbs path={product.category}/>
        <div className="grid grid-cols-1 mt-8 lg:grid-rows-1 gap-y-12 lg:mt-12 lg:grid-cols-5 lg:gap-y-16 lg:gap-x-12 xl:gap-x-16">
            <div className="lg:col-span-3 lg:row-end-1">
                <div className="lg:flex lg:items-start">
                    <div className="lg:order-2 lg:ml-5">
                        <div className="overflow-hidden border-2 border-transparent rounded-lg">
                            <img className="object-cover w-full h-full" src={imagePreview.src} alt="" />
                        </div>
                    </div>

                    <div className="w-full lg:w-32 mt-2.5 lg:mt-0 lg:flex-shrink-0 lg:order-1">
                        <div className="flex flex-row items-stretch lg:flex-col lg:space-y-5 space-x-2.5 lg:space-x-0">
                           

                           {product.images.map((image, index)=><button key={index} onClick={()=> setImagePreview({id: index, src: image})} type="button" className="flex-1">
                                <div className={`overflow-hidden border-2 ${imagePreview.id === index ? 'border-gray-900': "border-transparent"} rounded-lg aspect-w-1 aspect-h-1 sm:aspect-w-4 sm:aspect-h-3`}>
                                    <img className="object-cover w-full h-full" src={image} alt="" />
                                </div>
                            </button>)}

                           
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-2 lg:row-end-2 lg:row-span-2">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{product.title}</h1>

                <div className="flex items-center mt-5">
                    <div className="flex items-center space-x-px">
                        <Rating rating={3}/>
                    </div>
                    {product.reviews && <p className="ml-2 text-sm font-medium text-gray-400">{product.reviews} Reviews</p>}
                </div>

                <div className="flex items-center mt-8">
                    <p className="text-3xl font-bold text-gray-900">${product.price}</p>
                    <p className="ml-2 text-2xl font-bold text-gray-500">
                        <del> ${product.delPrice} </del>
                    </p>
                </div>

                <div className="flex items-center mt-3 text-sm font-medium text-gray-500">
                    <svg className="w-4 h-4 mr-2.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                    </svg>
                    Save {ProductDetails.offer}% right now
                </div>

                <div className="flex items-center mt-10 space-x-4">
                    <button
                        type="button"
                        onClick={handleAddCart}
                        className="inline-flex items-center justify-center px-12 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border-2 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                    >
                        Add to cart
                    </button>

                    <button
                        type="button"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            px-4
                            py-3.5
                            text-gray-900
                            transition-all
                            duration-200
                            bg-transparent
                            border-2 border-gray-300
                            rounded-md
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                            hover:border-gray-900 hover:bg-gray-100
                            focus:border-gray-900
                        "
                    >
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>

                <ul className="mt-8 space-y-3">
                    <li className="flex items-center text-sm font-medium text-gray-500">
                        <svg className="w-5 h-5 mr-2.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        Free shipping worldwide
                    </li>

                    <li className="flex items-center text-sm font-medium text-gray-500">
                        <svg className="w-5 h-5 mr-2.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        100% Secured Payment
                    </li>

                    <li className="flex items-center text-sm font-medium text-gray-500">
                        <svg className="w-5 h-5 mr-2.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Made by the Professionals
                    </li>
                </ul>
            </div>

            <div className="lg:col-span-3">
                <div className="border-b border-gray-200">
                    <nav className="flex -mb-px space-x-8 sm:space-x-14">
                        <a href="#" title="" className="py-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 whitespace-nowrap"> Description </a>

                        <a href="#" title="" className="inline-flex items-center py-4 text-sm font-medium text-gray-900 border-b-2 border-gray-900 whitespace-nowrap">
                            Reviews
                            <span className="block px-2 py-0.5 ml-2 text-xs font-bold bg-gray-400 rounded-full text-gray-50"> 157 </span>
                        </a>

                        <a href="#" title="" className="py-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 whitespace-nowrap"> Support </a>
                    </nav>
                </div>

                <div className="flow-root mt-8 sm:mt-12">
                    <ul className="divide-y divide-gray-100 -my-9">
                    {productReviews.map((review)=>(<li className="py-8">
                            <div className="flex items-start">
                                <img className="flex-shrink-0 rounded-full w-11 h-11" src={review.profileImage} alt="" />

                                <div className="ml-6">
                                    <div className="flex items-center space-x-px">
                                    <Rating rating={review.rating}/>
                                    </div>
                                    <p className="mt-5 text-base font-normal leading-7 text-gray-900">{review.comment}</p>
                                    <p className="mt-5 text-sm font-bold text-gray-900">{review.name}</p>
                                    <p className="mt-1 text-sm font-normal text-gray-500">{review.date}</p>
                                </div>
                            </div>
                        </li>))}

                    </ul>
                </div>

                <div className="mt-8 text-center lg:pl-16 sm:mt-12 lg:text-left">
                    <button type="button" className="inline-flex items-center justify-center text-xs font-bold tracking-widest text-gray-400 uppercase transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                        <svg className="w-4 h-4 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Load more reviews
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
    </Layout>
  );
};

export default ProductView;
