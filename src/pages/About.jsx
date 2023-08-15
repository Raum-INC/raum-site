import React from "react";
import Hero from "../components/about/Hero";
import Experience from "../components/about/Experience";
import Values from "../components/about/Values";
import Visit from "../components/about/Visit";

const About = ({ nav, setNav }) => {
  const handleNav = () => {
    setNav(false);
  };
  return (
    <div onClick={handleNav}>
      <Hero />
      <Experience />
      <Values />
      <Visit />
    </div>
  );
};

export default About;
