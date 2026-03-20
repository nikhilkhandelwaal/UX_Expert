import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context/MainContext'

export default function Header() {

    const { cart } = useContext(Context);

    return (
        <div>
            <header className="bg-gray-800 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <h1 className="text-white text-3xl font-bold">MyShop</h1>
                </div>
                <nav className="flex space-x-4 text-white">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About Us</Link>
                    <Link to={'/contact'}>Contact Us</Link>
                    <Link to={'/shop'}>Shop</Link>
                </nav>
                <div>
                    <button className="bg-white text-gray-800 px-4 py-2 rounded mr-2">Cart({cart})</button>
                    <button className="bg-white text-gray-800 px-4 py-2 rounded">Login</button>
                </div>
            </header>
        </div>
    )
}
