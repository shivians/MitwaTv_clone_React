import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./HomeBanner.css";
import Slider from "react-slick";
import { GlobalState } from "../../GlobalState";
import BannerSkeleton from "../LoadingSkeleton/BannerSkeleton";
import CardSkeleton from "../LoadingSkeleton/CardSkeleton";

const HomeBanner = () => {
  const state = useContext(GlobalState);
  const [bannerData] = state.bannerApi.bannerData;
  const settings = {
    className: "sample",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: true,
    autoplaySpeed: 3000,
  };

 const addList=()=>{

  }
  return (
    <div>
      <div className="banner-container">
        <Slider {...settings}>
          {bannerData.length > 0 ? (
            bannerData[0].list.map((elm, i) => (
              <div key={i}>
                <Link to={`/movies/${elm.id}`}>
                  <div className="banner-img">
                    <img src={elm.thumbnail} alt="" />

                    <div className="carousel-caption ">
                      <p>
                        <span className="poster-title">{elm.title}</span>
                      </p>
                      <p className="movie-detalis">{elm.description}</p>
                      <div className="btn-group">
                        <button className="btn btn-danger me-2 ">
                          Watch Now
                        </button>
                        <button className="btn btn-primary" onClick={()=>addList()}>Add to List</button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div>
              <BannerSkeleton /> 
              <CardSkeleton />
            </div>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default HomeBanner;
