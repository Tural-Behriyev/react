import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const FAQText = () => {
  return (
    <div>
      <h3 className={styles.title}>Frequently asked questions</h3>
      <Link className={styles.subTitle}>Contact us for more info</Link>
    </div>
  );
};

export default FAQText;
