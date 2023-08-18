import React, { useEffect, useRef } from "react";
import { features } from "./data";
import { BsArrowRight } from "react-icons/bs";
import { motion, useAnimation, useInView } from "framer-motion";
import "../index.css";

const Features = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const featuresVariant = {
    visible: {
      translateX: 0,
      opacity: 1,
    },
    hidden: {
      translateX: -50,
      opacity: 0,
    },
  };

  return (
    <main className="w-full p-8 py-12 md:px-12 flex flex-col-reverse justify-between gap-20 overflow-hidden">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={featuresVariant}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.75, delayChildren: 0.7 }}
          ref={ref}
          className="w-full md:h-screen border-primary py-6 flex flex-col-reverse md:flex-row even:md:flex-row-reverse justify-between items-center gap-8 "
        >
          <motion.div className="md:w-1/2 flex flex-col gap-3 md:gap-7">
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
          </motion.div>
          <motion.img
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
