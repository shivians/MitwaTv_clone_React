import React, { useContext } from "react";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import { GlobalState } from "../../GlobalState";
import SmallCarousel from "../../components/smallCarousel/SmallCarousel";
import LargeCarousel from "../../components/LargeCarousel/LargeCarousel";
import SelectionBox from "../../components/breadCrumb/SelectionBox";

const Series = () => {
  const state = useContext(GlobalState);
  const [seriesData] = state.seriesApi.seriesData;
  return (
    <div className="series-container container">
      <div className="row">
        <div className="col">
          <div className="crumb-container">
            <BreadCrumb breadCrumb={"SERIES"} />
            <SelectionBox />
          </div>

          {seriesData.map((item, i) => (
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
  );
};

export default Series;
