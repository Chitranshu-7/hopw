import React, { useState, useRef } from 'react';
// import { useNavigate, useNavigation } from "react-router-dom";
import axios from 'axios';
import Navbar from './Navbar';
export default function Otp() {
  // const navigate= useNavigate();

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);
  const[error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState("");

  const handleOtpChange = (index, value) => {
    if (/^\d+$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input box
      if (index < otp.length - 1 && value !== '') {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to the previous input box on backspace
    if (e.key === 'Backspace' && index > 0 && otp[index]==='') {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleLogin = async() => {
    // Assuming you want to concatenate the OTP digits
    const enteredOtp = otp.join('');

    if (enteredOtp.length !== 6) {
        setError('Please enter a 6-digit OTP.');
        return;
      }
  
    try {
        // Replace 'YOUR_API_ENDPOINT' with the actual endpoint for OTP verification
        const response = await axios.post('http://localhost:4000/api/v1/submitotp', {
          otp: enteredOtp,
        });
  
        // Assuming the API returns a success message
        console.log('API Response:', response.data);
        setSuccessMessage(response.data)
       
  
        // Reset OTP state
        setOtp(['', '', '', '', '', '']);
  
        // Move focus to the first input box after login (optional)
        inputRefs.current[0].focus();

        //Navigate to the login screen.
        // navigate("/Login");
      } catch (error) {
        // Handle API error, display error message, etc.
        console.error('API Error:', error.response ? error.response.data : error.message);
        setError(error.response.data.message)
        // console.log()
      }
    };
  

  return (
    <body className="relative">
   
<Navbar/>
      <main className="mt-10 py-3">
        <h1 className="text-4xl text-center font-semibold">OTP Verification</h1>
      </main>

      <main className="mx-10 mt-10 flex justify-center">
        <div className="p-6 bg-white text-gray-700 border rounded flex w-96">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              type="text"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              maxLength="1"
              className="mb-4 p-2 w-12 border border-gray-300 rounded outline-none text-center mr-2"
            />
          ))}

           
        </div>

     

      </main>
        <p className="text-red-500 font-semibold text-center  mb-2">{error}</p>
        <p className="text-green-500 font-semibold text-center  mb-2">{successMessage}</p>

      <main className="mx-10 mt-4 flex justify-center">
        <button
          onClick={handleLogin}
          className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-600"
        >
          Submit OTP
        </button>
      </main>
    </body>
  );
}
