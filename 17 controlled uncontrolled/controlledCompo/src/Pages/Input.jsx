import React, { useState } from 'react'

export default function Input() {

    const [inputValue, setInputValue] = useState(20);


    return (
        <div className="flex items-center gap-2 p-4">
            <input
                type="text"
                placeholder="Type..."
                className="w-80 border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition">
                Submit
            </button>
        </div>
    )
}
