import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Features from "../components/Features";
import CallToAction from "../components/CallToAction";
import Faqs from "../components/Faqs";
import useBearStore from "../store/store";

const Homepage = () => {
  const { falseNav } = useBearStore();

  return (
    <div onClick={falseNav}>
      <Hero />
      <Services />
      <Features />
      <CallToAction />
      <Faqs />
    </div>
  );
};

export default Homepage;
