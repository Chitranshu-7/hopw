import React, { useState } from "react";
import axios from "axios";

import Navbar from "./Navbar";

export default function Feedbackfir() {
  const [FIRNumber, setFIRNumber] = useState("");
  const [Name, setName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Feedbacktext, setfeedbacktext] = useState("");
  const [Rating, setRating] = useState("");
  const [PoliceStation, setPoliceStationName] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handlefeedbacktextClick = async () => {
    setError("");

    if (validateInput()) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/sendFIRFeedback",
          {
            FIRNumber,
            Name,
            PhoneNumber,
            PoliceStation,
            Feedbacktext,
            Rating,
          }
        );

        console.log("feedbacktext FIR submitted:", response.data);
        console.log(response.data.message);
        setSuccessMessage(response.data.message);

        // Reset form state
        setFIRNumber("");
        setName("");
        setPhoneNumber("");
        setfeedbacktext("");
        setPoliceStationName("");
        setRating(null);
      } catch (error) {
        console.error("Error submitting feedbacktext FIR:", error);
        setError("Please try again later.");
      }
    }
  };

  const validateInput = () => {
    const NameRegex = /^[a-zA-Z ]+$/;
    const PhoneNumberRegex = /^\d{10}$/;
    const feedbacktextRegex = /^[a-zA-Z0-9 ,.!?()'\r\n]+$/;

    if (!FIRNumber.trim()) {
      setError("Please enter the FIR number.");
      return false;
    }

    if (!Name.trim()) {
      setError("Please enter your Name.");
      return false;
    }

    if (!PhoneNumber.trim()) {
      setError("Please enter your PhoneNumber number.");
      return false;
    }

    if (!PhoneNumberRegex.test(PhoneNumber)) {
      setError("Invalid PhoneNumber number. Must be 10 digits.");
      return false;
    }

    if (!Feedbacktext.trim()) {
      setError("Please enter your feedbacktext.");
      return false;
    }

    if (!NameRegex.test(Name)) {
      setError("Invalid Name. Please use only alphabets and spaces.");
      return false;
    }

    if (!feedbacktextRegex.test(Feedbacktext)) {
      setError(
        "Invalid feedbacktext. Please use alphanumeric characters, spaces, commas, periods, exclamation marks, question marks, parentheses, single quotes, and newlines."
      );
      return false;
    }

    if (Rating === null) {
      setError("Please select a rating (Good/Bad).");
      return false;
    }

    return true;
  };

  return (
    <div className="relative">
      <Navbar/>

      <main className="mt-10 py-3">
        <h1 className="text-4xl text-center font-semibold">Feedback For FIR</h1>
      </main>

      <main className="mx-10 mt-10 flex flex-wrap justify-center">
        <div className="p-6 bg-white text-gray-700 border rounded flex flex-wrap flex-col w-96">
          <input
            type="text"
            Name="FIRNumber"
            id="FIRNumber"
            value={FIRNumber}
            onChange={(e) => setFIRNumber(e.target.value)}
            placeholder="FIR Number"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <input
            type="text"
            Name="Name"
            id="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <input
            type="tel"
            Name="PhoneNumber"
            id="PhoneNumber"
            value={PhoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <select
            Name="PoliceStation"
            id="PoliceSation"
            value={PoliceStation}
            onChange={(e) => setPoliceStationName(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded outline-none  text-gray-500"
          >
            <option value="" className="text-gray-500">Select Police Station</option>
            <option value="Alwar Gate" className="text-gray-500">Alwar Gate Police Station</option>
            <option value="Durga Pura" className="text-gray-500">Durga Pura Police Station</option>
            <option value="Vaishali Nagar" className="text-gray-500">
              Vaishali Nagar Police Station
            </option>
            <option value="Civil Lines" className="text-gray-500">Civil Lines Police Station</option>
          </select>
          <textarea
            Name="feedbacktext"
            id="feedbacktext"
            value={Feedbacktext}
            onChange={(e) => setfeedbacktext(e.target.value)}
            placeholder="feedbacktext"
            rows="4"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          ></textarea>

          <div className="flex justify-center space-x-4">
            <button
              className={`${
                Rating === "Good"
                  ? "bg-green-700 text-white"
                  : "bg-green-200 text-white hover:bg-green-600"
              } py-2 px-4 rounded`}
              onClick={() => setRating("Good")}
            >
              Good
            </button>
            <button
              className={`${
                Rating === "Bad"
                  ? "bg-red-700 text-white"
                  : "bg-red-200 text-white hover:bg-red-600"
              } py-2 px-4 rounded`}
              onClick={() => setRating("Bad")}
            >
              Bad
            </button>
          </div>

          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
          {successMessage && (
            <p className="text-green-500 font-semibold mt-2">
              {successMessage}
            </p>
          )}

          <button
            className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-600 mt-4"
            onClick={handlefeedbacktextClick}
          >
            Submit FeedBack
          </button>
        </div>
      </main>
    </div>
  );
}
