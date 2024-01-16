import React from "react";
import { useState } from "react";
import logo from '../Img/Rajasthan_Police_Logo (2) (1).png'
export default function Verifyregistration() {
  const [uniqueKey, setUniqueKey] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleUniqueKeySubmit = () => {
    // Check if the unique key has the correct length
    if (uniqueKey.length === 8) {
      // Process the unique key, perform any required actions
      // For example, you can make an API call or navigate to another page
      setSuccessMessage("Unique Key submitted successfully!");
      setError("");
    } else {
      setError("Unique Key must be 8 characters long.");
      setSuccessMessage("");
    }
  };

  
  // const handleUniqueKeySubmit = async () => {
  //   try {
  //     // Make an API call to verify the unique key
  //     const response = await axios.post("YOUR_API_ENDPOINT", {
  //       uniqueKey: uniqueKey,
  //     });

  //     // Check the response from the server
  //     if (response.data.success) {
  //       setSuccessMessage(response.data.message);
  //       setError("");
  //     } else {
  //       setError(response.data.message);
  //       setSuccessMessage("");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting unique key:", error);
  //     setError("An error occurred while verifying the unique key.");
  //     setSuccessMessage("");
  //   }
  // };

  return (
    <body>
      <nav className="bg-white text-center py-5 flex flex-wrap justify-around sticky top-0 ">
        <div>
          <img src={logo} alt="" className="Headimg  " />
        </div>
        <div>
          <h1 className="text-orange-400 text-5xl text">Rajasthan Police</h1>
          <p className="text-xl font-semibold text-orange-400 mt-3">
            Goverment of India
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
        <h1 className="text-4xl text-center font-semibold">
          Higher Authority Portal
        </h1>
      </main>

      <div className="mx-10 mt-10 flex flex-wrap justify-center">
        <div className="p-6 bg-white text-gray-700 border rounded flex flex-wrap flex-col w-96">
          <input
            type="text"
            name="uniqueKey"
            id="uniqueKey"
            value={uniqueKey}
            onChange={(e) => setUniqueKey(e.target.value)}
            placeholder="Enter Unique Key (8 characters)"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <button
            onClick={handleUniqueKeySubmit}
            className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-600"
          >
            Verify The Key
          </button>
          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
          {successMessage && (
            <p className="text-green-500 font-semibold mt-2">
              {successMessage}
            </p>
          )}
        </div>
      </div>
    </body>
  );
}
