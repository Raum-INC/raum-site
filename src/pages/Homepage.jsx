import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Features from "../components/Features";
import CallToAction from "../components/CallToAction";
import Faqs from "../components/Faqs";
import Waitlist from "../components/Waitlist";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Features />
      <CallToAction />
      <Faqs />
      <Waitlist />
    </div>
  );
};

export default Homepage;
