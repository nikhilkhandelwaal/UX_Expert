import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function App() {
  // const [count, setCount] = useState(0);

  const count = useSelector((state) => state.counter.value);



  return (
    <>
      <div className='main'>
        <button >-</button>
        <h1>{count}</h1>
        <button >+</button>
      </div>
    </>
  )
}
