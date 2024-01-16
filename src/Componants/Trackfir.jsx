import React from 'react'

import { useState } from 'react';
import  axios  from 'axios';
import Navbar from './Navbar';
export default function Trackfir() {

  const [FIRNO, setFIRNO] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  
  const handleCheckStatus = async () => {
    try {
      // Make an API call to check the FIR status
      const response = await axios.post('http://localhost:4000/api/v1/updateonfir', {
       FIRNO
      });

      // Check the response from the server
      if (response.data.success) {
        setStatus(response.data.status);
        setError('');
      } else {
        setError(response.data.message);
        setStatus('');
      }
    } catch (error) {
      console.error('Error checking FIR status:', error);
      setError('An error occurred while checking FIR status.');
      setStatus('');
    }
  };
  return (
    <div className="relative">
    <Navbar/>

    <main className="my-16  flex flex-wrap  items-center  justify-center py-10 ">
        <div >
          <input
            className="py-4 text-2xl font-semibold px-2 text-gray-900 outline-none w-full m-2 chinu  "
            type="text"
            name=""
            id=""
            placeholder="Enter FIR NO."
          />
        </div>

        <div className=" ">
          <button
          onClick={handleCheckStatus}
           className="py-4 text-2xl bg-blue-600 font-semibold px-2 text-white w-full m-2  chinu ">
            Check The Status
          </button>
        </div>
      </main>

      {status && <p className="text-green-500 font-semibold mt-2">{status}</p>}
      {error && <p className="text-red-500 font-semibold mt-2 text-center">{error}</p>}

  
  </div>
  )
}
