import React from "react";
import { Assets } from "../assets";
import "../index.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = ({ nav, setNav }) => {
  const handleNav = () => {
    setNav(!nav);
  };

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
      <nav className="w-full p-4 px-8 md:p-8 md:px-12 flex justify-between items-center relative z-40">
        <button className="py-4">
          <Link to="/" onClick={() => setNav(false)}>
            <img src={Assets.raumLogo} alt="Logo" className="w-full" />
          </Link>
        </button>
        <div className="relative">
          <div className="hidden md:flex">
            <ul className="w-full flex justify-center items-center gap-5">
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 75 }}
                className=""
              >
                <Link onClick={handleNav} to="#" className="p-3">
                  Features
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 75 }}
                className=""
              >
                <Link onClick={handleNav} className="p-3">
                  Enterprise
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 75 }}
                className=" whitespace-nowrap"
              >
                <Link onClick={handleNav} to="/about" className="p-3">
                  About Us
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 75 }}
                className=""
              >
                <Link onClick={handleNav} to="contact" className="p-3">
                  Contact
                </Link>
              </motion.li>

              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 75 }}
                className="p-3 px-10 bg-white text-black font-medium rounded-full w-full text-center"
              >
                <Link onClick={handleNav} to="joinus" className="">
                  Join Us
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>
        <motion.div
          animate={{ type: "spring", stiffness: 500 }}
          onClick={handleNav}
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
                  ? "bg-black border-[1px] border-primary w-11/12 font-normal mx-auto rounded-3xl p-8 flex flex-col justify-center items-center gap-3 absolute top-[70px] left-0 right-0 md:hidden"
                  : "hidden"
              }
            >
              <li className="p-2">
                <Link onClick={handleNav} to="#" className="p-3">
                  Features
                </Link>
              </li>
              <li className="p-2">
                <Link onClick={handleNav} to="#" className="p-3">
                  Enterprise
                </Link>
              </li>
              <li className="p-2">
                <Link onClick={handleNav} to="/about" className="p-3">
                  About Us
                </Link>
              </li>
              <li className="p-2">
                <Link onClick={handleNav} to="contact" className="p-3">
                  Contact
                </Link>
              </li>

              <li className="p-2 bg-primary border-none text-white font-medium rounded-full w-full text-center">
                <Link onClick={handleNav} to="#" className="">
                  Join Us
                </Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
