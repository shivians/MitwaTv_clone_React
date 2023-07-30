import React, { useState } from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../../config";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const resetLinkHandler = (e) => {
    e.preventDefault();
    axios
      .post(`${config.API_BASE_URL}api/forgotpassword`, { email: email })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

  };
  console.log(email)

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 mx-auto">
          <div className="password-reset-wrapper ">
            <div className="login-card">
              <div className="head-text p-3">
                <h5>
                  <span className=" ms-2">
                    <Link to="/logIn">
                      <i class="fa-solid fa-arrow-left"></i>
                      Back To Login
                    </Link>
                  </span>
                </h5>
                <h5>
                  <span className="with-otp badge bg-secondary ms-2">
                    <Link to="/reset-password-with-otp">Reset with OTP</Link>
                  </span>
                </h5>
              </div>

              <div className="input-field p-3">
                <form action="">
                  <input
                    className="form-control p-2"
                    type="email"
                    placeholder="Please Enter Your Email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <button
                    className="form-control "
                    type="submit"
                    onClick={resetLinkHandler}
                  >
                    SEND PASSWORD RESET LINK
                  </button>
                </form>
              </div>
            </div>
            <div className="bottom-link mt-1">
              <p>
                <Link to="/aboutUs">About Us</Link>
              </p>
              <p>
                <Link to="/termsCondition"> Terms and Condition</Link>
              </p>
              <p>
                <Link to="/privacyPolicy">Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
