import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../App.css";
import logo from "../Img/Rajasthan_Police_Logo (2) (1).png";
import Navbar from "./Navbar";

export default function Citizenport() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar/>

      <main className="mt-10 py-3">
        <h1 className="text-4xl text-center font-semibold">Citizen Portal</h1>
      </main>

      <main className="mx-10 mt-20">
        <div className="flex flex-wrap justify-center gap-8">
          <button
            onClick={() => {
              navigate("/advanceapoint");
            }}
            className="w-64 h-40 p-4 bg-white text-orange-400 font-semibold text-xl  rounded-lg hover:transform hover:-translate-y-5 transition-transform"
          >
            Advance Appointment
          </button>
          <button 
          onClick={()=>{
            navigate("/appointment")
          }}
          
          className="w-64 h-40 p-4 bg-white text-orange-400 font-semibold text-xl  rounded-lg  hover:transform hover:-translate-y-5 transition-transform">
            Raise A Meeting Ticket
          </button>
          <button
          onClick={()=>{
            navigate("/dashboardfeedback")
          }}
           className="w-64 h-40 p-4 bg-white  text-orange-400 font-semibold text-xl rounded-lg hover:transform hover:-translate-y-5 transition-transform">
            Provide Feedback
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <button 
          onClick={()=>{
            navigate('/trackfir')
          }}
          className="w-64 h-40 p-4 bg-white text-orange-400 font-semibold text-xl  rounded-lg hover:transform hover:-translate-y-5 transition-transform">
            Track FIR
          </button>
          <button 
          onClick={()=>{
            navigate('/complaint')
          }}
          className="w-64 h-40 p-4 bg-white text-orange-400 font-semibold text-xl  rounded-lg hover:transform hover:-translate-y-5 transition-transform">
            Social Issue/ Complain
          </button>

          <button
          onClick={()=>{
            navigate('/chatgrow')
          }}
           className="w-64 h-40 p-4 bg-white text-orange-400 font-semibold text-xl  rounded-lg hover:transform hover:-translate-y-5 transition-transform">
            FAQ and Help Center
          </button>
        </div>
      </main>

      <Outlet/>
    </div>
  );
}
