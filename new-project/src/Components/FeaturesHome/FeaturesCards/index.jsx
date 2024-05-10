import React from "react";
import styles from "./style.module.css";

const FeaturesCards = ({ img, title, subTitle }) => {
  return (
    <div className="col bg-danger bg-white p-5 m-2">
      <img src={img} alt={title} className="pb-3" />
      <h6 className={styles.cardsTitle}>{title}</h6>
      <p className={styles.cardsText}>{subTitle}</p>
    </div>
  );
};

export default FeaturesCards;
