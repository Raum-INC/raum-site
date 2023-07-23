import React from "react";
import "../index.css";
import Assets from "../assets";

const CallToAction = () => {
  return (
    <main className="w-full h-screen p-8 md:px-12 flex flex-col justify-between gap-20">
      <div className="ctaGradient p-4 w-full h-full rounded-[50px] flex flex-col justify-center items-center gap-5 relative overflow-hidden">
        <div className="flex flex-col justify-center items-center gap-5 z-10 text-center mb-24 sm:mb-32">
          <h3 className="font-semibold text-2xl md:text-5xl">
            Let's take you on a journey into the future of housing
          </h3>
          <p className="">
            Raum offers eco-friendly homes designed to reduce environmental
            impact, promoting a greener future for you and the planet.
          </p>
          <a href="#" className="p-3 px-16 bg-white text-black rounded-3xl">
            Join the future
          </a>
        </div>
        <img
          className="w-[200px] md:w-[240px] absolute inset-x-0 bottom-[-135px] md:bottom-[-160px] mx-auto text-[#4E4EFF]"
          src={Assets.services_build}
          alt=""
        />
      </div>
    </main>
  );
};

export default CallToAction;
