import React, { useContext } from "react";
import SmallCarousel from "../../components/smallCarousel/SmallCarousel";
import LargeCarousel from "../../components/LargeCarousel/LargeCarousel";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import { GlobalState } from "../../GlobalState";
import SelectionBox from "../../components/breadCrumb/SelectionBox";

const MitwaNews = () => {
  const state = useContext(GlobalState);
  const [newsData] = state.newsApi.newsData;
  return (
    <div>
      <div className="news-container container">
        <div className="row">
          <div className="col">
            <div className="crumb-container">
              <BreadCrumb breadCrumb={"MITWA NEWS"} />
              <SelectionBox />
            </div>

            {newsData.map((item, i) => (
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

export default MitwaNews;
