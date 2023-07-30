import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

const SearchApi = () => {
  const [mediaPlay, setMediaPlay] = useState([]);
  const url = `${config.API_BASE_URL}api/mediaplayback?id=155&lang_id=1&type=M`;
  const getData = async () => {
    const response = await axios.get(url);
    setMediaPlay(response.data);
    
  };
  useEffect(() => {
    getData();
  }, []);
  return {
    mediaPlay: [mediaPlay, setMediaPlay],
  };
};

export default SearchApi;
// https://mitwatv.com/api/mediasearch?term=comedy
