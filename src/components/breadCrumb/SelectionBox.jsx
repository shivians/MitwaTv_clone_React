import React from "react";
import "./BreadCrumb.css";

const SelectionBox = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="dropdown-container">
            <select
              className="form-select bg-secondary text-white"
              aria-label="Default select example"
            >
              <option value="1" selected>
                All
              </option>
              <option value="2">Hindi</option>
              <option value="3">English</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionBox;
