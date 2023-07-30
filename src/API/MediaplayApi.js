import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

const MediaplayApi = () => {
  const [mediaPlay, setMediaPlay] = useState([]);
  const url = `${config.API_BASE_URL}api/mediaplayback?id=155&lang_id=1&type=M`;
  const getData = async () => {
    const response = await axios.get(url)
    setMediaPlay(response.data);
    console.log(mediaPlay)
  };
  useEffect(() => {
    getData();
  }, []);
  return {
    mediaPlay: [mediaPlay, setMediaPlay],
  };
};
  


export default MediaplayApi
// api/mediaplayback?type=M&id=39