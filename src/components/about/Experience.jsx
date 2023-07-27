import React from "react";
import { AboutUs } from "../../assets";

const Experience = () => {
  return (
    <main className='w-full h-auto bg-[#f8f8f8] text-[#121212] flex flex-col justify-center items-center"'>
      <div className="p-8 md:p-28">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-16">
          <div className="w-fit flex justify-start items-center">
            <img
              src={AboutUs.apartmentbuild}
              alt="apartment-building"
              className="w-full rounded-3xl"
            />
          </div>
          <div className="p-8 w-full flex-col gap-5">
            <div className="py-5 flex flex-col justify-center items-start gap-5 border-b-[1px] border-b-[#CBCBCB]">
              <h3 className="text-left text-[#121212] text-2xl md:text-[40px] md:leading-[52px] font-bold">
                10+ years of experience
                <br className="hidden md:block" /> in the industry
              </h3>
              <p className="text-left text-[#6C6C6C] text-base md:text-lg font-medium">
                Ut enim ad minim veniam quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eufugiat
                nulla pariatur.
              </p>
            </div>
            <div className="flex my-5 gap-5 md:gap-10">
              <img
                src={AboutUs.signature}
                alt="signature"
                className="w-[50px] md:w-[150px]"
              />
              <div className="flex justify-center items-center gap-5">
                <img
                  src={AboutUs.avatar}
                  alt="avatar"
                  className="w-[50px] md:w-[70px]"
                />
                <h4 className="flex flex-col text-base md:text-lg text-[#121212] font-bold">
                  John Carter
                  <span className="font-medium text-[#6c6c6c]">
                    CEO at Coworking X
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Experience;
