import React from "react";

import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
export default function Home() {
    const navigate= useNavigate();
  return (
    <>
      <div>
        <Navbar/>

        <main className=" mt-20 flex justify-center">
          <div className="flex flex-col w-60">
            <button
            onClick={()=>{
           navigate('/citizenport')
            }}
             className="py-10 my-4 bg-white text-orange-500 font-semibold text-xl rounded-md">
              Citizen portal
            </button>

            <button 
            onClick={()=>{
                navigate('/rajasthanportal')
                 }}
                 className="py-10 my-4 bg-white text-orange-500 font-semibold text-xl rounded-md">
              Police Station Portal
            </button>
            <button 
            onClick={()=>{
              navigate('/authverify')
            }}
            className="py-10 my-4 bg-white text-orange-500 font-semibold text-xl rounded-md">
              Higher Authority Portal
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
