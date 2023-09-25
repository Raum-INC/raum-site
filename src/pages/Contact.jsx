import React from "react";
import ContactUs from "../components/about/ContactUs";
import Visit from "../components/about/Visit";
import useBearStore from "../store/store";

const Contact = () => {
  const { falseNav } = useBearStore();

  return (
    <div
      className="flex flex-col space-y-[-2px] md:space-y-0"
      onClick={falseNav}
    >
      <ContactUs />
      <Visit />
    </div>
  );
};

export default Contact;
