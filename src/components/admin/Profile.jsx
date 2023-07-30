import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile-wrapper">
      <div className="row">
        <div className="col">
          <h4 className="heading">Account &amp; Settings</h4>
          <Link to="/account">
            <span>
              <i className="fa-solid fa-arrow-left ms-1"></i>
              <span className="ms-1">Back</span>
            </span>
          </Link>
          <div className="account-setting container-fluid">
            <div className="edit-profile-pic container pb-5">
              <div className="row">
                <div className="col-6 mx-auto">
                  <h4 className="panel-setting-heading">Upload Profile Pic</h4>
                  <div className="form-group">
                    <form action="">
                      <input type="file" className="form-control" />
                      <button className="btn btn-primary">UPLOAD</button>
                    </form>
                  </div>
                </div>
                <div className="col-6 mx-auto">
                  <div className="remove-profile-pic">
                    <div className="current-img">
                      <h4 className="panel-setting-heading">Current Pic</h4>

                      <img src="../assets/home.jpg" alt="" />
                    </div>
                    <button className="btn btn-danger">
                      REMOVE PROFILE PIC
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="edit-info">
              <div className="user-detail-info container">
                <div className="row">
                  <div className="col-md-6">
                    <h4 class="panel-setting-heading">Edit Info</h4>

                    <form action="">
                      <div className="form-group">
                        <label htmlFor="">Your Email</label>
                        <input
                          type="text"
                          className="form-control"
                          value={"shivammaurya43237@gmail.com"}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">First name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={"shivam"}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={"Maurya"}
                        />
                      </div>
                      <button className="btn btn-primary mt-3 ">UPDATE</button>
                    </form>
                  </div>
                  <div className="col-md-6">
                    <div className="reset-password">
                      <h4 class="panel-setting-heading">Change Password</h4>
                      <form action="">
                        <div className="form-group">
                          <label htmlFor="">New Password</label>
                          <input type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="">Confirm Password</label>
                          <input type="password" className="form-control" />
                        </div>
                        <button className="btn btn-primary mt-3">UPDATE</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
