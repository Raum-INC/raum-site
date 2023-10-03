import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { IoMdClose } from "react-icons/io";
import useBearStore from "../store/store";
import useFormStore from "../store/formStore";
import axios from "axios";

const Modal = () => {
  const { isOpen, toggle } = useBearStore();

  const url = "https://api.raumhq.co/waitlist";

  const {
    fullName,
    email,
    category,
    location,
    whatsappNumber,
    setField,
    resetForm,
  } = useFormStore();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { fullName, email, category, location, whatsappNumber };
    try {
      const response = await axios.post(url, formData);
      console.log("Dude It Worked!", response.data);
      resetForm();
    } catch (error) {
      console.error("error submitting form", error);
    }
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
                {/* form */}
                <form onSubmit={handleSubmit}>
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
                      {/* Inputs */}
                      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10">
                        <input
                          type="text"
                          name="fullName"
                          value={fullName}
                          onChange={handleInput}
                          className="w-full bg-transparent border-b-2 border-[#777777] p-2 md:p-4 outline-none text-xl placeholder:text-[#777777] text-white"
                          placeholder="Full Name"
                        />
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={handleInput}
                          className="w-full bg-transparent border-b-2 border-[#777777] p-2 md:p-4 outline-none text-xl placeholder:text-[#777777] text-white"
                          placeholder="Email"
                        />
                      </div>
                      <div className="w-full flex flex-col justify-center items-center md:flex-row gap-3 md:gap-10">
                        <select
                          name="category"
                          value={category}
                          onChange={handleInput}
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
                          name="location"
                          value={location}
                          onChange={handleInput}
                          className="w-full bg-transparent border-b-2 border-[#777777]  p-2 md:p-4 outline-none text-xl placeholder:text-[#777777] text-white"
                          placeholder="Location"
                        />
                        <input
                          type="tel"
                          name="whatsappNumber"
                          value={whatsappNumber}
                          onChange={handleInput}
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
