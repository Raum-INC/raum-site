import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Features from "../components/Features";
import CallToAction from "../components/CallToAction";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Features />
      <CallToAction />
    </div>
  );
};

export default Homepage;
