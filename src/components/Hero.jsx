import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="w-full h-screen p-8 md:px-12 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-2xl md:text-8xl text-center font-semibold leading-8 md:leading-[115px]">
          Discover Sustainable
          <br /> Housing Solutions for
          <br /> All with <span className="text-primary">Raum</span>
        </h1>
        <p className="text-left leading-5 md:text-center text-fade text-base md:text-2xl">
          We believe that everyone deserves a safe, affordable, and sustainable
          home.
          <br className="hidden" /> With our groundbreaking platform powered by
          blockchain, artificial intelligence,
          <br className="hidden" /> and machine learning, we're transforming the
          way you access housing solutions in Nigeria.{" "}
        </p>
        <Link to="/about" className="p-3 px-16 bg-primary rounded-3xl">
          Join the future
        </Link>
      </div>
    </main>
  );
};

export default Hero;
