import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliders from "./Slider";

const BlogSlider = ({ slider }) => {
   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 3,
     slidesToScroll: 3,
   };
  return (
    <div className="slider-container position-relative">
      <div className="slider-container">
        <Slider {...settings}>
          {slider.map(({ id, title, img, date, desc }) => (
            <Sliders key={id} title={title} img={img} date={date} desc={desc} /> 
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BlogSlider;