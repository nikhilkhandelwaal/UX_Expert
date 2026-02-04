import React from 'react'


export default function ProductCard(props) {
    return (
        <div className='border w-[20%] p-3'>
            <div>
                <img src={props.image} alt="" className='w-[200px]' />
            </div>
            <div>
                <h1 className='text-bold'>{props.title}</h1>
                <h2 className='text-[14px] text-gray-800'>Category: {props.category}</h2>
                <h2>Price: {props.price}</h2>
                <h2>Rating: {props.rating}</h2> <span>Discount: ({props.discount}%)</span>
            </div>
        </div>
    )
}
