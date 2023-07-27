import React from "react";
import ContactUs from "../components/about/ContactUs";
import Visit from "../components/about/Visit";

const Contact = ({ nav, setNav }) => {
  const handleNav = () => {
    setNav(false);
  };
  return (
    <div onClick={handleNav}>
      <ContactUs />
      <Visit />
    </div>
  );
};

export default Contact;
