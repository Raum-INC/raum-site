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
    <main
      itemScope
      itemType="https://raum.africa/"
      id="download-section"
      className="w-full h-auto p-8 xl:p-0"
    >
      <section className="w-full max-w-6xl mx-auto h-full my-10 space-y-12 ">
        <h3
          itemProp="title"
          className="font-semibold text-3xl md:text-4xl text-center"
        >
          Download our Apps
        </h3>
        <div className="flex justify-center items-center gap-10">
          <button
            itemProp="guestsApp"
            onClick={toggleGuest}
            className={`${
              download === "guests"
                ? "w-[110px] h-[34px] md:w-[205px] md:h-[50px] text-base font-normal rounded-full bg-primary border-2 border-primary transition-all duration-300 ease-in-out"
                : "w-[110px] h-[34px] md:w-[205px] md:h-[50px] text-base font-normal rounded-full bg-transparent border-2 border-primary transition-all duration-300 ease-in-out"
            }`}
          >
            Guests
          </button>
          <button
            itemProp="hostsApp"
            onClick={toggleHosts}
            className={`${
              download === "hosts"
                ? "w-[110px] h-[34px] md:w-[205px] md:h-[50px] font-semibold rounded-full bg-primary border-2 border-primary transition-all duration-300 ease-in-out"
                : "w-[110px] h-[34px] md:w-[205px] md:h-[50px] text-base font-normal rounded-full bg-transparent border-2 border-primary transition-all duration-300 ease-in-out"
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
                  itemScope
                  itemType="https://raum.africa/"
                  key={download}
                  variants={slideVariant}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="w-full h-full flex flex-col justify-center items-start gap-5 p-6 md:p-10"
                >
                  <h3 className="text-white text-xl md:text-5xl font-bold md:leading-[57.33px]">
                    <span className="">
                      {(download === "guests" && "Access to the") ||
                        (download === "hosts" && "Showcase your")}
                    </span>{" "}
                    best shortlets at your fingertips.
                  </h3>
                  <p className="text-white text-base font-normal leading-tight">
                    Scan the QR code with your phone camera to download the Raum
                    app. Available for iOS and Android devices.
                  </p>
                  <div className="w-full flex gap-10 justify-between items-center">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Download on Android!"
                      href={
                        download === "guests"
                          ? "https://play.google.com/store/apps/details?id=com.raumhq.raum&pcampaignid=web_share"
                          : "https://play.google.com/store/apps/details?id=com.raumhq.raum_mobile_host&pcampaignid=web_share"
                      }
                      className="w-[110px] h-[34px] md:w-[205px] md:h-[50px] font-semibold rounded-full bg-white text-primary text-base flex justify-center items-center"
                    >
                      Android
                    </a>
                    <button className="w-[110px] h-[34px] md:w-[205px] md:h-[50px] font-semibold rounded-full bg-white text-primary text-base flex justify-center items-center">
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
                        itemProp="image"
                        className="w-[250px] md:w-[335px] px-4 pt-8 md:pt-4"
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
                        itemProp="image"
                        className="w-[250px] md:w-[335px] px-4 pt-4"
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
