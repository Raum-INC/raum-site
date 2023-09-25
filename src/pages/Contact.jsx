import React from "react";
import ContactUs from "../components/about/ContactUs";
import Visit from "../components/about/Visit";

const Contact = ({ nav, setNav }) => {
  const handleNav = () => {
    setNav(false);
  };
  return (
    <div
      className="flex flex-col space-y-[-2px] md:space-y-0"
      onClick={handleNav}
    >
      <ContactUs />
      <Visit />
    </div>
  );
};

export default Contact;
