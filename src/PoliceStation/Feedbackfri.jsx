import React from "react";
import axios from "axios";
import { useState } from "react";
import logo from "../Img/Rajasthan_Police_Logo (2) (1).png";
import { useEffect } from "react";
export default function Feedbackfri() {
  const [feedbackData, setFeedbackData] = useState([]);

  const [selectedPoliceStation, setSelectedPoliceStation] = useState("");
  const [showModal, setShowModal] = useState(true);

  const handlePoliceStationSelect = (selectedValue) => {
    setSelectedPoliceStation(selectedValue);
    setShowModal(false);
  };

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/v1/getFIRfeedback"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        console.log(data);
        setFeedbackData(data.feedbacks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredFeedbackData = feedbackData.filter(
    (feedback) =>
      !selectedPoliceStation || selectedPoliceStation === feedback.PoliceStation
  );


  return (
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
        <h1 className="text-4xl text-center font-semibold">FeedBack Detail</h1>
      </main>

       {/* <main className="mx-10 mt-10 flex flex-wrap justify-center gap-4">
        {feedbackData.map((feedback, index) => (
          <div
            key={index}
            className="p-6 bg-white text-gray-700 border rounded w-96 mb-4"
          >
            <div className="mb-4 border-b pb-4">
              <label className="block text-sm font-semibold text-gray-800">
                FIR No:
              </label>
              <p className="text-gray-500 font-semibold mb-2">
                {feedback.FIRNumber}
              </p>
            </div>
            <div className="mb-4 border-b pb-4">
              <label className="block text-sm font-semibold text-gray-800">
                Phone No:
              </label>
              <p className="text-gray-500 mb-2">{feedback.PhoneNumber}</p>
            </div>

            <div className="mb-4 border-b pb-4">
              <label className="block text-sm font-semibold text-gray-800">
                Submitted by:
              </label>
              <p className="text-gray-500 mb-2">{feedback.Name}</p>
            </div>

            <div className="mb-4 border-b pb-4">
              <label className="block text-sm font-semibold text-gray-800">
                Police Station:
              </label>
              <p className="text-gray-500 mb-2">{feedback.PoliceStation}</p>
            </div>

            <div className="mb-4 border-b pb-4">
              <label className="block text-sm font-semibold text-gray-800">
                Feedback:
              </label>
              <p className="mb-4">{feedback.Feedbacktext}</p>
            </div>

            <div className="flex justify-between">
              <label className="font-semibold text-gray-800">
                Feedback Rating:
              </label>

              {feedback.Rating == "Good" ? (
                <p className="text-green-500 font-semibold">
                  {feedback.Rating}
                </p>
              ) : (
                <p className="text-red-500 font-semibold">{feedback.Rating}</p>
              )}
            </div>
          </div>
        ))}
      </main>  */}


<main className="mx-10 mt-10 flex flex-wrap justify-center gap-4">
  {filteredFeedbackData.length > 0 ? (
    filteredFeedbackData.map((feedback, index) => (
      <div
        key={index}
        className="p-6 bg-white text-gray-700 border rounded w-96 mb-4"
      >
        <div className="mb-4 border-b pb-4">
          <label className="block text-sm font-semibold text-gray-800">
            FIR No:
          </label>
          <p className="text-gray-500 font-semibold mb-2">
            {feedback.FIRNumber}
          </p>
        </div>
        <div className="mb-4 border-b pb-4">
          <label className="block text-sm font-semibold text-gray-800">
            Phone No:
          </label>
          <p className="text-gray-500 mb-2">{feedback.PhoneNumber}</p>
        </div>

        <div className="mb-4 border-b pb-4">
          <label className="block text-sm font-semibold text-gray-800">
            Submitted by:
          </label>
          <p className="text-gray-500 mb-2">{feedback.Name}</p>
        </div>

        <div className="mb-4 border-b pb-4">
          <label className="block text-sm font-semibold text-gray-800">
            Police Station:
          </label>
          <p className="text-gray-500 mb-2">{feedback.PoliceStation}</p>
        </div>

        <div className="mb-4 border-b pb-4">
          <label className="block text-sm font-semibold text-gray-800">
            Feedback:
          </label>
          <p className="mb-4">{feedback.Feedbacktext}</p>
        </div>

        <div className="flex justify-between">
          <label className="font-semibold text-gray-800">
            Feedback Rating:
          </label>
          {feedback.Rating === "Good" ? (
            <p className="text-green-500 font-semibold">
              {feedback.Rating}
            </p>
          ) : (
            <p className="text-red-500 font-semibold">{feedback.Rating}</p>
          )}
        </div>
      </div>
    ))
  ) : (
    <div className="text-center font-sm text-xl text-white-700">
      No feedback available for {selectedPoliceStation}...
    </div>
  )}
</main>



      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-90">
          <div className="bg-white p-6 rounded-md text-gray-950">
            <div className="modal">
              <div className="modal-content">
                <h2 className="text-center">Select Police Station</h2>
                <select
                  name="policeStation"
                  value={selectedPoliceStation}
                  onChange={(e) => handlePoliceStationSelect(e.target.value)}
                  className="mb-4 p-2 border border-gray-300 rounded outline-none"
                >
                  <option value="">Select Police Station</option>
                  <option value="Alwar Gate">Alwar Gate Police Station</option>
                  <option value="Durga Pura">Durga Pura Police Station</option>
                  <option value="Vaishali Nagar">
                    Vaishali Nagar Police Station
                  </option>
                  <option value="Civil Lines">
                    Civil Lines Police Station
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </body>
  );
}
