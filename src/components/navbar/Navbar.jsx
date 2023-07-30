import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import utility from "../../utility";
import useAuth from "../useAuth";
import useLogOut from "../useLogOut";
import axios from "axios";
import config from "../../config";

const Navbar = () => {
  const state = useContext(GlobalState);
  const [categoryData] = state.categoryApi.categoryData;
  const [language, setLanguage] = useState();
  // const [languageList,setLanguageList]=useState([])
  const [selectLanguage, setSelectLanguage] = useState([]);

  const islogged = useAuth();

  const getData = async () => {
    const response = await axios.get(`${config.API_BASE_URL}api/languages`);
    setLanguage(response.data);
    // console.log("data is", response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  //post language
  const handleSubmit = (e) => {
    e.preventDefault();
    let accessToken = localStorage.getItem("token");
    let headers = {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    };

    console.log(selectLanguage);

    if (selectLanguage) {
      axios
        .post(
          `${config.API_BASE_URL}api/setUserLngPreferances`,
          { headers: headers },
          {
            languages_ids: selectLanguage.join(","),
          }
        )
        .then((res) => {
          console.log("selected");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onLangChangeHandler = (event) => {
    if (selectLanguage.includes(event.target.value)) {
      selectLanguage.splice(selectLanguage.indexOf(event.target.value));
    } else {
      selectLanguage.push(event.target.value);
    }

    setSelectLanguage(selectLanguage);
  };

  return (
    <div>
      <div className="nav-menu">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              <img src={config.API_BASE_URL + `newimages/logo.png`} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon  text-white"></span>
            </button>
            {categoryData.length > 0 ? (
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      className="nav-link active text-white"
                      aria-current="page"
                      to="/"
                    >
                      HOME
                    </Link>
                  </li>
                  {categoryData.map((elm, i) => (
                    <div className="" key={i}>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          aria-current="page"
                          to={utility.convertToSlug(elm.displayName)}
                        >
                          {elm.displayName}
                        </Link>
                      </li>
                    </div>
                  ))}
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      aria-current="page"
                      to="/account/watchlist"
                    >
                      LIST
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/search"
                    >
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </Link>
                  </li>

                  <div className="language-modal">
                    <span
                      type="button"
                      className="modal-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i className="fa-solid fa-language"></i>
                    </span>

                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Language Preference Setting
                            </h5>

                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <p>
                              Please select all your preferred languages so that
                              we can show you better suggestions. You can always
                              change these settings as per your convenience.
                            </p>
                            <div className="select-languge ">
                              {language?.length > 0
                                ? language.map((item, i) => (
                                    <div className="form-check" key={i}>
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value={item.id}
                                        id="flexCheckDefault"
                                        onChange={(e) => {
                                          onLangChangeHandler(e);
                                        }}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="flexCheckDefault"
                                      >
                                        {item.language}
                                      </label>
                                    </div>
                                  ))
                                : ""}
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={handleSubmit}
                            >
                              SAVE
                            </button>
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              CANCEL
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {islogged ? (
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa-solid fa-circle-user"></i>Shivam Maurya
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <Link className="dropdown-item" to="/account">
                            <i className="fa-solid fa-gear me-1"></i> Account
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item mt-2" to="#">
                            <button onClick={useLogOut} className="logout-btn">
                              <i className="fa-solid fa-arrow-right-from-bracket me-2 "></i>
                              Logout
                            </button>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/logIn"
                      >
                        <button className=" btn btn-danger">
                          LOG IN
                          <i className="fa-solid fa-right-to-bracket ms-2"></i>
                        </button>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            ) : null}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
