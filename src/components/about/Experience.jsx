import React from "react";
import { experienceData } from "../data";
import { AboutUs } from "../../assets";
import { motion } from "framer-motion";

const Experience = () => {
  const containerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const experienceVariant = {
    hidden: {
      // opacity: 0.5,
      translateY: -50,
    },
    visible: {
      // opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.4,
      },
    },
  };
  return (
    <motion.main
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full h-[850px] lg:h-auto bg-[#f8f8f8] text-[#121212] flex flex-col justify-end items-center relative"
    >
      <div className="p-8 md:p-28">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-16">
          <div className="w-full flex justify-start items-center">
            <motion.img
              variants={experienceVariant}
              src={AboutUs.apartmentbuild}
              alt="apartment-building"
              className="md:w-full w-11/12 mx-auto rounded-3xl absolute md:static top-[-250px] left-0 right-0"
            />
          </div>
          <div className="w-full md:p-8 py-8  flex flex-col gap-5">
            {experienceData.map((data) => (
              <motion.div
                variants={experienceVariant}
                key={data.id}
                className="flex flex-col justify-center items-start gap-5 py-3 border-b-2 border-[#cbcbcb]"
              >
                <h1 className="text-3xl md:text-4xl font-bold text-[#121212]">
                  {data.title}
                </h1>
                <p className="text-lg text-[#6c6c6c]">{data.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Experience;
