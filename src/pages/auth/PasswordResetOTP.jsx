import React from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../../config";
import { useState } from "react";

const PasswordResetOTP = () => {
  const [mobile,setMobile]=useState("");

  const otpHandler=()=>{
    axios.post(`${config.API_BASE_URL}`, mobile)

  }
  console.log(mobile)
 
  return (
    <div className="reset-with-otp-wrapper container">
      <div className="row">
        <div className="col-4 mx-auto">
          <div className="password-reset-wrapper ">
            <div className="login-card">
              <div className="head-text p-3">
                <h5>
                  <span className=" ms-2">
                    <Link to="/logIn">
                      <i className="fa-solid fa-arrow-left"></i>
                      Back
                    </Link>
                  </span>
                </h5>
                <h5>
                  <span>New to Mitwa TV ?</span>
                  <span className="with-otp badge bg-secondary ms-2">
                    <Link to="/signup">SIGN UP</Link>
                  </span>
                </h5>
              </div>

              <form className="with-otp p-3">
                <div className="contact-num d-flex ">
                  <select
                    className="form-select p-2 mb-2 "
                    aria-label="Default select example"
                    name="countryCode"
                    // value={user.countryCode}
                    // onChange={handleChange}
                  >
                    <option value="91">
                      India (+91)
                    </option>
                    <option value="213">Algeria (+213)</option>
                    <option value="44">UK (+44)</option>
                    <option value="376">Andorra (+376)</option>
                  </select>
                  <input
                    type="text"
                    className="form-control ms-1"
                    placeholder="Mobile"
                    name="mobile"
                    value={mobile}
                    onChange={(e)=>{setMobile(e.target.value)}}
                  />
                </div>
                 <Link to="/verify-mobile-number">
                 <button
                  className="form-control btn btn-primary mt-3 "
                  type="submit"
                  onClick={otpHandler}
                >
                  GET OTP
                </button>

                 </Link>
               
              </form>
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

export default PasswordResetOTP;
