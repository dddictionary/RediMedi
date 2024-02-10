import React from 'react'
import Header from "./Header.jsx";
import Dashboard from "./Dashboard.jsx";
import "./Home.css";

const data = {
  name: "",
};

fetch("http://localhost:3000/medication", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("error", error));


export default function Home() {
  return (
    <div className="mainpage-body">
        <Dashboard />
    </div>
  )
}
