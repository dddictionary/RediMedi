import React from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
window.fbAsyncInit = function () {
  FB.init({
    appId: "732440392382696",
    cookie: true,
    xfbml: true,
    version: "19.0",
  });

  FB.AppEvents.logPageView();
};

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

const pingBackend = () => {
    fetch('/auth/facebook');
}

// function checkLoginState() {
//   FB.getLoginStatus(function (response) {
//     statusChangeCallback(response);
//   });
// }

// FB.getLoginStatus(function (response) {
//   statusChangeCallback(response);
// });

export default function Login() {
  return (
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
        <div className="login__register">
          <p className="register-text">
            Don't have an account?{" "}
            <a href="#" className="register-link">
              Register here
            </a>
          </p>
        </div>
      </form>
      <div id="fb-root"></div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0&appId=732440392382696"
        nonce="oAyole8E"
      ></script>
      <div
        class="fb-login-button"
        data-width="200px"
        data-size=""
        data-button-type=""
        data-layout=""
        data-auto-logo
        ut-link="true"
        data-use-continue-as="false"
        onClick={{pingBackend}}
      ></div>
    </div>
  );
}
