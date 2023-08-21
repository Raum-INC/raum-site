import React from "react";
import { AboutUs } from "../../assets";
import { BsChevronLeft, BsChevronRight, BsTelephone } from "react-icons/bs";
import { CiMail, CiLocationOn } from "react-icons/ci";
import "../../index.css";
import { motion } from "framer-motion";

const Visit = () => {
  const containerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.main
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-transparent md:bg-white lg:bg-[#F9F9F9] text-black w-full lg:max-w-10/12 mx-auto h-auto lg:h-screen py-14 lg:py-36 lg:px-12 flex flex-col justify-center items-center gap-12"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
        <div className="lg:w-1/2 w-10/12 flex flex-col gap-3 justify-start items-start">
          <h1 className="font-bold text-2xl lg:text-4xl text-white md:text-black">
            Come and visit our
            <br /> amazing office
          </h1>
          <p className="font-medium text-[#6c6c6c] text-base lg:text-lg">
            It will be an amazing experice to have you
            <br /> visit our office.
          </p>
        </div>
        <div className="w-10/12 flex flex-col lg:flex-row gap-5 lg:gap-0 items-center lg:w-[756px] md:bg-white drop_shadow rounded-3xl text-white">
          <div className="w-full">
            <img
              src={AboutUs.modernapartment}
              alt="visit-apartment"
              className="w-full object-cover rounded-t-3xl lg:rounded-l-3xl"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start gap-2 lg:p-6 text-secondary font-normal text-base lg:text-lg">
            <h1 className="font-bold text-lg lg:text-3xl md:text-black">
              Lagos, Nigeria.
            </h1>
            <p className="text-[#6C6C6C]">
              Want to meet us physically? or do you want to have a chat with us?
              Then visit us.
            </p>
            <p className="flex items-start p-1 text-[#6C6C6C]">
              <CiLocationOn className="w-6 aspect-square mt-1 mr-2 text-white md:text-black" />
              42 Saka Tinubu st, Victoria Island, 101241
            </p>
            <p className="flex items-center p-1 text-[#6C6C6C]">
              <CiMail className="w-5 aspect-square mr-2 text-white md:text-black" />
              Info@raumgroup.io
            </p>
            <p className="flex items-center p-1 text-[#6C6C6C]">
              <BsTelephone className="w-5 aspect-square mr-2 text-white md:text-black" />
              +234 814 822 8901
            </p>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Visit;
