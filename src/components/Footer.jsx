import React from "react";
import { Assets } from "../assets";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

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
  const location = useLocation();
  const isAdminDashboard = location.pathname.startsWith("/admin-dashboard");
  return (
    <motion.footer
      variants={footerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`${isAdminDashboard ? "bg-primary_text" : ""}`}
    >
      <div
        className={` w-full mx-auto flex flex-col lg:flex-row justify-between gap-y-6 p-8`}
      >
        <Link to="/">
          <img
            src={Assets.raumLogo}
            alt="raum-logo"
            className="w-[70px] md:w-[150px]"
          />
        </Link>
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
      <div className="w-full p-8 text-center text-base md:text-xl font-normal leading-7 text-[#585858] space-y-3">
        <Link to="/privacy-policy" className="p-3">
          Privacy Policy
        </Link>
        <p className="">© 2024 Raum Africa</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
