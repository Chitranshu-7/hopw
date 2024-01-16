import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../Componants/Navbar';
import { useNavigate } from 'react-router-dom';
export default function ResetPasswordAuth() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleResetPassword = async() => {
   
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(!email.trim()){
      setError("Please fill email")
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email");
      return;
    }
 
    if(!newPassword.trim() || !confirmpassword.trim()){
      setError("Please enter password")
      return;
    }
  
    if (!passwordRegex.test(newPassword)) {
      setError("Password must contain at least eight characters and include an uppercase letter and a special character & digit.");
      return;
    }
    if (newPassword !== confirmpassword) {
      setError("Passwords do not match");
      return;
    }
    const loginEndpoint = "http://localhost:4000/api/v1/Resetpasswordhighauth"; // Replace with your actual API endpoint

    try {
      const response = await axios.post(loginEndpoint, {
        email,
        newPassword,
        confirmpassword
        

      });

    
  
      console.log(response.data)
      // let a= response.data.result.message;
      setSuccessMessage(response.data.message)
      
    

      // Reset form state on successful login
      setEmail("");
      setNewPassword("");
      setConfirmPassword("")
      setError("");
     navigate("/homeauth")
    } catch (error) {
      setError(error.response?.data.message || "Login failed. Please try again.");
      console.log(error)
     ;
    }
  
  }

  return (
    <>
      <body className="relative bg-gray-100 min-h-screen">
        <Navbar/>

        <main className="mt-10 py-3">
          <h1 className="text-4xl text-center font-semibold">Reset Password</h1>
        </main>

        <main className="mx-10 mt-10 flex flex-wrap justify-center">
          <div className="p-6 bg-white text-gray-700 border rounded flex flex-wrap flex-col w-96">
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="mb-4 p-2 border border-gray-300 rounded outline-none"
            />

            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="mb-4 p-2 border border-gray-300 rounded outline-none"
            />

            <button
              onClick={handleResetPassword}
              className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-600"
            >
              Reset Password
            </button>

            {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
            {successMessage && <p className="text-green-500 font-semibold mt-2">{successMessage}</p>}
          </div>
        </main>
      </body>
    </>
  );
}
