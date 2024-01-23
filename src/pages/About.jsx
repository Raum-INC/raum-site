import React from "react";
import Hero from "../components/about/Hero";
import Experience from "../components/about/Experience";
import Values from "../components/about/Values";
import Visit from "../components/about/Visit";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us - Raum INC.</title>
        <meta name="description" content="Learn more about us here at Raum!" />
        <meta property="og:title" content="About us - Raum INC." />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Learn more about us here at Raum!"
        />
        <meta
          property="og:image"
          content="https://raumhq.co/static/media/raum_logo-2.59c816fbe6de5b47c6ceed6a5cc7c717.svg"
        />
        <meta property="og:url" content="https://raumhq.co/about" />
        <link rel="canonical" href="https://raumhq.co/about" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <Hero />
      <Experience />
      <Values />
      <Visit />
    </div>
  );
};

export default About;
