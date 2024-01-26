import React from "react";
import { Helmet } from "react-helmet-async";

const HomepageHelmet = () => {
  return (
    <Helmet>
      <title>Short-Term Rentals in Nigeria | Discover Raum - Raum INC.</title>
      <meta
        name="description"
        content="Explore Raum, the app for short-term rentals in Nigeria. Discover your dream apartment, find services, features, and earning opportunities. Download now!"
      />
      <meta
        property="og:title"
        content="Short-Term Rentals in Nigeria | Discover Raum - Raum INC."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Explore Raum, the app for short-term rentals in Nigeria. Discover your dream apartment, find services, features, and earning opportunities. Download now!"
      />
      <meta
        property="og:image"
        content="https://raumhq.co/static/media/raum_logo-2.59c816fbe6de5b47c6ceed6a5cc7c717.svg"
      />
      <meta property="og:url" content="https://raumhq.co/" />
      <link rel="canonical" href="https://raumhq.co/" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Additional metadata for search engines */}
      <meta
        name="keywords"
        content="Raum, explore short term rental, earn with Raum, find services in Nigeria, download raum app, dream apartments, faq, information"
      />
      <meta name="author" content="Raum INC." />

      {/* Additional metadata for Twitter Sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://raumhq.co/static/media/raum_logo-2.59c816fbe6de5b47c6ceed6a5cc7c717.svg"
      />
      <meta
        name="twitter:title"
        content="Short-Term Rentals in Nigeria | Discover Raum - Raum INC."
      />
      <meta name="twitter:creator" content="@rauminc" />
      <meta name="twitter:site" content="@rauminc" />
      <meta
        name="twitter:description"
        content="Explore Raum, the app for short-term rentals in Nigeria. Discover your dream apartment, find services, features, and earning opportunities. Download now!"
      />
    </Helmet>
  );
};

export default HomepageHelmet;
