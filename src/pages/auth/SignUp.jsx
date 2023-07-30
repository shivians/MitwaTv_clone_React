import React, { useState } from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../../config";
import Swal from "sweetalert2";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    countryCode: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = React.useState("");
  

  //input data handler

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  //submit user data handler

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      email,
      countryCode,
      mobileNumber,
      password,
      confirmPassword,
    } = user;
    if (
      !(
        name &&
        email &&
        // countryCode &&
        mobileNumber &&
        password === confirmPassword
      )
    ) {
      Swal.fire("Failed!", "something is wrong");
      console.log("invalid credential");
    } else {
      axios
        .post(`${config.API_BASE_URL}api/register`, user)
        .then((res) => {
          console.log("register successfully");
          localStorage.setItem("Login", true);
          Swal.fire("success!", "Register successfully");
          window.location.href = "/";
        })
        .catch((error) => {
          setFormErrors(error.response.data.message);
        });
    }
    setUser("");
  };

  return (
    <div className="auth-container container">
      <div className="row">
        <div className="col-4 mx-auto">
          <div className="form-wrapper">
            <div className="login-card">
              <div className="head-text">
                <p>Already have an account ? </p>
                <h5>
                  <span className="badge bg-secondary ms-2">
                    <Link to="/logIn">LOGIN</Link>
                  </span>
                </h5>
              </div>

              <div className="input-field p-3">
                {formErrors ? (
                  <div className="alert alert-danger">{formErrors}</div>
                ) : (
                  ""
                )}
                <form action="">
                  <input
                    className="form-control p-2"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                  />

                  <input
                    className="form-control p-2"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                  <div className="contact-num d-flex ">
                    <select
                      className="form-select p-2 mb-2 "
                      aria-label="Default select example"
                      name="countryCode"
                      value={user.countryCode}
                      onChange={handleChange}
                    >
                      <option value="91" >
                        India (+91)
                      </option>
                      <option value="213">Algeria (+213)</option>
                      <option value="44">UK (+44)</option>
                      <option value="376">Andorra (+376)</option>
                    </select>
                    <input
                      type="text"
                      className="form-control p-2 ms-1"
                      placeholder="Mobile"
                      name="mobileNumber"
                      value={user.mobileNumber}
                      onChange={handleChange}
                    />
                  </div>

                  <input
                    className="form-control p-2"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                  />
                  <input
                    className="form-control p-2"
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={handleChange}
                  />

                  <p>
                    By clicking "Sign up", you agree to the
                    <Link to="#"> Terms of Use</Link> and
                    <Link to="#"> Privacy Policy</Link>
                  </p>
                  <button
                    className="form-control "
                    type="submit"
                    onClick={handleSubmit}
                  >
                    SIGN UP AS A USER
                  </button>
                </form>
              </div>
            </div>
            <div className="bottom-link">
              <p>
                <Link to="/aboutUs">About Us</Link>
              </p>
              <p>
                <Link to="/termsCondition"> Terms and Condition</Link>
              </p>
              <p >
                <Link to="/privacyPolicy">Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
