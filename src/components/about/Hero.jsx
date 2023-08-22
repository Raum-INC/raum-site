import React from "react";
import { motion } from "framer-motion";
import { AboutUs } from "../../assets";

const Hero = () => {
  const heroVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const imageVariant = {
    left: {
      opacity: 0,
      translateY: 50,
    },
    right: {
      opacity: 0,
      translateX: 50,
    },
    visible: {
      opacity: 1,
      translateY: 0,
      translateX: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  };
  return (
    <motion.main
      variants={heroVariant}
      initial="hidden"
      animate="visible"
      className="w-full h-auto p-8 py-14 md:py-28 md:px-12  overflow-hidden relative"
    >
      <div className="md:w-11/12 mx-auto flex flex-col justify-center items-start gap-8 md:gap-16">
        <div className="md:w-3/5 flex flex-col gap-5">
          <h1 className="font-bold text-3xl md:text-6xl ">About us</h1>
          <p className="md:pr-5 text-left font-medium text-base md:text-md leading-normal md:leading-8">
            We are revolutionizing staycations by providing an all-in-one
            platform for booking short-term and long stays, along with dream
            properties, using AI, VR tours, smart home tech, and prioritize
            sustainability.
          </p>
        </div>
        {/* desktop */}
        <div className="w-full hidden md:flex justify-center md:justify-normal gap-2">
          <motion.img
            variants={imageVariant}
            initial="left"
            animate="visible"
            src={AboutUs.meetingroom}
            alt=""
            className="w-1/2 h-fit md:w-3/5 rounded-xl"
          />
          <motion.img
            variants={imageVariant}
            initial="right"
            animate="visible"
            src={AboutUs.meetingroom2}
            alt=""
            className="w-1/2 md:w-[600px] h-fit rounded-xl md:absolute inset-y-0 top-[220px] right-[-100px]"
          />
        </div>
        {/* mobile */}
        <div className="w-full h-[600px] md:h-auto flex md:hidden justify-center md:justify-normal gap-2 relative md:static">
          <motion.img
            variants={imageVariant}
            initial="left"
            animate="visible"
            src={AboutUs.meetingroom}
            alt=""
            className="w-[210px] sm:w-[340px] h-fit lg:w-3/5 rounded-xl absolute -left-16 top-28"
          />
          <motion.img
            variants={imageVariant}
            initial="right"
            animate="visible"
            src={AboutUs.meetingroom2}
            alt=""
            className="w-[210px] sm:w-[340px] lg:w-[600px] h-fit rounded-xl absolute -right-16"
          />
        </div>
      </div>
    </motion.main>
  );
};

export default Hero;
