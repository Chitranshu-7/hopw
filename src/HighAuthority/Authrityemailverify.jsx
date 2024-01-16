import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../Componants/Navbar';
import { useNavigate } from 'react-router-dom';
export default function Authrityemailverify() {
  const navigate= useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleVerifyEmail = async () => {
    // Validate email
    if (!validateEmail(email)) {
      setError("Invalid email");
      return;
    }

    // API integration
    const verifyEmailEndpoint = "http://localhost:4000/api/v1/Forgotpasswordhighauth"; // Replace with your actual API endpoint

    try {
      const response = await axios.post(verifyEmailEndpoint, {
        email,
      },{
        Credentials:true
      }
      );

      // console.log(response.data.result.message);
      console.log(response)
      console.log(response.data.message)
    
      setSuccessMessage(response.data.message);
      navigate('/otp')
      setError(""); // Reset error state on successful email verification
    } catch (error) {
      setError(error.response?.data.message || "Email verification failed. Please try again.");
      console.log(error.response);
    }
  };

  return (
    <>
      <div className="relative">
  <Navbar/>

        <main className="mt-10 py-3">
          <h1 className="text-4xl text-center font-semibold">Verify Email</h1>
        </main>

        <main className="mx-10 mt-10 flex flex-wrap justify-center">
          <div className="p-6 bg-white text-gray-700 border rounded flex flex-wrap flex-col w-96">
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mb-2 p-2 border border-gray-300 rounded outline-none"
            />

            <div 
            onClick={()=>{
              navigate('/authlogin')
            }}
            className='text-right mt-0 mb-2'>
                <p 
               
                className='font-semibold text-sm text-orange-400 hover:text-orange-600   cursor-pointer '>Already verified?</p>
            </div>

            <button
              onClick={handleVerifyEmail}
              className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-600"
            >
              Verify Email
            </button>

            {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
            {successMessage && <p className="text-green-500 font-semibold mt-2">{successMessage}</p>}
          </div>
        </main>
      </div>
    </>
  );
}
