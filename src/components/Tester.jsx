import React, { useEffect, useRef, useState } from "react";
import { services } from "./data";
import { AnimatePresence, motion } from "framer-motion";

const Tester = () => {
  const ref = useRef(null);

  const [count, setCount] = useState(0);

  const textVariants = {
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 2,
        delay: ref * 0.3,
      },
    },
    hidden: {
      opacity: 0,
      translateY: -50,
    },
  };

  return (
    <div>
      <div className="w-full h-auto bg-slate-500 p-10 flex flex-col gap-4 justify-center items-center">
        {services.map((service, index) => {
          return (
            <AnimatePresence>
              <motion.div
                key={index}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {service.id === index && (
                  <motion.div
                    ref={ref}
                    className="flex flex-col justify-center items-center border-2 border-white p-8"
                  >
                    <motion.p
                      variants={textVariants}
                      key={service.id}
                      className="text-3xl"
                    >
                      {count}
                      {/* {service.description} */}
                    </motion.p>
                  </motion.div>
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
