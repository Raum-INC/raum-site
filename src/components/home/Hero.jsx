import React from "react";
import { motion } from "framer-motion";
import { Assets } from "../../assets";
import DOMPurify from "dompurify";
import { Link, useLocation } from "react-router-dom";

const Hero = ({ heroTitle, hostTitle }) => {
  const sanitizedTitle = DOMPurify.sanitize(heroTitle); // Sanitize the heroTitle
  const location = useLocation();

  const componentVariant = {
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 30,
        duration: 1,
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

  const handleGetAppClick = () => {
    // Scroll to the 'Download' component with an offset
    const downloadSection = document.getElementById("download-section");
    if (downloadSection) {
      const offset = 20; // Adjust the offset value as needed
      const scrollPosition =
        downloadSection.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  const handleGetHostClick = () => {
    // Scroll to the 'Download' component with an offset
    const hostSection = document.getElementById("host-section");
    if (hostSection) {
      const offset = 25; // Adjust the offset value as needed
      const scrollPosition =
        hostSection.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  const getClick = () => {
    if (location.pathname === "/host") {
      return handleGetHostClick();
    } else {
      return handleGetAppClick();
    }
  };

  return (
    <motion.main className="w-full h-auto flex justify-center items-center relative bg-white text-black pt-24 overflow-hidden">
      <motion.div
        variants={componentVariant}
        initial="hidden"
        animate="visible"
        className="w-full h-auto flex flex-col justify-center items-center"
      >
        <div className="px-8 flex flex-col justify-center items-center gap-8">
          <h1
            className="text-2xl md:text-5xl lg:text-[72px] text-center font-extrabold lg:leading-[87px]"
            dangerouslySetInnerHTML={{ __html: sanitizedTitle }}
          />

          <p className="w-[300px] lg:w-[650px] text-center leading-[13.13px] text-bgFade text-[11.11px] md:text-base font-normal">
            Whether you're searching for your next home or looking to list your
            apartment for business purposes, we're here to make your journey
            seamless and stress-free.
          </p>
          <Link
            to={location.pathname === "/host" ? "/host" : "/"}
            onClick={getClick}
            className="p-3 px-8 md:px-12 h-[50px] bg-black text-white rounded-3xl capitalize font-normal"
          >
            {hostTitle}
          </Link>
        </div>
        <motion.div
          variants={heroVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full md:h-[500px] flex flex-col justify-start items-center relative"
        >
          <div className="w-full flex justify-center items-center h-auto">
            <img
              src={Assets.hero_bg3}
              alt="hero-bkg"
              className="mt-14 block lg:hidden w-full md:w-[1000px] md:h-[500px] mx-auto px-8 object-cover object-top aspect-auto md:absolute bottom-0"
            />
            <img
              src={Assets.herosection}
              alt="hero-bkg"
              className="hidden lg:block w-full md:w-[1000px] md:h-[500px] mx-auto px-8 object-cover object-top aspect-auto md:absolute bottom-0"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.main>
  );
};

export default Hero;
