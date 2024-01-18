import React from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Features from "../components/home/Features";
import Earn from "../components/home/Earn";
import AboutRaum from "../components/home/AboutRaum";
import Download from "../components/home/Download";

const Homepage = () => {
  const heroTitle = "Discover your Dream<br>apartment with Raum";
  const hostTitle = "Get the Raum app";
  return (
    <div>
      <Hero heroTitle={heroTitle} hostTitle={hostTitle} />
      <Services />
      <Earn />
      <Features />
      <AboutRaum />
      <Download />
      {/* <Faqs /> */}
    </div>
  );
};

export default Homepage;
