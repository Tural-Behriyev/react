import React from "react";
import styles from "./style.module.css";

const Sliders = ({ id, title, img, date, desc }) => {
  return (
    <div className={`${styles.card} border-5`}>
      <img src={img} className={styles.img} alt="" />
      <p className={`pt-5`}>{date}</p>
      <h6 className={`${styles.title}`}>{title}</h6>
      <p className={`${styles.desc} py-3`}>{desc}</p>
    </div>
  );
};

export default Sliders;