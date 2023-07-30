import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

const UserApi = (token) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [info, setInfo] = useState([]);

  useEffect(
    (token) => {
      if (token) {
        const getUser = async () => {
          try {
            const response = axios.get(
              `${config.API_BASE_URL}api/userprofile`,
              {
                headers: { Authorization: token },
              }
            );
            setIsLogged(true);
            setInfo([
              response.data.name,
              response.data.mobile,
              response.data.address,
            ]);
          } catch (error) {
            console.log(error);
          }
        };
        getUser();
      }
    },
    [token]
  );

  const addCart=()=>{
    
  }

  return {
    addCart: addCart,
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    cart: [info, setInfo],
  };
};

export default UserApi;
