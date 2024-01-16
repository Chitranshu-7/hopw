

// import React from 'react';
// import logo from '../Img/Rajasthan_Police_Logo (2) (1).png';

// export default function Complainreview() {
//   const feedbackData = [
//     {
//       title: 'Title of Feedback 1',
//       submittedBy: 'John Doe',
//       policeStation: 'ABC Station',
//       feedback:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//       rating: 'Good',
//       friNumber: '12345',
//       phoneNumber: '9876543210',
//     },
//     {
//       title: 'Title of Feedback 2',
//       submittedBy: 'Jane Smith',
//       policeStation: 'XYZ Station',
//       feedback:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//       rating: 'Excellent',
//       friNumber: '67890',
//       phoneNumber: '1234567890',
//     },
//     {
//       title: 'Title of Feedback 3',
//       submittedBy: 'Bob Johnson',
//       policeStation: 'PQR Station',
//       feedback:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//       rating: 'Satisfactory',
//       friNumber: '54321',
//       phoneNumber: '5551112222',
//     },
//     {
//       title: 'Title of Feedback 4',
//       submittedBy: 'Alice Williams',
//       policeStation: 'LMN Station',
//       feedback:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//       rating: 'Needs Improvement',
//       friNumber: '98765',
//       phoneNumber: '9998887777',
//     },
//   ];

//   return (
//     <body className="relative">
//       <nav className="bg-white text-center py-5 flex flex-wrap justify-around sticky top-0">
//         <div>
//           <img src={logo} alt="" className="Headimg" />
//         </div>
//         <div>
//           <h1 className="text-orange-400 text-5xl text">Rajasthan police</h1>
//           <p className="text-xl font-semibold text-orange-400 mt-3">
//             Government of India
//           </p>
//         </div>
//         <div>
//           <button
//             onClick={() => {
//               window.location.href = '/';
//             }}
//             className=" bg-orange-400 py-1 px-6 rounded hover:bg-orange-600"
//           >
//             Home
//           </button>
//         </div>
//       </nav>

//       <main className="mt-10 py-3">
//         <h1 className="text-4xl text-center font-semibold">FeedBack Details</h1>
//       </main>

//       <main className="mx-10 mt-10 flex flex-wrap justify-center gap-4">
//         {feedbackData.map((feedback, index) => (
//           <div key={index} className="p-6 bg-white text-gray-700 border rounded w-96 mb-4">
//             <div className="mb-4 border-b pb-4">
//               <label className="block text-sm font-semibold text-gray-800">Feedback Title:</label>
//               <p className="text-gray-500 font-semibold mb-2">{feedback.title}</p>
//             </div>

//             <div className="mb-4 border-b pb-4">
//               <label className="block text-sm font-semibold text-gray-800">Submitted by:</label>
//               <p className="text-gray-500 mb-2">{feedback.submittedBy}</p>
//             </div>

//             <div className="mb-4 border-b pb-4">
//               <label className="block text-sm font-semibold text-gray-800">Police Station:</label>
//               <p className="text-gray-500 mb-2">{feedback.policeStation}</p>
//             </div>

//             <div className="mb-4 border-b pb-4">
//               <label className="block text-sm font-semibold text-gray-800">Feedback:</label>
//               <p className="mb-4">{feedback.feedback}</p>
//             </div>

//             <div className="mb-4 border-b pb-4">
//               <label className="block text-sm font-semibold text-gray-800">Fri Number:</label>
//               <p className="text-gray-500 mb-2">{feedback.friNumber}</p>
//             </div>

//             <div className="mb-4 border-b pb-4">
//               <label className="block text-sm font-semibold text-gray-800">Phone Number:</label>
//               <p className="text-gray-500 mb-2">{feedback.phoneNumber}</p>
//             </div>

//             <div className="flex justify-between">
//               <label className="font-semibold text-gray-800">Feedback Rating:</label>
//               <p className="text-green-500 font-semibold">{feedback.rating}</p>
//             </div>
//           </div>
//         ))}
//       </main>
//     </body>
//   );
// }


import React from 'react';
import logo from '../Img/Rajasthan_Police_Logo (2) (1).png';
import { useState,useEffect } from 'react';
import axios from 'axios';
export default function Complainreview() {


  const [complaintData, setComplaintData] = useState([]);
  // const complaintData = [
  //   {
  //     name: 'John Doe',
  //     email: 'john@example.com',
  //     phoneNumber: '9876543210',
  //     address: '123 Main St, Cityville',
  //     policeStationName: 'ABC Station',
  //     complaint:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //     image: 'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=600',
  //   },
   
  // ];


  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/getusercomplain'); // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
        // setComplaintData(response.data);
        console.log(response.data.feedbacks)
        setComplaintData(response.data.feedbacks)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts


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
              window.location.href = '/';
            }}
            className=" bg-orange-400 py-1 px-6 rounded hover:bg-orange-600"
          >
            Home
          </button>
        </div>
      </nav>

      <main className="mt-10 py-3">
        <h1 className="text-4xl text-center font-semibold">Complaint Details</h1>
      </main>

      <main className="mx-10 mt-10 flex flex-wrap justify-center gap-4">
        {complaintData.map((complaint, index) => (
          <div key={index} className="p-6 bg-white text-gray-700 border rounded w-96 mb-4">
            <div className="mb-4 border-b pb-4">
              <label className="block text-sm font-semibold text-gray-800">Name:</label>
              <p className="text-gray-500 font-semibold mb-2">{complaint.Name}</p>
            </div>

            <div className="mb-4 border-b pb-4">
              <label className="block text-sm font-semibold text-gray-800">Email:</label>
              <p className="text-gray-500 mb-2">{complaint.Email}</p>
            </div>

            <div className="mb-4 border-b pb-4">
              <label className="block text-sm font-semibold text-gray-800">Phone Number:</label>
              <p className="text-gray-500 mb-2">{complaint.PhoneNo}</p>
            </div>

            <div className="mb-4 border-b pb-4">
              <label className="block text-sm font-semibold text-gray-800">Address:</label>
              <p className="text-gray-500 mb-2">{complaint.Address}</p>
            </div>

            <div className="mb-4 border-b pb-4">
              <label className="block text-sm font-semibold text-gray-800">Police Station Name:</label>
              <p className="text-gray-500 mb-2">{complaint.PoliceStationName}</p>
            </div>

            <div className="mb-4 border-b pb-4">
              <label className="block text-sm font-semibold text-gray-800">Complaint:</label>
              <p className="mb-4">{complaint.complaint}</p>
            </div>

            {complaint.ImgUpload? <div className="mb-4 border-b pb-4">
              <label className="block text-sm font-semibold text-gray-800">Image:</label>
              <img src={complaint.image} alt="Loading..." className="w-full h-auto rounded-xl" />

             
            </div>:null}
           
          </div>
        ))}
      </main>
    </body>
  );
}
