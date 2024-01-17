import React from "react";
import Navbar from "../Componants/Navbar";
import { useNavigate } from "react-router-dom";
export default function Firdash() {
    const navigate= useNavigate();
  return (
    <div>
      <Navbar />

      <main className=" mt-20 flex justify-center">
        <div className="flex flex-col  w-60">
          <button
            onClick={() => {
              navigate("/addfir");
            }}
            className="py-10 my-4 bg-white text-orange-500 font-semibold text-xl rounded-md"
          >
            Add New FIR
          </button>

          <button
            onClick={() => {
              navigate("/updatefri");
            }}
            className="py-10 my-4 bg-white text-orange-500 font-semibold text-xl rounded-md"
          >
            Update Existing FIR
          </button>
        </div>
      </main>
    </div>
  );
}
