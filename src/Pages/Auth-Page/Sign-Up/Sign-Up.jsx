// import React from "react";
import "./Sign-Up.css";
import {Link} from "react-router-dom";

import React from 'react'

function SignUp() {
    return (
        <div className="upper">
          <div className="login-main-container">
            <div className="left-side-section">
              <img className="login-pic" src="./images/auth-img.svg" alt="" />
              <Link to="/Login">
                <button className="create-account-btn">Allready Have Account</button>
              </Link>
            </div>
            <div className="right-side-section">
              <h1>Sign-Up</h1>
              <input className="log-in-input" type="text" placeholder="Enter Your Name" />
              <input className="log-in-input" type="text" placeholder="Enter Your E-mail" />
              <input className="log-in-input" type="text" placeholder="Enter Your password" />
              <input className="log-in-input" type="text" placeholder="Confirm Your password" />
              <button className="login-page-btn">SUBMIT</button>
              <div className="lower-section">
                <p className="lower-text">Or SignUp With</p>
              <div className="log-in-lower-pics">
                <img className="lower-section-pics" src="https://icon-library.com/images/facebook-twitter-linkedin-icon/facebook-twitter-linkedin-icon-20.jpg" alt="" />
              </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    

export {SignUp}