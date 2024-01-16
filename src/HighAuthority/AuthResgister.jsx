import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Componants/Navbar";


export default function AuthResgister() {

  const navigate= useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const validateEmail = (email) => {
      // Email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const validatePassword = (password) => {
      // Password regex: at least 8 characters with at least one uppercase letter and one number
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
      return passwordRegex.test(password);
    };
  
    const  handleLogin = async() => {
      // Validate email and password
      if (!validateEmail(email)) {
        setError("Invalid email");
        return;
      }
  
      if (!validatePassword(password)) {
        setError(
          "Password must be at least 8 characters with at least one uppercase letter and one number."
        );
        return;
      }
      
      // API integration
      const loginEndpoint = "http://localhost:4000/api/v1/HighAuthoritylogin"; // Replace with your actual API endpoint
  
      try {
        const response = await axios.post(loginEndpoint, {
          email,
          password,
        },
      {
       withCredentials:true
      }
        );
  
      
    
        console.log(response.data.result.message)
        console.log(response)
        setSuccessMessage(response.data.result.message);
        navigate('/homeauth')
        
        
      
  
        // Reset form state on successful login
        setEmail("");
        setPassword("");
        setError("");
     
      } catch (error) {
        setError(error.response?.data.message || "Login failed. Please try again.");
        console.log(error.response)
       ;
      }
    
    }
   
  
    return (
      <div className="relative">
       <Navbar/>
  
        <main className="mt-10 py-3">
          <h1 className="text-4xl text-center font-semibold">Login</h1>
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
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="mb-4 p-2 border border-gray-300 rounded outline-none"
            />
            <button
              onClick={handleLogin}
              className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-600"
            >
              Login
            </button>
            {error && <p className="text-red-500  font-semibold mt-2">{error}</p>}
            {successMessage && <p className="text-green-500 font-semibold mt-2">{successMessage}</p>}
          </div>
        </main>
     
      </div>
    );
  }
  






 