import React from "react";
import { Helmet } from "react-helmet-async";

const ContactHelmet = () => {
  return (
    <Helmet>
      <title>Contact Us for more information! - Raum INC.</title>
      <meta
        name="description"
        content="Do you have questions, comment, or a suggestion for Raum INC? Whether you
            need more information about our products or services, we at Raum Inc would love
            to hear from you"
      />
      <meta
        property="og:title"
        content="Contact Us for more information! - Raum INC."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Do you have questions, comment, or a suggestion for Raum INC? Whether you
        need more information about our products or services, we at Raum Inc would love
        to hear from you"
      />
      <meta
        property="og:image"
        content="https://raumhq.co/static/media/raum_logo-2.59c816fbe6de5b47c6ceed6a5cc7c717.svg"
      />
      <meta property="og:url" content="https://raumhq.co/contact" />
      <link rel="canonical" href="https://raumhq.co/contact" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Additional metadata for search engines */}
      <meta
        name="keywords"
        content="Raum, short term rental, learn more, about us, contact us, questions, faq, information"
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
        content="Contact Us for more information! - Raum INC."
      />
      <meta name="twitter:creator" content="@rauminc" />
      <meta name="twitter:site" content="@rauminc" />
      <meta
        name="twitter:description"
        content="Do you have questions, comment, or a suggestion for Raum INC? Whether you
        need more information about our products or services, we at Raum Inc would love
        to hear from you"
      />
    </Helmet>
  );
};

export default ContactHelmet;
