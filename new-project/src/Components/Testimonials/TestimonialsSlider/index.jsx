import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliders from "./Slider";
import { NextArrow, PrevArrow } from "./Arrow";

const TestimonialsSlider = ({ slider }) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="slider-container position-relative">
      <Slider {...settings}>
        {slider.map(({ id, title, img, name, position }) => (
          <Sliders key={id} title={title} img={img} name={name} position={position} />
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;
