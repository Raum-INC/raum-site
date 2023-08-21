import React from "react";
import { ValuesData } from "../data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Values = () => {
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

  const valuesVariant = {
    hidden: {
      opacity: 0,
      translateX: -50,
    },
    visible: {
      opacity: 1,
      translateX: 0,
      transition: {
        duration: 1,
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
      className="w-full md:max-w-10/12 mx-auto h-auto py-14 md:py-36 md:px-12  flex flex-col justify-center items-center gap-12 bg-white md:bg-transparent"
    >
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
      <motion.div
        variants={valuesVariant}
        initial="hidden"
        whileInView="visible"
        className="w-full mx-auto grid md:grid-cols-3 py-12 justify-center items-center md:gap-7"
      >
        {ValuesData.map((data, index) => {
          return (
            <motion.div
              variants={valuesVariant}
              whileInView="visible"
              viewport={{ once: true }}
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
            </motion.div>
          );
        })}
      </motion.div>
      <div>
        <Link
          to="#"
          className="text-center bg-[#121212] text-white p-4 px-8 rounded-full font-bold text-base md:text-lg"
        >
          Browse office spaces
        </Link>
      </div>
    </motion.main>
  );
};

export default Values;
