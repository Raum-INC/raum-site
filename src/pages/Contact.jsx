import React from "react";
import ContactUs from "../components/about/ContactUs";
import Visit from "../components/about/Visit";
import ContactHelmet from "../components/helmets/ContactHelmet";

const Contact = () => {
  return (
    <div className="flex flex-col space-y-[-2px] md:space-y-0 pt-28">
      <ContactHelmet />

      <ContactUs />
      <Visit />
    </div>
  );
};

export default Contact;
