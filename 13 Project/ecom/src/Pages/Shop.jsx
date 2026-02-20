import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Products from './Products'

export default function Shop() {
    return (
        <div>
            <h1 className='text-7xl my-20 text-center'>Welcome to Shop page</h1>
            <Products />
        </div>
    )
}
