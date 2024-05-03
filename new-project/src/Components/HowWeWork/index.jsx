import React from "react";
import styles from "./style.module.css";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import HowToWorkCard from "./HowWeWorkCard";
import { cardsData } from "./CardsData";

const HowToWork = () => {
  return (
    <div className={styles.HowToWork}>
      <div className="container">
        <div className="row">
          <div className="col col-6">
            <h2>How we work</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <Link className={styles.link}>
              Get in touch with us <HiOutlineArrowLongRight />
            </Link>
          </div>
          <div className="col col-6">
            <div className="row">
              {cardsData.map((card, id) => (
                <HowToWorkCard key={id} img={card.img} title={card.title} subTitle={card.subTitle} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToWork;
