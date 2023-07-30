import React from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../../config";

const OtpVerification = () => {
  const [user, setUser] = React.useState({
    mobile: "",
    otp: "",
    password: "",
    password_confirmation: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const changePasswordHandler = (e) => {
    e.preventDefault();
    axios.post(`${config.API_BASE_URL}`, user)
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 mx-auto">
          <div className="password-reset-wrapper ">
            <div className="login-card">
              <div className="head-text p-3">
                <p>An OTP has been sent to the entered mobile number</p>
              </div>

              <div className="input-field p-3">
                <form action="">
                  <input
                    className="form-control p-2"
                    type="text"
                    placeholder="Confirm OTP"
                    name="otp"
                    value={user.otp}
                    onChange={changeHandler}
                  />

                  <input
                    className="form-control p-2"
                    type="password"
                    placeholder="New Password"
                    name="password"
                    value={user.password}
                    onChange={changeHandler}
                  />

                  <input
                    className="form-control p-2"
                    type="password"
                    placeholder="Confirm Password"
                    name="password_confirmation"
                    value={user.password_confirmation}
                    onChange={changeHandler}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={changePasswordHandler}
                  >
                    CHANGE PASSWORD
                  </button>
                  <h5>
                    <span className="with-otp badge bg-warning ms-2">
                      <Link to="/reset-password-with-otp">Resend OTP ? </Link>
                    </span>
                  </h5>
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

export default OtpVerification;
