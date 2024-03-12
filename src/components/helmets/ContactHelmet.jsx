import React from "react";
import { Helmet } from "react-helmet-async";
import { Assets } from "../../assets";

const ContactHelmet = () => {
  return (
    <Helmet>
      <title>Contact Us for more information! - Raum Africa.</title>
      <meta
        name="description"
        content="Do you have questions, comment, or a suggestion for Raum Africa? Whether you
            need more information about our products or services, we at Raum Africa would love
            to hear from you"
      />
      <meta
        property="og:title"
        content="Contact Us for more information! - Raum Africa."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Do you have questions, comment, or a suggestion for Raum Africa? Whether you
        need more information about our products or services, we at Raum Africa would love
        to hear from you"
      />
      <meta property="og:image" content={Assets.raumFaviSvg} />
      <meta property="og:url" content="https://raum.africa/contact" />
      <link rel="canonical" href="https://raum.africa/contact" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Additional metadata for search engines */}
      <meta
        name="keywords"
        content="Raum, raum africa, short term rental, learn more, about us, contact us, questions, faq, information"
      />
      <meta name="author" content="Raum Africa." />

      {/* Additional metadata for Twitter Sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={Assets.raumFaviSvg} />
      <meta
        name="twitter:title"
        content="Contact Us for more information! - Raum Africa."
      />
      <meta name="twitter:creator" content="@rauminc" />
      <meta name="twitter:site" content="@rauminc" />
      <meta
        name="twitter:description"
        content="Do you have questions, comment, or a suggestion for Raum Africa? Whether you
        need more information about our products or services, we at Raum Africa would love
        to hear from you"
      />
    </Helmet>
  );
};

export default ContactHelmet;
