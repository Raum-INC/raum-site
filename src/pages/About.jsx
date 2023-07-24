import React from "react";
import Hero from "../components/about/Hero";
import Metrics from "../components/about/Metrics";

const About = ({ nav, setNav }) => {
  const handleNav = () => {
    setNav(false);
  };
  return (
    <div onClick={handleNav}>
      <Hero />
      <Metrics />
    </div>
  );
};

export default About;
