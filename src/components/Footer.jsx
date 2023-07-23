import React from "react";
import Assets from "../assets";

const Footer = () => {
  return (
    <>
      <div className="w-full mx-auto flex flex-col lg:flex-row justify-between gap-y-6 p-8 my-12">
        <div>
          <img src={Assets.raumLogo} alt="raum-logo" />
        </div>
<div className="flex flex-col lg:flex-row gap-6 lg:gap-20">
            <div className="flex gap-3">
              <img src={Assets.email} alt="" />
              <div>
                <p className="text-base font-bold leading-5">Email</p>
                <a
                  href="mailto:Info@raumgroup.io"
                  className="text-sm font-medium text-[#6c6c6c]"
                >
                  Info@raumgroup.io
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <img src={Assets.phone} alt="" />
              <div>
                <p className="text-base font-bold leading-5">Phone</p>
                <a
                  href="tel:+234 814 822 8901"
                  className="text-sm font-medium text-[#6c6c6c]"
                >
                  +234 814 822 8901
                </a>
              </div>
            </div>
          </div>
        <div className="flex flex-col lg:flex-row gap-6 ">
          
          <div className="text-white flex gap-3 md:gap-8">
            <a href="#">
              <img src={Assets.twitter} alt="" />
            </a>
            <a href="#">
              <img src={Assets.instagram} alt="" />
            </a>
            <a href="#">
              <img src={Assets.linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full border-t-[1px] border-t-[#0000ff33] p-8">
        <p className="text-[#585858] text-center text-base md:text-xl font-normal leading-6">
          Copyright © 2023 Raum. All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
