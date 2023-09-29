import React from "react";
import { hostGuideData, userGuideData } from "../data";
import useBearStore from "../../store/store";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const { userType, toggleUser, toggleHost } = useBearStore();

  const containerVariant = {
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

  const userHostVariant = {
    hidden: {
      opacity: 0,
      translateY: -150,
    },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 30,
        duration: 2,
      },
    },
  };

  return (
    <div className="w-full h-auto pt-8 flex justify-center items-center">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="w-10/12 flex flex-col border-2 border-primary rounded-md bg-black"
      >
        <div className="w-full flex">
          <button
            onClick={toggleUser}
            id="user"
            className={
              userType === "user"
                ? "w-full text-lg md:text-3xl font-medium bg-primary p-2 md:p-4 rounded-l-sm border-2 border-primary"
                : "w-full text-lg md:text-3xl font-medium border-2 border-primary p-2 md:p-4 rounded-l-sm"
            }
          >
            User App
          </button>
          <button
            onClick={toggleHost}
            id="host"
            className={
              userType === "host"
                ? "w-full text-lg md:text-3xl font-medium bg-primary p-2 md:p-4 rounded-r-sm border-2 border-primary"
                : "w-full text-lg md:text-3xl font-medium border-2 border-primary p-2 md:p-4 rounded-r-sm"
            }
          >
            Host App
          </button>
        </div>
        <div className="w-full h-auto flex flex-col justify-center gap-5 p-4 md:p-8">
          <AnimatePresence>
            {userGuideData.map((user, index) => (
              <div>
                {userType === "user" ? (
                  <motion.ul
                    variants={userHostVariant}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    key={index}
                    className="w-full flex flex-col p-5"
                  >
                    <li className="list-image-checkmark font-semibold text-lg md:text-4xl">
                      {user.title}
                    </li>
                    <li className="font-medium text-base md:text-3xl pt-5">
                      {user.description}
                    </li>
                    <li className="w-full flex justify-center items-center">
                      <img
                        src={user.image}
                        alt="user-app-guide"
                        className={`pt-20 ${
                          index === 0
                            ? "w-3/4 md:w-2/3 mr-10"
                            : "w-2/3 md:w-1/2"
                        }`}
                      />
                    </li>
                  </motion.ul>
                ) : (
                  hostGuideData.map((user, index) => (
                    <div>
                      {userType === "host" ? (
                        <motion.ul
                          variants={userHostVariant}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          key={index}
                          className="w-full flex flex-col p-5"
                        >
                          <li className="list-image-checkmark font-semibold text-lg md:text-4xl">
                            {user.title}
                          </li>
                          <li className="font-medium text-base md:text-3xl pt-5">
                            {user.description}
                          </li>
                          <li className="w-full flex justify-center items-center">
                            <img
                              src={user.image}
                              alt="user-app-guide"
                              className={`pt-20 ${
                                index === 0
                                  ? "w-3/4 md:w-2/3 mr-10"
                                  : "w-2/3 md:w-1/2"
                              }`}
                            />
                          </li>
                        </motion.ul>
                      ) : null}
                    </div>
                  ))
                )}
              </div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
