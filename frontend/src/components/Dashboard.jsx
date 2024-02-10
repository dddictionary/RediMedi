import React from "react";
import "./Dashboard.css";
import { useState } from "react";
import RediMediLogo from "./RediMediLogo";

export default function Dashboard() {
  // State variables to hold the input values
  const [medicineName, setMedicineName] = useState("");
  const [frequency, setFrequency] = useState("");
  const [dosage, setDosage] = useState("");
  const [refills, setRefills] = useState("");

  const handleMedication = async () => {
    try {
      const data = {
        medicineName,
        frequency,
        dosage,
        refills,
      };

      const response = await fetch("http://localhost:3000/medication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);

      // Optionally, you can update the state or perform other actions based on the response.
    } catch (error) {
      console.error("Error sending medication data:", error);
    }
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Medicine Name:", medicineName);
    console.log("Frequency:", frequency);
    console.log("Dosage:", dosage);
    setMedicineName("");
    setFrequency("");
    setDosage("");
  };

  return (
    <div className="dboard-wrapper">
      <div className="dashboard">
        <h1>Telemedicine Dashboard</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="medicineName">Medicine Name:</label>
            <input
              type="text"
              id="medicineName"
              value={medicineName}
              onChange={(event) => setMedicineName(event.target.value)}
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="frequency">Frequency:</label>
            <input
              type="text"
              id="frequency"
              value={frequency}
              onChange={(event) => setFrequency(event.target.value)}
              placeholder="Frequency"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dosage">Dosage:</label>
            <input
              type="text"
              id="dosage"
              value={dosage}
              onChange={(event) => setDosage(event.target.value)}
              placeholder="Dosage"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="refills">Refills:</label>
            <input
              type="text"
              id="refills"
              value={refills}
              onChange={(event) => setRefills(event.target.value)}
              placeholder="Days until next refill"
              required
            />
          </div>
          <select name="" id="" className="dropdown">
            <option value="" className="30days"></option>
            <option value="" className="60days"></option>
            <option value="" className="90days"></option>
          </select>
          <button type="submit" className="dashboard-submit">
            Submit
          </button>
        </form>
        <p>For the refill category, input "-1" </p>
      </div>
      <div className="dboard-logo-wrapper">
        <RediMediLogo small/>
      </div>
    </div>
  );
}
