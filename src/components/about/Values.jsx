import React from "react";
import { ValuesData } from "../data";
import { Link } from "react-router-dom";

const Values = () => {
  return (
    <main className="w-full md:max-w-10/12 mx-auto h-auto py-14 md:py-36 md:px-12  flex flex-col justify-center items-center gap-12 bg-white md:bg-transparent">
      <div className="flex flex-col justify-center items-center gap-5 p-8">
        <h3 className="text-black text-center font-bold text-3xl md:text-[44px] md:leading-[52px]">
          The values that drive
          <br className="block md:hidden" /> our work
        </h3>
        <p className="p-3 text-center text-base md:text-lg font-medium text-[#6c6c6c]">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex
          <br className="hidden md:block" /> ea commodo consequat aute irure
          dolor amet
        </p>
      </div>
      <div className="w-full mx-auto grid md:grid-cols-3 py-12 justify-center items-center md:gap-7">
        {ValuesData.map((data, index) => {
          return (
            <div
              key={index}
              className="w-full aspect-square mx-auto p-8 flex flex-col justify-center items-start gap-5 bg-white text-black border border-[#cbcbcb] rounded-lg"
            >
              <img src={data.image} alt="icons" className="w-10" />
              <h4 className="font-bold text-[#121212] text-lg md:text-xl">
                {data.title}
              </h4>
              <p className="font-medium text-[#6c6c6c] text-base md:text-lg">
                {data.description}
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <Link
          to="#"
          className="text-center bg-[#121212] text-white p-4 px-8 rounded-full font-bold text-base md:text-lg"
        >
          Browse office spaces
        </Link>
      </div>
    </main>
  );
};

export default Values;
