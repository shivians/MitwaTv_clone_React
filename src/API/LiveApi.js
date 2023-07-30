import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

const LiveApi = () => {
  const [liveData, setLiveData] = useState([]);
  const url = `${config.API_BASE_URL}api/dashboard?type=4`;
  const getData = async () => {
    const response = await axios.get(url);
    setLiveData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return {
    liveData: [liveData, setLiveData],
  };
};

export default LiveApi;
