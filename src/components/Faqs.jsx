import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "./data";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

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

  const location = useLocation();

  return (
    <motion.main
      itemScope
      itemType={
        location.pathname === "/host"
          ? "https://raum.africa/host"
          : "https://raum.africa"
      }
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex h-auto w-full flex-col gap-5 p-10"
    >
      <div className="my-10 flex flex-col items-center justify-center gap-2">
        <h3 itemProp="title" className="text-xl font-semibold md:text-4xl">
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
                ? "mx-auto flex w-full flex-row-reverse gap-4 rounded-3xl border-transparent bg-primary p-5 text-white md:w-4/5 md:gap-10 md:p-10"
                : "mx-auto flex w-full flex-row-reverse gap-4 rounded-3xl border-2 border-white p-5 text-white md:w-4/5 md:gap-10 md:p-10"
            }
          >
            <motion.div itemProp="icon" className="w-10">
              {icons === index ? (
                <FaChevronUp
                  size={25}
                  className="w-full transition-all duration-300 ease-in-out"
                />
              ) : (
                <FaChevronDown
                  size={25}
                  className="w-full transition-all duration-300 ease-in-out"
                />
              )}
            </motion.div>
            <div className="flex w-full flex-col items-start justify-start gap-4">
              <h4
                itemProp="title"
                className="text-left text-xs font-bold md:text-lg"
              >
                {faq.title}
              </h4>
              {icons === index ? (
                <div className="flex flex-col transition-all duration-300 ease-in-out">
                  <p
                    itemProp="description"
                    className="text-left text-[10px] font-normal leading-[14px] md:text-base"
                  >
                    {faq.description}
                  </p>
                  {faq.list && (
                    <ul className="list-inside list-disc py-2 text-left text-[10px] font-normal leading-[14px] md:text-base">
                      {faq.list.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {faq.link && (
                    <a
                      href={`tel:${faq.link}`}
                      className="my-2 w-fit rounded-full bg-white p-2 px-5 font-bold text-[#151419]"
                    >
                      Call Now
                    </a>
                  )}
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
