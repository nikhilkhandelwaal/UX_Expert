import React, { useState } from 'react'

export default function App() {

  const [todo, setTodo] = useState(['hello', 'everyone', 'Sharda', 'welcome']);

  const addTodo = (event) => {
    event.preventDefault();
    const todoData = [...todo];
    todoData.push(event.target.input.value);
    setTodo(todoData);
  }


  return (
    <div className='m-auto max-w-3xl'>
      <div className='shadow border border-red-100  m-4 p-4'>
        <form action="" className='flex justify-between' onSubmit={addTodo}>
          <input type='text' className='border w-[75%] rounded-md p-2' name='input' />
          <button className='bg-blue-500 px-3 py-2 rounded-md text-white cursor-pointer'>
            Add Todo
          </button>
        </form>
      </div>
      <div className='p-2'>
        {
          todo.map((v, i) => {
            return (
              <div key={i} className='p-2 border border-gray-200 m-2 cursor-pointer'>{v}</div>
            )
          })
        }
      </div>
    </div>
  )
}
