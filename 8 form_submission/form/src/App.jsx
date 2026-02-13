import React, { useState } from 'react'
import Table from './Table'
import Input from './Input';
import Destrcute from './Destrcute';

export default function App() {

  const [userData, setUserData] = useState([]);


  return (
    <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Input userData={userData} setUserData={setUserData} />
        <Table userData={userData} setUserData={setUserData} />
      </div>
      <Destrcute userData={userData} setUserData={setUserData} />
    </div>

  )
}
