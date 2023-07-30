import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

const MitwaNewsApi = () => {
  const [newsData, setNewsData] = useState([]);
  const url = `${config.API_BASE_URL}api/dashboard?type=10`;
  const getData = async () => {
    const response = await axios.get(url);
    setNewsData(response.data);
  
  };
  useEffect(() => {
    getData();
  }, []);
  return {
    newsData: [newsData, setNewsData],
  };
};

export default MitwaNewsApi;
