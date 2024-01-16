import React, { useState } from 'react';
import axios from 'axios';
import logo from '../Img/Rajasthan_Police_Logo (2) (1).png';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleForgotPassword = async () => {

    if (!email.trim()) {
      setError("Enter the email");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email");
      return;
    }

    const forgotPasswordEndpoint = "http://localhost:4000/api/v1/forgot-password";

    try {
      const response = await axios.post(forgotPasswordEndpoint, {
        email
      });

     
      console.log(response)
      console.log(response.data)
      setSuccessMessage(response.data.message);
      // setEmail("");
      setError("");
    } catch (error) {
      setError(error.response?.data.message || "Forgot password failed. Please try again.");
      console.log(error.response);
      console.log(error)
    }
  };

  return (
    <>
      <body className="relative">
        <nav className="bg-white text-center py-5 flex flex-wrap justify-around sticky top-0">
          <div>
            <img src={logo} alt="" className="Headimg" />
          </div>
          <div>
            <h1 className="text-orange-400 text-5xl text">Rajasthan police</h1>
            <p className="text-xl font-semibold text-orange-400 mt-3">
              Government of India
            </p>
          </div>
          <div>
            <button
              onClick={() => {
                window.location.href = '/';
              }}
              className=" bg-orange-400 py-1 px-6 rounded hover:bg-orange-600">
              Home
            </button>
          </div>
        </nav>

        <main className="mt-10 py-3">
          <h1 className="text-4xl text-center font-semibold">Forgot Password</h1>
        </main>

        <main className="mx-10 mt-10 flex flex-wrap justify-center">
          <div className="p-6 bg-white text-gray-700 border rounded flex flex-wrap flex-col w-96">
            <input
              type="text"
              name="Email"
              id="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email for password reset"
              className="mb-4 p-2 border border-gray-300 rounded outline-none"
            />

<button
              onClick={handleForgotPassword}
              className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-600"
            >
              Forgot Password
            </button>

            {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
            {successMessage && <p className="text-green-500 font-semibold mt-2">{successMessage}</p>}
          </div>
        </main>
      </body>
    </>
  );
}
