import React from "react";
import { MetricsData } from "../data";

const Metrics = () => {
  return (
    <main className="w-full h-auto md:h-screen p-8 py-14 md:py-28 md:px-12 flex flex-col justify-center items-center">
      <div className="w-fit grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-16 justify-center items-start">
        {MetricsData.map((metric, index) => (
          <div
            className="first:col-span-2 first:row-span-2 first:odd:mt-0 md:first:w-[435px] odd:mt-16 md:even:mt-10 even:mb-16 md:even:mb-0 py-5 flex flex-col gap-2 first:border-b-0 border-b-[1px] border-b-[#CBCBCB]"
            key={index}
          >
            <h3 className="text-justify text-faded text-2xl md:text-4xl font-bold">
              {metric.title}
            </h3>
            <h4 className="text-justify text-[#fafafa] text-base md:text-lg">
              {metric.subtitle}
            </h4>
            <p className="text-justify">{metric.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Metrics;
