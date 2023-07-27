import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Features from "../components/Features";
import CallToAction from "../components/CallToAction";
import Faqs from "../components/Faqs";

const Homepage = ({ nav, setNav }) => {
  const handleNav = () => {
    setNav(false);
  };
  return (
    <div onClick={handleNav}>
      <Hero />
      <Services />
      <Features />
      <CallToAction />
      <Faqs />
    </div>
  );
};

export default Homepage;
