import React from "react";
import Hero from "../components/home/Hero";
import { Assets } from "../assets";
import HomeFeaturedListings from "../components/home/HomeFeaturedListings";
import PopularLocations from "../components/guest/PopularLocations";
import TrustRaum from "../components/guest/TrustRaum";
import AdvanceBooking from "../components/guest/AdvanceBooking";
import StepsToBook from "../components/guest/StepsToBook";
import Download from "../components/home/Download";
import Faqs from "../components/Faqs";

const GuestPage = () => {
  const guestTitle = `Book an apartment and</br>seamless as possible`;
  const guestDescription = `Explore our exquisite apartments all across Africa`;
  const guestImage = Assets.guestHero;
  return (
    <main>
      <Hero
        guestTitle={guestTitle}
        guestDescription={guestDescription}
        guestImage={guestImage}
      />
      <HomeFeaturedListings />
      <PopularLocations />
      <TrustRaum />
      <AdvanceBooking />
      <StepsToBook />
      <Download />
      <Faqs />
    </main>
  );
};

export default GuestPage;
