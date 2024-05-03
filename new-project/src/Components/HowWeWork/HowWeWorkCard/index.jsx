import React from "react";

const HowToWorkCard = ({ img, title, subTitle }) => {
  return (
    <div className="col col-6">
      <img src={img} alt={title} className="pb-3"/>
      <h3 className="py-1">{title}</h3>
      <p className="pb-4">{subTitle}</p>
    </div>
  );
};

export default HowToWorkCard;
