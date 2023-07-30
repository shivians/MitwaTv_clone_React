import React, { useState } from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../../config";
import Swal from "sweetalert2";

const LogIn = () => {
  const [toggle, setToggle] = useState(true);
  const [otpStatus, setOtpStatus] = useState("");
  const [otp, setOtp] = useState("");
  const [counter, setCounter] = React.useState(59);
  const [user, setuser] = useState({
    email: "",
    password: "",
    countryCode: "",
    mobile: "",
  });

  //set toggle otp or email
  const mobileBtn = () => {
    setToggle(true);
  };

  const emailBtn = () => {
    setToggle(false);
  };

  //user login with e-mail

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (!(email && password)) {
      console.log("invalid credential");
      Swal.fire("Failed!", "something is wrong");
    } else {
      axios
        .post(`${config.API_BASE_URL}api/login`, user)
        .then((res) => {
          console.log(res);
          if (res.data.status === "success") {
            localStorage.setItem("Login", true);
            localStorage.setItem("token", res.data.access_token);
            window.location.href = "/";
            Swal.fire("success!", "Login successfully");
          } else {
            localStorage.setItem("login_error", res.data);
            window.location.href = "/login";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setuser("");
  };

  //use login with otp
  //sent otp
  const otpHandler = (e) => {
    e.preventDefault();
    const { countryCode, mobile } = user;
    if ((countryCode, mobile)) {
      axios
        .post(`${config.API_BASE_URL}api/send-otp`, user)
        .then((res) => setOtpStatus(res.data))
        .catch((err) => console.log(err));
    } else {
      console.log("invalid credential");
      Swal.fire("Failed!", "please fill out this field");
    }
  };

  //verify otp
  const otpVerifyHandler = (e) => {
    e.preventDefault();
    const { mobile } = user;
    axios
      .post(`${config.API_BASE_URL}api/verify-otp`, { mobile, otp })
      .then((res) => {
        if (res.data.status === "success") {
          localStorage.setItem("Login", true);
          localStorage.setItem("token", res.data.access_token);
          console.log(res.data);
          window.location.href = "/";
          Swal.fire("success!", "Login successfully");
        } else {
          localStorage.setItem("login_error", res.data);
          window.location.href = "/login";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // otp resend timer

  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="auth-container container">
      <div className="row">
        <div className="col-4 mx-auto">
          <div className="form-wrapper">
            <div className="login-card">
              <div className="head-text">
                <p>New to MitwaTV ?</p>
                <h5>
                  <span className="badge bg-secondary ms-2">
                    <Link to="/signUp">SIGN UP</Link>
                  </span>
                </h5>
              </div>
              <div className="btn-group ">
                <button
                  className={toggle ? "btn btn-primary" : "btn btn-secondary"}
                  onClick={mobileBtn}
                >
                  Mobile No
                </button>
                <button
                  className={!toggle ? "btn btn-primary" : "btn btn-secondary"}
                  onClick={emailBtn}
                >
                  Email
                </button>
              </div>
              <div className="input-field p-2">
                {toggle ? (
                  <div className="">
                    {otpStatus.message === "OTP Sent." ? (
                      <div className="verify-otp">
                        <p>
                          OTP sent to +91 {user.mobile}
                          <span className="ms-1 text-primary">
                            Change Mobile
                          </span>
                        </p>
                        <form action="">
                          <input
                            className="form-control p-2"
                            type="text"
                            placeholder="Enter OTP"
                            name="otp"
                            required
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                          />
                          <div className="resend-btn">
                            {counter < 1 ? (
                              <button className="btn " onClick={otpHandler}>
                                Resend OTP ?
                              </button>
                            ) : (
                              <span>Resend OTP : {counter} </span>
                            )}
                          </div>

                          <button
                            className="btn btn-primary form-control"
                            onClick={otpVerifyHandler}
                          >
                            VERIFY
                          </button>
                        </form>
                      </div>
                    ) : (
                      <form className="with-number">
                        <div className="contact-num d-flex ">
                          <select
                            className="form-select p-2 mb-2 "
                            aria-label="Default select example"
                            name="countryCode"
                            value={user.countryCode}
                            onChange={handleChange}
                          >
                            <option value="91">India (+91)</option>
                            <option value="213">Algeria (+213)</option>
                            <option value="44">UK (+44)</option>
                            <option value="376">Andorra (+376)</option>
                          </select>
                          <input
                            type="text"
                            className="form-control p-2 ms-1"
                            placeholder="Mobile"
                            name="mobile"
                            value={user.mobile}
                            onChange={handleChange}
                          />
                        </div>
                        <p>
                          By clicking "Get OTP", you agree to the
                          <Link to="/termsCondition"> Terms of Use</Link> and
                          <Link to="/privacyPolicy"> Privacy Policy</Link>
                        </p>
                        <button
                          className="form-control "
                          type="submit"
                          onClick={otpHandler}
                        >
                          GET OTP
                        </button>

                        <span>OR</span>
                        <hr />
                      </form>
                    )}
                  </div>
                ) : (
                  <form className="witm-email">
                    <input
                      className="form-control p-2"
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                    />
                    <input
                      className="form-control p-2"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                    />
                    <p>
                      By clicking "Log in", you agree to the
                      <Link to="/termsCondition"> Terms of Use</Link> and
                      <Link to="/privacyPolicy"> Privacy Policy</Link>
                    </p>
                    <button
                      className="form-control "
                      type="submit"
                      onClick={handleSubmit}
                    >
                      LOG IN
                    </button>
                    <p className="f-password">
                      <Link to="/password/reset"> Forgot Password?</Link>
                    </p>
                  </form>
                )}
              </div>
              <div className="footer-item">
                <button className="btn btn-primary">
                  SIGN UP AS A PARTNER
                </button>
              </div>
            </div>
            <div className="bottom-link">
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

export default LogIn;
