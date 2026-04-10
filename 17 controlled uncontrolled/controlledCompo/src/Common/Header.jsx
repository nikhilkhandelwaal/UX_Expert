import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
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
                <button className="bg-white text-gray-800 px-4 py-2 rounded">Login</button>
            </header>
        </div>
    )
}
