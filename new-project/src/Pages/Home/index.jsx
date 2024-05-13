import React from "react";
import Banner from "../../Components/Banner";
import homeBanner from "/homeBanner.png";
import HowToWork from "../../Components/HowWeWork";
import ViewOurProjects from "../../Components/ViewOurProjects";
import Testimonials from "../../Components/Testimonials";
import FeaturesHome from "../../Components/FeaturesHome";
import FAQ from "../../Components/FAQ";
import BuildingStaller from "../../Components/BuildingSteller";

const Home = () => {
  return (
    <div>
      <Banner title="Building stellar websites for early startups" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." ourWorkBtnName="View our work" img={homeBanner} pricingBtnName />
      <HowToWork />
      <ViewOurProjects pricingBtnName="View More" />
      {/* <Features/> */}
      <FeaturesHome/>
      <Testimonials/>
      <FAQ/>
      <BuildingStaller/>
    </div>
  );
};

export default Home;