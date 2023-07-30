import axios from "axios";
import config from "../config";

const MovieDetailsApi = async (id) => {
  let accessToken = localStorage.getItem("token");
  let headers = {
    Accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
  let res = await axios.get(
    `${config.API_BASE_URL}api/mediaplayback?type=M&id=${id}`,
    { headers: headers }
  );

  return await res.data;
};

export default MovieDetailsApi;
