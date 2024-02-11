import React from "react";
import Header from "./Header.jsx";
import About from "./About.jsx";
import "./Home.css";
import sampleReminderImage from "../data/sample_reminder.png";

export default function Home() {
  return (
    <div className="mainpage-body">
      <Header />
      <About />
      <div className="home__sample">
        <div className="home__pictures">
          <img
            src={sampleReminderImage}
            alt="Description of the sample reminder"
            className="home__sample-reminder"
          />
          <div className="sample__description">
            <p>This is a sample reminder image.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
