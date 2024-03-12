import React from "react";
import { Helmet } from "react-helmet-async";
import { Assets } from "../../assets";

const HostHelmet = () => {
  return (
    <Helmet>
      <title>Make money hosting with Raum in Nigeria - Raum Africa</title>
      <meta
        name="description"
        content="Whether you're searching for your next home or looking to list your
          apartment for business purposes, we're here to make your journey
          seamless and stress-free. Download now!"
      />
      <meta
        property="og:title"
        content="Make money hosting with Raum in Nigeria - Raum Africa"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Whether you're searching for your next home or looking to list your
          apartment for business purposes, we're here to make your journey
          seamless and stress-free. Download now!"
      />
      <meta property="og:image" content={Assets.raumFaviSvg} />
      <meta property="og:url" content="https://raum.africa/host" />
      <link rel="canonical" href="https://raum.africa/host" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Additional metadata for search engines */}
      <meta
        name="keywords"
        content="Raum, Raum Africa, explore short term rental, earn with Raum Africa, make money with raum, find services in Nigeria, download raum app, dream apartments, faq, information"
      />
      <meta name="author" content="Raum Africa" />

      {/* Additional metadata for Twitter Sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={Assets.raumFaviSvg} />
      <meta
        name="twitter:title"
        content="Make money hosting with Raum in Nigeria - Raum Africa"
      />
      <meta name="twitter:creator" content="@rauminc" />
      <meta name="twitter:site" content="@rauminc" />
      <meta
        name="twitter:description"
        content="Whether you're searching for your next home or looking to list your
        apartment for business purposes, we're here to make your journey
        seamless and stress-free. Download now!"
      />
    </Helmet>
  );
};

export default HostHelmet;
