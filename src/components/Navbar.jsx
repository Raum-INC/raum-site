import React from "react";
import { Assets } from "../assets";
import "../index.css";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import useBearStore from "../store/store";

const Navbar = () => {
  const { toggle, toggleFalse, nav, toggleNav, falseNav } = useBearStore();

  const location = useLocation();

  const getLogo = () => {
    if (
      location.pathname === "/" ||
      location.pathname === "/host" ||
      location.pathname === "/invest"
    ) {
      return Assets.raumLogo2; // Replace with your special logo asset
    } else {
      return Assets.raumLogo; // Default logo for other routes
    }
  };

  const navbarVariant = {
    hidden: {
      opacity: 1,
      translateY: -50,
    },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        type: "spring",
        stiffness: 30,
        duration: 1,
      },
    },
  };

  const navtoggleVariant = {
    initial: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const adminVariant = {
    initial: {
      translateY: -100,
      transition: {
        duration: 1,
        delay: 0.75,
      },
    },
    animate: {
      translateY: 0,
      transition: {
        duration: 1,
        delay: 0.75,
      },
    },
  };

  return (
    <motion.header
      variants={navbarVariant}
      initial="hidden"
      animate="visible"
      className="absolute left-0 right-0 top-0"
    >
      <nav className="relative z-40 flex w-full items-center justify-between bg-transparent p-4 px-8 md:p-4 md:px-12">
        <div className="invisible hidden w-1/3 md:block"></div>
        <button className="w-1/3">
          <Link
            to="/"
            onClick={() => {
              falseNav();
              toggleFalse();
            }}
          >
            <img
              src={getLogo()}
              alt="Logo"
              className="w-[70px] md:mx-auto md:w-[150px]"
            />
          </Link>
        </button>
        <motion.div
          animate={{ type: "spring", stiffness: 500 }}
          className="flex w-auto items-center justify-end gap-5 overflow-hidden py-4 pl-4 md:w-1/3"
        >
          <div
            onClick={() => {
              toggleNav();
              toggleFalse();
            }}
            className="flex h-[30px] w-[30px] items-center justify-end"
          >
            {nav === false && (
              <AnimatePresence>
                <motion.button
                  variants={navtoggleVariant}
                  initial="initial"
                  animate="animate"
                  exit="initial"
                >
                  <AiOutlineMenu
                    className={`${
                      location.pathname === "/" ||
                      location.pathname === "/host" ||
                      location.pathname === "/invest"
                        ? "text-black"
                        : "text-white"
                    }`}
                    size={25}
                  />
                </motion.button>
              </AnimatePresence>
            )}
            {nav === true && (
              <AnimatePresence>
                <motion.button
                  variants={navtoggleVariant}
                  initial="initial"
                  animate="animate"
                  exit="initial"
                >
                  <MdClose
                    className={`${
                      location.pathname === "/" || location.pathname === "/host"
                        ? "text-black"
                        : "text-white"
                    }`}
                    size={25}
                  />
                </motion.button>
              </AnimatePresence>
            )}
          </div>
        </motion.div>

        <AnimatePresence>
          {nav === true && (
            <motion.ul
              variants={navtoggleVariant}
              initial="initial"
              animate="animate"
              exit="initial"
              className={
                nav
                  ? "absolute left-0 right-0 top-[80px] mx-auto flex w-11/12 flex-col items-center justify-center gap-3 rounded-3xl bg-black p-8 font-normal lg:flex-row"
                  : "hidden"
              }
            >
              {/* <Link
                onClick={() => {
                  toggleNav();
                  toggleFalse();
                }}
                to="/appguide"
                className="p-3"
              >
                App Guide
              </Link> */}
              {/* <li className="p-2">
                <Link
                  onClick={() => {
                    toggleNav();
                    toggleFalse();
                  }}
                  to="/blog"
                  className="p-3"
                >
                  Blog
                </Link>
              </li> */}

              <li className="p-2 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:text-primary">
                <Link
                  onClick={() => {
                    toggleNav();
                    toggleFalse();
                  }}
                  to="/host"
                  className="p-3"
                >
                  Host App
                </Link>
              </li>
              <li className="p-2 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:text-primary">
                <Link
                  onClick={() => {
                    toggleNav();
                    toggleFalse();
                  }}
                  to="/invest"
                  className="p-3"
                >
                  Invest
                </Link>
              </li>
              <li className="p-2 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:text-primary">
                <Link
                  onClick={() => {
                    toggleNav();
                    toggleFalse();
                  }}
                  to="/blog"
                  className="p-3"
                >
                  Blog
                </Link>
              </li>
              <li className="p-2 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:text-primary">
                <Link
                  onClick={() => {
                    toggleNav();
                    toggleFalse();
                  }}
                  to="/about"
                  className="p-3"
                >
                  About Us
                </Link>
              </li>
              <li className="p-2 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:text-primary">
                <Link
                  onClick={() => {
                    toggleNav();
                    toggleFalse();
                  }}
                  to="contact"
                  className="p-3"
                >
                  Contact
                </Link>
              </li>

              <li className="p-2 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:text-primary">
                <Link
                  onClick={() => {
                    toggleNav();
                    toggleFalse();
                  }}
                  to="/terms-and-conditions"
                  className="p-3"
                >
                  Our Terms
                </Link>
              </li>
              <li className="p-2 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:text-primary">
                <Link
                  onClick={() => {
                    toggleNav();
                    toggleFalse();
                  }}
                  to="/privacy-policy"
                  className="p-3"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="p-2 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:text-primary">
                <Link
                  onClick={() => {
                    toggleNav();
                    toggleFalse();
                  }}
                  to="/default-cancellation-policy"
                  className="p-3"
                >
                  Cancellations
                </Link>
              </li>
              <button
                onClick={() => {
                  toggle();
                  falseNav();
                }}
              >
                <li className="w-full rounded-full border-none bg-primary p-3 px-10 text-center font-medium text-white">
                  Earn More
                </li>
              </button>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
