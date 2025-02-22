import React from "react";
import InvestHelmet from "../components/helmets/InvestHelmet";
import Hero from "../components/home/Hero";
import HostHero from "../components/host/RaumHost";
import How from "../components/host/How";
import CallToAction from "../components/home/CallToAction";
import Faqs from "../components/Faqs";
import Testimonials from "../components/Testimonials";

const InvestPage = () => {
  const investTitle = `Invest in High-Yield</br>Airbnb Rentals with Just</br>$500!`;
  const investDescription = `Earn up to 50% annually with Raum Africa's co-hosting investment program. Let us do the heavy lifting while you enjoy stress-free returns`;
  return (
    <main>
      <InvestHelmet />
      <Hero investTitle={investTitle} investDescription={investDescription} />
      <HostHero />
      <How />
      <CallToAction />
      <Faqs />
      <Testimonials />
    </main>
  );
};

export default InvestPage;
