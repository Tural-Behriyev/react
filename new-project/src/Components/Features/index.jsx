import React from "react";
import styles from "./style.module.css";
import { FeaturesCardsData } from "./FeaturesCardsData";
import FeaturesCards from "./FeaturesCards";

const Features = () => {
  return (
    <div className={styles.features}>
      <p className={`${styles.featuresText} text-center pt-5`}>Features</p>
      <h2 className={`${styles.featuresTitle} text-center pt-5`}>Design that solves problems, one product at a time</h2>
      <div className="fetauresCards">
        <div className="container">
          <div className="feturesCardsBgColor">
            <div className="row">
              {FeaturesCardsData.map((card, id) => (
                <FeaturesCards key={id} img={card.img} title={card.title} subTitle={card.subTitle} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
