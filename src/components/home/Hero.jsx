import React from "react";
import { motion } from "framer-motion";
import { Assets } from "../../assets";
import DOMPurify from "dompurify";
import { Link, useLocation } from "react-router-dom";

const Hero = ({
  heroTitle,
  hostTitle,
  investTitle,
  investDescription,
  guestTitle,
  guestDescription,
  guestImage,
}) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isInvest = location.pathname === "/invest";
  const isGuest = location.pathname === "/guest";

  const sanitizedTitle = DOMPurify.sanitize(heroTitle);
  const sanitizedInvest = DOMPurify.sanitize(investTitle);
  const sanitizedGuest = DOMPurify.sanitize(guestTitle);

  const componentVariant = {
    visible: {
      opacity: 1,
      translateY: 0,
      transition: { delay: 0.3, type: "spring", stiffness: 30, duration: 1 },
    },
    hidden: { opacity: 0, translateY: -50 },
  };

  const heroVariant = {
    visible: {
      opacity: 1,
      translateY: 0,
      transition: { delay: 1, type: "spring", stiffness: 30, duration: 1 },
    },
    hidden: { opacity: 0, translateY: 50 },
  };

  const scrollToSection = (sectionId, offset) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const scrollPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  const handleGetAppClick = () => scrollToSection("download-section", 20);
  const handleGetHostClick = () => scrollToSection("host-section", 25);

  const getClick = () => {
    if (location.pathname === "/host") {
      handleGetHostClick();
    } else {
      handleGetAppClick();
    }
  };

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <main
      itemScope
      itemType="https://raum.africa/host"
      className="hero-section relative flex h-auto w-full items-center justify-center overflow-hidden bg-white pt-24 text-black"
    >
      <motion.div
        variants={componentVariant}
        initial="hidden"
        animate="visible"
        className="hero-content flex h-auto w-full flex-col items-center justify-center md:gap-12 lg:gap-0"
      >
        <div
          className={`text-content flex flex-col items-center justify-center gap-8 px-8 ${
            isInvest ? "pb-0" : null
          } ${isHome ? "pb-20" : null} md:pb-0`}
        >
          <h1
            itemProp="Title"
            className="hero-title text-center text-2xl font-extrabold md:text-5xl lg:text-[72px] lg:leading-[87px]"
            dangerouslySetInnerHTML={{
              __html: isInvest
                ? sanitizedInvest
                : isGuest
                  ? sanitizedGuest
                  : sanitizedTitle,
            }}
          />
          <p
            itemType="description"
            className="hero-description text-bgFade w-4/5 text-center text-lg font-normal leading-[20px] md:text-xl lg:w-[650px]"
          >
            {isInvest
              ? investDescription
              : isGuest
                ? guestDescription
                : `Whether you're searching for your next vacation home or looking to
            list your short-term rental apartment for business purposes, we're
            here to make your journey seamless and stress-free.`}
          </p>
          <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
            {isHome && (
              <>
                <button
                  itemProp="form"
                  title="Get the app!"
                  onClick={handleGetAppClick}
                  className="flex h-[34px] w-[230px] items-center justify-center rounded-3xl bg-black text-sm font-normal capitalize text-white md:h-[50px] md:text-base"
                >
                  Get the app
                </button>
                <Link
                  to="/admin-dashboard"
                  onClick={() => {
                    getClick();
                    scrollToTop();
                  }}
                  className="flex h-[34px] w-[180px] items-center justify-center rounded-3xl border-2 border-black bg-white text-sm font-bold capitalize text-black md:h-[50px] md:text-base"
                >
                  <p>Check out listings</p>
                </Link>
              </>
            )}
            {isInvest && (
              <a
                href="https://forms.gle/oMTy5GNUyS7k4Ub76"
                target="_blank"
                rel="noopener noreferrer"
                title="Invest with Raum Africa"
                onClick={() => {
                  getClick();
                  scrollToTop();
                }}
                className="flex h-[34px] w-[200px] items-center justify-center rounded-3xl border-2 border-black bg-black text-sm font-bold capitalize text-white md:h-[50px] md:text-base"
              >
                <p>Start Investing Today</p>
              </a>
            )}
          </div>
        </div>
        <motion.div
          variants={heroVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hero-image relative flex h-[250px] w-full flex-col items-center justify-start md:h-[500px]"
        >
          <div className="relative mx-auto mt-10 flex h-full w-full flex-col items-center justify-end">
            {isInvest && (
              <img
                title="Invest in High-Yield Airbnb Rentals with Raum Africa"
                loading="lazy"
                src={Assets.invest}
                alt="Invest in High-Yield Airbnb Rentals with Raum Africa"
                className="absolute bottom-0 right-0 block w-9/12 md:w-8/12"
              />
            )}
            {isHome && (
              <>
                <img
                  title="Discover your Dream apartment with Raum Africa"
                  loading="lazy"
                  src={Assets.mobileHero}
                  alt="Discover your Dream apartment with Raum Africa"
                  className="block w-10/12 lg:hidden"
                />
                <img
                  title="Discover your Dream apartment with Raum Africa"
                  loading="lazy"
                  src={Assets.hero_bg3}
                  alt="Discover your Dream apartment with Raum Africa"
                  className="hero-desktop-image bottom-0 mx-auto hidden aspect-auto w-10/12 object-cover object-top px-8 md:absolute md:h-[500px] lg:block"
                />
              </>
            )}
            {isGuest && (
              <div className="relative flex h-[500px] w-full items-end justify-center overflow-hidden">
                <img
                  title="Discover your Dream apartment with Raum Africa"
                  loading="lazy"
                  src={guestImage}
                  alt="Discover your Dream apartment with Raum Africa"
                  className="absolute -bottom-8 h-full w-[1000px] object-cover p-4 xl:-bottom-20"
                />
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Hero;
