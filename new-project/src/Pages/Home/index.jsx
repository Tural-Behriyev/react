import React from "react";
import Banner from "../../Components/Banner";
import homeBanner from "/homeBanner.png";
import HowToWork from "../../Components/HowWeWork";
import ViewOurProjects from "../../Components/ViewOurProjects";
import Features from "../../Components/Features";

const Home = () => {
  return (
    <div>
      <Banner title="Building stellar websites for early startups" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." ourWorkBtnName="View our work" img={homeBanner} pricingBtnName />
      <HowToWork />
      <ViewOurProjects pricingBtnName="View More" />
      <Features/>
    </div>
  );
};

export default Home;