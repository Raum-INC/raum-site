import React from "react";
import { AboutUs } from "../../assets";

const Hero = () => {
  return (
    <main className="w-full h-auto p-8 py-14 md:py-28 md:px-12  overflow-hidden relative">
      <div className="md:w-11/12 mx-auto flex flex-col-reverse md:flex-col justify-center items-start gap-8 md:gap-16">
        <div className="md:w-3/5 flex flex-col gap-5">
          <h1 className="font-bold text-3xl md:text-6xl ">About us</h1>
          <p className="md:pr-5 text-left font-medium text-base md:text-lg leading-normal md:leading-8">
            The idea behind our project is to create a company called Raum that
            is dedicated to sustainable living and revolutionizing the real
            estate industry. We focus on leveraging advanced technologies like
            artificial intelligence (AI), machine learning, and advanced tech to
            provide a range of innovative solutions.
          </p>
        </div>
        <div className="w-full flex justify-center md:justify-normal gap-2">
          <img
            src={AboutUs.meetingroom}
            alt=""
            className="w-1/2 h-fit md:w-3/5 rounded-xl"
          />
          <img
            src={AboutUs.meetingroom2}
            alt=""
            className="w-1/2 md:w-[600px] h-fit rounded-xl md:absolute inset-y-0 top-[220px] right-[-100px]"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
