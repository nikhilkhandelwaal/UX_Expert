import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Products() {

    const [products, setProducts] = useState([]);

    const fetchProduct = async () => {
        const apiData = await axios.get('https://dummyjson.com/products');
        setProducts(apiData.data.products);
    }

    useEffect(() => {
        fetchProduct();
    }, [])


    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                products.map((value, index) => {
                    return (
                        <ProductCard value={value} key={index} />
                    )
                })
            }

        </div>
    )
}

function ProductCard({ value }) {

    console.log(value);

    return (

        < div className="product-card bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden" >
            {/* Image */}
            < div className="relative" >
                <img
                    src={value.thumbnail}
                    alt="Product Image"
                    className="w-full h-56 object-cover"
                />
                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition cursor-pointer">
                    ❤️
                </button>
            </div >
            {/* Content */}
            < div className="p-4 flex flex-col justify-between space-y-2" >
                {/* Brand & Category */}
                < div >
                    <p className="text-sm text-gray-500">{value.brand}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                        {value.category}
                    </p>
                </div >
                {/* Title */}
                < h3 className="text-lg font-semibold text-[#1e2939] hover:text-black cursor-pointer line-clamp-2" >
                    {value.title}
                </h3 >
                {/* Rating */}
                < p className="text-sm text-yellow-500" >⭐ {value.rating}</p >
                {/* Price */}
                < div className="text-xl font-bold text-gray-900" > ${value.price}</div >
                {/* Buttons */}
                < div className="flex gap-2 mt-3" >
                    <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                        Quick View
                    </button>
                    <button className="flex-1 bg-[#1e2939] text-white py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer">
                        Add to Cart
                    </button>
                </div >
            </div >
        </div >

    )
}