import React from 'react'
import ProductCard from './ProductCard'
import ProductsData from './ProductsData'

export default function App() {
  return (
    <>

      <h1 className='text-center text-4xl my-4'>Product List</h1>
      <div className='max-w-7xl m-auto flex justify-between flex-wrap gap-2'>

        {
          ProductsData.map(
            (value, index) => {
              // console.log(value);
              return (
                <ProductCard
                  title={value.title}
                  price={value.price}
                  rating={value.rating}
                  image={value.thumbnail}
                  category={value.category}
                  discount={value.discountPercentage}
                />
              )
            }
          )
        }
      </div>
    </>
  )
}
