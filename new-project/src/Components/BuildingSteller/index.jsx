import React from "react";
import BuildingStellarLeft from "./BuildingStellarLeft";
import BuildingStallerRight from "./BuildingStallerRight";
import styles from "./style.module.css";

const BuildingStaller = () => {
  return (
    <div className={styles.BuildingStaller}>
      <div className="container">
        <div className="row">
          <div className="col-6 p-0">
            <BuildingStellarLeft />
          </div>
          <div className={`col-6 p-0 ${styles.BuildingStallerRightBg}`}>
            <BuildingStallerRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingStaller;
