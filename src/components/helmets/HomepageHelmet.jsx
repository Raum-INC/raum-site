import React from "react";
import { Helmet } from "react-helmet-async";

const HomepageHelmet = () => {
  return (
    <Helmet>
      <title>Short-Term Rentals in Nigeria | Discover Raum Africa</title>
      <meta property="og:site_name" content="Raum Africa" />
      <meta
        name="description"
        content="Explore Raum Africa, the app for short-term rentals in Nigeria. Discover your dream apartment, find services, features, and earning opportunities. Download now!"
      />
      <meta
        property="og:title"
        content="Short-Term Rentals in Nigeria | Discover Raum Africa."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Explore Raum Africa, the app for short-term rentals in Nigeria. Discover your dream apartment, find services, features, and earning opportunities. Download now!"
      />
      <meta
        property="og:image"
        content="https://raum.africa/static/media/raum_favi.0d01f8c1fa4643d291b20d68809af99d.svg"
      />
      <meta property="og:url" content="https://raumhq.co/" />
      <link rel="canonical" href="https://raumhq.co/" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Additional metadata for search engines */}
      <meta
        name="keywords"
        content="Raum, Raum Africa, explore short term rental, earn with Raum Africa, find services in Nigeria, download raum app, dream apartments, faq, information"
      />
      <meta name="author" content="Raum Africa" />

      {/* Additional metadata for Twitter Sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://raum.africa/static/media/raum_favi.0d01f8c1fa4643d291b20d68809af99d.svg"
      />
      <meta
        name="twitter:title"
        content="Short-Term Rentals in Nigeria | Discover Raum Africa"
      />
      <meta name="twitter:creator" content="@rauminc" />
      <meta name="twitter:site" content="@rauminc" />
      <meta
        name="twitter:description"
        content="Explore Raum Africa, the app for short-term rentals in Nigeria. Discover your dream apartment, find services, features, and earning opportunities. Download now!"
      />
    </Helmet>
  );
};

export default HomepageHelmet;
