import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Assets } from "../assets";

const Hero = () => {
  const componentVariant = {
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        delay: 0.3,
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

  const heroVariant = {
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        delay: 1,
        type: "spring",
        stiffness: 30,
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
      translateY: 50,
    },
  };
  return (
    <motion.main
      variants={componentVariant}
      initial="hidden"
      animate="visible"
      className="w-full h-auto p-8 md:px-12 flex justify-center items-center relative"
    >
      <div className=" flex flex-col justify-center items-center gap-8">
        <h1 className="text-4xl md:text-8xl text-center font-extrabold leading-8 md:leading-[80px]">
          Discover <span className="text-primary">Your</span> Dream
          <br /> Apartment with <span className="text-primary">Raum</span>
        </h1>
        <p className="md:w-[850px] text-center leading-5 text-fade text-sm md:text-2xl">
          Finding the perfect apartment has never been easier. At Raum, we are
          your dedicated partners in the world of real estate. Whether you’re
          searching for your next home or looking to list your apartment for
          business purposes, we're here to make your journey seamless and
          stress-free
        </p>
        <Link
          to="joinus"
          className="p-3 px-8 md:px-16 bg-primary rounded-3xl capitalize"
        >
          Join the future
        </Link>
        <div>
          <img
            src={Assets.hero_bg1}
            alt="/"
            className="absolute md:block hidden top-[200px] left-0 -z-10
          "
          />
          <img
            src={Assets.hero_bg2}
            alt="/"
            className="absolute md:block hidden right-0 bottom-72 -z-10"
          />
        </div>
        <motion.div
          variants={heroVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full md:h-[700px] flex flex-col justify-end items-center relative"
        >
          <img
            src={Assets.hero_bg3}
            alt="image"
            className="md:w-4/5 mx-auto aspect-auto pt-10 md:absolute bottom-4 -z-[10]"
          />
          <div className="bg-black w-full h-auto p-6 flex flex-col justify-center items-center gap-8">
            <h1 className="text-3xl font-semibold">Who are you?</h1>
            <div className="flex flex-col gap-5 md:flex-row">
              <button className="p-3 px-5 rounded-full border border-primary hover:bg-primary hover:tex-white transition-all duration-500">
                Property Owner
              </button>
              <button className="p-3 px-5 rounded-full border capitalize border-primary hover:bg-primary hover:tex-white transition-all duration-500">
                Just looking for property
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Hero;
