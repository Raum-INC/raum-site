import React from "react";
import BlogHero from "../components/blog/BlogHero";
import useBearStore from "../store/store";
import BlogList from "../components/blog/BlogList";
import { motion } from "framer-motion";

const Blog = () => {
  const { falseNav } = useBearStore();

  const componentVariant = {
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
    hidden: {
      opacity: 0,
      translateY: -50,
    },
  };

  return (
    <motion.div
      variants={componentVariant}
      initial="hidden"
      animate="visible"
      onClick={falseNav}
      className=""
    >
      <BlogHero />
      <BlogList />
    </motion.div>
  );
};

export default Blog;
