import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

const MovieApi = () => {
  const [movieData, setMovieData] = useState([]);
  const url = `${config.API_BASE_URL}api/dashboard?type=1`;
  

  const getApiData = async () => {
    const response = await axios.get(url);
    setMovieData(response.data);
  };

  useEffect(() => {
    getApiData();
  }, []);
  
  return{
    movieData:[movieData, setMovieData]
  }
};

export default MovieApi;
