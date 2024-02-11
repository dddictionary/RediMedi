import React, { useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import RediMediLogo from "./RediMediLogo";
import RefillList from "./RefillList.jsx";

export default function Dashboard() {
  const navigate = useNavigate();
  const [medicineName, setMedicineName] = useState("");
  const [unit, setUnit] = useState("d"); // Default to days
  const [duration, setDuration] = useState(""); // State variable for frequency duration
  const [dosage, setDosage] = useState("");

  const handleMedication = async () => {
    try {
      const data = {
        medicineName,
        frequency: `${duration}${unit}`, // Combine unit and duration for frequency
        dosage,
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
      //navigate("/home");
    } catch (error) {
      console.error("Error sending medication data:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMedicineName("");
    setUnit("d"); // Reset unit to days
    setDuration("");
    setDosage("");
  };

  return (
    <div className="dboard-wrapper">
      <div className="dashboard">
        <h1>Add a reminder</h1>
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
            <div className="frequency-inputs">
              <div className="radio-inputs">
                <input
                  type="radio"
                  id="seconds"
                  name="unit"
                  value="s"
                  checked={unit === "s"}
                  onChange={() => setUnit("s")}
                />
                <label htmlFor="seconds">Seconds</label>
                <input
                  type="radio"
                  id="hours"
                  name="unit"
                  value="h"
                  checked={unit === "h"}
                  onChange={() => setUnit("h")}
                />
                <label htmlFor="hours">Hours</label>
                <input
                  type="radio"
                  id="days"
                  name="unit"
                  value="d"
                  checked={unit === "d"} // Default to days
                  onChange={() => setUnit("d")}
                />
                <label htmlFor="days">Days</label>
              </div>
              <select
                name="duration"
                id="duration"
                value={duration}
                onChange={(event) => setDuration(event.target.value)}
                className="dropdown"
              >
                {unit === "s" && (
                  <>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="60">60</option>
                  </>
                )}
                {unit === "h" && (
                  <>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                  </>
                )}
                {unit === "d" && (
                  <>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="7">7</option>
                  </>
                )}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="dosage">Dosage:</label>
            <input
              type="text"
              id="dosage"
              placeholder="Dosage"
              value={dosage}
              onChange={(event) => setDosage(event.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="dashboard-submit"
            onClick={handleMedication}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="list-wrapper">
        <RefillList />
      </div>
      <div className="dboard-logo-wrapper">
        <RediMediLogo small />
      </div>
    </div>
  );
}
