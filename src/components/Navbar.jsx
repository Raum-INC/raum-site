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
    if (location.pathname === "/" || location.pathname === "/host") {
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

  return (
    <motion.header
      variants={navbarVariant}
      initial="hidden"
      animate="visible"
      className="absolute top-0 left-0 right-0"
    >
      <nav className="w-full bg-transparent p-4 px-8 md:p-4 md:px-12 flex justify-between items-center relative z-40">
        <div className="hidden md:block invisible w-1/3"></div>
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
              className="w-[70px] md:w-[150px] md:mx-auto"
            />
          </Link>
        </button>
        <motion.div
          animate={{ type: "spring", stiffness: 500 }}
          className="py-4 pl-4 w-1/3 flex justify-end items-center"
        >
          <div
            onClick={() => {
              toggleNav();
              toggleFalse();
            }}
            className="w-[30px] h-[30px] flex justify-end items-end"
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
                      location.pathname === "/" || location.pathname === "/host"
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
                  ? "bg-black w-11/12 font-normal  mx-auto rounded-3xl p-8 flex flex-col lg:flex-row justify-center items-center gap-3 absolute top-[80px] left-0 right-0"
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

              <li className="p-2 hover:text-primary hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out">
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
              <li className="p-2 hover:text-primary hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out">
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
              <li className="p-2 hover:text-primary hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out">
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

              <li className="p-2 hover:text-primary hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out">
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
              <li className="p-2 hover:text-primary hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out">
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
              <li className="p-2 hover:text-primary hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out">
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
                <li className="p-3 px-10 bg-primary border-none text-white font-medium rounded-full w-full text-center">
                  Join Us
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
