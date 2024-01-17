import React, { useState } from "react";
import logo from '../Img/Rajasthan_Police_Logo (2) (1).png';
import logo1 from '../Img/Bharat_logo.png';
import axios from 'axios';
import Navbar from "./Navbar";

export default function Complaint() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [PinCode, setPinCode] = useState("");
  const [Address, setAddress] = useState("");
  const [PoliceStationName, setPoliceStationName] = useState("");
  const [complaint, setcomplaint] = useState("");
  const [ImgUpload, setImgUpload] = useState(null);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateInput = () => {
    // Regular expressions for validation
    const NameRegex = /^[a-zA-Z ]+$/;
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PhoneNoRegex = /^\d{10}$/;
    const PinCodeRegex = /^\d{6}$/;
    const AddressRegex = /^[a-zA-Z0-9 ]+$/;
    const PoliceStationNameRegex = /^[a-zA-Z0-9 ]+$/;
    const complaintRegex = /^[a-zA-Z0-9 ,.!?()'\r\n]+$/;
    if (!Name.trim()) {
      setError('Please enter your Name.');
      return false;
    }

    if (!Email.trim()) {
      setError('Please enter your Email.');
      return false;
    }

    if (!EmailRegex.test(Email)) {
      setError('Invalid Email Address.');
      return false;
    }

    if (!PhoneNo.trim()) {
      setError('Please enter your PhoneNo number.');
      return false;
    }

    if (!PhoneNoRegex.test(PhoneNo)) {
      setError('Invalid PhoneNo number. Must be 10 digits.');
      return false;
    }

    if (!PinCode.trim()) {
      setError('Please enter your pin code.');
      return false;
    }

    if (!PinCodeRegex.test(PinCode)) {
      setError('Invalid pin code. Must be 6 digits.');
      return false;
    }
    
  if (!AddressRegex.test(Address)) {
    setError('Invalid Address. Please use alphanumeric characters and spaces.');
    return false;
  }

  if (!PoliceStationName.trim()) {
    setError('Please enter the police station Name.');
    return false;
  }

  if (!PoliceStationNameRegex.test(PoliceStationName)) {
    setError('Invalid police station Name. Please use alphanumeric characters and spaces.');
    return false;
  }

  if (!complaint.trim()) {
    setError('Please enter your complaint.');
    return false;
  }

  if (!complaintRegex.test(complaint)) {
    setError('Invalid complaint. Please use alphanumeric characters, spaces, commas, periods, exclamation marks, question marks, parentheses, single quotes, and newlines.');
    return false;
  }

 
  

    return true;
  };

  const handleComplaint = async () => {
    setError('');

    if (validateInput()) {
      const complaintData = {
        Name,
        Email,
        PhoneNo,
        PinCode,
        Address,
        PoliceStationName,
        complaint,
      };

      if (ImgUpload) {
        try {
          const base64Image = await convertImageToBase64(ImgUpload);
          complaintData.ImgUpload = base64Image;
        } catch (error) {
          console.error('Error converting image to base64:', error);
          setError('An error occurred while processing the image. Please try again.');
          return;
        }
      }

      try {
        const response = await axios.post('http://localhost:4000/api/v1/complain', complaintData);
        console.log('Complaint submitted:', response.data);
        setSuccessMessage(response.data.message);

        
      setAddress("");
      setEmail("")
      setName("")
      setPhoneNo("")
      setPinCode("")
      setPoliceStationName('')
      
      } catch (error) {
        console.error('Error submitting complaint:', error);
        setError('An error occurred while submitting the complaint. Please try again later.');
      }
    }
  };

  const convertImageToBase64 = async (imageFile) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        resolve(reader.result.split(',')[1]); // Extract base64 part only
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(imageFile);
    });
  };
  return (
    <>
      <Navbar/>

      <main className="mt-10 py-3">
        <h1 className="text-4xl text-center font-semibold">Social Issues</h1>
      </main>


    <main className="mx-10 mt-10 flex flex-wrap justify-center">
      <div className="p-6 bg-white text-gray-700 border rounded flex flex-wrap flex-col w-96">
        <input
          type="text"
          Name="Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="mb-4 p-2 border border-gray-300 rounded outline-none"
          required
        />
        <input
          type="text"
          Name="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="mb-4 p-2 border border-gray-300 rounded outline-none"
          required
        />
        <input
          type="tel"
          Name="PhoneNo"
          value={PhoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          placeholder="Phone Number"
          className="mb-4 p-2 border border-gray-300 rounded outline-none"
          required
        />
        <input
          type="text"
          Name="PinCode"
          value={PinCode}
          onChange={(e) => setPinCode(e.target.value)}
          placeholder="Pin Code"
          className="mb-4 p-2 border border-gray-300 rounded outline-none"
          required
        />
        <input
          type="text"
          Name="Address"
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          className="mb-4 p-2 border border-gray-300 rounded outline-none"
          required
        />
        <input
          type="text"
          Name="PoliceStationName"
          value={PoliceStationName}
          onChange={(e) => setPoliceStationName(e.target.value)}
          placeholder="Police Station Name"
          className="mb-4 p-2 border border-gray-300 rounded outline-none"
          required
        />
        <textarea
          Name="complaint"
          value={complaint}
          onChange={(e) => setcomplaint(e.target.value)}
          placeholder="Complaint"
          className="mb-4 p-2 border border-gray-300 rounded outline-none"
          required
        />
        {/* Example input for ImgUpload upload */}
        <input
          type="file"
          accept="ImgUpload/*"
          onChange={(e) => setImgUpload(e.target.files[0])}
          className="mb-4 p-2 border border-gray-300 rounded outline-none"
        />
         {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
          {successMessage && <p className="text-green-500 font-semibold mt-2">{successMessage}</p>}


        <button
          onClick={handleComplaint}
          className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-600"
        >
          Submit Complaint
        </button>
      </div>
    </main>

    </>
  );
}
