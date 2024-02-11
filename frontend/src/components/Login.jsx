import { React, useRef, useState } from "react";
import "./Login.css";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import RediMediLogo from "./RediMediLogo";


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


  const phoneNumberRef = useRef();
  const passwordRef = useRef();

  const handleRegistration = () => {
    navigate("/register");
  };

  const handleLogin = async () => {
    const salt = bcrypt.genSaltSync(10);
    const phoneNumber = phoneNumberRef.current.value;
    const password = bcrypt.hashSync(passwordRef.current.value, salt);
    try {
      const data = {
        phoneNumber,
        password,
      };

      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);

      if (response.status === 200) {
        // Successful login, redirect to "/home"
        navigate("/home");
      } else {
        // Display an error message to encourage registration
        alert(result.message);
        navigate("/register");
      }
    } catch (error) {
      console.error("Error sending login data:", error);
    }
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
              required
              ref={passwordRef} // Add this line
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