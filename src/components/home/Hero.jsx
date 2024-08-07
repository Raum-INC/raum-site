import React from "react";
import { motion } from "framer-motion";
import { Assets } from "../../assets";
import DOMPurify from "dompurify";
import { Link, useLocation } from "react-router-dom";

const Hero = ({ heroTitle, hostTitle }) => {
  const sanitizedTitle = DOMPurify.sanitize(heroTitle);
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
    scrollToSection("download-section", 20);
  };

  const handleGetHostClick = () => {
    scrollToSection("host-section", 25);
  };

  const scrollToSection = (sectionId, offset) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const scrollPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;
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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <main
      itemScope
      itemType="https://raum.africa/host"
      className="hero-section w-full h-auto flex justify-center items-center relative bg-white text-black pt-24 overflow-hidden"
    >
      <motion.div
        variants={componentVariant}
        initial="hidden"
        animate="visible"
        className="hero-content w-full h-auto flex flex-col justify-center items-center md:gap-12 lg:gap-0"
      >
        <div className="text-content px-8 flex flex-col justify-center items-center gap-8">
          <h1
            itemProp="Title"
            className="hero-title text-2xl md:text-5xl lg:text-[72px] text-center font-extrabold lg:leading-[87px]"
            dangerouslySetInnerHTML={{ __html: sanitizedTitle }}
          />

          <p
            itemType="description"
            className="hero-description w-4/5 lg:w-[650px] text-center leading-[20px] text-bgFade text-lg md:text-xl font-normal"
          >
            Whether you're searching for your next vacation home or looking to
            list your short-term rental apartment for business purposes, we're
            here to make your journey seamless and stress-free.
          </p>
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4">
            {/* <Link
              to={location.pathname === "/host" ? "/host" : "/"}
              onClick={getClick}
              className={`bg-black text-sm md:text-base text-white rounded-3xl capitalize font-normal flex justify-center items-center ${
                location.pathname === "/host"
                  ? "w-[230px] h-[34px] md:h-[50px]"
                  : "w-[180px] h-[34px] md:h-[50px]"
              }`}
            >
              <p>{hostTitle}</p>
            </Link> */}
            {location.pathname === "/" && (
              <button
                itemProp="form"
                title="Get the app!"
                onClick={handleGetAppClick}
                className={`bg-black text-sm md:text-base text-white rounded-3xl capitalize font-normal flex justify-center items-center ${
                  location.pathname === "/"
                    ? "w-[230px] h-[34px] md:h-[50px]"
                    : "w-[180px] h-[34px] md:h-[50px]"
                }`}
                href="https://forms.gle/X25r6hjhN4gL1tzH7"
              >
                Get the app
              </button>
            )}
            {location.pathname === "/" && (
              <Link
                to="/admin-dashboard"
                onClick={() => {
                  getClick();
                  scrollToTop();
                }}
                className={`bg-white border-2 border-black text-sm md:text-base text-black rounded-3xl capitalize font-bold flex justify-center items-center w-[180px] h-[34px] md:h-[50px]`}
              >
                <p>Check out listings</p>
              </Link>
            )}
          </div>
        </div>
        <motion.div
          variants={heroVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hero-image w-full h-[250px] md:h-[500px] flex flex-col justify-start items-center relative"
        >
          <div className="w-full h-full flex flex-col justify-end items-center mt-10 mx-auto relative">
            <img
              title="Short-Term Rentals in Nigeria | Discover Raum Africa"
              loading="lazy"
              src={Assets.mobileHero}
              alt="Short-Term Rentals in Nigeria | Discover Raum Africa"
              className="w-10/12 block lg:hidden"
            />
            <img
              title="Short-Term Rentals in Nigeria | Discover Raum Africa"
              loading="lazy"
              src={Assets.hero_bg3}
              alt="Short-Term Rentals in Nigeria | Discover Raum Africa"
              className="hero-desktop-image hidden lg:block w-10/12 md:h-[500px] mx-auto px-8 object-cover object-top aspect-auto md:absolute bottom-0"
            />
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Hero;
