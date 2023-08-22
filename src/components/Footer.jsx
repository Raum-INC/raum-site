import React from "react";
import { Assets } from "../assets";
import { motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa";

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
          <img src={Assets.raumLogo} alt="raum-logo" />
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-20">
          <div className="flex gap-3">
            <img src={Assets.email} alt="" />
            <div>
              <p className="text-base font-bold leading-5">Email</p>
              <a
                href="mailto:Info@raumgroup.io"
                className="text-sm font-medium text-[#6c6c6c]"
              >
                hello@raumhq.co
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <img src={Assets.phone} alt="" />
            <div>
              <p className="text-base font-bold leading-5">Phone</p>
              <a
                href="tel:+234 814 822 8901"
                className="text-sm font-medium text-[#6c6c6c]"
              >
                +234 814 822 8901
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-start">
          <div className="text-white flex gap-3 md:gap-8">
            <a href="https://twitter.com/rauminc">
              <img src={Assets.twitter} alt="twitter-handle" />
            </a>
            <a href="https://www.instagram.com/rauminc.hq/">
              <img src={Assets.instagram} alt="instagram-handle" />
            </a>
            <a href="https://www.linkedin.com/company/rauminc/">
              <img src={Assets.linkedin} alt="linkedIn-handle" />
            </a>
            <a
              href="https://www.facebook.com/raumincc"
              className="flex justify-center items-center"
            >
              <FaFacebookF size={22} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full border-t-[1px] border-t-[#0000ff33] p-8">
        <p className="text-[#585858] text-center text-base md:text-xl font-normal leading-6">
          Copyright © 2023 Raum. All rights reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
