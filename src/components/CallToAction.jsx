import React from "react";
import "../index.css";
import Assets from "../assets";

const CallToAction = () => {
  return (
    <main className="w-full h-screen p-8 py-12 md:px-12 flex flex-col justify-between gap-20">
      <div className="ctaGradient w-full h-full rounded-[50px] flex flex-col justify-center items-center gap-5 relative overflow-hidden">
        <div className="flex flex-col justify-center items-center gap-5 z-10">
          <h3>Let's take you on a journey into the future of housing</h3>
          <p>
            Raum offers eco-friendly homes designed to reduce environmental
            impact, promoting a greener future for you and the planet.
          </p>
          <a href="#">Join the Future</a>
        </div>
        <img
          className="absolute inset-x-0 bottom-[-150px] mx-auto text-[#4E4EFF]"
          src={Assets.services_build}
          alt=""
        />
      </div>
    </main>
  );
};

export default CallToAction;
