import React, { useState } from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
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
            />
            <FaUser className="icon" />
          </div>
          <div className="login__password-wrapper">
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
            <label class="showPassword" htmlFor="showPassword">{" "}Show Password</label>
          </div>
          <div className="login__forgot">
            <a href="#" className="login__forgot__link">
              Forgot password?
            </a>
          </div>
          <label>
            <input className="submit" type="submit" value="Submit" />
          </label>
          <div className="login__register">
            <p className="register-text">
              Don't have an account?{" "}
              <a href="#" className="register-link">
                Register here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}