import React from "react";
import { Assets } from "../../assets";
import useDownloadStore from "../../store/downloadStore";
import { motion, AnimatePresence } from "framer-motion";

const Download = () => {
  const { download, toggleGuest, toggleHosts } = useDownloadStore();

  const slideVariant = {
    hidden: {
      translateX: -50,
      opacity: 0,
      transition: {
        duration: 0.5, // Adjust duration as needed
        ease: "easeInOut", // Adjust easing function as needed
      },
    },
    visible: {
      translateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5, // Adjust duration as needed
        ease: "easeInOut", // Adjust easing function as needed
      },
    },
  };

  return (
    <main id="download-section" className="w-full h-auto py-14">
      <section className="w-full max-w-6xl mx-auto h-full p-8 xl:p-0 space-y-12 ">
        <h3 className="font-semibold text-3xl md:text-4xl text-center">
          Download our Apps
        </h3>
        <div className="flex justify-center items-center gap-10">
          <button
            onClick={toggleGuest}
            className={`${
              download === "guests"
                ? "px-8 md:px-12 h-[50px] text-base font-normal rounded-full bg-primary border-2 border-primary transition-all duration-300 ease-in-out"
                : "px-8 md:px-12 h-[50px] text-base font-normal rounded-full bg-transparent border-2 border-primary transition-all duration-300 ease-in-out"
            }`}
          >
            Guests
          </button>
          <button
            onClick={toggleHosts}
            className={`${
              download === "hosts"
                ? "px-8 md:px-12 h-[50px] font-semibold rounded-full bg-primary border-2 border-primary transition-all duration-300 ease-in-out"
                : "px-8 md:px-12 h-[50px] text-base font-normal rounded-full bg-transparent border-2 border-primary transition-all duration-300 ease-in-out"
            }`}
          >
            Hosts
          </button>
        </div>
        <div className="w-full h-auto overflow-hidden flex justify-center items-center">
          <AnimatePresence>
            {(download === "guests" || download === "hosts") && (
              <motion.div className="w-full min-w-full h-auto md:h-[560px] flex flex-col lg:flex-row justify-between items-center bg-primary rounded-3xl">
                <motion.div
                  key={download}
                  variants={slideVariant}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="w-full h-full flex flex-col justify-center items-start gap-5 p-6 md:p-10"
                >
                  <h3 className="text-white text-xl md:text-5xl font-bold md:leading-[57.33px]">
                    <span className="pr-3">
                      {(download === "guests" && "Access to the") ||
                        (download === "hosts" && "Showcase your")}
                    </span>
                    best shortlets at your fingertips.
                  </h3>
                  <p className="text-white text-base font-normal leading-tight">
                    Scan the QR code with your phone camera
                    <br />
                    to download the Raum app.
                    <br />
                    Available for iOS and Android devices.
                  </p>
                  <div className="w-full flex gap-10 justify-between items-center">
                    <button className="p-2 px-6 md:px-12 h-[50px] font-semibold rounded-full bg-white text-primary text-base">
                      Android
                    </button>
                    <button className="p-2 px-6 md:px-12 h-[50px] font-semibold rounded-full bg-white text-primary text-base">
                      Apple
                    </button>
                  </div>
                </motion.div>

                <motion.div className="w-full h-full">
                  {download === "guests" && (
                    <motion.div
                      variants={slideVariant}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      key={download}
                      className="w-full h-full flex justify-center items-end"
                    >
                      <img
                        className="w-[335px] px-4 pt-4"
                        src={Assets.guestMockup}
                        alt="raum-app"
                      />
                    </motion.div>
                  )}
                  {download === "hosts" && (
                    <motion.div
                      variants={slideVariant}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      key={download}
                      className="w-full h-full flex justify-center items-end overflow-hidden"
                    >
                      <img
                        className="w-[335px] px-4 pt-4"
                        src={Assets.hostMockup}
                        alt="raum-app"
                      />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default Download;
