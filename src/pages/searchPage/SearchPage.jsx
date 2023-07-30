import React, { useState, useEffect } from "react";
import "./SearchPage.css";
import axios from "axios";
import config from "../../config";
import { Link } from "react-router-dom";

const SearchPage = () => {
  // https://mitwatv.com/api/mediasearch?term=comedy
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `${config.API_BASE_URL}api/mediasearch?term=${searchTerm}`
      );
      setSearchData(response.data);
    };
    getData();
  }, [searchTerm]);

  console.log(searchData);
  return (
    <div>
      <div className="container">
        <div className="row search-wrap">
          <div className="col">
            <form action="">
              <div className="search-input mx-auto mt-3">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="form-control mx-auto mb-5"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => {
                    setSearchTerm("");
                  }}
                ></i>
                {searchData.length > 0
                  ? searchData.map((item, i) => (
                      <div className="suggestion-box mx-auto " key={i}>
                        <div className="img-box">
                          <Link to={`/movieDetails/${item.id}`}>
                            <img src={item.thumbnail} alt="" />
                          </Link>
                        </div>

                        <div className="title">{item.title}</div>
                      </div>
                    ))
                  : null}
              </div>
            </form>
            <div className="suggestion-slider"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
