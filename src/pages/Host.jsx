import React from "react";
import HostHero from "../components/host/RaumHost";
import Hero from "../components/home/Hero";
import How from "../components/host/How";
import Faqs from "../components/Faqs";
import HostDownload from "../components/host/HostDownload";
import { Helmet } from "react-helmet-async";

const Host = () => {
  const heroTitle = "Make money hosting<br>with Raum in Nigeria";
  const hostTitle = "Get the Raum Hosts app";

  return (
    <section>
      <Helmet>
        <title>Make money hosting with Raum in Nigeria - Raum INC.</title>
        <meta
          name="description"
          content="Whether you're searching for your next home or looking to list your
          apartment for business purposes, we're here to make your journey
          seamless and stress-free. Download now!"
        />
        <meta
          property="og:title"
          content="Make money hosting with Raum in Nigeria - Raum INC."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Whether you're searching for your next home or looking to list your
          apartment for business purposes, we're here to make your journey
          seamless and stress-free. Download now!"
        />
        <meta
          property="og:image"
          content="https://raumhq.co/static/media/raum_logo-2.59c816fbe6de5b47c6ceed6a5cc7c717.svg"
        />
        <meta property="og:url" content="https://raumhq.co/host" />
        <link rel="canonical" href="https://raumhq.co/host" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <Hero heroTitle={heroTitle} hostTitle={hostTitle} />
      <HostHero />
      <How />
      <Faqs />
      <HostDownload />
    </section>
  );
};

export default Host;
