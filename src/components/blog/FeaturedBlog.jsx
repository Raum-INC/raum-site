import React, { useState, useEffect } from "react";
import { client } from "../../lib/sanity";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FeaturedBlog = () => {
  const [data, setData] = useState([]);
  const [feature, setFeature] = useState([]);

  const featuredVariants = {
    visible: {
      opacity: 1,
      translateX: 0,
      transition: {
        delay: 1,
        type: "spring",
        stiffness: 30,
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
      translateX: 50,
    },
  };

  useEffect(() => {
    const getData = async () => {
      const query = `*[_type == 'blog']{
        _createdAt,
        title,
        category,
        description,
        date,
        'slug': slug.current,
        'image': image.asset->url,
        'alt': image.alt,
        content
      }`;
      try {
        const result = await client.fetch(query);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const query = `*[_type == 'blog' && category == 'Featured']{
        _createdAt,
        title,
        category,
        description,
        date,
        'slug': slug.current,
        'image': image.asset->url,
        'alt': image.alt,
        content
        }`;
      try {
        const result = await client.fetch(query);
        setFeature(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  // Take the first 3 elements
  const slicedPosts = data.slice(0, 3);

  return (
    <main className="w-full h-auto flex flex-col lg:flex-row items-center justify-between lg:justify-between gap-10 mb-10 lg:mb-0 overflow-hidden">
      <Link
        to={`/blog/${feature[0]?.slug}`}
        key={feature[0]?.slug}
        className="lg:w-[600px] lg:h-[650px] hover:scale-105 transition-all duration-300 ease-in-out"
      >
        <section className="w-full h-full flex flex-col bg-white text-black rounded-[30px]">
          <div className="w-full h-[360px]">
            <img
              src={feature[0]?.image}
              alt={feature[0]?.alt}
              className="w-full h-full rounded-t-3xl object-cover"
            />
          </div>
          <div className="w-full h-full p-4 lg:p-8 space-y-5 ">
            <p className="flex items-center gap-5 text-secondary font-normal text-base">
              {feature[0]?.category}
              <span className="w-7 h-[1px] bg-[#A3A3A3]"></span>
              {feature[0]?.date}
            </p>
            <h2 className="font-bold text-lg lg:text-2xl text-primary_text">
              {feature[0]?.title}
            </h2>
            <p className="text-secondary font-medium text-lg">
              {feature[0]?.description}
            </p>
          </div>
        </section>
      </Link>
      <motion.section
        variants={featuredVariants}
        initial="hidden"
        animate="visible"
        className="w-full h-full lg:w-1/2 flex flex-col justify-center items-center gap-10 lg:gap-2"
      >
        {slicedPosts.map((item) => (
          <Link
            to={`/blog/${item.slug}`}
            key={item.slug}
            className="w-full lg:w-[650px] lg:h-[300px] flex flex-col lg:flex-row gap-10 justify-between items-center hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
              <img
                src={item.image}
                alt=""
                className="w-full h-[300px] object-cover lg:w-[300px] lg:h-[250px] rounded-3xl"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="flex items-center gap-5 font-normal text-base lg:text-lg text-secondary">
                {item.category}
                <span className="w-7 h-[1px] bg-[#A3A3A3]"></span>
                {item.date}
              </p>
              <h2 className="font-bold text-lg lg:text-2xl text-[#C7C7C7]">
                {item.title}
              </h2>
            </div>
          </Link>
        ))}
      </motion.section>
    </main>
  );
};

export default FeaturedBlog;
