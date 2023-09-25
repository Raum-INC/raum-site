import React, { useRef } from "react";
import { features } from "./data";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import "../index.css";

const Features = () => {
  const ref = useRef(null);

  const featuresVariant = {
    visible: {
      translateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.4,
      },
    },
    hidden: {
      translateX: -50,
      opacity: 0,
    },
  };

  return (
    <main className="w-full p-8 py-12 md:px-12 flex flex-col-reverse justify-between gap-10 overflow-hidden">
      {features.map((feature, index) => (
        <motion.div
          viewport={{ once: true }}
          key={index}
          variants={featuresVariant}
          initial="hidden"
          whileInView="visible"
          ref={ref}
          className="w-full md:h-screen border-primary py-6 flex flex-col-reverse md:flex-row even:md:flex-row-reverse justify-between items-center gap-8 "
        >
          <motion.div
            viewport={{ once: true }}
            variants={featuresVariant}
            whileInView="visible"
            className="md:w-1/2 flex flex-col gap-5 md:gap-14"
          >
            <h3 className="font-bold text-3xl md:text-7xl leading-8 md:leading-[58px] whitespace-pre">
              {feature.title}
            </h3>
            <p className="font-normal text-sm md:text-lg leading-7 md:leading-8 text-left">
              {feature.description}
            </p>
            <a
              href={feature.link}
              className="w-[140px] md:w-[180px] font-semibold text-lg md:text-2xl text-primary flex items-center mt-10 py-1 border-b-2 border-b-primary"
            >
              Know more <BsArrowRight className="ml-4" size={20} />
            </a>
          </motion.div>
          <motion.img
            viewport={{ once: true }}
            variants={featuresVariant}
            whileInView="visible"
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
        </motion.div>
      ))}
    </main>
  );
};

export default Features;
