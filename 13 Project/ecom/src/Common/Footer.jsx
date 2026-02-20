import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="bg-gray-800 p-4 text-white flex items-center justify-between">
                <p>&copy; 2023 MyShop</p>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-blue-500">Terms and Conditions</a>
                    <a href="#" className="hover:text-blue-500">Privacy Policy</a>
                </div>
            </footer>
        </div>
    )
}
