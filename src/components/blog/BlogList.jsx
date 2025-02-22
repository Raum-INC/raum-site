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
      className="h-auto w-full overflow-hidden bg-[#F8F8F8]"
    >
      <section className="p-4 lg:p-12">
        <div className="flex w-full flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <h1 className="text-lg font-bold text-primary_text lg:text-4xl">
            Latest posts
          </h1>
          <div className="flex gap-2 lg:gap-5">
            <button
              onClick={() => handleFilter("All")}
              className={
                activeFilter === "All"
                  ? "rounded-full border border-secondary bg-primary_text p-2 px-4 text-white transition-all duration-500 ease-in-out lg:p-4 lg:px-8"
                  : "rounded-full border border-secondary bg-white p-2 px-4 text-primary_text transition-all duration-500 ease-in-out hover:bg-primary_text hover:text-white lg:p-4 lg:px-8"
              }
            >
              All
            </button>
            <button
              onClick={() => handleFilter("Article")}
              className={
                activeFilter === "Article"
                  ? "rounded-full border border-secondary bg-primary_text p-2 px-4 text-white transition-all duration-500 ease-in-out lg:p-4 lg:px-8"
                  : "rounded-full border border-secondary bg-white p-2 px-4 text-primary_text transition-all duration-500 ease-in-out hover:bg-primary_text hover:text-white lg:p-4 lg:px-8"
              }
            >
              Articles
            </button>
            <button
              onClick={() => handleFilter("Resource")}
              className={
                activeFilter === "Resource"
                  ? "rounded-full border border-secondary bg-primary_text p-2 px-4 text-white transition-all duration-500 ease-in-out lg:p-4 lg:px-8"
                  : "rounded-full border border-secondary bg-white p-2 px-4 text-primary_text transition-all duration-500 ease-in-out hover:bg-primary_text hover:text-white lg:p-4 lg:px-8"
              }
            >
              Resources
            </button>
          </div>
        </div>
      </section>
      <AnimatePresence>
        <section className="grid w-full gap-8 p-4 text-black lg:grid-cols-2 lg:px-10">
          {paginatedData.map((blog) => (
            <Link to={`/blog/${blog.slug}`} key={blog.slug}>
              <motion.div
                variants={listVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex h-full w-full flex-col justify-center rounded-[30px] bg-white text-black shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
              >
                <img
                  src={blog.image}
                  alt={blog.alt}
                  className="h-[360px] w-full rounded-t-3xl object-cover"
                />
                <div className="h-full w-full space-y-5 p-4 lg:p-8">
                  <p className="flex items-center gap-5 text-base font-normal text-secondary">
                    {blog.category}
                    <span className="h-[1px] w-7 bg-[#A3A3A3]"></span>
                    {blog.date}
                  </p>
                  <h2 className="text-lg font-bold text-primary_text lg:text-2xl">
                    {blog.title}
                  </h2>
                  <div className="flex items-center justify-start gap-5">
                    <img
                      src={blog.authorImage}
                      alt={blog.author}
                      className="h-10 w-10 rounded-full"
                    />
                    <p className="text-lg font-medium text-secondary">
                      {blog?.author}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </section>
      </AnimatePresence>

      <div className="my-10 flex justify-center gap-5">
        <button
          onClick={() => {
            handlePrevPage();
          }}
          disabled={currentPage === 1}
          className="cursor-pointer rounded-full border border-secondary bg-white p-2 px-4 text-primary_text transition-all duration-500 ease-in-out hover:bg-primary_text hover:text-white lg:p-4 lg:px-8"
        >
          Previous Page
        </button>
        <button
          onClick={() => {
            handleNextPage();
          }}
          disabled={paginatedData.length < itemsPerPage}
          className="cursor-pointer rounded-full border border-secondary bg-white p-2 px-4 text-primary_text transition-all duration-500 ease-in-out hover:bg-primary_text hover:text-white lg:p-4 lg:px-8"
        >
          Next Page
        </button>
      </div>
    </motion.main>
  );
};

export default BlogList;
