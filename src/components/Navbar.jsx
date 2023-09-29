import React from "react";
import { Assets } from "../assets";
import "../index.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import useBearStore from "../store/store";

const Navbar = () => {
  const { toggle, toggleFalse, nav, toggleNav, falseNav } = useBearStore();

  const navbarVariant = {
    hidden: {
      opacity: 0,
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
    <motion.header variants={navbarVariant} initial="hidden" animate="visible">
      <nav className="w-full p-4 px-8 md:p-4 md:px-12 flex justify-between items-center relative z-40">
        <button className="py-4">
          <Link
            to="/"
            onClick={() => {
              falseNav();
              toggleFalse();
            }}
          >
            <img src={Assets.raumLogo} alt="Logo" className="w-full" />
          </Link>
        </button>
        <div className="relative">
          <div className="hidden md:flex">
            <ul className="w-full flex justify-center items-center gap-5">
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 75 }}
                className=" whitespace-nowrap"
              >
                <Link
                  onClick={() => {
                    toggleNav();
                    toggleFalse();
                  }}
                  to="/appguide"
                  className="p-3"
                >
                  App Guide
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 75 }}
                className=" whitespace-nowrap"
              >
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
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 75 }}
                className=""
              >
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
              </motion.li>

              <button
                onClick={() => {
                  toggle();
                  falseNav();
                }}
                className=""
              >
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 75 }}
                  className="p-3 px-10 bg-primary text-white font-medium rounded-full w-full text-center"
                >
                  Join Us
                </motion.li>
              </button>
            </ul>
          </div>
        </div>
        <motion.div
          animate={{ type: "spring", stiffness: 500 }}
          onClick={() => {
            toggleNav();
            toggleFalse();
          }}
          className="block py-4 pl-4 md:hidden"
        >
          {nav === false && (
            <AnimatePresence>
              <motion.button
                variants={navtoggleVariant}
                initial="initial"
                animate="animate"
                exit="initial"
              >
                <HiOutlineMenuAlt3 className="text-white" size={25} />
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
                <MdClose className="text-white" size={25} />
              </motion.button>
            </AnimatePresence>
          )}
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
                  ? "bg-black border-[1px] border-primary w-11/12 font-normal mx-auto rounded-3xl p-8 flex flex-col justify-center items-center gap-3 absolute top-[80px] left-0 right-0 md:hidden"
                  : "hidden"
              }
            >
              <Link
                onClick={() => {
                  toggleNav();
                  toggleFalse();
                }}
                to="/appguide"
                className="p-3"
              >
                App Guide
              </Link>
              <li className="p-2">
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
              <li className="p-2">
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
