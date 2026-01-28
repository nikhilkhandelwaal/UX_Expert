import React, { useState } from 'react'

export default function App() {

  const [passShow, setPassShow] = useState(true);

  const changePassStatus = () => {
    setPassShow(!passShow);
  }


  return (
    <div className='m-auto max-w-3xl'>
      <div className='shadow border border-red-100 flex justify-between m-4 p-4'>
        <input type={passShow == true ? 'text' : 'password'} className='border w-[75%] rounded-md p-2' />
        <button onClick={changePassStatus} className='bg-blue-500 px-3 py-2 rounded-md text-white'>
          {passShow == true ? "Hide" : "Show"}

        </button>
      </div>
    </div>
  )
}
