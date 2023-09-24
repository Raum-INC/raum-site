import React from "react";
import { services } from "./data";
import { motion } from "framer-motion";
import { Assets } from "../assets";

const Services = () => {
  const textVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  const mobileVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  const svgVariant = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <main className="w-full mt-5 md:mt-10 p-8 py-12 md:px-12 flex flex-col gap-10 md:gap-16">
      {services.map((service, index) => (
        <>
          {/* desktop */}
          <div className="hidden md:block">
            <div
              className="w-full md:h-[90vh] p-4 md:p-12 border border-primary rounded-3xl flex flex-col-reverse md:flex-row gap-5"
              key={index}
            >
              <motion.div
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                className="md:w-1/2 flex flex-col justify-between gap-20"
              >
                <div className="flex flex-col gap-3">
                  <p className="mb-5 font-bold md:text-2xl text-xl text-[#E4E4E4]">
                    {service.subtitle}
                  </p>
                  {service.description.map((desc, index) => (
                    <ul className="list-image-checkmark list-outside pl-6 flex flex-col justify-start items-start">
                      <li className="font-normal text-2xl">{desc}</li>
                    </ul>
                  ))}
                </div>
                <h2 className="font-semibold text-xl md:text-5xl md:leading-[58px]">
                  {service.title}
                </h2>
              </motion.div>
              <div className="md:w-1/2 flex justify-end items-end">
                <motion.img
                  variants={svgVariant}
                  initial="hidden"
                  whileInView="visible"
                  src={service.image}
                  alt={service.alt}
                  className="w-[300px] aspect-square md:w-10/12 md:aspect-square"
                />
              </div>
            </div>
          </div>
          {/* mobile  */}
          <div className="block md:hidden">
            <motion.div
              viewport={{ once: true }}
              variants={mobileVariant}
              initial="hidden"
              whileInView="visible"
              className="w-full p-4 border border-primary rounded-3xl flex flex-col justify-between items-center gap-5"
            >
              <div className="w-full flex items-center justify-between gap-5">
                <div className="w-1/2">
                  <img
                    src={service.image}
                    alt=""
                    className="w-full aspect-square"
                  />
                </div>
                <h2 className="w-1/2 text-xl">{service.title}</h2>
              </div>
              {service.description.map((desc, index) => (
                <ul
                  key={index}
                  className="w-full flex flex-col justify-start items-start text-left"
                >
                  <li className="text-md flex justify-center items-start gap-5">
                    <img
                      src={Assets.checkmark}
                      alt="checkmark"
                      className="w-5 pt-1"
                    />
                    {desc}
                  </li>
                </ul>
              ))}
            </motion.div>
          </div>
        </>
      ))}
    </main>
  );
};

export default Services;
