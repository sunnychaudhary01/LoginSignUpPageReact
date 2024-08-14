import React from 'react'
import { useLocation } from 'react-router-dom';

const Read = () => {

    const location = useLocation();
    const user = location.state;
    const isValidEmail = location.state;
    const password = location.state;
  return (
    <>
    <h1>Welcome to read page</h1>
    <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Password</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Name:{user} </td>
            <td className="px-6 py-4 whitespace-nowrap">Email:{isValidEmail} </td>
            <td className="px-6 py-4 whitespace-nowrap">Password:{password} </td>
          </tr>
          {/* Add more rows here as needed */}
        </tbody>
      </table>
    </>
  )
}

export default Read