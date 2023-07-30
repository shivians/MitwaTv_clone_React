import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
const CategoryApi = () => {
    const [categoryData, setCategoryData] = useState([]);
  const url = `${config.API_BASE_URL}api/category`;
  

  const getApiData = async () => {
    const response = await axios.get(url);
    setCategoryData(response.data);
  };

  useEffect(() => {
    getApiData();
  }, []);
  
  return{
    categoryData:[categoryData, setCategoryData]
  }
  
}

export default CategoryApi