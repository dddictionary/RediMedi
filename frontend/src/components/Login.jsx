import { React, useRef, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import RediMediLogo from "./RediMediLogo";

const isValidPhoneNumber = (phoneNumber) => {
  // Implement your phone number validation logic here
  // For example, you can use a regular expression to check the format
  const phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number
  return phoneRegex.test(phoneNumber);
};


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const phoneNumberRef = useRef();
  
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


  const handleRegistration = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    const phoneNumber = phoneNumberRef.current.value;

    if (!isValidPhoneNumber(phoneNumber)) {
      alert("Please enter a valid phone number");
      return;
    }

    // send the phone number only to the backend endpoint
    const data = {
      phoneNumber
    };

    localStorage.setItem("phoneNumber", JSON.stringify(data));
    navigate("/dashboard");

  };

  return (
    <div className="body">
      <div className="login">
        <form className="form" action="">
          <h1 className="login__header">Login</h1>
          <div className="login__phone-wrapper">
            <input
              className="phone-text"
              type="text"
              placeholder="Phone number"
              required
              ref={phoneNumberRef} // Add this line
            />

            <FaUser className="icon" />
          </div>
          <div className="login__password-wrapper">
            <input
              className="password-text"
              type={showPassword ? "text" : "password"}
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
          <div className="login__forgot">
            <a href="#" className="login__forgot__link">
              Forgot password?
            </a>
          </div>
          <label>
            <input className="submit" type="submit" value="Submit" onClick={handleLogin} />
          </label>
        </form>
        </div>
        <div className="login__register">
          <p className="register-text">
            Don't have an account?{" "}
            <a onClick={handleRegistration} className="go-register-link">
              Register here
            </a>
          </p>
        </div>
      <div className="dboard-logo-wrapper">
        <RediMediLogo small />
      </div>
      </div>
  );
}