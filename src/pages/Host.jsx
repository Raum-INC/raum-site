import React from "react";
import HostHero from "../components/host/RaumHost";
import Hero from "../components/home/Hero";
import How from "../components/host/How";
import Faqs from "../components/Faqs";
import HostDownload from "../components/host/HostDownload";

const Host = () => {
  const heroTitle = "Make money hosting<br>with Raum in Nigeria";
  const hostTitle = "Get the Raum Hosts app";

  return (
    <section>
      <Hero heroTitle={heroTitle} hostTitle={hostTitle} />
      <HostHero />
      <How />
      <Faqs />
      <HostDownload />
    </section>
  );
};

export default Host;
