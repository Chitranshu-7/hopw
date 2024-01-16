import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Componants/Navbar";
import { useNavigate } from "react-router-dom";

export default function Pendingrticket() {
  const [usersData, setUsersData] = useState([]);


  const [expandedCards, setExpandedCards] = useState([]);

  const navigate = useNavigate();

  const handleShowMore = (index) => {
    setExpandedCards((prev) => [...prev, index]);
  };

  const handleApprove = (userId) => {
    // Navigate to another page with the userId parameter
    navigate(`/approveticket`, { state: { userId } });

  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/getmeetingtickets");
        setUsersData(response.data.meetingtickets);
        console.log(response.data.meetingtickets)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
     <Navbar/>

      <main className="mt-10 py-3">
        <h1 className="text-4xl text-center font-semibold">Pending Requests</h1>
      </main>

      <div className="mx-10 mt-20 flex flex-wrap justify-center gap-20">
        {usersData.map((user, index) => (
          user.Response === "Pending" && (
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

              {expandedCards.includes(index) && (
                <div>
                  <label
                    htmlFor={`email-${index}`}
                    className="text-sm font-semibold text-gray-700 flex mb-2"
                  >
                    Email:
                  </label>
                  <div className="mb-4 p-2 border border-gray-300 rounded outline-none w-full">
                    {user.Email}
                  </div>
                </div>
              )}

              <div>
                <label
                  htmlFor={`mobileNumber-${index}`}
                  className="text-sm font-semibold text-gray-700 flex mb-2"
                >
                  Mobile Number:
                </label>
                <div className="mb-4 p-2 border border-gray-300 rounded outline-none w-full">
                  {user.PhoneNo}
                </div>
              </div>

              <div>
                <label
                  htmlFor={`Address-${index}`}
                  className="text-sm font-semibold text-gray-700 flex mb-2"
                >
                  Address:
                </label>
                <div className="mb-4 p-2 border border-gray-300 rounded outline-none w-full">
                  {user.Address}
                </div>
              </div>

              <div>
                <label
                  htmlFor={`purpose-${index}`}
                  className="text-sm font-semibold text-gray-700 flex mb-2"
                >
                  Purpose:
                </label>
                <div className="mb-4 p-2 border border-gray-300 rounded outline-none w-full">
                  {user.Purpose}
                </div>
              </div>

              {expandedCards.includes(index) ? (
                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      handleApprove(user._id);
                    }}
                    className="bg-green-400 text-white px-3 rounded hover:bg-green-600 mx-2 py-2"
                  >
                    Approve
                  </button>
                  <button className="bg-red-400 text-white px-3 rounded hover:bg-red-600 mx-2">
                    Deny
                  </button>
                </div>
              ) : (
                <div className="flex justify-center">
                  <button
                    onClick={() => handleShowMore(index)}
                    className="bg-orange-400 text-white px-3  rounded hover:bg-orange-600 w-1/2"
                  >
                    Show More
                  </button>
                </div>
              )}
            </div>
          )
        ))}
      </div>
    </div>
  );
}
