import React from "react";
import logo from "../Img/Rajasthan_Police_Logo (2) (1).png";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
export default function Dashboardreq() {
  const navigate =useNavigate();
  return (
    <div>
      <Navbar />

      <main className="mt-10 py-3">
        <h1 className="text-4xl text-center font-semibold">
          Appointment Requests
        </h1>
      </main>

      <main className="mx-10 mt-20">
        <div className="flex flex-wrap justify-center gap-8">
          <button 
          onClick={()=>{
            navigate('/pendingreq')
          }}
          className="w-64 h-40 p-4 bg-white text-orange-400 font-semibold text-xl  rounded-lg hover:transform hover:-translate-y-5 transition-transform">
            Pending Requests
          </button>
          <button
          onClick={()=>{
            navigate("/")
          }}
           className="w-64 h-40 p-4 bg-white text-orange-400 font-semibold text-xl  rounded-lg hover:transform hover:-translate-y-5 transition-transform">
            Approved Requests
          </button>
        </div>
      </main>
    </div>
  );
}
