import React from "react";
import logo from "../Img/Rajasthan_Police_Logo (2) (1).png";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
export default function Dashboardfeedback() {
  const navigate = useNavigate();
  return (
    <body>
      <Navbar />

      <main className="mt-10 py-3">
        <h1 className="text-4xl text-center font-semibold">FeedBack Portal</h1>
      </main>

      <main className="mx-10 mt-20">
        <div className="flex flex-wrap justify-center gap-8">
          <button
            onClick={() => {
              navigate("/feedback");
            }}
            className="w-64 h-40 p-4 bg-white text-orange-400 font-semibold text-xl  rounded-lg hover:transform hover:-translate-y-5 transition-transform"
          >
            Feedback Related To FIR
          </button>
          <button
            onClick={() => {
              navigate("/feedbackfir");
            }}
            className="w-64 h-40 p-4 bg-white text-orange-400 font-semibold text-xl  rounded-lg hover:transform hover:-translate-y-5 transition-transform"
          >
            Feedback Related To Other
          </button>
        </div>
      </main>
    </body>
  );
}
