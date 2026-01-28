import React, { useState } from 'react'

export default function Counter(props) {

    const [count, setCount] = useState(1);

    // let num = 10;

    const inc = () => {
        setCount(count + 1);
    }
    const decs = () => {
        setCount(count - 1);
    }



    return (
        <div className='d-flex justify-content-center gap-4 my-3 py-3 bg-secondary-subtle'>
            <button onClick={decs} className='btn btn-primary'>-</button>
            <h1>{count}</h1>
            <button onClick={inc} className='btn btn-primary'>+</button>
            {/* <h1 className={`${count >= 5 ? 'text-success' : ''}`}>{count * props.price}</h1> */}
        </div>
    )
}
