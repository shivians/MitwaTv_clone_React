import axios from "axios";
import config from "../config";
import { useState, useEffect } from "react";

const BannerApi = () => {
  const [bannerData, setBannerData] = useState([]);
  
  const [homeSlider, setHomeSlider] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const response = await axios.get(`${config.API_BASE_URL}api/dashboard`);
      setBannerData(
        response.data.filter((element) => element.displayType === "TOP_BANNER")
      );
      setHomeSlider(
        response.data.filter((element) => element.displayType === "GRID")
      );
    };

    getdata();
  }, []);
  

  return {
    bannerData: [bannerData, setBannerData],
    homeSlider: [homeSlider, setHomeSlider],
  };
};

export default BannerApi;
