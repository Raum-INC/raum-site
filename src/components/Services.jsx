import React from "react";
import { services } from "./data";

const Services = () => {
  return (
    <main className="w-full p-8 py-12 md:px-12 flex flex-col gap-10">
      {services.map((service, index) => (
        <div
          className="w-full p-4 md:p-8 border-2 border-primary rounded-3xl flex flex-col-reverse md:flex-row gap-5"
          key={index}
        >
          <div className="md:w-1/2 flex flex-col justify-between gap-20">
            <p className="text-base md:text-xl text-[#E4E4E4]">
              {service.description}
            </p>
            <h2 className="text-xl md:text-5xl md:leading-[58px]">
              {service.title}
            </h2>
          </div>
          <div className="md:w-1/2 ">
            <img
              src={service.image}
              alt={service.alt}
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto p-4"
            />
          </div>
        </div>
      ))}
    </main>
  );
};

export default Services;
