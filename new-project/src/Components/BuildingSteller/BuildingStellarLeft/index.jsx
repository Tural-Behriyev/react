import React from "react";
import styles from "./style.module.css";
import buildingStellerbg from "/buildingStellerbg.png";

const BuildingStellarLeft = () => {
  return (
    <div className={styles.BuildingStellarLeft}>
      <img src={buildingStellerbg} alt="" className={styles.buildingStellerbg} />
      <div className={styles.overlay}></div>
      <div className={styles.BuildingStellarLeftText}>
        <h1>Building stellar websites for early startups</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
      </div>
    </div>
  );
};

export default BuildingStellarLeft;