import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "./data";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faqs = () => {
  const [icons, setIcons] = useState(true);

  const handleActive = (index) => {
    if (icons === index) {
      return setIcons(null);
    }
    setIcons(index);
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      translateY: -50,
    },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 1.2,
      },
    },
  };

  const faqsVariants = {
    hidden: {
      opacity: 0,
      translateX: -50,
    },
    visible: {
      opacity: 1,
      translateX: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="w-full h-auto p-8 py-12 md:px-12 flex flex-col gap-5"
    >
      <div className="flex flex-col justify-center items-center gap-2 mb-10">
        <h3 className="font-semibold text-xl md:text-4xl">
          Frequently Asked Questions
        </h3>
      </div>
      <AnimatePresence>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={faqsVariants}
            initial="visible"
            whileTap="hidden"
            exit="visible"
            onClick={() => handleActive(index)}
            className={
              icons === index
                ? "w-full md:w-3/5 mx-auto flex flex-row-reverse gap-4 md:gap-10 p-5 md:p-10 border-transparent bg-primary text-white rounded-3xl"
                : "w-full md:w-3/5 mx-auto flex flex-row-reverse gap-4 md:gap-10 p-5 md:p-10 border-2 border-white  text-white rounded-3xl"
            }
          >
            <motion.div className="w-10">
              {icons === index ? (
                <FaChevronUp
                  size={25}
                  className="w-full transition-all ease-in-out duration-300"
                />
              ) : (
                <FaChevronDown
                  size={25}
                  className="w-full transition-all ease-in-out duration-300"
                />
              )}
            </motion.div>
            <div className="w-full flex justify-start items-start flex-col gap-4">
              <h4 className="font-bold text-xs md:text-lg text-left">
                {faq.title}
              </h4>
              {icons === index ? (
                <div className="flex transition-all ease-in-out duration-300">
                  <p className="font-normal text-left text-[10px] md:text-base leading-[14px]">
                    {faq.description}
                  </p>
                </div>
              ) : null}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.main>
  );
};

export default Faqs;
