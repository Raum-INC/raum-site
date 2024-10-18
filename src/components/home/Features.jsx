import React from "react";
import { shortlets } from "../data";
import { motion } from "framer-motion";
import "../../index.css";

const Features = () => {
  const containerVariant = {
    hidden: {
      opacity: 0,
      translateY: -100,
    },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };
  const childrenVariant = {
    hidden: {
      opacity: 0,
      translateY: -100,
    },
    visible: {
      opacity: 1,
      translateY: 0,
    },
  };

  return (
    <motion.main
      itemScope
      itemType="https://raum.africa/"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full max-w-6xl mx-auto p-8 xl:p-0"
    >
      <section className="flex flex-col justify-center items-start md:items-center gap-10 lg:gap-14 my-10">
        <h3 itemProp="title" className="font-semibold text-2xl md:text-5xl">
          Our Shortlet Features
        </h3>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-12">
          {shortlets.map((shortlet, index) => (
            <motion.div
              variants={childrenVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 * index }}
              key={index}
              className="w-full h-[180px] lg:h-[200px] bg-transparent border border-primary rounded-[20px] flex flex-col md:flex-row justify-between items-start md:items-center mx-auto gap-3 p-4 md:p-8"
            >
              <div className="md:w-auto">
                <p
                  itemProp="shortletFeature"
                  className=" text-left font-semibold text-base md:text-base"
                >
                  {shortlet.title}
                </p>
              </div>
              <div className="w-full md:w-[120px] h-full flex justify-end items-end lg:justify-center lg:items-center">
                <img
                  itemProp="image"
                  className="w-[90px] md:w-full"
                  src={shortlet.image}
                  alt={shortlet.title}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.main>
  );
};

export default Features;
