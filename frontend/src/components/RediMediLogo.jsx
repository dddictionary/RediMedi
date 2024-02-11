import React from "react";
import { CiMedicalCross } from "react-icons/ci";
import classNames from "classnames"; // Import classNames library
import "./RediMediLogo.css";


export default function RediMediLogo({ small }) {
    const logoClass = classNames("heading__header", {
      "heading__header--small": small, 
    }); // Add this class when small prop is true
  
    return (
      <div className="heading">
        <h1 className={logoClass}>
          Redi
          <CiMedicalCross className="heading__plus-icon" />
          Medi
        </h1>
      </div>
    );
  }