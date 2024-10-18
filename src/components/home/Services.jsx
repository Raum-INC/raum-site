import React from "react";
import { services } from "../data";
import { motion } from "framer-motion";

const Services = () => {
  const containerVariant = {
    hidden: {
      opacity: 0,
      translateY: -100,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.5,
        delay: 0.7,
      },
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
      className="w-full h-auto p-8"
    >
      <section className="w-full max-w-6xl my-10 mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-0 lg:divide-x-[0.8px] divide-primary">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full flex lg:flex-col gap-4 lg:gap-5 justify-start items-start lg:items-center text-center"
          >
            <div className="">
              <img
                itemProp="image"
                src={service.image}
                alt={service.alt}
                className="w-6 md:w-20 h-w-6 md:h-20"
              />
            </div>
            <div className="w-4/5 flex flex-col justify-center items-start lg:items-center gap-2">
              <h2 itemProp="title" className="text-lg md:text-2xl">
                {service.title}
              </h2>
              <p
                itemProp="description"
                className="font-normal text-left lg:text-center text-xs md:text-base"
              >
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </motion.main>
  );
};

export default Services;
