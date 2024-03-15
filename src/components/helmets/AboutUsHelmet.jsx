import React from "react";
import { Helmet } from "react-helmet-async";

const AboutUsHelmet = () => {
  return (
    <Helmet>
      <title>
        Learn About Raum Africa: Our Mission, Services, and Vision for
        Short-Term Stays
      </title>
      <meta property="og:site_name" content="About Raum Africa" />
      <meta
        name="description"
        content="Delve into Raum Africa: our values, services, and commitment to revolutionizing short-term stays. Explore our story and vision today!"
      />
      <meta
        property="og:title"
        content="Learn About Raum Africa: Our Mission, Services, and Vision for Short-Term Stays"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Delve into Raum Africa: our values, services, and commitment to revolutionizing short-term stays. Explore our story and vision today!"
      />
      <meta
        property="og:image"
        content="https://raum.africa/static/media/raum_favi.0d01f8c1fa4643d291b20d68809af99d.svg"
      />
      <meta property="og:url" content="https://raum.africa/about" />
      <link rel="canonical" href="https://raum.africa/about" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Additional metadata for search engines */}
      <meta
        name="keywords"
        content="Raum, short term rental, learn more about raum africa, shaping the short-term space with raum africa, about us, our mission at raum africa, our services we render at Raum Africa, the vision behind raum africa"
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
        content="Discover the story behind Raum Africa, and Learn More Learn About Raum Africa: Our Mission, Services, and Vision for Short-Term Stays"
      />
      <meta name="twitter:creator" content="@rauminc" />
      <meta name="twitter:site" content="@rauminc" />
      <meta
        name="twitter:description"
        content="Delve into Raum Africa: our values, services, and commitment to revolutionizing short-term stays. Explore our story and vision today!"
      />
    </Helmet>
  );
};

export default AboutUsHelmet;
