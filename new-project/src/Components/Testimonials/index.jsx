import React from "react";
import TestimonialsText from "./TestimonialsText";
import styles from "./style.module.css";
import TestimonialsSlider from "./TestimonialsSlider";
import { TestimonialsSliderData } from "./TestimonialsSlider/TestimonialsSliderData";


const Testimonials = () => {
  return (
    <div className={styles.Testimonials}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <TestimonialsText />
          </div>
          <div className="col-6">
            <TestimonialsSlider slider={TestimonialsSliderData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
