import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Linker from "../Linker";
export default function Appointment() {
  const [Name, setName] = useState("");
  const [City, setCity] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Purpose, setPurpose] = useState("");
  const [Details, setDetails] = useState("");
  const [Response, setResponse] = useState("Pending");

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${Linker.backend}/api/v1/meetingticket`, {
        Name,
        City,
        PhoneNo,
        Email,
        Address,
        Purpose,
        Details,
        Response,
      });

      console.log("Meeting details submitted successfully:", response.data);
      // You can add further actions on success if needed.
      setSuccessMessage(response.data.message)

      
    } catch (error) {
      console.error("Error submitting meeting details:", error);
      setError("")

      // Handle errors, show a message, etc.
    }
  };

  return (
    <body className="relative">
      <Navbar/>

      <main className="mt-10 py-3">
        <h1 className="text-4xl text-center font-semibold">
          Raise a Meeting Ticket
        </h1>
      </main>

      <main className="mx-10 mt-10 flex flex-wrap justify-center">
        <div className="p-6 bg-white text-gray-700 border rounded flex flex-wrap flex-col w-96">
          <input
            type="text"
            name="Name"
            id="Name"
            placeholder="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <input
            type="text"
            name="City"
            id="City"
            placeholder="City"
            value={City}
            onChange={(e) => setCity(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <input
            type="tel"
            name="PhoneNo"
            id="PhoneNo"
            placeholder="Phone Number"
            value={PhoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <input
            type="email"
            name="Email"
            id="Email"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <input
            type="text"
            name="Address"
            id="Address"
            placeholder="Address"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />

          <input
            type="text"
            name="Purpose"
            id="Purpose"
            placeholder="Meeting Purpose"
            value={Purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          {/* Text area for meeting details */}
          <textarea
            name="Details"
            id="Details"
            placeholder="Meeting Details"
            value={Details}
            onChange={(e) => setDetails(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded outline-none resize-none"
            rows="4"
          />
          <button className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-600" onClick={handleSubmit}>
            Submit
          </button>
          {error && <p className="text-red-500  font-semibold mt-2">{error}</p>}
          {successMessage && <p className="text-green-500 font-semibold mt-2">{successMessage}</p>}
        </div>
      </main>
      <Outlet/>
    </body>

  );
}
