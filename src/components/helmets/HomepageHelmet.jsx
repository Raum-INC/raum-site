import React from "react";
import { Helmet } from "react-helmet-async";

const HomepageHelmet = () => {
  return (
    <Helmet>
      <title>
        Raum Africa: Your Gateway to Premier Short-Term Rentals in Nigeria!
      </title>
      <meta property="og:site_name" content="Raum Africa" />
      <meta
        name="description"
        content="Experience convenience & luxury with short-term rentals in Nigeria via Raum Africa. Explore apartments, enjoy services, and tap into earning potential. Get started!"
      />
      <meta
        property="og:title"
        content="Raum Africa: Your Gateway to Premier Short-Term Rentals in Nigeria!"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Experience convenience & luxury with short-term rentals in Nigeria via Raum Africa. Explore apartments, enjoy services, and tap into earning potential. Get started!"
      />
      <meta
        property="og:image"
        content="https://raum.africa/static/media/raum_favi.0d01f8c1fa4643d291b20d68809af99d.svg"
      />
      <meta property="og:url" content="https://raum.africa/" />
      <link rel="canonical" href="https://raum.africa/" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Additional metadata for search engines */}
      <meta
        name="keywords"
        content="Raum, Raum Africa, explore short term rental, apartment rentals, dream apartment, premier short-term rentals, earn with Raum Africa, find services in Nigeria, download raum mobile app"
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
        content="Raum Africa: Your Gateway to Premier Short-Term Rentals in Nigeria!"
      />
      <meta name="twitter:creator" content="@rauminc" />
      <meta name="twitter:site" content="@rauminc" />
      <meta
        name="twitter:description"
        content="Experience convenience & luxury with short-term rentals in Nigeria via Raum Africa. Explore apartments, enjoy services, and tap into earning potential. Get started!"
      />
    </Helmet>
  );
};

export default HomepageHelmet;
