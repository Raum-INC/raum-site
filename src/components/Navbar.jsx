import React, { useState } from "react";
import Assets from "../assets";
import "../index.css";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header>
      <nav className="w-full p-8 md:px-12 flex justify-between items-center">
        <img src={Assets.raumLogo} alt="Logo" />
        <div className="relative">
          <div className="hidden md:flex">
            <ul className="w-full flex justify-center items-center gap-5">
              <li className="">
                <a className="p-3" href="#">
                  Features
                </a>
              </li>
              <li className="">
                <a className="p-3" href="#">
                  Enterprise
                </a>
              </li>
              <li className="">
                <a className="p-3" href="#">
                  Pricing
                </a>
              </li>
              <li className=" whitespace-nowrap">
                <a className="p-3" href="#">
                  About Us
                </a>
              </li>
              <li className="p-3 px-10 bg-white text-black font-medium rounded-full w-full text-center">
                <a className="" href="#">
                  Join Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div onClick={handleNav} className="p-2 block md:hidden">
          <HiMenu size={25} />
        </div>
        <ul
          className={
            nav
              ? "bg-primary w-4/5 mx-auto rounded-3xl p-4 flex flex-col justify-center items-center gap-3 absolute top-28 left-0 right-0 md:hidden"
              : "hidden"
          }
        >
          <li className="p-2">
            <a className="p-3" href="#">
              Features
            </a>
          </li>
          <li className="p-2">
            <a className="p-3" href="#">
              Enterprise
            </a>
          </li>
          <li className="p-2">
            <a className="p-3" href="#">
              Pricing
            </a>
          </li>
          <li className="p-2">
            <a className="p-3" href="#">
              About Us
            </a>
          </li>
          <li className="p-2 bg-white text-black font-medium rounded-full w-full text-center">
            <a className="" href="#">
              Join Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
