import React from 'react'

export default function Table() {
  return (
    <div className='col-span-2'>
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                S.No
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Status
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Age
              </th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2">John Doe</td>
              <td className="px-4 py-2">
                <span className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                  Active
                </span>
                <span className="px-2 py-1 text-xs font-semibold text-gray-700 bg-gray-100 rounded-full">
                  Inactive
                </span>
              </td>
              <td className="px-4 py-2">22</td>
              <td className="px-4 py-2 text-center">
                <button className="text-red-600 hover:text-red-800 font-medium cursor-pointer">
                  Delete
                </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div >
  )
}
