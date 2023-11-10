import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../lib/sanity";
import { PortableText } from "@portabletext/react";
import { AnimatePresence, motion } from "framer-motion";

const BlogDetails = () => {
  const [blogData, setBlogData] = useState(null);
  const [data, setData] = useState(null);
  const { slug } = useParams(); // This will give you the slug from the URL

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

  const listVariants = {
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

  useEffect(() => {
    const relatedData = async () => {
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

    relatedData();
  }, []);

  useEffect(() => {
    const getBlogData = async () => {
      const query = `*[_type == 'blog' && slug.current == $slug]{
        _createdAt,
        author,
        title,
        category,
        description,
        date,
        'slug': slug.current,
        'authorImage': image.asset->url,
        'image': image.asset->url,
        'alt': image.alt,
        content,
      }`;
      try {
        const result = await client.fetch(query, { slug });
        setBlogData(result[0]); // Assuming the slug is unique and only one blog post matches
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    getBlogData();
  }, [slug]);

  const slicedData = data?.slice(0, 2);

  if (!blogData) {
    return (
      <AnimatePresence>
        <motion.div
          variants={loadingVariant}
          initial="hidden"
          animate="visible"
          className="w-full h-screen flex justify-center items-center"
        >
          <h1 className="font-bold text-2xl lg:text-5xl text-center">
            From Raum
            <br />
            With Love
          </h1>
        </motion.div>
      </AnimatePresence>
    );
  }

  const myPortableTextComponents = {
    block: {
      // Ex. 1: customizing common block types
      h1: ({ children }) => <h1 className="text-4xl py-4">{children}</h1>,
      h2: ({ children }) => (
        <h2 className="text-3xl py-4 text-left">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-2xl py-4 text-left">{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-xl py-4 text-left">{children}</h4>
      ),
      blockquote: ({ children }) => (
        <blockquote className="bg-primary_text text-white p-12 rounded-md">
          {children}
        </blockquote>
      ),
      basic: ({ children }) => (
        <p className="text-4xl text-justify">{children}</p>
      ),
    },
    list: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => (
        <ul className="list-disc list-inside p-5 space-y-3">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal list-inside p-5 space-y-3">{children}</ol>
      ),

      // Ex. 2: rendering custom lists
      checkmarks: ({ children }) => (
        <ol className="m-auto text-lg">{children}</ol>
      ),
    },
  };

  return (
    <main className="w-full h-auto">
      <motion.section
        variants={componentVariant}
        initial="hidden"
        animate="visible"
        className="space-y-10 overflow-hidden"
      >
        <div className="p-4 lg:p-12 space-y-5 h-[350px] md:h-[500px] lg:h-[700px]">
          <div className="w-full flex gap-5 justify-center items-center">
            <p className="text-center flex items-center gap-5 font-normal text-base text-white">
              {blogData.category}
              <span className="w-7 h-[1px] bg-[#A3A3A3]"></span>
              {blogData.date}
            </p>
          </div>
          <div className="text-center space-y-5">
            <h1 className="text-white font-bold text-2xl lg:text-6xl">
              {blogData.title}
            </h1>
            <p className="text-secondary text-base lg:text-lg font-medium">
              {blogData.description}
            </p>
          </div>
        </div>
        <div className="p-8 w-full h-auto bg-white text-black relative z-10">
          <div className="w-11/12 lg:p-8 lg:w-[1200px] lg:h-[700px] aspect-auto mx-auto absolute top-[-160px] md:top-[-360px] lg:top-[-440px] left-0 right-0">
            <img
              src={blogData.image}
              alt={blogData.alt}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="mt-16 md:mt-28 lg:mt-[300px] w-full lg:max-w-4xl mx-auto">
            <PortableText
              value={blogData.content}
              components={myPortableTextComponents}
            />
            <div className="w-full p-4 lg:p-12 space-y-3">
              <p className="text-[#BBC8D4] font-bold text-base uppercase">
                Written By
              </p>
              <h3 className="font-normal text-2xl">{blogData.author}</h3>
            </div>
          </div>
          {/* Related Posts */}
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=""
          >
            <div className="w-full p-4 lg:p-12 flex justify-between items-center">
              <h4 className="text-primary_text font-bold text-lg lg:text-4xl">
                Related posts
              </h4>
              <Link
                to="/blog"
                onClick={() => window.scrollTo(0, 0)}
                className="bg-white text-primary_text p-2 px-4 lg:p-4 lg:px-8 border border-secondary rounded-full hover:bg-primary_text hover:text-white transition-all duration-500 ease-in-out"
              >
                Browse all post
              </Link>
            </div>
            <div className="w-full mx-auto grid lg:grid-cols-2 gap-10">
              {slicedData.map((item) => (
                <Link
                  to={`/blog/${item.slug}`}
                  key={item.slug}
                  className="lg:w-[600px] lg:h-[650px] mx-auto shadow-xl rounded-3xl hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <section className="w-full h-full flex flex-col bg-white text-black rounded-[30px]">
                    <div className="w-full h-[360px]">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full rounded-t-3xl object-cover"
                      />
                    </div>
                    <div className="w-full h-full p-4 lg:p-8 space-y-5 ">
                      <p className="flex items-center gap-5 text-secondary font-normal text-base">
                        {item.category}
                        <span className="w-7 h-[1px] bg-[#A3A3A3]"></span>
                        {item.date}
                      </p>
                      <h2 className="font-bold text-lg lg:text-2xl text-primary_text">
                        {item.title}
                      </h2>
                      <p className="text-secondary font-medium text-lg">
                        {item.description}
                      </p>
                    </div>
                  </section>
                </Link>
              ))}
            </div>
            <div className="w-full h-[500px] bg-[#F8F8F8] absolute bottom-0 left-0 right-0 z-[-1]"></div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default BlogDetails;
