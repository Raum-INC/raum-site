import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { IoMdClose } from "react-icons/io";
import useBearStore from "../store/store";

const Modal = () => {
  const { isOpen, toggle } = useBearStore();

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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="w-full h-screen fixed top-20 overflow-hidden z-30">
            <motion.div
              variants={modalVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="w-full md:h-[85%] h-[90%] fixed flex flex-col bg-black border-2 border-primary p-4 md:p-8 md:px-12 rounded-t-3xl z-40 bottom-0"
            >
              <div className="relative">
                <button
                  className="p-2 absolute right-0 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-500"
                  onClick={toggle}
                >
                  <IoMdClose className="text-xl md:text-4xl" />
                </button>
                <form
                  action="https://gmail.us13.list-manage.com/subscribe/post?u=946cfc9cb47b3cdfcec580292&amp;id=e2b8a86ef0&amp;f_id=00228ae5f0"
                  method="post"
                  target="_blank"
                >
                  <div className="flex flex-col justify-center items-center gap-10 md:gap-10">
                    <h2 className="mt-10 md:mt-0 font-semibold text-primary text-xl md:text-[55px] md:leading-[70px] text-center p-2">
                      Join us in creating sustainable spaces
                      <br className="hidden md:block" /> for life, not just
                      living.
                    </h2>
                    <p className="font-[400] text-sm text-center md:text-xl">
                      Be the first to try out our product and services
                    </p>
                    <div className="w-full md:w-4/5 flex flex-col justify-center items-center gap-5 md:gap-10">
                      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10">
                        <input
                          type="text"
                          className="w-full bg-transparent border-b-2 border-[#777777] p-2 md:p-4 outline-none text-xl placeholder:text-[#777777] text-white"
                          placeholder="Full Name"
                        />
                        <input
                          type="email"
                          className="w-full bg-transparent border-b-2 border-[#777777] p-2 md:p-4 outline-none text-xl placeholder:text-[#777777] text-white"
                          placeholder="Email"
                        />
                      </div>
                      <div className="w-full flex flex-col justify-center items-center md:flex-row gap-3 md:gap-10">
                        <select
                          name="Category"
                          value="Category"
                          id=""
                          className="w-full bg-transparent border-b-2 border-[#777777] p-2 md:p-4 outline-none text-xl placeholder:text-[#777777] text-white"
                        >
                          <option className="bg-black p-4" value="Renter/User">
                            Renter/User
                          </option>
                          <option
                            className="bg-black p-4"
                            value="Shortlet Manager"
                          >
                            Shortlet Manager
                          </option>
                        </select>
                        <input
                          type="text"
                          className="w-full bg-transparent border-b-2 border-[#777777]  p-2 md:p-4 outline-none text-xl placeholder:text-[#777777] text-white"
                          placeholder="Location"
                        />
                        <input
                          type="tel"
                          className="w-full bg-transparent border-b-2 border-[#777777]  p-2 md:p-4 outline-none text-xl placeholder:text-[#777777] text-white"
                          placeholder="Whatsapp Number"
                        />
                      </div>
                      <input
                        type="submit"
                        value="Submit"
                        onClick={toggle}
                        className="w-full md:w-1/2 bg-primary mt-4 p-2 md:p-4 rounded-full"
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
  );
};

export default Modal;
