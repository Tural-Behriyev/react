import React from "react";
// import styled from "styled-components";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const BuildingStallerRight = () => {
  return (
    <div className={styles.BuildingStallerRight}>
      <div className={styles.forumText}>
        <h5>Send inquiry</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
      </div>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Paste your Figma design URL" />
        <button type="submit" className={styles.btn}>
          Send an Inquiry
        </button>
        <Link className={`${styles.link}`}> Get in touch with us <HiOutlineArrowLongRight /></Link>
      </form>
    </div>
  );
};

export default BuildingStallerRight;
