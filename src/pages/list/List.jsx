import React, { useState } from "react";
import "./List.css";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import config from "../../config";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const List = () => {
  const [wishData, setWishData] = useState([]);
  const showWish = async () => {
    let accessToken = localStorage.getItem("token");
    let headers = {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    };
    const response = await axios.get(`${config.API_BASE_URL}api/showwishlist`, {
      headers: headers,
    });
    setWishData(response.data);
    // console.log("data is here", response.data);
  };

  useEffect(() => {
    showWish();
  }, []);

  //delete wish list

  const removeWish = async (context) => {
    let id = context.id;
    let type = context.type;
    let value = 0;

    const data = {
      id: id,
      type: type,
      value: value,
    };
    let accessToken = localStorage.getItem("token");

    let headers = {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    };
    await axios.post(`${config.API_BASE_URL}api/addwishlist`, data, {
      headers: headers,
    });

    let updatedWishlist = wishData.filter((item) => {
      return item.id !== id;
    });

    setWishData(updatedWishlist);
  };

  return (
    <div className="list-container container mb-5">
      <div className="row">
        <div className="col">
          <BreadCrumb breadCrumb={"List"} />
          <div className="watch-list">
            {wishData.length >0 ?(
               wishData.map((item, i) => (
                <div className="list-image " key={i}>
                   <Link to={`/movieDetails/${item.id}`}>
                  <img src={item.thumbnail} alt="" />
                  </Link>
                  <span className="remove-wish" onClick={() => removeWish(item)}>
                    <i className="fa-solid fa-xmark text-white"></i>
                  </span>
                </div>
              ))
            ):("")
           }
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
