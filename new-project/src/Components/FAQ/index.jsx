import React from "react";
import styles from "./style.module.css";
import FAQAccardion from "./FAQAccardion";
import FAQText from "./FAQText";
import { FAQData } from "./FAQAccardion/FAQData";

const FAQ = () => {
  return (
    <div>
      <div className={styles.Faq}>
        <div className="container">
          <div className="row">
            <div className="col col-md-6">
              <FAQText />
            </div>
            <div className="col col-md-6">
              <FAQAccardion accr={FAQData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;