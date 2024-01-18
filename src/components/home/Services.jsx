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
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full h-auto p-10"
    >
      <section className="w-full max-w-6xl my-10 mx-auto flex flex-col lg:flex-row justify-center items-center gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full flex lg:flex-col lg:gap-5 justify-center items-start lg:items-center text-center"
          >
            <div className="w-1/5 p-2">
              <img
                src={service.image}
                alt={service.alt}
                className="w-6 md:w-12 h-w-6 md:h-12"
              />
            </div>
            <div className="w-4/5 flex flex-col justify-center items-start md:items-center">
              <h2 className="text-sm md:text-2xl p-2">{service.title}</h2>
              <p className="font-normal text-left lg:text-center text-[9.26px] md:text-base p-2">
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
