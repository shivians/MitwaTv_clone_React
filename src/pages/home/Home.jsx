import React, { useContext } from "react";
import HomeBanner from "../../components/banner/HomeBanner";
import SmallCarousel from "../../components/smallCarousel/SmallCarousel";
import { GlobalState } from "../../GlobalState";
import LargeCarousel from "../../components/LargeCarousel/LargeCarousel";



const Home = () => {
  const state = useContext(GlobalState);
  const [homeSlider] = state.bannerApi.homeSlider;

  return (
    <div>
      <div className="h-banner">
        <HomeBanner />
      </div>
     
      <div className="card-slide-container container">
        <div className="row">
          <div className="col">
            {homeSlider.map((item, i) => (
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

export default Home;
