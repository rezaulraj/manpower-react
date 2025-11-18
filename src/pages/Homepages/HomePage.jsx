import React from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import Specialisms from "./Specialisms";
import Work from "./Work";
import WhyOurCustomers from "./WhyOurCustomers";
import SuccessStory from "./SuccessStory";
import BrandMarquee from "./OurBrand";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Banner />
      <Specialisms />
      <Work />
      <WhyOurCustomers />
      <BrandMarquee />
      <SuccessStory />
    </div>
  );
};

export default HomePage;
