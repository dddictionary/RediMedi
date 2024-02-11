import { React, useRef, useState } from "react";
import "./Register.css";
import bcrypt from "bcryptjs";
import { FaUser, FaLock } from "react-icons/fa";
import RediMediLogo from "./RediMediLogo";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const phoneNumberRef = useRef();
  const passwordRef = useRef();

  const handleregister = async () => {
    const phoneNumber = phoneNumberRef.current.value;
    const password = passwordRef.current.value;
    const hashedPassword = bcrypt.hashSync(password, 10);

    try {
      const data = {
        phoneNumber,
        hashedPassword,
      };

      const response = await fetch("http://localhost:3000/register", {
        // FIX THIS LINK -- I JUST CHANGED LOCALHOST3000/LOGIN TO REGISTER INSTEAD
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
      navigate("/home");

      // Optionally, you can update the state or perform other actions based on the response.
    } catch (error) {
      console.error("Error sending medication data:", error);
    }
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
            />
            <FaUser className="icon" />
          </div>
          <div className="register__password-wrapper">
            <input
              className="password-text"
              type={showPassword ? "text" : "password"} // Toggle password visibility
              placeholder="Password"
              required
            />
            <FaLock className="icon" />
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={handleTogglePassword}
            />
            <label class="showPassword" htmlFor="showPassword">
              {" "}
              Show Password
            </label>
          </div>
          <div className="register__forgot">
            <a href="#" className="register__forgot__link">
              Forgot password?
            </a>
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
          <a href="/login" className="register-link">
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
