import React from "react";
import { features } from "./data";
import { BsArrowRight } from "react-icons/bs";
import "../index.css";

const Features = () => {
  return (
    <main className="w-full p-8 py-12 md:px-12 flex flex-col justify-between gap-20">
      {features.map((feature, index) => (
        <div
          key={index}
          className="w-full border-primary rounded-3xl py-6 flex flex-col md:flex-row even:md:flex-row-reverse justify-between items-center gap-16"
        >
          <div className="md:w-1/2 flex flex-col gap-5 md:gap-10">
            <h3 className="font-bold text-2xl md:text-6xl leading-8 md:leading-[58px] whitespace-pre">
              {feature.title}
            </h3>
            <p className="font-normal text-base md:text-xl leading-8 text-left">
              {feature.description}
            </p>
            <a
              href={feature.link}
              className="w-[140px] text-primary flex items-center py-1 border-b-2 border-b-primary"
            >
              Know more <BsArrowRight className="ml-4" size={20} />
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src={feature.image}
              alt={feature.alt}
              className="w-auto md:w-4/5 mx-auto md:p-4"
            />
          </div>
        </div>
      ))}
    </main>
  );
};

export default Features;
