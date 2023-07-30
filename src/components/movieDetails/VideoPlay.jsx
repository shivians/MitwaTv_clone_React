import React, { useState, useEffect } from "react";
import "./VideoPlay.css";
import config from "../../config";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import ReactPlayer from "react-player";

const VideoPlay = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const url = `${config.API_BASE_URL}api/mediaplayback?id=${id}&lang_id=1&type=M`;
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      setMovie(response.data);
      // console.log("response is", response.data);
    };

    getData();
  }, [movie,setMovie]);

  return (
    <div>
      <div className="video-play-container container">
        <div className="row">
          <div className="col-12">
            <ReactPlayer
              url={movie.data?.media_url}
              playing={true}
              volume={1}
              width="100%"
              height="auto"
              controls
              // onReady={() => console.log("ready now")}
            />

            <div className="title mt-3">
              <p>{movie.data?.title}</p>
            </div>
            <div className="rating">
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>{movie.data?.duration_str}</span>
              <span>{movie.data?.audio_language}</span>
              <span>{movie.data?.maturity_rating}</span>
            </div>
            <div className="description">
              <p>{movie.data?.description}</p>
            </div>
            <div className="suggestion">
              <p>more like this</p>
            </div>
            <div className="suggestion-wrap">
              {movie.data?.related.map((item, i) => {
                return (
                  <suggestion className="card" key={i}>
                    <Link to={`/movies/${item.id}`}>
                      <img src={item.thumbnail} alt="" loading="lazy" />
                    </Link>
                  </suggestion>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlay;
