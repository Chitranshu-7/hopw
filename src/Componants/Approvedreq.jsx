import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Approvedreq() {
  const [usersData, setUsersData] = useState([]);

  // const usersData = [
  //   {
  //     name: "John Doe",
  //     mobileNumber: "1234567890",
  //     email: "john.doe@example.com",
  //     purpose: "Meeting",
  //     // approved: true,
  //   }
  // ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/getuserapointment");
        setUsersData(response.data.apointment);
        console.log(response.data.apointment)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <body>
    <Navbar/>

      <main className="mt-10 py-3">
        <h1 className="text-4xl text-center font-semibold">
          Approved Requests
        </h1>
      </main>

      <div className="mx-10 mt-20 flex flex-wrap justify-center gap-10">
        {usersData.map((user, index) => (
          user.Response === "Aproved" && (
          <div
            key={index}
            className="p-6 bg-white text-gray-700 border rounded flex flex-wrap flex-col w-96 mb-4"
          >
            <div>
              <label
                htmlFor={`name-${index}`}
                className="text-sm font-semibold text-gray-700 flex mb-2"
              >
                Name:
              </label>
              <div className="mb-4 p-2 border border-gray-300 rounded outline-none w-full">
                {user.Name}
              </div>
            </div>

            <div>
              <label
                htmlFor={`mobileNumber-${index}`}
                className="text-sm font-semibold text-gray-700 flex mb-2"
              >
                Mobile Number
              </label>
              <div className="mb-4 p-2 border border-gray-300 rounded outline-none w-full">
                {user.PhoneNo}
              </div>
            </div>

            <div>
              <label
                htmlFor={`email-${index}`}
                className="text-sm font-semibold text-gray-700 flex mb-2"
              >
                Email
              </label>
              <div className="mb-4 p-2 border border-gray-300 rounded outline-none w-full">
                {user.Email}
              </div>
            </div>

            <div>
              <label
                htmlFor={`purpose-${index}`}
                className="text-sm font-semibold text-gray-700 flex mb-2"
              >
                Purpose
              </label>
              <div className="mb-4 p-2 border border-gray-300 rounded outline-none w-full">
                {user.Purpose}
              </div>
            </div>

            <div>
              <label
                htmlFor={`Timeslot-${index}`}
                className="text-sm font-semibold text-gray-700 flex mb-2"
              >
                Approved Time Slot
              </label>
              <div className="mb-4 p-2 border border-gray-300 rounded outline-none w-full">
                {user.selectedTimeSlot}
              </div>
            </div>
            <div>
              <label
                htmlFor={`Time-${index}`}
                className="text-sm font-semibold text-gray-700 flex mb-2"
              >
                Approved Time
              </label>
              <div className="mb-4 p-2 border border-gray-300 rounded outline-none w-full">
                {user.selectedTime}
              </div>
            </div>
            <div>
              <label
                htmlFor={`Date-${index}`}
                className="text-sm font-semibold text-gray-700 flex mb-2"
              >
                Approved Date
              </label>
              <div className="mb-4 p-2 border border-gray-300 rounded outline-none w-full">
                {user.selectedDate}
              </div>
            </div>

            <p>Status:</p>
            {user.Response=="Aproved" ? (
              <div className="flex justify-center">
                <span className="text-green-500 font-semibold">
                  Request Approved
                </span>
              </div>
            ) : (
              <div className="flex justify-center">
                <span className="text-red-500 font-semibold">
                  Request Pending
                </span>
              </div>
            )}
          </div>
          )
        ))}
      </div>
    </body>
  );
}
