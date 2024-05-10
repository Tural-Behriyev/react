import React, { useState } from "react";
import styles from "./style.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const NextArrow = (props) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1000); // 1000 milisaniye (1 saniye) sonra setClicked(false) yapılacak
  };

  const { onClick } = props;
  return (
    <div
      className={`${styles.next} ${clicked ? styles.clicked : ""}`}
      onClick={(e) => {
        handleClick();
        onClick(e);
      }}
    >
      <IoIosArrowForward />
    </div>
  );
};

const PrevArrow = (props) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 500); // 1000 milisaniye (1 saniye) sonra setClicked(false) yapılacak
  };

  const { onClick } = props;
  return (
    <div
      className={`${styles.prev} ${clicked ? styles.clicked : ""}`}
      onClick={(e) => {
        handleClick();
        onClick(e);
      }}
    >
      <IoIosArrowBack />
    </div>
  );
};

export { NextArrow, PrevArrow };
