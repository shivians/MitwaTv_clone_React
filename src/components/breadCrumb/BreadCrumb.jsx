import React from "react";
import { Link } from "react-router-dom";
import "./BreadCrumb.css";

const BreadCrumb = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item ">
                  <Link to="/">Mitwa TV</Link>
                </li>
                <li
                  className="breadcrumb-item  active "
                  aria-current="page"
                >
                   <Link className="movie-text" to="/">{props.breadCrumb}</Link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
