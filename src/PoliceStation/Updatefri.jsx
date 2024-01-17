import React, { useState,useEffect } from 'react'
import axios from 'axios';
import logo from '../Img/Rajasthan_Police_Logo (2) (1).png'
export default function Updatefri() {
    const [friNo, setFriNo] = useState("");
    const [complainantName, setComplainantName] = useState("");
    const [complainantNumber, setComplainantNumber] = useState("");
    const [investigatingProgress, setInvestigatingProgress] = useState("");
    const [investigatingOfficers, setInvestigatingOfficers] = useState("");
    const [status, setStatus] = useState("Select One");
    const [stepsUndertaken, setStepsUndertaken] = useState("");
  const [evidenceCollections, setEvidenceCollections] = useState("");
  const [witnessStatements, setWitnessStatements] = useState("");
  const [resolution, setResolution] = useState("");
  const [outcomes, setOutcomes] = useState("");
    const[error , setError]= useState("");
    const[successMessage, setSuccessMessage]= useState("")

     const handleVerify = ()=>{

      if(!friNo.trim() ){
        setError("Please fill FRi No.");
        return;
      }

      if(!complainantName.trim()){
        setError("Please fill  complainantName Name")
        return;
      } 
      
      if(!complainantNumber.trim()){
        setError("Please fill complainantNumber No.")
      }
      
     }



  const handleUpdate = async () => {
    try {
      
      const response = await axios.post('http://localhost:4000/api/v1/updateonfir', {
        FIRNO:friNo,
        complainantName:complainantName,
        complainantNumber:complainantNumber,
        InvestigationProgress:investigatingProgress,
        InvestigatingOfficers:investigatingOfficers,
        Status:status,
        StepsUndertaken:stepsUndertaken,
        EvidenceCollections:evidenceCollections,
        WitnessStatements:witnessStatements,
        Resolutions:resolution,
        Outcomes:outcomes
       
      });

      const result = response.data;

      console.log(response)
      setSuccessMessage(response.data.message)
      console.log(response.data)
     
    } catch (error) {
      setError("Error updating FIR");
      console.error("Error updating FIR:", error);
    }
  };

  return (
    <div>
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
        Update On FIR
      </h1>
    </main>

    <div className="mx-10 mt-10 flex flex-wrap justify-center">
    <div className="p-6 bg-white text-gray-700 border rounded flex flex-wrap flex-col w-96 lg:w-2/4">
    <h2 className='text-center text-xl font-semibold text-orange-500'> FIR Details</h2>

          <label htmlFor="friNo" className="mb-1 text-gray-600 font-semibold font-sm">
            FIR No:
          </label>
          <input
            type="text"
            name="friNo"
            id="friNo"
            value={friNo}
            onChange={(e) => {
              // Allow only numeric characters
              const numericValue = e.target.value.replace(/[^0-9]/g, '');
              setFriNo(numericValue);
            }}
            placeholder="Enter FIR NO. (digit only)"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
         
            
          />

          <label htmlFor="complainantName" className="mb-1 text-gray-600 font-semibold">
            Complainant Name:
          </label>
          <input
            type="text"
            name="complainantName"
            id="complainantName"
            value={complainantName}
            onChange={(e) => setComplainantName(e.target.value)}
            placeholder="Enter Complainant Name"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />

          <label htmlFor="complainantNumber" className="mb-1 text-gray-600 font-semibold">
            Complainant Number:
          </label>
          <input
            type="text"
            name="complainantNumber"
            id="complainantNumber"
            value={complainantNumber}
            onChange={(e) => setComplainantNumber(e.target.value)}
            placeholder="Enter Complainant Number"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />

          <h2 className='text-center text-xl font-semibold text-orange-500'> Statement</h2>


          <label htmlFor="investigatingProgress" className="mb-1 text-gray-600 font-semibold">
            Investigating Progress:
          </label>
          <input
            type="text"
            name="investigatingProgress"
            id="investigatingProgress"
            value={investigatingProgress}
            onChange={(e) => setInvestigatingProgress(e.target.value)}
            placeholder="Enter Investigating Progress"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />

          <label htmlFor="investigatingOfficers" className="mb-1 text-gray-600 font-semibold">
            Investigating Officers:
          </label>
          <input
            type="text"
            name="investigatingOfficers"
            id="investigatingOfficers"
            value={investigatingOfficers}
            onChange={(e) => setInvestigatingOfficers(e.target.value)}
            placeholder="Enter Investigating Officers"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />

          <label htmlFor="status" className="mb-1 text-gray-600 font-semibold">
            Status:
          </label>
          <select
            name="status"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          >
            <option value="Select">Select One</option>
            <option value="Pending">Pending</option>
            <option value="Closed">Closed</option>
          </select>

          <h2 className='text-center text-xl font-semibold text-orange-500'> Action Taken </h2>


<label htmlFor="stepsUndertaken" className="mb-1 text-gray-600 font-semibold">
  Steps Undertaken:
</label>
<input
  type="text"
  name="stepsUndertaken"
  id="stepsUndertaken"
  value={stepsUndertaken}
  onChange={(e) => setStepsUndertaken(e.target.value)}
  placeholder="Enter Steps Undertaken"
  className="mb-4 p-2 border border-gray-300 rounded outline-none"
/>

<label htmlFor="evidenceCollections" className="mb-1 text-gray-600 font-semibold">
  Evidence Collections:
</label>
<input
  type="text"
  name="evidenceCollections"
  id="evidenceCollections"
  value={evidenceCollections}
  onChange={(e) => setEvidenceCollections(e.target.value)}
  placeholder="Enter Evidence Collections"
  className="mb-4 p-2 border border-gray-300 rounded outline-none"
/>

<label htmlFor="witnessStatements" className="mb-1 text-gray-600 font-semibold">
  Witness Statements:
</label>
<textarea
  name="witnessStatements"
  id="witnessStatements"
  value={witnessStatements}
  onChange={(e) => setWitnessStatements(e.target.value)}
  placeholder="Enter Witness Statements"
  className="mb-4 p-2 border border-gray-300 rounded outline-none h-20"
/>

<h2 className='text-center text-xl font-semibold text-orange-500'> Resolution </h2>

<label htmlFor="resolution" className="mb-1 text-gray-600 font-semibold">
  Resolution:
</label>
<input
  type="text"
  name="resolution"
  id="resolution"
  value={resolution}
  onChange={(e) => setResolution(e.target.value)}
  placeholder="Enter Resolution"
  className="mb-4 p-2 border border-gray-300 rounded outline-none"
/>

<label htmlFor="outcomes" className="mb-1 text-gray-600 font-semibold">
  Outcomes:
</label>
<textarea
  name="outcomes"
  id="outcomes"
  value={outcomes}
  onChange={(e) => setOutcomes(e.target.value)}
  placeholder="Enter Outcomes"
  className="mb-4 p-2 border border-gray-300 rounded outline-none h-20"
/>
          <button
            onClick={handleUpdate}
            className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-600"
          >
            Update  FIR
          </button>
          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
          {successMessage && (
            <p className="text-green-500 font-semibold mt-2">
              {successMessage}
            </p>
          )}
        </div>
    </div>
  </div>

  )
}
