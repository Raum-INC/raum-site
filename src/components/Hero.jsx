import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="w-full h-auto p-8 md:px-12 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-2xl md:text-7xl text-center font-extrabold leading-8 md:leading-[80px]">
          Easiest <span className="text-primary">way</span> to find
          <br />
          your next <span className="text-primary">Stay</span>
        </h1>
        <p className="text-center leading-5 text-fade text-xs md:text-2xl">
          We believe that everyone deserves a safe, affordable, and sustainable
          home.
          <br />
          With our groundbreaking platform powered by blockchain, artificial
          intelligence,
          <br className="hidden" /> and machine learning, we're transforming the
          way you access housing solutions in Nigeria.
        </p>
        <Link to="/about" className="p-3 px-8 md:px-16 bg-primary rounded-3xl">
          Join the future
        </Link>
      </div>
    </main>
  );
};

export default Hero;
