
import React from "react";
import  {useEffect}  from "react";
import axios from "axios";
import logo from "../Img/Rajasthan_Police_Logo (2) (1).png";
import { useState} from "react";

export default function Pendingrequests() {

  const [usersData, setUsersData] = useState([]);
    // const usersData = [
    //     { name: "John Doe", mobileNumber: "1234567890", purpose: "Meeting", email: "john@example.com", firNumber: "FIR123" },
    //     { name: "Jane Smith", mobileNumber: "9876543210", purpose: "Interview", email: "jane@example.com", firNumber: "FIR456" },
    //     { name: "Bob Johnson", mobileNumber: "5551112222", purpose: "Discussion", email: "bob@example.com", firNumber: "FIR789" },
    //   ];

  const [expandedCards, setExpandedCards] = useState([]);

  const handleShowMore = (index) => {
    setExpandedCards((prev) => [...prev, index]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("");
        console.log(response)
        // setUsersData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <body>
      <nav className="bg-white text-center py-5 flex flex-wrap justify-around sticky top-0">
        <div>
          <img src={logo} alt="" className="Headimg" />
        </div>
        <div>
          <h1 className="text-orange-400 text-5xl text">Rajasthan Police</h1>
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
        <h1 className="text-4xl text-center font-semibold">Pending Request</h1>
      </main>

      <div className="mx-10 mt-20 flex flex-wrap justify-center gap-20">
        {usersData.map((user, index) => (
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
                {user.name}
              </div>
            </div>

            <div>
              <label
                htmlFor={`firNumber-${index}`}
                className="text-sm font-semibold text-gray-700 flex mb-2"
              >
                FIR Number:
              </label>
              <div className="mb-4 p-2 border border-gray-300 rounded outline-none w-full">
                {user.firNumber}
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
                  {user.email}
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
                {user.mobileNumber}
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
                {user.purpose}
              </div>
            </div>

            {expandedCards.includes(index) ? (
              <div className="flex justify-center">
                <button className="bg-green-400 text-white px-3 rounded hover:bg-green-600 mx-2 py-2 ">
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
        ))}
      </div>
    </body>
  );
}
