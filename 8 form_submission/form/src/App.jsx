import React, { useState } from 'react'
import Table from './Table'

export default function App() {

  const [userData, setUserData] = useState([]);

  const formSubmit = (event) => {
    event.preventDefault();
    const currentUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      age: event.target.age.value,
      status: event.target.status.value
    }

    console.log(event.target.status.value);
    const oldUserData = [...userData];

    oldUserData.push(currentUser);
    setUserData(oldUserData);

    event.target.reset();

  }

  return (
    <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Create User</h2>
          <form className="space-y-4" onSubmit={formSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter name"
                className="mt-1 p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                name='name'
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="mt-1 p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                name='email'
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                placeholder="Enter Age"
                className="mt-1 p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                name='age'
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select name='status' className="mt-1 p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                <option value={1}>Active</option>
                <option value={0}>Inactive</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
        <Table userData={userData} />
      </div>
    </div>

  )
}
