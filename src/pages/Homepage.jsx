import React from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Features from "../components/home/Features";
import Earn from "../components/home/Earn";
import AboutRaum from "../components/home/AboutRaum";
import Download from "../components/home/Download";
import CallToAction from "../components/home/CallToAction";
import HomepageHelmet from "../components/helmets/HomepageHelmet";
import Faqs from "../components/Faqs";
import InvestCTA from "../components/InvestCTA";
import NewHero from "../components/home/NewHero";
import HomeFeaturedListings from "../components/home/HomeFeaturedListings";

const Homepage = () => {
  const heroTitle = "Discover your Dream<br>apartment with Raum Africa";
  const hostTitle = "Get the Raum app";

  return (
    <main>
      <HomepageHelmet />
      <NewHero />
      {/* <Hero heroTitle={heroTitle} hostTitle={hostTitle} /> */}
      <HomeFeaturedListings />
      <Services />
      {/* <Earn /> */}
      <Features />
      {/* <InvestCTA /> */}
      <AboutRaum />
      <Download />
      <Faqs />
      {/* <CallToAction /> */}
    </main>
  );
};

export default Homepage;
