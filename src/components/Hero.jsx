import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const componentVariant = {
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        type: "spring",
        stiffness: 30,
        duration: 2,
      },
    },
    hidden: {
      opacity: 0,
      translateY: -50,
    },
  };
  return (
    <motion.main
      variants={componentVariant}
      initial="hidden"
      whileInView="visible"
      className="w-full h-[400px] md:h-screen p-8 md:px-12 flex justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-4xl md:text-7xl text-center font-extrabold leading-8 md:leading-[80px]">
          Easiest <span className="text-primary">way</span> to find
          <br />
          your next <span className="text-primary">Stay</span>
        </h1>
        <p className="text-center leading-5 text-fade text-sm md:text-2xl">
          Discover Your Perfect Stay with Raum, Your All-In-One Real Estate App.
          <br />
          Book Short-Term Rentals, Find Your Dream Home, and Connect with a
          Thriving Community.
          <br />
          Your Home, Your Experience, Your Social Hub.
        </p>
        <Link to="/about" className="p-3 px-8 md:px-16 bg-primary rounded-3xl">
          Join the future
        </Link>
      </div>
    </motion.main>
  );
};

export default Hero;
