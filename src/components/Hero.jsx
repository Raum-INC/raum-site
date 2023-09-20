import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Assets } from "../assets";
import { IoMdClose } from "react-icons/io";

const Hero = () => {
  const [modal, setModal] = useState(true | false);

  const handleTrue = () => {
    setModal(true);
  };
  const handleFalse = () => {
    setModal(false);
  };

  const modalVariant = {
    hidden: {
      opacity: 0,
      translateY: "100vh",
      transition: {
        duration: 1,
      },
    },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const componentVariant = {
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 30,
        duration: 2,
      },
    },
    hidden: {
      opacity: 0,
      translateY: -50,
    },
  };

  const heroVariant = {
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        delay: 1,
        type: "spring",
        stiffness: 30,
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
      translateY: 50,
    },
  };
  return (
    <motion.main
      variants={componentVariant}
      initial="hidden"
      animate="visible"
      className="w-full h-auto pt-8 flex justify-center items-center relative bgGrade2"
    >
      {/* modal */}
      <AnimatePresence>
        {modal === true && (
          <>
            <div className="w-full h-screen fixed top-20 overflow-hidden z-30">
              <motion.div
                variants={modalVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="w-full h-[90%] fixed flex flex-col bg-black border-2 border-primary p-4 md:p-8 md:px-12 rounded-3xl z-40"
              >
                <div className="relative">
                  <button
                    className="p-2 absolute right-0 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-500"
                    onClick={handleFalse}
                  >
                    <IoMdClose className="text-xl md:text-4xl" />
                  </button>
                  <form action="/">
                    <div className="flex flex-col justify-center items-center pt-2 md:pt-8 gap-5">
                      <h2 className="mt-10 font-semibold text-primary text-xl lg:text-6xl md:leading-[108px] text-center p-2">
                        Join us in creating sustainable spaces
                        <br className="hidden md:block" /> for life, not just
                        living.
                      </h2>
                      <p className="font-[400] text-sm text-center md:text-xl">
                        Subscribe to our newsletter and be part of the dawn of a
                        new era.
                      </p>
                      <div className="flex flex-col gap-2 md:gap-5 mt-5">
                        <input
                          type="text"
                          className="bg-[#121212] p-2 md:p-4 outline-none pl-5 text-xl text-[#666] rounded-md"
                          placeholder="Full Name"
                        />
                        <input
                          type="text"
                          className="bg-[#121212] p-2 md:p-4 outline-none pl-5 text-xl text-[#666] rounded-md"
                          placeholder="Full Name"
                        />
                        <input
                          type="text"
                          className="bg-[#121212] p-2 md:p-4 outline-none pl-5 text-xl text-[#666] rounded-md"
                          placeholder="Full Name"
                        />
                        <input
                          type="text"
                          className="bg-[#121212] p-2 md:p-4 outline-none pl-5 text-xl text-[#666] rounded-md"
                          placeholder="Full Name"
                        />
                        <input
                          type="submit"
                          value="Join Us Today!"
                          onClick={handleFalse}
                          className="bg-primary mt-4 p-2 md:p-4 rounded-md"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <div className="w-full h-auto flex flex-col justify-center items-center gap-8">
        <div className="px-8 flex flex-col justify-center items-center gap-8">
          <h1 className="text-4xl md:text-8xl text-center font-extrabold leading-8">
            Discover <span className="text-primary">Your</span> Dream
            <br /> Apartment with <span className="text-primary">Raum</span>
          </h1>
          <p className="md:w-[850px] text-center leading-5 text-fade text-sm md:text-2xl">
            Finding the perfect apartment has never been easier. At Raum, we are
            your dedicated partners in the world of real estate. Whether you're
            searching for your next home or looking to list your apartment for
            business purposes, we're here to make your journey seamless and
            stress-free
          </p>
          <button
            className="p-3 px-8 md:px-16 bg-primary rounded-3xl capitalize"
            onClick={handleTrue}
          >
            Join the Waitlist
          </button>
        </div>
        <div>
          <img
            src={Assets.hero_bg1}
            alt="/"
            className="absolute md:block hidden top-[200px] left-0 -z-10
          "
          />
          <img
            src={Assets.hero_bg2}
            alt="/"
            className="absolute md:block hidden right-0 bottom-72 -z-10"
          />
        </div>
        <motion.div
          variants={heroVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full md:h-[700px] flex flex-col justify-end items-center relative"
        >
          <img
            src={Assets.hero_bg3}
            alt="hero-bkg"
            className="md:w-[1000px] mx-auto aspect-auto pt-10 px-8 md:absolute bottom-4 -z-[10]"
          />
          <div className="w-full h-auto bg-black border border-primary p-6 flex flex-col justify-center items-center gap-8">
            <h1 className="text-3xl font-semibold">Who are you?</h1>
            <div className="flex flex-col gap-5 md:flex-row">
              <button className="p-3 px-5 rounded-full border border-primary hover:bg-primary hover:tex-white transition-all duration-500">
                Property Owner
              </button>
              <button className="p-3 px-5 rounded-full border capitalize border-primary hover:bg-primary hover:tex-white transition-all duration-500">
                Just looking for property
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Hero;
