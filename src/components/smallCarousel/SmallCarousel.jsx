import React from "react";
import "./SmallCarousel.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const SmallCarousel = ({ carouselData }) => {
  const settings = {
    className: "sample",
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: true,
//     responsive: [
//       {
//           breakpoint: 1024,
//           settings: {
//               slidesToShow: 5,
//               slidesToScroll: 5,
//           }
//       },
//       {
//           breakpoint: 600,
//           settings: {
//               slidesToShow: 1,
//               slidesToScroll: 3
//           }
//       },
//       {
//           breakpoint: 480,
//           settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2
//           }
//       }

// ]
  };
  return (
    <div className="small-card-container">
      <div className="carousel-container ">
        <h4 className=" category-heading ms-3">{carouselData.title}</h4>
        <div className="row">
          <div className=" col-sm-12">
            <Slider {...settings}>
              {carouselData.list.map((item, i) => (
                <div className="carousel-img " key={i}>
                  <Link to={`/movies/${item.id}`}>
                    <img src={`https://imstool.phando.com/?image_url=` + item.thumbnail + `&height=180&width=600&service=resize&quality=100`} alt="" loading="lazy" />
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

export default SmallCarousel;
