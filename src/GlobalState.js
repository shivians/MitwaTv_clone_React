import BannerApi from "./API/BannerApi";
import MovieApi from "./API/MovieApi";
import MitwaNewsApi from "./API/MitwaNewsApi";
import LiveApi from "./API/LiveApi";
import MusicApi from "./API/MusicApi";
import MitwaMixApi from "./API/MitwaMixApi";
import SeriesApi from "./API/SeriesApi";
import React, { createContext } from "react";
import CategoryApi from "./API/CategoryApi";
import UserApi from "./API/UserApi";
// import MovieDetailsApi from "./API/MovieDetailsApi";

export const GlobalState = createContext();

const DataProvider = ({ children }) => {
  const stateData = {
    bannerApi: BannerApi(),
    movieApi: MovieApi(),
    newsApi: MitwaNewsApi(),
    liveApi: LiveApi(),
    musicApi: MusicApi(),
    mitwaMixApi: MitwaMixApi(),
    seriesApi: SeriesApi(),
    categoryApi: CategoryApi(),
    // mediaDetailsApi: MovieDetailsApi()
    userApi: UserApi(),
  };

  return (
    <div>
      <GlobalState.Provider value={stateData}>{children}</GlobalState.Provider>
    </div>
  );
};
export default DataProvider;
