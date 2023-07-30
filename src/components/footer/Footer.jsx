import React, { useContext } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import utility from "../../utility";


const Footer = () => {
  const state = useContext(GlobalState);
  const [categoryData] = state.categoryApi.categoryData;
  return (
    <>
      <div className="footer mt-5">
        <div className="container">
          <div className="row row text-center text-xs-center text-sm-left text-md-left">
            <div className="col-3 ">
              <div className="media-links">
                <div className="footer-logo">
                  <img
                    src="../assets/logo.png"
                    aria-label="logo"
                    alt="website logo"
                  />
                </div>
                <ul className="list-unstyled list-inline social text-left ">
                  <li>
                    <h5 className="home-foot ttl text-light mt-0">Social</h5>
                  </li>
                  <li className="list-inline-item">
                    <Link to="">
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                  </li>

                  <li className="list-inline-item">
                    <Link to="">
                      <i className="fa-brands fa-facebook-square"></i>
                    </Link>
                  </li>

                  <li className="list-inline-item">
                    <Link to="">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>

                  <li className="list-inline-item">
                    <Link to="">
                      <i className="fa-brands fa-twitter-square"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <div className="general-link">
                <ul className="list-unstyled quick-links ">
                  <li>
                    <h5 className="text-light">General</h5>
                  </li>
                  <li>
                    <Link to="/aboutUs">About Us</Link>
                  </li>
                  <li>
                    <Link to="/termsCondition">Terms and Conditions</Link>
                  </li>
                  <li>
                    <Link to="privacyPolicy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="contactUs">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <div className="category-links ">
                <ul className="list-unstyled quick-links">
                  <li>
                    <h5 className="text-light">Category</h5>
                  </li>
                  {categoryData.map((item, i) => (
                    <div className="" key={i}>
                      <li>
                        <Link to={utility.convertToSlug(item.displayName)}>{item.displayName}</Link>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-3">
              <div className="dowload-link">
                <ul className="list-unstyled quick-links">
                  <li>
                    <h5 className="text-light">Download the app</h5>
                  </li>
                  <li className=" mt-4">
                    
                    <img
                      className="w-25 rounded border border-secondary me-2"
                      src="../assets/playStore.png"
                      alt=""
                    />
                    <img
                      className="w-25 rounded border border-secondary"
                      src="../assets/appleStore.png"
                      alt=""
                    />
                  </li>
                  <li className="signup-part mt-4">
                    {
                      
                    }
                    <Link to="/partnersignup">
                    <div className="p-3 mb-2 bg-primary text-white rounded">
                      SIGN UP AS A PARTNER
                    </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="bottom-hr"/>
      </div>
    </>
  );
};

export default Footer;
