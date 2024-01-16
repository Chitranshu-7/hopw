import React from "react";
import logo from "../Img/Rajasthan_Police_Logo (2) (1).png";

export default function Seefir() {
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
                window.location.href = "/";
              }}
              className=" bg-orange-400 py-1 px-6 rounded hover:bg-orange-600"
            >
              Home
            </button>
          </div>
        </nav>

        <main className="mt-10 py-3">
          <h1 className="text-4xl text-center font-semibold">See Your FIR</h1>
        </main>

        <main className="mx-10 mt-10 flex flex-wrap justify-center gap-4">
          <div className="p-6 bg-white text-gray-700 border rounded w-96 mb-4">
            <div className="mb-4 border-b pb-4">
              <label className="block text-sm font-semibold text-gray-800">
                FIR Number:
              </label>
              <p className="text-gray-500 font-semibold mb-2">FIR12345</p>
            </div>
            <div className="mb-4 border-b pb-4">
              <label className="block text-sm font-semibold text-gray-800">
                Complainant Name:
              </label>
              <p className="text-gray-500 mb-2">John Doe</p>
            </div>
            <div className="mb-4 border-b pb-4">
              <label className="block text-sm font-semibold text-gray-800">
                Complainant Number:
              </label>
              <p className="text-gray-500 mb-2">123-456-7890</p>
            </div>

            <div className="mb-4 border-b pb-4">
              <label className="block text-sm font-semibold text-gray-800">
                Investingation Officer:
              </label>
              <p className="text-gray-500 mb-2">123-456-7890</p>
            </div>

            <div className="mb-4 border-b pb-4">
              <label className="block text-sm font-semibold text-gray-800">
                Investigating Progress:
              </label>
              <p className="text-gray-500 mb-2">In progress</p>
            </div>

            
            <div className="mb-4 border-b pb-4">
              <label className="block text-sm font-semibold text-gray-800">
                Status:
              </label>
              <p className="text-gray-500 mb-2">Status</p>
            </div>

            <div className="mb-4 border-b pb-4">
              <label className="block text-sm font-semibold text-gray-800">
                Steps Undertaken:
              </label>
              <p className="text-gray-500 mb-2">Steps Undertaken</p>
            </div>

            <div className="mb-4 border-b pb-4">
              <label className="block text-sm font-semibold text-gray-800">
                Evidence Collections
              </label>
              <p className="text-gray-500 mb-2">Evidence Collection</p>
            </div>

            {/* Add more fields similarly */}
          </div>
        </main>
      </body>
    </>
  );
}
