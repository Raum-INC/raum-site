import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import useBearStore from "../store/store";
import useFormStore from "../store/formStore";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { Assets } from "../assets";

const Modal = () => {
  const { isOpen, toggle } = useBearStore();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { name, email, userType, location, phone, setField, resetForm } =
    useFormStore();

  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: undefined,
      }));
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
    setField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!userType) newErrors.userType = "User Type is required";
    if (!location) newErrors.location = "Location is required";
    if (!phone) newErrors.phone = "Phone Number is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    const formData = { name, email, userType, location, phone };
    try {
      const response = await axios.post(
        "https://api.raumhq.co/v1/newsletter",
        formData
      );

      if (response.data.error) {
        const errorCode = response.data.error.code;

        if (errorCode === 1) {
          setErrors({ email: "This email has already been used." });
          console.log("This email has already been used.");
        } else if (errorCode >= 500 && errorCode < 600) {
          // Handle 5xx errors (server errors) here
          console.error("Server error occurred:", response.data.error.message);
        } else {
          console.log("Dude It Worked!", response.data);
          resetForm();
          setErrors({});
          setIsSuccess(true);
        }
      }
    } catch (error) {
      console.error("error submitting form", error);
    } finally {
      setIsLoading(false);
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

  const handleCloseModal = () => {
    setIsSuccess(false);
    toggle(); // Close the modal
  };

  useEffect(() => {
    if (isSuccess) {
      const timeout = setTimeout(() => {
        handleCloseModal();
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [isSuccess]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* <div className="w-full h-screen fixed top-20 overflow-hidden z-50">
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
                {isSuccess ? (
                  <div className="w-full h-[500px] flex flex-col justify-center items-center text-cente p-8 gap-10">
                    <img
                      src={Assets.circletick}
                      alt="Success!"
                      className="w-2/3 md:w-[300px]"
                    />
                    <h2 className="text-lg md:text-5xl font-bold">
                      Submission successful.
                      <br className="block md:hidden" /> Thank you for you time!
                    </h2>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col justify-center items-center gap-5 md:gap-7">
                      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
                        <div className="w-full lg:w-1/2">
                          <h2 className="mt-10 md:mt-0 font-light text-white text-xl md:text-5xl text-center lg:text-left p-2">
                            Join us in creating sustainable spaces
                            <br className="hidden md:block" /> for life, not
                            just living.
                          </h2>
                          <p className="text-sm text-center lg:text-left md:text-xl">
                            Be the first to try out our product and services
                          </p>
                        </div>
                        <div className="w-1/2 hidden lg:flex justify-center  mr-24">
                          <img
                            src={Assets.real_estate_aqui}
                            alt="modal-asset"
                            className="w-1/2"
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-4/5 flex flex-col justify-center items-center gap-5 md:gap-7">
                        <div className="w-full flex flex-col md:flex-row justify-center items-start gap-3 md:gap-7">
                          <div className="flex flex-col w-full">
                            <input
                              type="text"
                              name="name"
                              value={name}
                              onChange={handleInput}
                              className={`w-full bg-transparent border-b-2 border-[#777777] p-2 md:p-4 outline-none text-xl placeholder:text-[#777777] text-white ${
                                errors.name ? "border-red-500" : ""
                              }`}
                              placeholder="Full Name"
                              aria-required
                            />
                            {errors.name && (
                              <span className="text-red-500 text-sm">
                                {errors.name}
                              </span>
                            )}
                          </div>
                          <div className="flex flex-col w-full">
                            <input
                              type="email"
                              name="email"
                              value={email}
                              onChange={handleInput}
                              className={`w-full bg-transparent border-b-2 border-[#777777] p-2 md:p-4 outline-none text-xl placeholder:text-[#777777] text-white ${
                                errors.email && "border-red-500"
                              }`}
                              placeholder="Email"
                              aria-required
                            />
                            {errors.email && (
                              <span className="text-red-500 text-sm">
                                {errors.email}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="w-full flex flex-col justify-center items-start md:flex-row gap-3 md:gap-7">
                          <div className="flex flex-col w-full">
                            <select
                              name="userType"
                              value={userType}
                              onChange={handleInput}
                              className={`w-full bg-transparent border-b-2 border-[#777777] p-2 md:p-4 outline-none text-xl placeholder:text-[#777777] text-white ${
                                errors.userType ? "border-red-500" : ""
                              }`}
                              aria-required
                            >
                              <option
                                className="bg-black p-4"
                                value="RENTER_OR_USER"
                              >
                                Renter/User
                              </option>
                              <option
                                className="bg-black p-4"
                                value="SHORTLET_MANAGER"
                              >
                                Shortlet Manager
                              </option>
                            </select>
                            {errors.userType && (
                              <span className="text-red-500 text-sm">
                                {errors.userType}
                              </span>
                            )}
                          </div>
                          <div className="flex flex-col w-full">
                            <input
                              type="text"
                              name="location"
                              value={location}
                              onChange={handleInput}
                              className={`w-full bg-transparent border-b-2 border-[#777777]  p-2 md:p-4 outline-none text-xl placeholder:text-[#777777] text-white ${
                                errors.location ? "border-red-500" : ""
                              }`}
                              placeholder="Location"
                              aria-required
                            />
                            {errors.location && (
                              <span className="text-red-500 text-sm">
                                {errors.location}
                              </span>
                            )}
                          </div>
                          <div className="flex flex-col w-full">
                            <input
                              type="tel"
                              name="phone"
                              value={phone}
                              onChange={handleInput}
                              className={`w-full bg-transparent border-b-2 border-[#777777]  p-2 md:p-4 outline-none text-xl placeholder:text-[#777777] text-white ${
                                errors.phone ? "border-red-500" : ""
                              }`}
                              placeholder="Whatsapp Number"
                              aria-required
                            />
                            {errors.phone && (
                              <span className="text-red-500 text-sm">
                                {errors.phone}
                              </span>
                            )}
                          </div>
                        </div>
                        <button
                          type="submit"
                          value="Submit"
                          className="w-full
                          md:w-1/2 bg-primary mt-2 p-2 md:p-4 rounded-full flex justify-center items-center gap-4 font-semibold text-lg"
                        >
                          {isLoading ? (
                            <ClipLoader
                              color="#fff"
                              loading={isLoading}
                              size={25}
                              aria-label="Loading Spinner"
                              data-testid="loader"
                            />
                          ) : (
                            "Submit"
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div> */}
          <motion.main
            variants={modalVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="bg-black w-full h-screen fixed top-20 overflow-hidden z-50"
          >
            <section className="p-5 w-full h-full max-w-5xl mx-auto flex flex-col justify-center items-center">
              <button
                className="p-2 absolute top-10 right-10 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-500"
                onClick={toggle}
              >
                <IoMdClose className="text-xl md:text-4xl" />
              </button>
              <p className="text-base font-light">
                <span className="font-bold text-primary">Earn</span> with Raum
                Africa
              </p>
              <p className="text-3xl md:text-7xl font-semibold">
                Become a <span className="font-bold text-primary">Rauman</span>
              </p>
              <p className="text-center py-5 leading-8 md:text-lg">
                Earn up to{" "}
                <span className="font-bold text-primary">40% commission</span>{" "}
                on every reservation you refer.
                <br className="hidden md:block" /> Turn your network into an{" "}
                <span className="font-bold text-primary">income generator</span>{" "}
                effortlessly.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="Become a Rauman"
                href="https://chat.whatsapp.com/Dpqjjtjc4Rf8qyQW1fQHZb"
                className="w-[140px] h-[40px] md:w-[205px] md:h-[50px] flex justify-center items-center text-base font-bold border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 ease-in-out "
              >
                Join us now
              </a>
            </section>
          </motion.main>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
