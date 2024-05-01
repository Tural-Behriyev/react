import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Banner = ({ title, subTitle, ourWorkBtnName, img, pricingBtnName = false }) => {
  return (
    <div className={styles.banner}>
      <div className="container">
        <div className="row d-flex align-items-center py-5">
          <div className="col col-md-6">
            <p className={styles.slogan}>{title}</p>
            <p className={styles.subSlogan}>{subTitle}</p>
            <Link className={styles.ourWorkBtn} to="/">
              {ourWorkBtnName}
            </Link>
            {pricingBtnName && <Link className={styles.pricingBtn} to="/">
              View Pricing <HiOutlineArrowLongRight />
            </Link>}
          </div>
          <div className="col col-md-6">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
