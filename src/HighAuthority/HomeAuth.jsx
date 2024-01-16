import React, { useState, useEffect } from "react";
import Navbar from "../Componants/Navbar";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function HomeAuth() {
  const navigate=useNavigate()
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const jwt = Cookies.get("jwt");

    // Check if JWT token is available
    if (jwt) {
      // Make a request to the backend API to verify the token
      axios.post(
        "http://localhost:4000/api/v1/getverifytoken",
        {
          Credentials: true,
        },
        {
          headers: {
            'Content-Type':'application/json',
            Authorization: `Bearer ${jwt}`, // Set the Authorization header with the token
          },
        }
      )
      .then(response => {
        // Handle the response from the backend
        if(response.status===200)
        {
          setAuth(true);
        }
        else{
          navigate("/authlogin")
        }
        // Set auth to true if the token is valid
      })
      .catch(error => {
        // Handle errors
        console.error("Error sending token to backend:", error);
        setAuth(false); // Set auth to false if there's an error
      });
    } else {
       navigate('/authlogin')
    }
  }, []);

  return (
    <div>
      <Navbar />

      {auth && (
        <>
        <main className="mt-10 py-3">
          <h1 className="text-4xl text-center font-semibold">
            Higher Authority Portal
          </h1>
        </main>

      <main  className="mx-10 mt-20">
        <div className="flex flex-wrap justify-center gap-8">
          <button className="w-64 h-40 p-4 bg-white text-orange-400 font-semibold text-xl  rounded-lg hover:transform hover:-translate-y-5 transition-transform">
            Police Station Insight
          </button>
          <button
           className="w-64 h-40 p-4 bg-white text-orange-400 font-semibold text-xl  rounded-lg hover:transform hover:-translate-y-5 transition-transform">
            Citizen Voice Platform
          </button>
        </div>
      </main> </>
    )}
  </div>
  );
}

