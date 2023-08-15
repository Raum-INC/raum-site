import React, { useRef } from "react";
import { services } from "./data";
import { AnimatePresence, motion } from "framer-motion";

const Tester = () => {
  const ref = useRef(null);

  const textVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    hidden: {
      opacity: 0,
    },
  };
  return (
    <div>
      <div className="w-full h-screen bg-slate-500 p-10 flex flex-col gap-4 justify-center items-center">
        {services.map((service, index) => {
          return (
            <AnimatePresence>
              <motion.div
                drag="y"
                ref={ref}
                key={index}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                exit="hidden"
              >
                {service.id === index && (
                  <motion.p
                    variants={textVariants}
                    key={service.id}
                    className="text-3xl"
                  >
                    {service.description}
                  </motion.p>
                )}
              </motion.div>
            </AnimatePresence>
          );
        })}
      </div>
    </div>
  );
};

export default Tester;
