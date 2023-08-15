import React from "react";
import { features } from "./data";
import { BsArrowRight } from "react-icons/bs";
import "../index.css";

const Features = () => {
  return (
    <main className="w-full p-8 py-12 md:px-12 flex flex-col-reverse justify-between gap-20">
      {features.map((feature, index) => (
        <div
          key={index}
          className="w-full border-primary py-6 flex flex-col-reverse md:flex-row even:md:flex-row-reverse justify-between items-center gap-8 "
        >
          <div className="md:w-1/2 flex flex-col gap-3 md:gap-7">
            <h3 className="font-bold text-3xl md:text-5xl leading-8 md:leading-[58px] whitespace-pre">
              {feature.title}
            </h3>
            <p className="font-normal text-sm md:text-lg leading-7 md:leading-8 text-left">
              {feature.description}
            </p>
            <a
              href={feature.link}
              className="w-[140px] text-primary flex items-center py-1 border-b-2 border-b-primary"
            >
              Know more <BsArrowRight className="ml-4" size={20} />
            </a>
          </div>
          <img
            key={feature.id}
            src={feature.image}
            alt={feature.alt}
            className={
              feature.id === "odd"
                ? "w-full md:w-[400px] rounded-3xl md:border-l-8 border-primary"
                : feature.id === "even"
                ? "w-full md:w-[400px] rounded-3xl md:border-r-8 border-primary"
                : ""
            }
          />
        </div>
      ))}
    </main>
  );
};

export default Features;
