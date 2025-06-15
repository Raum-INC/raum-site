import React from "react";
import InvestHelmet from "../components/helmets/InvestHelmet";
import Hero from "../components/home/Hero";
import HostHero from "../components/host/RaumHost";
import How from "../components/host/How";
import CallToAction from "../components/home/CallToAction";
import Faqs from "../components/Faqs";
import Testimonials from "../components/Testimonials";
import Nairobi from "../components/Nairobi";

const InvestPage = () => {
  const investTitle = `Invest in High-Yield</br>Short-Term Rentals</br>with Just $500!`;
  const investDescription = `Earn up to 30% returns in 12 months with Africa's fastest-growing Airbnb investment model. We handle everything—you earn passive income hassle-free.`;
  return (
    <main>
      <InvestHelmet />
      <Hero investTitle={investTitle} investDescription={investDescription} />
      <HostHero />
      <How />
      <Nairobi />
      <Faqs />
      <Testimonials />
      <CallToAction />
    </main>
  );
};

export default InvestPage;
