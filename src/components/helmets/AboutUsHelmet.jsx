import React from "react";
import { Helmet } from "react-helmet-async";

const AboutUsHelmet = () => {
  return (
    <Helmet>
      <title>
        Discover the story behind Raum INC., and Learn More About Us - Raum INC.
      </title>
      <meta
        name="description"
        content="Discover the story behind Raum INC., our values, and the experience we offer. Learn more about us here at Raum!"
      />
      <meta property="og:title" content="About Us - Raum INC." />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Discover the story behind Raum INC., our values, and the experience we offer. Learn more about us here at Raum!"
      />
      <meta
        property="og:image"
        content="https://raumhq.co/static/media/raum_logo-2.59c816fbe6de5b47c6ceed6a5cc7c717.svg"
      />
      <meta property="og:url" content="https://raumhq.co/about" />
      <link rel="canonical" href="https://raumhq.co/about" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Additional metadata for search engines */}
      <meta
        name="keywords"
        content="Raum, short term rental, learn more, about us, values, experience, story behind"
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
        content="Discover the story behind Raum INC., and Learn More About Us - Raum INC."
      />
      <meta name="twitter:creator" content="@rauminc" />
      <meta name="twitter:site" content="@rauminc" />
      <meta
        name="twitter:description"
        content="Discover the story behind Raum INC., our values, and the experience we offer. Learn more about us here at Raum!"
      />
    </Helmet>
  );
};

export default AboutUsHelmet;
