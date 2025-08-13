import React from "react";
import { Assets } from "../assets";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Blog" },
  { to: "/host", label: "Become a host" },
  { to: "/admin-dashboard", label: "Check Listing" },
  { to: "/invest", label: "Own an apartment" },
  { to: "/guest", label: "Become a Guest" },
  { to: "/about", label: "About us" },
  { to: "/contact", label: "Contact" },
  { to: "/terms-and-conditions", label: "Our Terms" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/default-cancellation-policy", label: "Cancellations" },
];

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
      className={`${isAdminDashboard ? "bg-primary_text" : ""} py-10 pt-20`}
    >
      {/* <div
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
          <a href="mailto:hello@raum.africa">
            <img
              src={Assets.mail}
              alt="instagram-handle"
              className="w-6 h-6 md:w-[50px] md:h-[50px]"
            />
          </a>
          <a href="https://www.instagram.com/raumafrica/">
            <img
              src={Assets.instagram}
              alt="instagram-handle"
              className="w-6 h-6 md:w-[50px] md:h-[50px]"
            />
          </a>
          <a href="https://x.com/raumafrica">
            <img
              src={Assets.twitter}
              alt="twitter-handle"
              className="w-6 h-6 md:w-[50px] md:h-[50px]"
            />
          </a>
          <a href="https://www.linkedin.com/company/rauminc">
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
      </div> */}
      <nav className="flex h-auto w-full flex-col gap-10 p-4 px-8 xl:px-12">
        <div className="flex h-auto w-full flex-col items-end justify-between xl:flex-row">
          <div className="invisible h-auto w-[200px] p-2 px-10"></div>
          <div className="mx-auto grid h-auto w-full max-w-3xl grid-cols-3 items-start justify-center divide-x-2 divide-white/20">
            {/* First column */}
            <div className="my-5 flex w-full flex-col items-start justify-center gap-3 px-2 text-xs xl:my-0 xl:px-10 xl:text-base">
              <Link to="/" className="text-center text-white">
                Home
              </Link>
              <Link to="/about" className="text-center text-white">
                About us
              </Link>
              <Link to="/privacy-policy" className="text-center text-white">
                Privacy Policy
              </Link>
            </div>
            {/* Second column */}
            <div className="my-5 flex w-full flex-col items-start justify-center gap-3 px-2 text-xs xl:my-0 xl:px-10 xl:text-base">
              <Link to="/blog" className="text-center text-white">
                Blog
              </Link>
              <Link to="/admin-dashboard" className="text-center text-white">
                Check listing
              </Link>
              <Link
                to="/terms-and-conditions"
                className="text-center text-white"
              >
                Our Terms
              </Link>
            </div>
            {/* Third column */}
            <div className="my-5 flex w-full flex-col items-start justify-center gap-3 px-2 text-xs xl:my-0 xl:px-10 xl:text-base">
              <Link to="/host" className="text-center text-white">
                Become a host
              </Link>
              <Link to="/guest" className="text-center text-white">
                Become a guest
              </Link>
              <Link to="/invest" className="text-center text-white">
                Own an apartment
              </Link>
            </div>
          </div>
          <Link
            to="/contact"
            className="h-full w-[140px] rounded-full bg-primary p-2 text-center xl:w-[200px] xl:px-10"
          >
            Contact us
          </Link>
        </div>
        <div className="flex h-auto w-full items-center justify-between">
          <Link to="/">
            <img
              src={Assets.raumLogo}
              alt="raum-logo"
              className="w-[100px] md:w-[150px]"
            />
          </Link>
          <div className="invisible flex w-auto items-center gap-5">
            <img
              src={Assets.aws}
              alt="raum-logo"
              className="w-[30px] md:w-[60px]"
            />
            <div>
              <p className="text-sm font-medium xl:text-2xl">
                Startup | Find us{" "}
                <a
                  href="#"
                  className="text-primary underline underline-offset-4"
                >
                  here
                </a>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-5 flex w-full items-center justify-between gap-5 xl:my-10">
            <p className="w-full text-sm xl:w-[350px] xl:text-2xl">
              © {new Date().getFullYear()} Raum Africa.
            </p>
            <div className="h-[1px] w-full rounded-full bg-white"></div>
          </div>

          <div className="flex items-center justify-end gap-3 xl:gap-10">
            <a href="mailto:hello@raum.africa">
              <img
                src={Assets.mail}
                alt="instagram-handle"
                className="h-6 w-6 md:h-[50px] md:w-[50px]"
              />
            </a>
            <a href="https://www.instagram.com/raumafrica/">
              <img
                src={Assets.instagram}
                alt="instagram-handle"
                className="h-6 w-6 md:h-[50px] md:w-[50px]"
              />
            </a>
            <a href="https://x.com/raumafrica">
              <img
                src={Assets.twitter}
                alt="twitter-handle"
                className="h-6 w-6 md:h-[50px] md:w-[50px]"
              />
            </a>
            <a href="https://www.linkedin.com/company/rauminc">
              <img
                src={Assets.linkedin}
                alt="linkedIn-handle"
                className="h-6 w-6 md:h-[50px] md:w-[50px]"
              />
            </a>
          </div>
        </div>
      </nav>
    </motion.footer>
  );
};

export default Footer;
