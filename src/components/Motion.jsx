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
      className="flex h-screen w-full items-center justify-center"
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
      className="flex h-auto w-full items-center justify-center overflow-hidden"
    >
      {children}
    </motion.section>
  );
};

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
};

export default function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className=""
    >
      {children}
    </motion.div>
  );
}
