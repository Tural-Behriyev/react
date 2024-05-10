import React from "react";
import styles from "./style.module.css";
import FeaturesCards from "./FeaturesCards";
import { CardsData } from "./CardsData";

const FeaturesHome = () => {
  return (
    <div className={styles.features}>
      <div className="fetauresCards">
        <div className="container">
          <div className="feturesCardsBgColor">
            <div className="row">
              {CardsData.map((card, id) => (
                <FeaturesCards key={id} img={card.img} title={card.title} subTitle={card.subTitle} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesHome;
