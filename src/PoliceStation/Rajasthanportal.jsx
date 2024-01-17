import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Componants/Navbar';
export default function Rajasthanportal() {
  const navigate= useNavigate();
  return (
  <>
  <div>
    
 <Navbar/>
      <main className="mt-10 py-3">
        <h1 className="text-4xl text-center font-semibold"> Rajasthan Police Portal</h1>
      </main>
   
   
<main className="mx-10 mt-20">
  <div className="flex flex-wrap justify-center gap-8">
    <button
    onClick={()=>{
      navigate('/providefeedback')
    }}
     className="w-64 h-40 p-4 bg-white text-orange-400 font-semibold text-xl  rounded-lg hover:transform hover:-translate-y-5 transition-transform">
      Citizen Feedbacks
    </button>
    <button
    onClick={()=>{
      navigate('/dashboardreq')
    }}
     className="w-64 h-40 p-4 bg-white text-orange-400 font-semibold text-xl  rounded-lg hover:transform hover:-translate-y-5 transition-transform">
      Appointment Requests
    </button>
  
  </div>

  <div className="flex flex-wrap justify-center gap-8 mt-12">
    <button
    onClick={()=>{
      navigate('/complainreview')
    }}
     className="w-64 h-40 p-4 bg-white text-orange-400 font-semibold text-xl  rounded-lg  hover:transform hover:-translate-y-5 transition-transform">
      Social Issues
    </button> 
    <button 
    onClick={()=>{
      navigate('/firdash')
    }}
    
    className="w-64 h-40 p-4 bg-white  text-orange-400 font-semibold text-xl rounded-lg hover:transform hover:-translate-y-5 transition-transform">
     
     Update an FIR
    </button>
   
  </div>

  
</main>
  </div>
  </>
  )
}
