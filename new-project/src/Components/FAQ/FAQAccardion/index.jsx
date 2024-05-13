import React from "react";
import styles from "./style.module.css";
import { useState } from "react";

const FAQAccardion = ({ accr }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accardion">
      {accr.map(({ question, answer, id }, index) => (
        <div key={id} className="accardion-item">
          <div className={styles.accardionTitle} onClick={() => toggle(index)}>
            <h6 className={styles.question}>{question}</h6>
            <span>{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && (
            <div className={activeIndex === index ? "answer show" : "answer"}>
              <p>{answer}</p>
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FAQAccardion;