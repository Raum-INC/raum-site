import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Features from "../components/Features";
import CallToAction from "../components/CallToAction";
import Faqs from "../components/Faqs";
import Tester from "../components/Tester";

const Homepage = ({ nav, setNav }) => {
  const handleNav = () => {
    setNav(false);
  };

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
    <div onClick={handleNav}>
      {/* <Tester /> */}
      <motion.div
        variants={componentVariant}
        initial="hidden"
        whileInView="visible"
      >
        <Hero />
      </motion.div>
      <motion.div
        variants={componentVariant}
        initial="hidden"
        whileInView="visible"
      ></motion.div>
      <Services />
      <motion.div
        variants={componentVariant}
        initial="hidden"
        whileInView="visible"
      ></motion.div>
      <motion.div
        variants={componentVariant}
        initial="hidden"
        whileInView="visible"
      ></motion.div>
      <Features />
      <motion.div
        variants={componentVariant}
        initial="hidden"
        whileInView="visible"
      ></motion.div>
      <motion.div
        variants={componentVariant}
        initial="hidden"
        whileInView="visible"
      ></motion.div>
      <CallToAction />
      <motion.div
        variants={componentVariant}
        initial="hidden"
        whileInView="visible"
      ></motion.div>
      <motion.div
        variants={componentVariant}
        initial="hidden"
        whileInView="visible"
      ></motion.div>
      <Faqs />
      <motion.div
        variants={componentVariant}
        initial="hidden"
        whileInView="visible"
      ></motion.div>
    </div>
  );
};

export default Homepage;
