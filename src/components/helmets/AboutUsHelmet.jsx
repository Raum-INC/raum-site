import React from "react";
import { Helmet } from "react-helmet-async";
import { Assets } from "../../assets";

const AboutUsHelmet = () => {
  return (
    <Helmet>
      <title>
        Discover the story behind Raum Africa, and Learn More About Us - Raum
        Africa
      </title>
      <meta
        name="description"
        content="Discover the story behind Raum Africa, our values, and the experience we offer. Learn more about us here at Raum Africa!"
      />
      <meta property="og:title" content="About Us - Raum Africa" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Discover the story behind Raum Africa, our values, and the experience we offer. Learn more about us here at Raum Africa!"
      />
      <meta property="og:image" content={Assets.raumFaviSvg} />
      <meta property="og:url" content="https://raum.africa/about" />
      <link rel="canonical" href="https://raum.africa/about" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Additional metadata for search engines */}
      <meta
        name="keywords"
        content="Raum, short term rental, learn more, about us, values, experience, story behind"
      />
      <meta name="author" content="Raum Africa" />

      {/* Additional metadata for Twitter Sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={Assets.raumFaviSvg} />
      <meta
        name="twitter:title"
        content="Discover the story behind Raum Africa, and Learn More About Us - Raum Africa"
      />
      <meta name="twitter:creator" content="@rauminc" />
      <meta name="twitter:site" content="@rauminc" />
      <meta
        name="twitter:description"
        content="Discover the story behind Raum Africa, our values, and the experience we offer. Learn more about us here at Raum Africa!"
      />
    </Helmet>
  );
};

export default AboutUsHelmet;
