import React from "react";
import { Assets } from "../assets";
import "../index.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = ({ nav, setNav }) => {
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <nav className="w-full p-4 px-8 md:p-8 md:px-12 flex justify-between items-center relative z-40">
        <Link to="/" onClick={() => setNav(false)}>
          <img src={Assets.raumLogo} alt="Logo" className="w-16 md:w-auto" />
        </Link>
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
          className="block md:hidden"
        >
          {nav ? (
            <motion.div
              animate={{ opacity: [0, 1], type: "spring", stiffness: 500 }}
            >
              <MdClose className="text-white" size={25} />
            </motion.div>
          ) : (
            <motion.div
              animate={{ opacity: 1, type: "spring", stiffness: 500 }}
            >
              <HiOutlineMenuAlt3 className="text-white" size={25} />
            </motion.div>
          )}
        </motion.div>
        <ul
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
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
