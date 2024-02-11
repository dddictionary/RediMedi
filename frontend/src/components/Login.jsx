import { React, useRef } from "react";
import "./Login.css";
import bcrypt from "bcryptjs"
import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


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
          <a href="#" className="login__rmm-forgot__link">
            Forgot password?
          </a>
        </form>
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
      </div>
  );
}