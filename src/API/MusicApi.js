import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

const MusicApi = () => {
  const [musicData, setMusicData] = useState([]);
  const url = `${config.API_BASE_URL}api/dashboard?type=5`;

  const getData = async () => {
    const response = await axios.get(url);
    setMusicData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return {
    musicData: [musicData, setMusicData],
  };
};

export default MusicApi;
