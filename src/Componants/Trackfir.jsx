// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function Trackfir() {
//   const [firDetails, setFirDetails] = useState([]);
//   const [searchFIRNO, setSearchFIRNO] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/api/v1/trackfir");
//         setFirDetails(response.data.FIR);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleCheckStatus = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4000/api/v1/trackfir/${searchFIRNO}`);
//       setFirDetails([response.data]); // Assuming the API returns a single FIR object
//     } catch (error) {
//       console.error("Error fetching FIR details:", error);
//       // Handle error (e.g., show an error message to the user)
//     }
//   };

//   const filteredFIRDetails = firDetails.filter(
//     (firDetail) => firDetail.FIRNO === searchFIRNO
//   );

//   return (
//     <div className="relative">
//       <main className="mt-10 py-3">
//         <h1 className="text-4xl text-center font-semibold">FIR Details</h1>
//       </main>

//       <main className="my-16 flex flex-wrap items-center justify-center py-10">
//         <div>
//           <input
//             className="py-4 text-2xl font-semibold px-2 text-gray-900 outline-none w-full m-2 chinu"
//             type="text"
//             placeholder="Enter FIR NO. Here"
//             value={searchFIRNO}
//             onChange={(e) => setSearchFIRNO(e.target.value)}
//           />
//         </div>

//         <div>
//           {/* <button
//             onClick={handleCheckStatus}
//             className="py-4 text-2xl bg-blue-600 font-semibold px-2 text-white w-full m-2 chinu"
//           >
//             Check The Status
//           </button> */}
//         </div>
//       </main>

//       <main className="mx-10 mt-10 flex flex-wrap justify-center">
//         {filteredFIRDetails.map((firDetail, index) => (
//           <div
//             key={index}
//             className="p-6 bg-white text-gray-700 border rounded flex flex-wrap flex-col w-96 lg:w-2/4"
//           >
//             <div className="mb-4 border-b pb-4">
//               <label className="block text-sm font-semibold text-gray-800">FIR Number:</label>
//               <p className="text-gray-500 font-semibold mb-2">{firDetail.FIRNO}</p>
//             </div>
//             <div className="mb-4 border-b pb-4">
//               <label className="block text-sm font-semibold text-gray-800">Complainant Name:</label>
//               <p className="text-gray-500 mb-2">{firDetail.complainantName}</p>
//             </div>
//             {/* Add similar blocks for other FIR details */}
//           </div>
//         ))}
//       </main>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

export default function Trackfir() {
  const [firDetails, setFirDetails] = useState([]);
  const [searchFIRNO, setSearchFIRNO] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/trackfir");
        setFirDetails(response.data.FIR);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCheckStatus = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:4000/api/v1/trackfir/${searchFIRNO}`);
      setFirDetails([response.data]); // Assuming the API returns a single FIR object
    } catch (error) {
      console.error("Error fetching FIR details:", error);
      // Handle error (e.g., show an error message to the user)
    } finally {
      setLoading(false);
    }
  };

  const filteredFIRDetails = firDetails.filter(
    (firDetail) => firDetail.FIRNO === searchFIRNO
  );

  return (

    <div className="relative">
      <Navbar/>
      <main className="mt-5 py-3">
        <h1 className="text-4xl text-center font-semibold">FIR Details</h1>
      </main>

      <main className="my-5 flex flex-wrap items-center justify-center py-10">
        <div>
          <input
            className="py-4 text-2xl font-semibold px-2 text-gray-900 outline-none w-full m-2 chinu"
            type="text"
            placeholder="Enter FIR NO."
            value={searchFIRNO}
            onChange={(e) => setSearchFIRNO(e.target.value)}
          />
        </div>

        <div>
          <button
            onClick={handleCheckStatus}
            className="py-4 text-2xl bg-blue-600 font-semibold px-2 text-white w-full m-2 chinu"
          >
            Check The Status
          </button>
        </div>
      </main>

      <main className="mx-10 mt-10 flex flex-wrap justify-center">
        {loading && <p>Loading...</p>}
        {!loading &&
          filteredFIRDetails.map((firDetail, index) => (
            <div
              key={index}
              className="p-6 bg-white text-gray-700 border rounded flex flex-wrap flex-col w-96 lg:w-2/4"
            >
              <div className="mb-4 border-b pb-4">
                <label className="block text-sm font-semibold text-gray-800">FIR Number:</label>
                <p className="text-gray-500 font-semibold mb-2">{firDetail.FIRNO}</p>
              </div>
              <div className="mb-4 border-b pb-4">
                <label className="block text-sm font-semibold text-gray-800">Complainant Name:</label>
                <p className="text-gray-500 mb-2">{firDetail.complainantName}</p>
              </div>

              <div className="mb-4 border-b pb-4">
                <label className="block text-sm font-semibold text-gray-800">Complainant No. :</label>
                <p className="text-gray-500 mb-2">{firDetail.complainantNumber}</p>
              </div>

              <div className="mb-4 border-b pb-4">
                <label className="block text-sm font-semibold text-gray-800">Investing Progress:</label>
                <p className="text-gray-500 mb-2">{firDetail.InvestigatingProgress}</p>
              </div>

              <div className="mb-4 border-b pb-4">
                <label className="block text-sm font-semibold text-gray-800">Investigating Officers:</label>
                <p className="text-gray-500 mb-2">{firDetail.InvestigatingOfficers}</p>
              </div>

              <div className="mb-4 border-b pb-4">
                <label className="block text-sm font-semibold text-gray-800">Status:</label>
                <p className="text-gray-500 mb-2">{firDetail.Status}</p>
              </div>

              <div className="mb-4 border-b pb-4">
                <label className="block text-sm font-semibold text-gray-800">Steps UnderTaken:</label>
                <p className="text-gray-500 mb-2">{firDetail.StepsUndertaken}</p>
              </div>

              <div className="mb-4 border-b pb-4">
                <label className="block text-sm font-semibold text-gray-800">Evidence Collections:</label>
                <p className="text-gray-500 mb-2">{firDetail.EvidenceCollections}</p>
              </div>

              <div className="mb-4 border-b pb-4">
                <label className="block text-sm font-semibold text-gray-800">Witness Statements:</label>
                <p className="text-gray-500 mb-2">{firDetail.WitnessStatements}</p>
              </div>
              <div className="mb-4 border-b pb-4">
                <label className="block text-sm font-semibold text-gray-800">Resolutions</label>
                <p className="text-gray-500 mb-2">{firDetail.Resolutions}</p>
              </div>
              <div className="mb-4 border-b pb-4">
                <label className="block text-sm font-semibold text-gray-800">Outcomes:</label>
                <p className="text-gray-500 mb-2">{firDetail.Outcomes}</p>
              </div>

             
            </div>
          ))}
      </main>
    </div>
  );
}

