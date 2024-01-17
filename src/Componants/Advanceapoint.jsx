import React, { useState } from 'react';
import logo from "../Img/Rajasthan_Police_Logo (2) (1).png";
import axios from 'axios';
import Navbar from './Navbar';
import Linker from '../Linker';
export default function Advanceapoint() {
  const [Name, setName] = useState('');
  const [PhoneNo, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [PinCode, setPincode] = useState('');
  const [Address, setAddress] = useState('');
  const [Purpose, setPurpose] = useState('');
  const [error, setError] = useState('');
 const [Response, setResponse]= useState("Pending")
  const [successMessage, setSuccessMessage] = useState("");
  

  const handlePincodeChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) {
      setPincode(value);
    }
  };

 
 
  const handleSubmit = async () => {
    if (!Name || !PhoneNo || !Email || !PinCode || !Address || !Purpose) {
      setError('All fields are required.');
      return;
    }

    setError('');

    try {
      const response = await axios.post(`${Linker.backend}/api/v1/apointment`, {
         Name,
        PhoneNo,
        Email,
         PinCode,
         Address,
       Purpose,
       Response
      });

      // console.log('API Response:', response.data);
      // console.log(response.data.message)
      setSuccessMessage(response.data.message)

      setName("");
      setEmail("")
      setPhone("")
      setPincode("")
      setAddress("");
      setPurpose("");
    
      

      // You can handle the response here, redirect to another page, show a success message, etc.

    } catch (error) {
      console.error('Error submitting data:', error.message);
      setError(error.message)

      // Handle error, display an error message, or perform other actions
    }
  };

  return (
    <body>
    <Navbar/>
      <main className="mt-10 py-3">
        <h1 className="text-4xl text-center font-semibold">Advance Appointment</h1>
      </main>
      <main className="mx-10 mt-10 flex flex-wrap justify-center">
        <div className="p-6 bg-white text-gray-700 border rounded flex flex-wrap flex-col w-96">
          <input
            type="text"
            name="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <input
            type="tel"
            name="PhoneNo"
            value={PhoneNo}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <input
            type="email"
            name="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />

          <input
            type="text"
            name="Purpose"
            value={Purpose}
            onChange={(e) => setPurpose(e.target.value)}
            placeholder="Purpose"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />

          <input
            type="text"
            name="PinCode"
            value={PinCode}
            onChange={handlePincodeChange}
            placeholder="PinCode (Six Digits)"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <textarea
            name="Address"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            rows="4"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          ></textarea>
          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
          <button
            className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-600 mt-4"
            onClick={handleSubmit}
          >
            Submit
          </button>
          {error && <p className="text-red-500  font-semibold mt-2">{error}</p>}
          {successMessage && <p className="text-green-500 font-semibold mt-2">{successMessage}</p>}
        </div>
      </main>
    </body>
  );
}
