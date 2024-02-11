import { React, useRef, useState, useEffect } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import RediMediLogo from "./RediMediLogo";

const isValidPhoneNumber = (phoneNumber) => {
  // Implement your phone number validation logic here
  // For example, you can use a regular expression to check the format
  const phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number
  return phoneRegex.test(phoneNumber);
};


export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const [isMounted, setIsMounted] = useState(true); // Track component mounting status

  // useEffect(() => {
  //   return () => {
  //     setIsMounted(false); // Set isMounted to false when the component unmounts
  //   };
  // }, []);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const phoneNumberRef = useRef();
  const navigate = useNavigate();


  const handleregister = () => {
    const phoneNumber = phoneNumberRef.current.value;
    if (!isValidPhoneNumber(phoneNumber)) {
      alert("Please enter a valid phone number");
      return;
    }
    const data = {
      phoneNumber
    };
    localStorage.setItem("phoneNumber", JSON.stringify(data));
    navigate("/home");
      
    
  };

  return (
    <div className="body">
      <div className="register">
        <form className="form" action="">
          <h1 className="register__header">Register</h1>
          <div className="register__phone-wrapper">
            <input
              className="phone-text"
              type="text"
              placeholder="Phone number"
              required
              ref={phoneNumberRef}
            />
            <FaUser className="icon" />
          </div>
          <div className="register__password-wrapper">
            <input
              className="password-text"
              type={showPassword ? "text" : "password"} // Toggle password visibility
              placeholder="Password"
            />
            <FaLock className="icon" />
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={handleTogglePassword}
            />
            <label className="showPassword" htmlFor="showPassword">{" "}Show Password</label>
          </div>
          <label>
            <input
              className="submit"
              type="submit"
              value="Submit"
              onClick={handleregister}
            />
          </label>
        </form>
      </div>
      <div className="register__login">
        <p className="register__login-text">
          Have an account?{" "}
          <a onClick={handleLogin} className="register-link">
            Log in
          </a>
        </p>
      </div>
      <div className="dboard-logo-wrapper">
        <RediMediLogo small />
      </div>
    </div>
  );
}
