import React from "react";
import "./Log-In.css";
import {Link} from "react-router-dom";

function Login() {
  return (
    <div className="upper">
      <div className="login-main-container">
        <div className="left-side-section">
          <img className="login-pic" src="./images/auth-img.svg" alt="" />
          <Link to="/SignUp">
            <button className="create-account-btn">Create New Account</button>
          </Link>
        </div>
        <div className="right-side-section">
          <h1>Log-In</h1>
          <input className="log-in-input" type="text" placeholder="Enter Your Name" />
          <input className="log-in-input" type="text" placeholder="Enter Your E-mail" />
          <input className="log-in-input" type="text" placeholder="Enter Your password" />
          <div className="login-btn-container">
          <button className="login-page-btn">SUBMIT</button>
          <Link to={"/"}>
            <button className="guest-login-btn">Login As Guest</button>
          </Link>
          </div>
          <div className="lower-section">
            <p className="lower-text">Or LogIn With</p>
          <div className="log-in-lower-pics">
            <img className="lower-section-pics" src="https://icon-library.com/images/facebook-twitter-linkedin-icon/facebook-twitter-linkedin-icon-20.jpg" alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Login };