import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Componants/Navbar";
export default function AddFir() {
  const [FIRNO, setFIRNO] = useState("");
  const [complainantName, setComplainantName] = useState("");
  const [complainantNumber, setComplainantNumber] = useState("");
  const [investigatingProgress, setInvestigatingProgress] = useState("");
  const [investigatingOfficers, setInvestigatingOfficers] = useState("");
  const [Status, setStatus] = useState("Select One");
  const [stepsUndertaken, setStepsUndertaken] = useState("");
  const [evidenceCollections, setEvidenceCollections] = useState("");
  const [witnessStatements, setWitnessStatements] = useState("");
  const [Resolutions, setResolutions] = useState("");
  const [Outcomes, setOutcomes] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleVerify = async () => {
    if (!FIRNO.trim()) {
      setError("Please fill FRi No.");
      return;
    }

    if (!complainantName.trim()) {
      setError("Please fill  complainantName Name");
      return;
    }

    if (!complainantNumber.trim()) {
      setError("Please fill complainantNumber No.");
      return;
    }

    if (!investigatingOfficers.trim()) {
      setError("Please fill investigationOfficer name");
      return;
    }

    if (!investigatingProgress.trim()) {
      setError("Please fill investigationProgress");
      return;
    }
    try {
      // Your API endpoint URL
      const apiUrl = "http://localhost:4000/api/v1/addnewfir";

      // Your request payload
      const payload = {
        FIRNO,
        complainantName,
        complainantNumber,
        InvestigationProgress:investigatingProgress,
        InvestigatingOfficers:investigatingOfficers,
        Status, 
        StepsUndertaken:stepsUndertaken,
        EvidenceCollections:evidenceCollections,
        WitnessStatements:witnessStatements,
        Resolutions,
        Outcomes,
      };

      // Make a POST request using Axios
      const response = await axios.post(apiUrl, payload);

      // Handle the response accordingly
      if (response.status === 200) {
        setSuccessMessage("FIR added successfully");
        console.log(response);
        setError("");
      } else {
        setError("Failed to add FIR");
        setSuccessMessage("");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while adding FIR");
      setSuccessMessage("");
    }
  };

  return (
    <div>
      <Navbar />

      <main className="mt-10 py-3">
        <h1 className="text-4xl text-center font-semibold">
          Higher Authority Portal
        </h1>
      </main>

      <div className="mx-10 mt-10 flex flex-wrap justify-center">
        <div className="p-6 bg-white text-gray-700 border rounded flex flex-wrap flex-col w-96 lg:w-2/4">
          <label htmlFor="FIRNO" className="mb-1 text-gray-600 font-semibold">
            FIR No.:
          </label>
          <input
            type="text"
            name="FIRNO"
            id="FIRNO"
            value={FIRNO}
            onChange={(e) => setFIRNO(e.target.value)}
            placeholder="Enter FIR No."
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />

          <label
            htmlFor="complainantName"
            className="mb-1 text-gray-600 font-semibold"
          >
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

          <label
            htmlFor="complainantNumber"
            className="mb-1 text-gray-600 font-semibold"
          >
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

          <label
            htmlFor="investigatingOfficers"
            className="mb-1 text-gray-600 font-semibold"
          >
            Investigating Officer:
          </label>
          <input
            type="text"
            name="investigatingOfficers"
            id="investigatingOfficers"
            value={investigatingOfficers}
            onChange={(e) => setInvestigatingOfficers(e.target.value)}
            placeholder="Enter Investigating Officer"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />

          <label
            htmlFor="investigatingProgress"
            className="mb-1 text-gray-600 font-semibold"
          >
            Investigating Progress:
          </label>
          <textarea
            name="investigatingProgress"
            id="investigatingProgress"
            value={investigatingProgress}
            onChange={(e) => setInvestigatingProgress(e.target.value)}
            placeholder="Enter Investigating Progress"
            className="mb-4 p-2 border border-gray-300 rounded outline-none h-20"
          />
          <label htmlFor="Status" className="mb-1 text-gray-600 font-semibold">
            Status:
          </label>
          <select
            name="Status"
            id="Status"
            value={Status}
            onChange={(e) => setStatus(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          >
            <option value="Select One">Select One</option>
            <option value="Pending">Pending</option>
            <option value="Working">Working</option>
            <option value="Closed">Closed</option>
          </select>

          {/* Add other input fields as needed */}

          <label
            htmlFor="stepsUndertaken"
            className="mb-1 text-gray-600 font-semibold"
          >
            Steps Undertaken:
          </label>
          <textarea
            name="stepsUndertaken"
            id="stepsUndertaken"
            value={stepsUndertaken}
            onChange={(e) => setStepsUndertaken(e.target.value)}
            placeholder="Enter Steps Undertaken"
            className="mb-4 p-2 border border-gray-300 rounded outline-none h-20"
          />

          {/* Add other text areas as needed */}

          <label
            htmlFor="evidenceCollections"
            className="mb-1 text-gray-600 font-semibold"
          >
            Evidence Collections:
          </label>
          <textarea
            name="evidenceCollections"
            id="evidenceCollections"
            value={evidenceCollections}
            onChange={(e) => setEvidenceCollections(e.target.value)}
            placeholder="Enter Evidence Collections"
            className="mb-4 p-2 border border-gray-300 rounded outline-none h-20"
          />

          <label
            htmlFor="witnessStatements"
            className="mb-1 text-gray-600 font-semibold"
          >
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

          <label
            htmlFor="Resolutions"
            className="mb-1 text-gray-600 font-semibold"
          >
            Resolutions:
          </label>
          <textarea
            name="Resolutions"
            id="Resolutions"
            value={Resolutions}
            onChange={(e) => setResolutions(e.target.value)}
            placeholder="Enter Resolutions"
            className="mb-4 p-2 border border-gray-300 rounded outline-none h-20"
          />

          <label
            htmlFor="Outcomes"
            className="mb-1 text-gray-600 font-semibold"
          >
            Outcomes:
          </label>
          <textarea
            name="Outcomes"
            id="Outcomes"
            value={Outcomes}
            onChange={(e) => setOutcomes(e.target.value)}
            placeholder="Enter Outcomes"
            className="mb-4 p-2 border border-gray-300 rounded outline-none h-20"
          />

          <button
            onClick={handleVerify}
            className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-600"
          >
            Add FIR
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
  );
}
