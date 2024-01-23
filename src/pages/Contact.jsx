import React from "react";
import ContactUs from "../components/about/ContactUs";
import Visit from "../components/about/Visit";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="flex flex-col space-y-[-2px] md:space-y-0 pt-28">
      <Helmet>
        <title>Contact Us - Raum INC.</title>
        <meta
          name="description"
          content="Do you have questions, comment, or a suggestion for us? Whether you
            need more information about our products or services, we would love
            to hear from you"
        />
        <meta
          property="og:title"
          content="Stay up-todate with the latest from the Blog - Raum INC."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Do you have questions, comment, or a suggestion for us? Whether you
            need more information about our products or services, we would love
            to hear from you"
        />
        <meta
          property="og:image"
          content="https://raumhq.co/static/media/raum_logo-2.59c816fbe6de5b47c6ceed6a5cc7c717.svg"
        />
        <meta property="og:url" content="https://raumhq.co/contact" />
        <link rel="canonical" href="https://raumhq.co/contact" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <ContactUs />
      <Visit />
    </div>
  );
};

export default Contact;
