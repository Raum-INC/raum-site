import React from "react";
import { experienceData } from "../data";
import { AboutUs } from "../../assets";

const Experience = () => {
  return (
    <main className="w-full h-[850px] md:h-auto bg-[#f8f8f8] text-[#121212] flex flex-col justify-end items-center relative">
      <div className="p-8 md:p-28">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-16">
          <div className="w-full flex justify-start items-center">
            <img
              src={AboutUs.apartmentbuild}
              alt="apartment-building"
              className="md:w-full w-11/12 mx-auto rounded-3xl absolute md:static top-[-250px] left-0 right-0"
            />
          </div>
          <div className="w-full md:p-8 py-8  flex flex-col gap-5">
            {experienceData.map((data) => (
              <div
                key={data.id}
                className="flex flex-col justify-center items-start gap-5 py-3 border-b-2 border-[#cbcbcb]"
              >
                <h1 className="text-3xl md:text-4xl font-bold text-[#121212]">
                  {data.title}
                </h1>
                <p className="text-lg text-[#6c6c6c]">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Experience;
