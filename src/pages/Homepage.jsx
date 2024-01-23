import React from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Features from "../components/home/Features";
import Earn from "../components/home/Earn";
import AboutRaum from "../components/home/AboutRaum";
import Download from "../components/home/Download";
import { Helmet } from "react-helmet-async";

const Homepage = () => {
  const heroTitle = "Discover your Dream<br>apartment with Raum";
  const hostTitle = "Get the Raum app";
  return (
    <div>
      <Helmet>
        <title>Discover Your Dream Apartment with Raum - Raum INC.</title>
        <meta
          name="description"
          content="Explore Raum, the app to discover your dream apartment. Find services, features, and earning opportunities. Download now!"
        />
        <meta
          property="og:title"
          content="Discover Your Dream Apartment with Raum - Raum INC."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Explore Raum, the app to discover your dream apartment. Find services, features, and earning opportunities. Download now!"
        />
        <meta
          property="og:image"
          content="https://raumhq.co/static/media/raum_logo-2.59c816fbe6de5b47c6ceed6a5cc7c717.svg"
        />
        <meta property="og:url" content="https://raumhq.co/" />
        <link rel="canonical" href="https://raumhq.co/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
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
