import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
import star_img2 from "../Img/icons8-star-64.png";
import Navbar from "../Componants/Navbar";
export default function Polishstationrating() {
  const [feedbackData, setFeedbackData] = useState([]);
  // const feedbackData = [
  //   {
  //     title: "Title of Feedback 1",
  //     submittedBy: "John Doe",
  //     policeStation: "ABC Station",
  //     feedback:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     rating: "Good",
  //     friNumber: "12345",
  //     phoneNumber: "9876543210",
  //     address: "Near vijaya colony main market sikar (Raj)",
  //     image:"https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg"
  //   },
  //   {
  //     title: "Title of Feedback 2",
  //     submittedBy: "Jane Smith",
  //     policeStation: "XYZ Station",
  //     feedback:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     rating: "Excellent",
  //     friNumber: "67890",
  //     phoneNumber: "1234567890",
  //   },
  //   {
  //     title: "Title of Feedback 3",
  //     submittedBy: "Bob Johnson",
  //     policeStation: "PQR Station",
  //     feedback:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     rating: "Satisfactory",
  //     friNumber: "54321",
  //     phoneNumber: "5551112222",
  //   },
  //   {
  //     title: "Title of Feedback 4",
  //     submittedBy: "Alice Williams",
  //     policeStation: "LMN Station",
  //     feedback:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     rating: "Needs Improvement",
  //     friNumber: "98765",
  //     phoneNumber: "9998887777",
  //   },
  // ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/getfirfeedbackratings"
        );
        setFeedbackData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <main className="mt-10 py-3">
        <h1 className="text-4xl text-center font-semibold">
          Police Station Review
        </h1>
      </main>

      <main className="mx-10 mt-10 flex flex-wrap justify-center gap-4">
        {feedbackData.map((feedback, index) => (
          <div
            key={index}
            className="p-6 bg-white text-gray-700 border rounded w-96 mb-4"
          >
            <div className=" mt-4 mb-4 border-b pb-4">
              <label className="block text-sm font-semibold text-gray-800">
                Police Station:
              </label>
              <p className="text-gray-500 mb-2">{feedback.PoliceStation}</p>
            </div>

            <div className="mb-4 border-b pb-4">
      <label className="block text-sm font-semibold text-gray-800">
        Overall Rating:
      </label>
      <div className="flex flex-wrap justify-between px-5  mt-2">
        {feedback.ratings.map((chinu, index) => (
          <div key={index} className={`flex items-center ${chinu.rating === 'Good' ? 'text-green-500' : 'text-red-500'}`}>
            <div className="mr-2 font-semibold">{chinu.rating}:</div>
            <div className="font-semibold">{chinu.count}</div>
          </div>
        ))}
      </div>
    </div>
          

           
          </div>
        ))}
      </main>
    </div>
  );
}
