import React from "react";
import { Helmet } from "react-helmet-async";

const InvestHelmet = () => {
  return (
    <Helmet>
      <title>
        Raum Africa: Invest in High-Yield Airbnb Rentals with Just $500!
      </title>
      <meta property="og:site_name" content="Invest with Raum Africa" />
      <meta
        name="description"
        content="Earn up to 50% annually with Raum Africa's co-hosting investment program. Let us do the heavy lifting while you enjoy stress-free returns"
      />
      <meta
        property="og:title"
        content="Raum Africa: Invest in High-Yield Airbnb Rentals with Just $500!"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Earn up to 50% annually with Raum Africa's co-hosting investment program. Let us do the heavy lifting while you enjoy stress-free returns"
      />
      <meta
        property="og:image"
        content="https://raum.africa/static/media/raum_favi.0d01f8c1fa4643d291b20d68809af99d.svg"
      />
      <meta property="og:url" content="https://raum.africa/invest" />
      <link rel="canonical" href="https://raum.africa/invest" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta
        name="apple-itunes-app"
        content={`app-id=6514297891, app-argument=raum://raum.app.link/, app-clip-bundle-id=com.raumhq.raum.Clip, app-clip-display=card`}
        data-rh="true"
      />

      {/* Additional metadata for search engines */}
      <meta
        name="keywords"
        content="Raum, Raum Africa, explore short term rental, apartment rentals, dream apartment, premier short-term rentals, earn with Raum Africa, find services in Nigeria, download raum mobile app"
      />
      <meta name="author" content="Invest with Raum Africa" />

      {/* Additional metadata for Twitter Sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://raum.africa/static/media/raum_favi.0d01f8c1fa4643d291b20d68809af99d.svg"
      />
      <meta
        name="twitter:title"
        content="Raum Africa: Invest in High-Yield Airbnb Rentals with Just $500!"
      />
      <meta name="twitter:creator" content="@rauminc" />
      <meta name="twitter:site" content="@rauminc" />
      <meta
        name="twitter:description"
        content="Earn up to 50% annually with Raum Africa's co-hosting investment program. Let us do the heavy lifting while you enjoy stress-free returns"
      />
    </Helmet>
  );
};

export default InvestHelmet;
