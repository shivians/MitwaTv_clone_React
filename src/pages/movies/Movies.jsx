import React, { useContext } from "react";
import "./Movies.css";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import { GlobalState } from "../../GlobalState";
import SmallCarousel from "../../components/smallCarousel/SmallCarousel";
import LargeCarousel from "../../components/LargeCarousel/LargeCarousel";
import SelectionBox from "../../components/breadCrumb/SelectionBox";

const Movies = () => {
  const state = useContext(GlobalState);
  const [movieData] = state.movieApi.movieData;
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="crumb-container">
              <BreadCrumb breadCrumb={"MOVIES"} />
              <SelectionBox />
            </div>
            {movieData.map((item, i) => (
              <div key={i}>
                {item.image_orientation === 1 ? (
                  <LargeCarousel carouselData={item} />
                ) : (
                  <SmallCarousel carouselData={item} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
