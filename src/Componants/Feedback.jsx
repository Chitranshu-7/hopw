import React, { useState } from 'react';
import logo from "../Img/Rajasthan_Police_Logo (2) (1).png";
import axios from 'axios';
import Navbar from './Navbar';

export default function Feedback() {
  const [rating, setRating] = useState("");
  const [name, setName] = useState('');
  const [policeStation, setPoliceStation] = useState('');
  const [phone, setPhone] = useState('');
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState("");


  const handleRatingClick = (isGood) => {
    setRating(isGood);
    setError('');
  };

  const validateInput = () => {
    const nameRegex = /^[a-zA-Z ]+$/;
    const policeStationRegex = /^[a-zA-Z0-9 ]+$/;
    const phoneRegex = /^\d{10}$/;
    const feedbackRegex = /^[a-zA-Z0-9 ,.!?()'\r\n]+$/;

    if (!name.trim()) {
      setError('Please enter your name.');
      return false;
    }

    if (!policeStation.trim()) {
      setError('Please enter the police station name.');
      return false;
    }

    if (!phone.trim()) {
      setError('Please enter your phone number.');
      return false;
    }

    if (!phoneRegex.test(phone)) {
      setError('Invalid phone number. Must be 10 digits.');
      return false;
    }

    if (!feedback.trim()) {
      setError('Please enter your feedback.');
      return false;
    }

    if (!nameRegex.test(name)) {
      setError('Invalid name. Please use only alphabets and spaces.');
      return false;
    }

    if (!policeStationRegex.test(policeStation)) {
      setError('Invalid police station name. Please use alphanumeric characters and spaces.');
      return false;
    }

    if (!feedbackRegex.test(feedback)) {
      setError('Invalid feedback. Please use alphanumeric characters, spaces, commas, periods, exclamation marks, question marks, parentheses, single quotes, and newlines.');
      return false;
    }

    if (rating === null) {
      setError('Please select a rating (Good/Bad).');
      return false;
    }

    return true;
  };

  const handleSubmitFeedback = async () => {
    setError('');

    if (validateInput()) {
      try {
        const response = await axios.post('http://localhost:4000/api/v1/otherfeedback', {
          name,
          policeStation,
          phone,
          feedback,
          rating
        });

        console.log('Feedback submitted:', response.data);
        setSuccessMessage(response.data.message)

        // Reset form state
        setName('');
        setPoliceStation('');
        setPhone('');
        setFeedback('');
        setRating(null);

      } catch (error) {
        console.error('Error submitting feedback:', error);
        setError('An error occurred while submitting feedback. Please try again later.');
      }
    }
  };

  return (
    <body className="relative">
      <Navbar/>
      <main className="mt-10 py-3">
        <h1 className="text-4xl text-center font-semibold">Feedback</h1>
      </main>
      <main className="mx-10 mt-10 flex flex-wrap justify-center">
        <div className="p-6 bg-white text-gray-700 border rounded flex flex-wrap flex-col w-96">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
         <select
            Name="PoliceStation"
            id="PoliceSation"
            value={policeStation}
            onChange={(e) => setPoliceStation(e.target.value)}
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
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <textarea
            name="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Feedback"
            rows="4"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          ></textarea>
          <div className="flex justify-center space-x-4">
            <button
              className={`${
                rating === "Good"
                  ? 'bg-green-700 text-white'
                  : 'bg-green-200 text-white hover:bg-green-600'
              } py-2 px-4 rounded`}
              onClick={() => handleRatingClick("Good")}
            >
              Good
            </button>
            <button
              className={`${
                rating === "Bad"
                  ? 'bg-red-700 text-white'
                  : 'bg-red-200 text-white hover:bg-red-600'
              } py-2 px-4 rounded`}
              onClick={() => handleRatingClick("Bad")}
            >
              Bad
            </button>
          </div>
          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
          {successMessage && <p className="text-green-500 font-semibold mt-2">{successMessage}</p>}

          <button
            className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-600 mt-4"
            onClick={handleSubmitFeedback}
          >
            Submit Feedback
          </button>
        </div>
      </main>
    </body>
  );
}
