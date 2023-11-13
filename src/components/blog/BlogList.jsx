import React, { useEffect, useState } from "react";
import { client } from "../../lib/sanity";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const BlogList = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

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
        delay: 1.5,
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

  const getData = async () => {
    const query = `*[_type == 'blog']{ 
      _createdAt,
      author,
      title,
      category,
      description,
      date,
      'slug': slug.current,
      'image': image.asset->url,
      'authorImage': image.asset->url,
      'alt': image.alt,
      content,
      'contentImg': content.image.asset->url,
    }`;
    try {
      const result = await client.fetch(query);
      setData(result);
      setFilteredData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const paginateData = (data, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((blog) => blog.category === category);
      setFilteredData(filtered);
    }

    setActiveFilter(category);
    setCurrentPage(1); // Reset to first page when changing filters
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    getData();
  }, []);

  const paginatedData = paginateData(filteredData, currentPage, itemsPerPage);

  return (
    <motion.main
      variants={componentVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full h-auto bg-[#F8F8F8] overflow-hidden"
    >
      <section className="p-4 lg:p-12">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5">
          <h1 className="text-primary_text font-bold text-lg lg:text-4xl">
            Latest posts
          </h1>
          <div className="flex gap-2 lg:gap-5">
            <button
              onClick={() => handleFilter("All")}
              className={
                activeFilter === "All"
                  ? "bg-primary_text text-white p-2 px-4 lg:p-4 lg:px-8 border border-secondary rounded-full transition-all duration-500 ease-in-out"
                  : "bg-white text-primary_text p-2 px-4 lg:p-4 lg:px-8 border border-secondary rounded-full hover:bg-primary_text hover:text-white transition-all duration-500 ease-in-out"
              }
            >
              All
            </button>
            <button
              onClick={() => handleFilter("Article")}
              className={
                activeFilter === "Article"
                  ? "bg-primary_text text-white p-2 px-4 lg:p-4 lg:px-8 border border-secondary rounded-full transition-all duration-500 ease-in-out"
                  : "bg-white text-primary_text p-2 px-4 lg:p-4 lg:px-8 border border-secondary rounded-full hover:bg-primary_text hover:text-white transition-all duration-500 ease-in-out"
              }
            >
              Articles
            </button>
            <button
              onClick={() => handleFilter("Resource")}
              className={
                activeFilter === "Resource"
                  ? "bg-primary_text text-white p-2 px-4 lg:p-4 lg:px-8 border border-secondary rounded-full transition-all duration-500 ease-in-out"
                  : "bg-white text-primary_text p-2 px-4 lg:p-4 lg:px-8 border border-secondary rounded-full hover:bg-primary_text hover:text-white transition-all duration-500 ease-in-out"
              }
            >
              Resources
            </button>
          </div>
        </div>
      </section>
      <AnimatePresence>
        <section className="w-full grid lg:grid-cols-2 gap-8 p-4 lg:px-10 text-black">
          {paginatedData.map((blog) => (
            <Link to={`/blog/${blog.slug}`} key={blog.slug}>
              <motion.div
                variants={listVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="w-full h-full flex flex-col justify-center bg-white text-black rounded-[30px] hover:scale-105 transition-all duration-300 ease-in-out shadow-xl"
              >
                <img
                  src={blog.image}
                  alt={blog.alt}
                  className="w-full h-[360px] rounded-t-3xl object-cover"
                />
                <div className="w-full h-full p-4 lg:p-8 space-y-5 ">
                  <p className="flex items-center gap-5 text-secondary font-normal text-base">
                    {blog.category}
                    <span className="w-7 h-[1px] bg-[#A3A3A3]"></span>
                    {blog.date}
                  </p>
                  <h2 className="font-bold text-lg lg:text-2xl text-primary_text">
                    {blog.title}
                  </h2>
                  <div className="flex justify-start items-center gap-5">
                    <img
                      src={blog.authorImage}
                      alt={blog.author}
                      className="w-10 h-10 rounded-full"
                    />
                    <p className="text-secondary font-medium text-lg">
                      {blog?.author}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </section>
      </AnimatePresence>

      <div className="flex justify-center gap-5 my-10">
        <button
          onClick={() => {
            handlePrevPage();
          }}
          disabled={currentPage === 1}
          className="bg-white text-primary_text p-2 px-4 lg:p-4 lg:px-8 border border-secondary rounded-full cursor-pointer hover:bg-primary_text hover:text-white transition-all duration-500 ease-in-out"
        >
          Previous Page
        </button>
        <button
          onClick={() => {
            handleNextPage();
          }}
          disabled={paginatedData.length < itemsPerPage}
          className="bg-white text-primary_text p-2 px-4 lg:p-4 lg:px-8 border border-secondary rounded-full cursor-pointer hover:bg-primary_text hover:text-white transition-all duration-500 ease-in-out"
        >
          Next Page
        </button>
      </div>
    </motion.main>
  );
};

export default BlogList;
