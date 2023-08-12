import React from "react";
import { AboutUs } from "../../assets";
import { BsChevronLeft, BsChevronRight, BsTelephone } from "react-icons/bs";
import { CiMail, CiLocationOn } from "react-icons/ci";
import "../../index.css";

const Visit = () => {
  return (
    <main className="bg-white lg:bg-[#F9F9F9] text-black w-full lg:max-w-10/12 mx-auto h-auto lg:h-screen py-14 lg:py-36 lg:px-12 flex flex-col justify-center items-center gap-12">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
        <div className="lg:w-1/2 w-10/12 flex flex-col gap-3 justify-start items-start">
          <h1 className="font-bold text-2xl lg:text-4xl text-[#121212]">
            Come and visit our
            <br /> amazing office
          </h1>
          <p className="font-medium text-[#6c6c6c] text-base lg:text-lg">
            It will be an amazing experice to have you
            <br /> visit our office.
          </p>
          <div className="lg:flex gap-4 hidden">
            <BsChevronLeft className="w-[60px] h-[60px] bg-[#121212] text-white rounded-full p-3" />
            <BsChevronRight className="w-[60px] h-[60px] bg-[#121212] text-white rounded-full p-3" />
          </div>
        </div>
        <div className="w-10/12 flex flex-col lg:flex-row gap-5 lg:gap-0 items-center lg:w-[756px] bg-white drop_shadow rounded-3xl">
          <div className="w-full">
            <img
              src={AboutUs.modernapartment}
              alt=""
              className="w-full object-cover rounded-t-3xl lg:rounded-l-3xl"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start gap-2 lg:p-6 text-secondary font-normal text-base lg:text-lg">
            <h1 className="font-bold text-lg lg:text-3xl text-[#121212]">
              San Francisco
            </h1>
            <p className="">
              Want to meet us physically? or do you want to have a chat with us?
              Then visit us.
            </p>
            <p className="flex items-start p-1">
              <CiLocationOn className="w-6 h-6 mr-2" />
              42 Saka Tinubu st, Victoria Island, 101241
            </p>
            <p className="flex items-center p-1">
              <CiMail className="w-5 h-5 mr-2" />
              Info@raumgroup.io
            </p>
            <p className="flex items-center p-1">
              <BsTelephone className="w-5 h-5 mr-2" />
              +234 814 822 8901
            </p>
            <div className="lg:hidden gap-4 flex mt-5">
              <BsChevronLeft className="w-[60px] h-[60px] bg-[#121212] text-white rounded-full p-3" />
              <BsChevronRight className="w-[60px] h-[60px] bg-[#121212] text-white rounded-full p-3" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Visit;
