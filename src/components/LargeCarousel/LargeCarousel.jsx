import React from "react";
import Slider from "react-slick";
import "./LargeCarousel.css"
import { Link } from "react-router-dom";
const LargeCarousel = ({ carouselData }) => {
  const settings = {
    className: "sample",
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: true,
  };
  return (
    <div>
      <div className="large-container mb-1 ">
        <h4>{carouselData.title}</h4>
        <div className="row">
          <div className="col ">
            <Slider {...settings}>
              {carouselData.list.map((item, i) => (
                <div className="carousel-img p-1 " key={i}>
                  <Link to={`/movies/${item.id}`}>
                    <img src={item.poster} alt="" loading="lazy" />
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeCarousel;
