import React from "react";
import { Assets } from "../../assets";
import { aboutRaum } from "../data";
import { Motion } from "../Motion";

const AboutRaum = () => {
  return (
    <Motion>
      <main className="w-full h-auto">
        <section className="py-14 w-full flex flex-col justify-center items-center gap-12 p-8">
          <div className="space-y-5">
            <h3 className="font-semibold text-3xl md:text-4xl lg:text-center">
              About Raum
            </h3>
            <p className="text-left md:text-center w-full max-w-[800px] mx-auto">
              Raum is the premier global hospitality super-platform. We're
              crafting spaces for people, providing superior alternatives for
              every accommodation need — including vacation rentals, shared
              homes, unique stays, and experiences in various destinations.
            </p>
          </div>
          <div className="w-full p-4 md:p-0 max-w-6xl md:h-[540px]">
            <img
              src={Assets.map}
              alt="raum-world"
              className="w-full h-full mx-auto"
            />
          </div>
          <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-center lg:justify-between items-start gap-10">
            {aboutRaum.map(({ title, subtitle, image }, index) => (
              <div
                key={index}
                className="md:w-auto flex lg:flex-col justify-center items-start lg:items-center gap-5"
              >
                <img
                  src={image}
                  alt={`${title}-${subtitle}`}
                  className="w-12 md:w-16"
                />
                <p className="font-bold text-lg md:text-xl lg:text-center flex flex-col justify-center items-start">
                  {title} <span className="font-normal">{subtitle}</span>
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Motion>
  );
};

export default AboutRaum;
