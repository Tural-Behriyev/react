import React from "react";
import styles from "./style.module.css";

const Sliders = ({ title, img, name, position }) => {
  return (
    <div className="card border-0 bg-transparent">
      <h3 className="pb-4">"{title}"</h3>
      <div className="d-flex">
        <div className={styles.imgBorder}>
          <img src={img} alt="testimonial" />
        </div>
        <div>
          <h4 className="ps-3">{name}</h4>
          <p className="ps-3">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
