import React from "react";
import { AboutUs } from "../../assets";
import { BsChevronLeft, BsChevronRight, BsTelephone } from "react-icons/bs";
import { CiMail, CiLocationOn } from "react-icons/ci";
import "../../index.css";

const Visit = () => {
  return (
    <main className="bg-[#F9F9F9] text-black w-full md:max-w-10/12 mx-auto h-auto md:h-screen py-14 md:py-36 md:px-12  flex flex-col justify-center items-center gap-12">
      <div className="w-fit flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="md:w-1/2 flex flex-col gap-3 justify-center items-start">
          <h1 className="font-bold text-2xl md:text-4xl text-[#121212]">
            Come and visit our
            <br /> amazing office
          </h1>
          <p className="font-medium text-[#6c6c6c] text-base md:text-lg">
            It will be an amazing experice to have you
            <br /> visit our office.
          </p>
          <div className=" flex gap-4">
            <BsChevronLeft className="w-[60px] h-[60px] bg-[#121212] text-white rounded-full p-3" />
            <BsChevronRight className="w-[60px] h-[60px] bg-[#121212] text-white rounded-full p-3" />
          </div>
        </div>
        <div className="w-10/12 flex flex-col md:flex-row items-center md:w-[756px] bg-white drop_shadow rounded-3xl">
          <div className="w-full">
            <img
              src={AboutUs.modernapartment}
              alt=""
              className="w-full object-cover rounded-t-3xl md:rounded-l-3xl"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start gap-2 p-6 text-secondary font-normal text-base md:text-lg">
            <h1 className="font-bold text-lg md:text-3xl text-[#121212]">
              San Francisco
            </h1>
            <p className="">
              Want to meet us physically? or do you want to have a chat with us?
              Then visit us.
            </p>
            <p className="flex items-start p-1">
              <CiLocationOn className="w-8 h-8 mr-2" />
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default Visit;
