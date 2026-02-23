import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    const [productDetail, setProductDetail] = useState({});

    const { productid } = useParams();

    const fetchProductDetail = async () => {
        const data = await fetch(`https://dummyjson.com/products/${productid}`);
        const finalData = await data.json();
        setProductDetail(finalData);
    }

    console.log(productDetail);

    useEffect(() => {
        fetchProductDetail();
    }, [])


    return (
        <div className="max-w-7xl mx-auto p-6 space-y-10">
            {/* PRODUCT SECTION */}
            <div className="bg-white shadow-lg rounded-2xl p-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* LEFT - IMAGES */}
                <div>
                    <div className="border rounded-xl overflow-hidden">
                        <img
                            src={productDetail.thumbnail}
                            className="w-full h-[450px] object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-4">
                        {
                            productDetail?.images?.map((v, i) => {
                                return (
                                    <img
                                        src={v}
                                        className="border rounded-lg"
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                {/* RIGHT - DETAILS */}
                <div className="flex flex-col space-y-6">
                    <span className="text-sm text-gray-500 uppercase tracking-wide">
                        {productDetail.category}
                    </span>
                    <h1 className="text-3xl font-bold text-gray-800">
                        {productDetail.title}
                    </h1>
                    <div className="text-gray-600">
                        Brand:
                        <span className="font-medium text-gray-800">{productDetail.brand}</span>
                    </div>
                    {/* Rating */}
                    <div className="flex items-center gap-3">
                        <div className="flex text-yellow-400 text-lg">★ ★ ★ ★ ☆</div>
                        <span className="text-gray-600 text-sm">
                            4.2 Overall Rating (132 Reviews)
                        </span>
                    </div>
                    {/* Price */}
                    <div className="flex items-center gap-4">
                        <span className="text-3xl font-bold text-green-600">$89.99</span>
                        <span className="text-lg text-gray-400 line-through">$129.99</span>
                        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                            30% OFF
                        </span>
                    </div>
                    <div>
                        <span className="font-medium text-gray-700">Availability:</span>
                        <span className="text-green-600 font-semibold">In Stock</span>
                    </div>
                    <div>
                        <span className="font-medium text-gray-700">Warranty:</span>
                        <span className="text-gray-600">1 Year Manufacturer Warranty</span>
                    </div>
                    <div>
                        <span className="font-medium text-gray-700">Tags:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                                Wireless
                            </span>
                            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                                Bluetooth
                            </span>
                            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                                Noise Cancelling
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-4 pt-4">
                        <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-medium">
                            Add to Cart
                        </button>
                        <button className="flex-1 border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition font-medium">
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
            {/* REVIEWS SECTION */}
            <div className="bg-white shadow-lg rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Customer Reviews (132)
                </h2>
                <div className="space-y-8">
                    {/* Review 1 */}
                    <div className="border-b pb-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-semibold text-gray-800">John D.</h3>
                                <div className="flex text-yellow-400">★ ★ ★ ★ ★</div>
                            </div>
                            <span className="text-sm text-gray-500">Jan 15, 2026</span>
                        </div>
                        <p className="mt-3 text-gray-600">
                            Excellent sound quality and very comfortable to wear for long hours.
                            Battery life is impressive. Highly recommended!
                        </p>
                    </div>
                    {/* Review 2 */}
                    <div className="border-b pb-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-semibold text-gray-800">Sarah M.</h3>
                                <div className="flex text-yellow-400">★ ★ ★ ★ ☆</div>
                            </div>
                            <span className="text-sm text-gray-500">Jan 10, 2026</span>
                        </div>
                        <p className="mt-3 text-gray-600">
                            Great headphones overall. Noise cancellation works well, but I wish
                            they were slightly lighter.
                        </p>
                    </div>
                    {/* Review 3 */}
                    <div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-semibold text-gray-800">Michael T.</h3>
                                <div className="flex text-yellow-400">★ ★ ★ ☆ ☆</div>
                            </div>
                            <span className="text-sm text-gray-500">Jan 2, 2026</span>
                        </div>
                        <p className="mt-3 text-gray-600">
                            Sound is good but delivery took longer than expected. Packaging could
                            be better.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
