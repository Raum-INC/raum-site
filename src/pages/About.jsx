import React from "react";
import Hero from "../components/about/Hero";
import Experience from "../components/about/Experience";
import Values from "../components/about/Values";
import Visit from "../components/about/Visit";
import AboutUsHelmet from "../components/helmets/AboutUsHelmet";

const About = () => {
  return (
    <div>
      <AboutUsHelmet />
      <Hero />
      <Experience />
      <Values />
      <Visit />
    </div>
  );
};

export default About;
