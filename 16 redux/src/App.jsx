import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/reducer/counterSlice';

export default function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className='main'>
        <button onClick={() => dispatch(decrement())}>-</button>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </>
  )
}
// useSelector
// useDispatch