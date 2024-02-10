import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <form action="">
        <h1 className="login__header">Login</h1>
        <div className="login__username-wrapper">
          <input type="text" placeholder="Username" required />
        </div>
        <div className="login__password-wrapper">
          <input type="text" placeholder="Password" required />
        </div>
      </form>
    </div>
  );
}
