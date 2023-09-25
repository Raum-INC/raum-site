import React from "react";
import Hero from "../components/appguide/Hero";

const Appguide = ({ nav, setNav }) => {
  const handleNav = () => {
    setNav(false);
  };
  return (
    <div onClick={handleNav}>
      <Hero />
    </div>
  );
};

export default Appguide;
