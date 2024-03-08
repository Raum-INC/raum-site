import React from "react";
import { Helmet } from "react-helmet-async";

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
      <meta
        property="og:image"
        content="https://raumhq.co/static/media/raum_logo-2.59c816fbe6de5b47c6ceed6a5cc7c717.svg"
      />
      <meta property="og:url" content="https://raumhq.co/host" />
      <link rel="canonical" href="https://raumhq.co/host" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Additional metadata for search engines */}
      <meta
        name="keywords"
        content="Raum, Raum Africa, explore short term rental, earn with Raum Africa, make money with raum, find services in Nigeria, download raum app, dream apartments, faq, information"
      />
      <meta name="author" content="Raum Africa" />

      {/* Additional metadata for Twitter Sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://raumhq.co/static/media/raum_logo-2.59c816fbe6de5b47c6ceed6a5cc7c717.svg"
      />
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
