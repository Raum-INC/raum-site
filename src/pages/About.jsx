import React from "react";
import Hero from "../components/about/Hero";
import Experience from "../components/about/Experience";
import Values from "../components/about/Values";
import Visit from "../components/about/Visit";
import useBearStore from "../store/store";

const About = () => {
  const { falseNav } = useBearStore();

  return (
    <div onClick={falseNav}>
      <Hero />
      <Experience />
      <Values />
      <Visit />
    </div>
  );
};

export default About;
