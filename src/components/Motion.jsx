import React from "react";
import { motion } from "framer-motion";

export const Motion = ({ children }) => {
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

  return (
    <motion.section
      variants={componentVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
};

export const IphonePop = ({ children }) => {
  const componentVariant = {
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        delay: 0.7,
        type: "spring",
        stiffness: 30,
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
      translateY: 100,
    },
  };
  return (
    <motion.section
      variants={componentVariant}
      initial="hidden"
      whileInView="visible"
    >
      {children}
    </motion.section>
  );
};

export const LoaderMotion = ({ children }) => {
  const loadingVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };
  return (
    <motion.section
      variants={loadingVariant}
      initial="hidden"
      whileInView="visible"
      className="w-full h-screen flex justify-center items-center"
    >
      {children}
    </motion.section>
  );
};

export const FadeIn = ({ children }) => {
  const loadingVariant = {
    hidden: {
      opacity: 0,
      translateY: -50,
    },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.7,
      },
    },
  };
  return (
    <motion.section
      variants={loadingVariant}
      initial="hidden"
      whileInView="visible"
      className="w-full h-auto flex justify-center items-center overflow-hidden"
    >
      {children}
    </motion.section>
  );
};
