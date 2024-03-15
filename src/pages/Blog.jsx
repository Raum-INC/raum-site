import React from "react";
import BlogHero from "../components/blog/BlogHero";
import useBearStore from "../store/store";
import BlogList from "../components/blog/BlogList";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

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
      className="overflow-hidden pt-28"
    >
      <Helmet>
        <title>
          Stay up-todate with the latest from the Blog - Raum Africa
        </title>
        <meta property="og:site_name" content="Raum Africa's Blog" />
        <meta
          name="description"
          content="We are revolutionizing staycations by providing an all-in-one platform for booking short-term and long stays, along with dream properties, using AI, VR tours, smart home tech, and prioritize sustainability."
        />
        <meta
          property="og:title"
          content="Stay up-todate with the latest from the Blog - Raum Africa"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="We are revolutionizing staycations by providing an all-in-one platform for booking short-term and long stays, along with dream properties, using AI, VR tours, smart home tech, and prioritize sustainability."
        />
        <meta
          property="og:image"
          content="https://raum.africa/static/media/raum_favi.0d01f8c1fa4643d291b20d68809af99d.svg"
        />
        <meta property="og:url" content="https://raum.africa/blog" />
        <link rel="canonical" href="https://raum.africa/blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <BlogHero />
      <BlogList />
    </motion.div>
  );
};

export default Blog;
