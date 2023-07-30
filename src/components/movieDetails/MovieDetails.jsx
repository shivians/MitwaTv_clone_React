import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./MovieDetails.css";
import DetailsSlider from "../smallCarousel/DetailsSlider";
import MovieDetailsApi from "../../API/MovieDetailsApi";
import Loader from "../loader/Loader";
import config from "../../config";
import axios from "axios";
import Swal from "sweetalert2";


const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetailApi, setmovieDetailApi] = useState([]);

  useEffect(() => {
    MovieDetailsApi(id).then((elm) => {
      setmovieDetailApi(elm.data);
      // console.log(elm.data);
    });
  }, []);

  const addToList = async (context) => {
    let isLogin = localStorage.getItem("Login");

    if (!isLogin) {
      window.location.href = "/login";
      return false;
    }

    let id = context?.id;
    let type = context.type;
    let value = 1;

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
    Swal.fire("Media Add to Mylist");
   

  };

  return (
    <div className=" container-fluid">
      <div className="row">
        <div className="col">
          <div className="detail-page">
            <div className="detail-image">
              {movieDetailApi.thumbnail?.length > 0 ? (
                <img src={movieDetailApi.thumbnail} alt="" loading="lazy" />
              ) : (
                <Loader />
              )}
            </div>
            <div className="movie-information container mt-3">
              <div className="movie-titleDiv">
                <span className="movie-name">{movieDetailApi.title}</span>
                <ul>
                  <li>
                    <span className="play-icon">
                      <button className="btn btn-primary">
                        <span className="play-btn">
                          <i className="fa-solid fa-play me-1"></i>
                        </span>
                       
                        <span className="play-text">
                          <Link to={`/movies/${movieDetailApi?.id}/play`}>
                            Watch Movie
                          </Link>
                        </span>
                      </button>
                    </span>
                  </li>

                  {/* <li>
                    <i className="fa-solid fa-film me-1"></i>Watch Trailer
                  </li> */}
                  <li>
                    {1 ? (
                      <button onClick={() => addToList(movieDetailApi)}>
                        <i className="fa-solid fa-plus me-1"></i>Add to List
                      </button>
                    ) : (
                      <span className="text-white">
                        <i class="fa-solid fa-check"></i>Added
                      </span>
                    )}
                  </li>
                </ul>
              </div>
              <div className="cast-info">
                <span>Cast</span>
                <ul>
                  <li key={Math.random()}>{movieDetailApi.actors}</li>
                </ul>
              </div>
              <div className="director-info">
                <span>Director</span>
                <p>
                  <i>{movieDetailApi.directors}</i>
                </p>
              </div>
              <div className="movie-rating">
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>{movieDetailApi.duration_str}</span>
                <span>{movieDetailApi.audio_language}</span>
                <span>All age</span>
              </div>
              <div className="media-desc">
                <p>{movieDetailApi.detail}</p>
              </div>
              <span className="text-white">Credits</span>
              <div className="slider-wrapper ">
                <DetailsSlider movieDetails={movieDetailApi} />
              </div>
              <div className="trailer-section">
                <span className="text-white">Trailers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
