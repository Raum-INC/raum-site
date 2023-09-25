import React from "react";
import Hero from "../components/appguide/Hero";
import useBearStore from "../store/store";

const Appguide = () => {
  const { falseNav } = useBearStore();

  return (
    <div onClick={falseNav}>
      <Hero />
    </div>
  );
};

export default Appguide;
