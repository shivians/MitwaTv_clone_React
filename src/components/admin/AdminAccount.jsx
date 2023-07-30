import React from "react";
import BreadCrumb from "../breadCrumb/BreadCrumb";
import "./AdminAccount.css";
import { Link } from "react-router-dom";
import config from "../../config";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const AdminAccount = () => {
  const [userInfo, setUserInfo] = useState([]);

  const getData = async () => {
    let accessToken = localStorage.getItem("token");
    let headers = {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    };
    const response = await axios.get(`${config.API_BASE_URL}api/userProfile`, {
      headers: headers,
    });
    // console.log(response.data);
    setUserInfo(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="admin-container mb-5">
        <BreadCrumb breadCrumb={"Accounts"} />
        <div className="row">
          <div className="col-4 mx-auto ">
            {Object.keys(userInfo).length > 0 ? (
              <div className="admin-info  ">
                <div className="avtar-img">
                  <img src={userInfo?.user.image} alt="" />
                </div>
                <div className="admin-details">
                  <h4 className="text-white">{userInfo?.user.name}</h4>
                  <p className="text-white">
                    {userInfo?.user.email}

                    <span className="text-verify">Verfied</span>
                  </p>
                  <p>
                    <Link to="/account/profile">
                      EDIT INFO <span>/</span> CHANGE PASSWORD
                    </Link>
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="jumbotron bg-white ">
          <div className="container  pt-5">
            <div className="media-purchase ps-2">
              <h6>Media Purchases</h6>
              <h3>No Media Purchased</h3>
            </div>

            <hr />
            <div className="media-detail ps-2">
              <h6>Details</h6>
              <Link to="/account/billing_history">
                <button>Billing</button>
              </Link>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAccount;
