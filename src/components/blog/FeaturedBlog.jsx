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
    <main
      itemScope
      itemType="https://raum.africa/blog"
      className="mb-10 flex h-auto w-full flex-col items-center justify-between gap-10 overflow-hidden lg:mb-0 lg:flex-row lg:justify-between"
    >
      <Link
        to={`/blog/${feature[0]?.slug}`}
        key={feature[0]?.slug}
        className="transition-all duration-300 ease-in-out hover:scale-105 lg:h-[650px] lg:w-[600px]"
      >
        <section className="flex h-full w-full flex-col rounded-[30px] bg-white text-black">
          <div className="h-[360px] w-full">
            <img
              itemProp="image"
              src={feature[0]?.image}
              alt={feature[0]?.alt}
              className="h-full w-full rounded-t-3xl object-cover"
            />
          </div>
          <div className="h-full w-full space-y-5 p-4 lg:p-8">
            <p
              itemProp="blogCategory"
              className="flex items-center gap-5 text-base font-normal text-secondary"
            >
              {feature[0]?.category}
              <span itemProp="date" className="h-[1px] w-7 bg-[#A3A3A3]"></span>
              {feature[0]?.date}
            </p>
            <h2
              itemProp="title"
              className="text-lg font-bold text-primary_text lg:text-2xl"
            >
              {feature[0]?.title}
            </h2>
            <p
              itemProp="description"
              className="text-lg font-medium text-secondary"
            >
              {feature[0]?.description}
            </p>
          </div>
        </section>
      </Link>
      <motion.section
        variants={featuredVariants}
        initial="hidden"
        animate="visible"
        className="flex h-full w-full flex-col items-center justify-center gap-10 lg:w-1/2 lg:gap-2"
      >
        {slicedPosts.map((item) => (
          <Link
            to={`/blog/${item.slug}`}
            key={item.slug}
            className="flex w-full flex-col items-center justify-between gap-10 transition-all duration-300 ease-in-out hover:scale-105 lg:h-[300px] lg:w-[650px] lg:flex-row"
          >
            <div className="flex h-full w-full items-center justify-center lg:w-1/2">
              <img
                itemProp="image"
                src={item.image}
                alt={item.title}
                className="h-[300px] w-full rounded-3xl object-cover lg:h-[250px] lg:w-[300px]"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p
                itemProp="blogCategory"
                className="flex items-center gap-5 text-base font-normal text-secondary lg:text-lg"
              >
                {item.category}
                <span
                  itemProp="date"
                  className="h-[1px] w-7 bg-[#A3A3A3]"
                ></span>
                {item.date}
              </p>
              <h2
                itemProp="title"
                className="text-lg font-bold text-[#C7C7C7] lg:text-2xl"
              >
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
