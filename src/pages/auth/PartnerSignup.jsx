import React from "react";
import "./auth.css";
import { Link } from "react-router-dom";
const PartnerSignup = () => {
  return (
    <div className="auth-container">
      <div className="row">
        <div className="col-4 mx-auto">
          <div className="login-card">
            <div className="head-text">
              <p>Already Registerd? </p>
              <h5>
                <span className="badge bg-secondary ms-2">
                  <Link to="/logIn">LOGIN</Link>
                </span>
              </h5>
            </div>

            <div className="input-field p-3">
              <form action="">
                <input
                  className="form-control p-2"
                  type="text"
                  placeholder="Name"
                  name="name"
                  //   value={user.name}
                  //   onChange={handleChange}
                />
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                  ></textarea>
                 
                </div>

                <input
                  className="form-control p-2"
                  type="email"
                  placeholder="Email"
                  name="email"
                  //   value={user.email}
                  //   onChange={handleChange}
                />
                <div className="contact-num d-flex ">
                  <select
                    className="form-select p-2 mb-2 "
                    aria-label="Default select example"
                    name="countryCode"
                    // value={user.countryCode}
                    // onChange={handleChange}
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
                    // value={user.mobileNumber}
                    // onChange={handleChange}
                  />
                </div>

                <input
                  className="form-control p-2"
                  type="password"
                  placeholder="Password"
                  name="password"
                  //   value={user.password}
                  //   onChange={handleChange}
                />
                <input
                  className="form-control p-2"
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  //   value={user.confirmPassword}
                  //   onChange={handleChange}
                />

                <p>
                  By clicking "Sign up", you agree to the
                  <Link to="#"> Terms of Use</Link> and
                  <Link to="#"> Privacy Policy</Link>
                </p>
                <button
                  className="form-control "
                  type="submit"
                  //   onClick={handleSubmit}
                >
                  SIGN UP AS A PARTNER
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
            <p>
              <Link to="/privacyPolicy">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSignup;
