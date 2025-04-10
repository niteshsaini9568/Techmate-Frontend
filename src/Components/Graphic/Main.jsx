import React from "react";
import Contacts from "../Home/Contact";
import Banner from "./Banner";
import About from "./About";
import Samples from "./Samples";
import PricingCards from "./Pricing";


function Main() {
  return (
    <div>
      <Banner />
      <About />
      <Samples />
      <PricingCards />
      <Contacts />
    </div>
  );
}

export default Main;
