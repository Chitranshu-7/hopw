import React from 'react'
import logo from "../Img/Rajasthan_Police_Logo (2) (1).png";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
export default function Navbar() {
    const navigate= useNavigate();
  return (
    <nav className="bg-white text-center py-5 flex flex-wrap justify-around sticky top-0 headnav">
    <div>
      <img src={logo} alt="" className="Headimg" />
    </div>
    <div>
      <h1 className="text-orange-400 text-5xl text headraj">Rajasthan Police</h1>
      <p className="text-xl font-semibold text-orange-400 mt-3 headind">
        Government of India
      </p>
    </div>
    <div>
      <button
      onClick={()=>{
        Cookies.remove("jwt")
      
      }}
       className="bg-orange-400 py-1 px-6 rounded hover:bg-orange-600 headbtn">
        Home
      </button>
    </div>
  </nav>
  )
}
