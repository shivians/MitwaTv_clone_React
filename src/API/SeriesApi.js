import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

const SeriesApi = () => {
  const [seriesData, setSeriesData] = useState([]);
  const url =  `${config.API_BASE_URL}api/dashboard?type=2`;
 
  const getData = async () => {
    const response = await axios.get(url);
    setSeriesData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return {
    seriesData: [seriesData, setSeriesData],
  };
};

export default SeriesApi;
