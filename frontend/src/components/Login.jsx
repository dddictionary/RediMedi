import { React, useRef } from "react";
import "./Login.css";
import bcrypt from "bcryptjs"
import { FaUser, FaLock } from "react-icons/fa";


export default function Login() {

  const phoneNumberRef = useRef();
  const passwordRef = useRef();




  const handleLogin = async () => {
    const phoneNumber = phoneNumberRef.current.value;
    const password = passwordRef.current.value;
    const hashedPassword = bcrypt.hashSync(password, 10);


    try {
      const data = {
        phoneNumber,
        hashedPassword,
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
      navigate("/home");

      // Optionally, you can update the state or perform other actions based on the response.
    } catch (error) {
      console.error("Error sending medication data:", error);
    }
  };




  return (
    <div className="body">
        <div className="login">
      <form className="form" action="">
        <h1 className="login__header">Login</h1>
        <div className="login__username-wrapper">
          <input
            className="username-text"
            type="text"
            placeholder="Username"
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="login__password-wrapper">
          <input
            className="password-text"
            type="text"
            placeholder="Password"
            required
          />
          <FaLock className="icon" />
        </div>
        <div className="login__rmm-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" className="login__rmm-forgot__link">
            Forgot password?
          </a>
        </div>
        <button className="submit" onClick={handleLogin}>Login</button>
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
