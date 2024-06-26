import React from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Features from "../components/home/Features";
import Earn from "../components/home/Earn";
import AboutRaum from "../components/home/AboutRaum";
import Download from "../components/home/Download";
import CallToAction from "../components/home/CallToAction";
import HomepageHelmet from "../components/helmets/HomepageHelmet";

const Homepage = () => {
  const heroTitle = "Discover your Dream<br>apartment with Raum Africa";
  const hostTitle = "Get the Raum app";

  return (
    <div>
      <HomepageHelmet />
      <Hero heroTitle={heroTitle} hostTitle={hostTitle} />
      <Services />
      <Earn />
      <Features />
      <AboutRaum />
      {/* <Download /> */}
      <CallToAction />
      {/* <Faqs /> */}
    </div>
  );
};

export default Homepage;
