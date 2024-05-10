import React from "react";
import Banner from "../../Components/Banner";
import FeaturesBanner from "/FeaturesBanner.png";

const Features = () => {
  return (
    <div>
      <Banner title="All the features you need" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ourWorkBtnName="View Pricing" img={FeaturesBanner} pricingBtnName={false} />
    </div>
  );
};

export default Features;