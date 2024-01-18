import React from "react";
import { Assets } from "../assets";
import { motion } from "framer-motion";
// import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const footerVariant = {
    hidden: {
      opacity: 0,
      translateY: 50,
    },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 30,
      },
    },
  };
  return (
    <motion.footer
      variants={footerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="w-full mx-auto flex flex-col lg:flex-row justify-between gap-y-6 p-8 my-12">
        <div>
          <img
            src={Assets.raumLogo}
            alt="raum-logo"
            className="w-[70px] md:w-[150px]"
          />
        </div>
        <div className="flex justify-end items-center gap-10">
          <a href="mailto:Info@raumgroup.io">
            <img
              src={Assets.mail}
              alt="instagram-handle"
              className="w-6 h-6 md:w-[50px] md:h-[50px]"
            />
          </a>
          <a href="https://www.instagram.com/rauminc.hq/">
            <img
              src={Assets.instagram}
              alt="instagram-handle"
              className="w-6 h-6 md:w-[50px] md:h-[50px]"
            />
          </a>
          <a href="https://twitter.com/rauminc">
            <img
              src={Assets.twitter}
              alt="twitter-handle"
              className="w-6 h-6 md:w-[50px] md:h-[50px]"
            />
          </a>
          <a href="https://www.linkedin.com/company/rauminc/">
            <img
              src={Assets.linkedin}
              alt="linkedIn-handle"
              className="w-6 h-6 md:w-[50px] md:h-[50px]"
            />
          </a>
        </div>
      </div>
      <div className="w-full p-8">
        <p className="text-center text-base md:text-xl font-normal leading-7 text-[#585858]">
          © 2023 Raum Inc
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
