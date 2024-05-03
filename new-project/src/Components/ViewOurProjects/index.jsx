import React from "react";
import styles from "./style.module.css";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

import { Link } from "react-router-dom";

const ViewOurProjects = (pricingBtnName = false) => {
  return (
    <div className={styles.ViewOurProjects}>
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-10">
            <h2 className={styles.title}>View our projects</h2>
          </div>
          <div className="col-2">
              <Link className={styles.ViewMore} to="/">
                View Pricing <HiOutlineArrowLongRight />
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOurProjects;