import React from "react";
import { Assets } from "../../assets";
import { earn } from "../data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Earn = () => {
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

  const handleLearnMoreClick = () => {
    // Scroll to the top of the '/host' page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.main
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full h-auto p-10"
    >
      <section className="w-full h-full flex flex-col justify-center lg:items-center gap-10">
        <h2 className="font-semibold text-2xl md:text-5xl">
          Earn money with Raum
        </h2>
        <section className="w-full h-full max-w-6xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2 lg:h-full">
            <img
              src={Assets.earn}
              alt="fine-looking-man-raum"
              className="lg:block hidden lg:w-[645px] lg:h-[570px] object-cover object-center rounded-3xl"
            />
            <img
              src={Assets.earn_mobile}
              alt="fine-looking-raum-man"
              className="block lg:hidden w-full h-full rounded-3xl"
            />
          </div>
          <div className="md:w-[645px] md:h-[570px] flex flex-col justify-between items-start gap-5">
            <h3 className="hidden lg:block font-semibold text-2xl md:text-4xl">
              Host and earn income
            </h3>
            <ul className="flex flex-col justify-start items-start gap-5">
              {earn.map((data, index) => (
                <li key={index} className="flex gap-10">
                  <div className="w-5 h-5 aspect-square bg-primary mt-1"></div>
                  <div className="space-y-3">
                    <p className="font-semibold text-sm md:text-2xl">
                      {data.title}
                    </p>
                    <p className="text-[9.26px] md:text-lg">
                      {data.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Link to="/host" onClick={handleLearnMoreClick}>
              <button className="w-[110px] h-[34px] md:w-[205px] md:h-[50px] text-[9.26px] md:text-base font-bold border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 ease-in-out ">
                Learn More
              </button>
            </Link>
          </div>
        </section>
      </section>
    </motion.main>
  );
};

export default Earn;