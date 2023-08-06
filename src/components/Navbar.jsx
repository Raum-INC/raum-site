import React from "react";
import { Assets } from "../assets";
import "../index.css";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = ({ nav, setNav }) => {
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header>
      <nav className="w-full p-4 px-8 md:p-8 md:px-12 flex justify-between items-center relative z-40">
        <Link to="/" onClick={() => setNav(false)}>
          <img src={Assets.raumLogo} alt="Logo" className="w-14 md:w-auto" />
        </Link>
        <div className="relative">
          <div className="hidden md:flex">
            <ul className="w-full flex justify-center items-center gap-5">
              <li className="">
                <Link onClick={handleNav} to="#" className="p-3">
                  Features
                </Link>
              </li>
              <li className="">
                <Link onClick={handleNav} className="p-3">
                  Enterprise
                </Link>
              </li>
              <li className=" whitespace-nowrap">
                <Link onClick={handleNav} to="/about" className="p-3">
                  About Us
                </Link>
              </li>
              <li className="">
                <Link onClick={handleNav} to="contact" className="p-3">
                  Contact
                </Link>
              </li>

              <li className="p-3 px-10 bg-white text-black font-medium rounded-full w-full text-center">
                <Link onClick={handleNav} to="joinus" className="">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div onClick={handleNav} className="p-2 block md:hidden">
          <HiMenu size={20} />
        </div>
        <ul
          className={
            nav
              ? "bg-primary w-4/5 mx-auto rounded-3xl p-4 flex flex-col justify-center items-center gap-3 absolute top-[70px] left-0 right-0 md:hidden"
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

          <li className="p-2 bg-white text-black font-medium rounded-full w-full text-center">
            <Link onClick={handleNav} to="#" className="">
              Join Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
