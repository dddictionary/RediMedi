import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="general-wrapper">
      <div className="about-wrapper">
        <h1 className="about__heading">
          Easy SMS medicine management.{" "}
          <span className="about__heading__span">Free of charge.</span>
        </h1>
      </div>
      <div className="about__buttons">
        <a href="/register" className="about-button__a">
          <button className="about-register about__button" value="Register">
            Register
          </button>
        </a>
        <a href="/login" className="about-button__a">
          <button
            href="/login"
            className="about-login about__button"
            value="Login"
          >
            Login
          </button>
        </a>
      </div>
    </div>
  );
}
