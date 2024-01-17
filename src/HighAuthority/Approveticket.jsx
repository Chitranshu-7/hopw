import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Navbar from '../Componants/Navbar';
export default function Approveticket() {
  const navigate= useNavigate();
  const location = useLocation();
  const { userId } = location.state || {};
  const [selectedUser, setSelectedUser] = useState({
    Name: 'John Doe',
    Email: 'john.doe@example.com',
    PhoneNO: '123-456-7890',
  });

  //Pending status now will be Aproved
  const[Response, setResponse]=useState("Aproved");
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
 
  const handleClosePopUp = () => {
  navigate('/pendingticket')
    
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/getmeetingtickets");
        const userData = response.data.meetingtickets.find(user => user._id === userId);
  
        if (userData) {
          setSelectedUser({
            Name: userData.Name,
            Email: userData.Email,
            PhoneNO: userData.PhoneNo,
          });
        } else {
          console.warn(`User with userId ${userId} not found`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [userId]);


  //Sending the data to the backend
  const handleSendDetails = async () => {
    try {
    
      const response = await axios.post("http://localhost:4000/api/v1/updateusermeetingticket", {
        _id:userId,
        selectedTimeSlot,
        selectedDate,
        selectedTime,
        Response, 
      });
  
      // Handle the response from the backend as needed
      // console.log("Backend response:", response);
      navigate('/pendingticket')
  
      // Optionally, you can navigate to another page after successful submission
      // navigate('/success'); // Replace '/success' with the desired route
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };
  
  return (
    <body>
<Navbar/>

      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-80">
        <div className="bg-white p-6 rounded-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 text-center">
            Approving the requests
          </h2>
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Name:
            </label>
            <div className="mb-4 p-2 border border-gray-300 rounded outline-none w-full text-gray-800 md:w-96">
              {selectedUser.Name}
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Email:
            </label>
            <div className="mb-4 p-2 border border-gray-300 rounded outline-none w-full text-gray-800 md:w-96">
              {selectedUser.Email}
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Phone Number:
            </label>
            <div className="mb-4 p-2 border border-gray-300 rounded outline-none w-full text-gray-800 md:w-96">
              {selectedUser.PhoneNO}
            </div>
          </div>
          <div>
  <label className="text-sm font-semibold text-gray-700 mb-2 block">
    Select Time Slot:
  </label>
  <select
    value={selectedTimeSlot}
    onChange={(e) => setSelectedTimeSlot(e.target.value)}
    className="mb-4 p-2 border border-gray-300 rounded outline-none w-full text-gray-800 md:w-96"
  >
    <option value="">Select Time Slot</option>
    <option value="morning">Morning</option>
    <option value="afternoon">Afternoon</option>
    <option value="evening">Evening</option>
  </select>
</div>

<div>
  <label className="text-sm font-semibold text-gray-700 mb-2 block">
    Select Date:
  </label>
  <input
    type="date"
    value={selectedDate}
    onChange={(e) => setSelectedDate(e.target.value)}
    className="mb-4 p-2 border border-gray-300 rounded outline-none w-full text-gray-800 md:w-96"
  />
</div>

<div>
  <label className="text-sm font-semibold text-gray-700 mb-2 block">
    Select Time:
  </label>
  <input
    type="time"
    value={selectedTime}
    onChange={(e) => setSelectedTime(e.target.value)}
    className="mb-4 p-2 border border-gray-300 rounded outline-none w-full text-gray-800 md:w-96"
  />
</div>


          <div className="flex justify-evenly flex-wrap">
            <button
              onClick={handleSendDetails}
              className="bg-gray-300 text-gray-800 px-3 py-2 rounded hover:bg-gray-400"
            >
              Send the Details
            </button>

            <button
              onClick={handleClosePopUp}
              className="bg-gray-300 text-gray-800 px-3 py-2 rounded hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}
