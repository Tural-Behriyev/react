import React from "react";
import styles from "./style.module.css";
import logo from "/logo.svg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const FooterTop = () => {
  return (
    <div className={styles.FooterTop}>
      <div className="container">
        <div className="row">
          <div className="col col-md-6">
            <div className={styles.leftSide}>
              <img src={logo} className={styles.logo} alt="" />
              <p className={`${styles.leftSideText} pt-4`}>We are always open to discuss your project and improve your online presence.</p>
              <div className={styles.yellowSide}>
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <h5 className={`${styles.email} p-3`}>Email me at</h5>
                      <p className={`${styles.website} ps-3`}>contact@website.com</p>
                    </div>
                    <div className="col-6">
                      <h5 className={`${styles.call} p-3`}>Call us</h5>
                      <p className={`${styles.number} ps-3`}>0927 6277 28525</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md-6">
            <div className={styles.righSide}>
              <h2 className={styles.title}>Lets Talk!</h2>
              <p className={`${styles.rightSideText} pt-4`}>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
              <div className={styles.icons}>
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
