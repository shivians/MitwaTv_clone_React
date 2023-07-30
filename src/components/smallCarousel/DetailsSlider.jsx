import React from "react";
import Slider from "react-slick";
import "./Details-slider.css";

const DetailsSlider = ({ movieDetails }) => {
  const settings = {
    className: "sample-slide",
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    lazyLoad: true,
  };
  return (
    <div className="details-slider-container ">
      <div className="carousel-container row">
        <div className="col">
          <div className="slider-items">
            <Slider {...settings}>
              {Object.keys(movieDetails).length > 0
                ? movieDetails.credit_list.map((item) => (
                    <div className="carousel-img s" key={item.id}>
                      <img src={item.image_url} alt="" />
                      <span>{item.name}</span>
                    </div>
                  ))
                : null}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSlider;
