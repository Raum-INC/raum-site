import React from "react";
import HostHero from "../components/host/RaumHost";
import Hero from "../components/home/Hero";
import How from "../components/host/How";
import Faqs from "../components/Faqs";
import HostDownload from "../components/host/HostDownload";
import HostHelmet from "../components/helmets/HostHelmet";
import CallToAction from "../components/home/CallToAction";
import DevelopmentGoals from "../components/host/DevelopmentGoals";

const Host = () => {
  const heroTitle = "Make money hosting<br>with Raum Africa in Nigeria";
  const hostTitle = "Get the Raum Hosts app";

  return (
    <main>
      <HostHelmet />
      <Hero heroTitle={heroTitle} hostTitle={hostTitle} />
      <HostHero />
      <How />
      <DevelopmentGoals />
      <Faqs />
      <CallToAction />
      <HostDownload />
    </main>
  );
};

export default Host;
