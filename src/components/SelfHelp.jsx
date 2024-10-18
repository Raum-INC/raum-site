import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const SelfHelp = () => {
  const containerVariant = {
    hidden: {
      opacity: 0,
      translateY: -100,
    },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 1,
        delay: 2,
      },
    },
  };

  return (
    <motion.a
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      href="https://wa.me/message/ZVNY4C3AJ6F5I1"
      className="fixed w-auto lg:w-[170px] h-auto lg:h-[75px] bg-black flex flex-col justify-center items-center gap-1 border-2 border-[#CBCBCB]/30 text-white bottom-3 lg:bottom-10 right-3 lg:right-10 rounded-xl p-2"
    >
      <p className="text-[#CBCBCB] text-xs lg:text-sm">Need swift reply?</p>
      <p className="text-xs lg:text-base font-semibold flex gap-3 justify-center items-center">
        <FaWhatsapp /> Contact Us
      </p>
    </motion.a>
  );
};

export default SelfHelp;
