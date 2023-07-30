import React, { useContext } from "react";
import SmallCarousel from "../../components/smallCarousel/SmallCarousel";
import LargeCarousel from "../../components/LargeCarousel/LargeCarousel";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import { GlobalState } from "../../GlobalState";
import SelectionBox from "../../components/breadCrumb/SelectionBox";

const Music = () => {
  const state = useContext(GlobalState);
  const [musicData] = state.musicApi.musicData;
  return (
    <div className="music-container container">
      <div className="row">
        <div className="col">
          <div className="crumb-container">
            <BreadCrumb breadCrumb={"MUSIC"} />
            <SelectionBox />
          </div>

          {musicData.map((item, i) => (
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

export default Music;
