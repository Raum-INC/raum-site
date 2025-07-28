import React from "react";
import { Assets } from "../assets";
import "../index.css";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import useBearStore from "../store/store";

const NAV_LINKS = [
  { to: "/admin-dashboard", label: "Our Listings" },
  { to: "/guest", label: "Guest" },
  { to: "/host", label: "Host" },
  { to: "/invest", label: "Invest" },
  { to: "/about", label: "About us" },
  { to: "/contact", label: "Contact" },
  { to: "/blog", label: "Blog" },
  // { to: "/terms-and-conditions", label: "Our Terms" },
  // { to: "/privacy-policy", label: "Privacy Policy" },
  // { to: "/default-cancellation-policy", label: "Cancellations" },
];

const Navbar = () => {
  const { toggle, toggleFalse, nav, toggleNav, falseNav } = useBearStore();
  const location = useLocation();

  const getLogo = () =>
    ["/host", "/invest", "/guest"].includes(location.pathname)
      ? Assets.raumLogo2
      : Assets.raumLogo;

  const navbarVariant = {
    hidden: { opacity: 1, translateY: -50 },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: { type: "spring", stiffness: 30, duration: 1 },
    },
  };

  const navtoggleVariant = {
    initial: { opacity: 0, transition: { duration: 0.3 } },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  const handleNavLinkClick = () => {
    toggleNav();
    toggleFalse();
  };

  return (
    <motion.header
      variants={navbarVariant}
      initial="hidden"
      animate="visible"
      className="absolute left-0 right-0 top-0"
    >
      <nav className="relative z-40 flex w-full items-center justify-between bg-transparent p-4 px-8 md:p-4 md:px-12">
        <button className="w-auto">
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
          className="flex w-auto items-center justify-end gap-5 overflow-hidden py-4 pl-4 md:w-1/3 xl:hidden"
        >
          <div
            onClick={handleNavLinkClick}
            className="flex h-[30px] w-[30px] items-center justify-end"
          >
            <AnimatePresence>
              {!nav ? (
                <motion.button
                  variants={navtoggleVariant}
                  initial="initial"
                  animate="animate"
                  exit="initial"
                >
                  <AiOutlineMenu
                    className={
                      ["/host", "/invest", "/guest"].includes(location.pathname)
                        ? "text-black"
                        : "text-white"
                    }
                    size={25}
                  />
                </motion.button>
              ) : (
                <motion.button
                  variants={navtoggleVariant}
                  initial="initial"
                  animate="animate"
                  exit="initial"
                >
                  <MdClose
                    className={
                      ["/", "/host"].includes(location.pathname)
                        ? "text-black"
                        : "text-white"
                    }
                    size={25}
                  />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <AnimatePresence>
          {nav && (
            <motion.ul
              variants={navtoggleVariant}
              initial="initial"
              animate="animate"
              exit="initial"
              className="absolute left-0 right-0 top-[80px] mx-auto flex w-11/12 flex-col items-center justify-center gap-3 rounded-3xl bg-black p-8 font-normal lg:flex-row xl:hidden"
            >
              {NAV_LINKS.map(({ to, label }) => (
                <li
                  key={to}
                  className="p-2 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:text-primary"
                >
                  <Link onClick={handleNavLinkClick} to={to} className="p-3">
                    {label}
                  </Link>
                </li>
              ))}
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

        <motion.div className="hidden h-full w-full xl:block">
          <ul className="flex w-full items-center justify-end gap-5">
            <>
              {NAV_LINKS.map(({ to, label, index }) => (
                <Link to={to} key={index} onClick={handleNavLinkClick}>
                  <li
                    className={`p-2 px-4 text-base font-medium ${["/host", "/invest", "/guest"].includes(location.pathname) ? "text-black" : "text-white"} drop-shadow-2xl transition-all duration-500 ease-in-out hover:scale-110 hover:font-semibold`}
                  >
                    {label}
                  </li>
                </Link>
              ))}
              <button
                className="w-auto rounded-full border-none bg-primary p-3 px-10 text-center font-medium text-white"
                onClick={() => {
                  toggle();
                  falseNav();
                }}
              >
                Earn More
              </button>
            </>
          </ul>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
