import React, { useEffect, useState } from "react";
import { client } from "../../lib/sanity";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
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
        content
      }`;
      try {
        const result = await client.fetch(query);
        setData(result);
        setFilteredData(result); // Initialize filteredData with all blogs
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredData(data); // Show all blogs
      console.log(data);
    } else {
      const filtered = data.filter((blog) => blog.category === category);
      setFilteredData(filtered);
      console.log(filtered);
    }
  };

  return (
    <main className="w-full h-auto bg-[#F8F8F8]">
      <section className="p-4 lg:p-12">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5">
          <h1 className="text-primary_text font-bold text-lg lg:text-4xl">
            Latest posts
          </h1>
          <div className="flex gap-2 lg:gap-5">
            <button
              onClick={() => handleFilter("All")}
              className="bg-primary_text p-2 px-4 lg:p-4 lg:px-8 border border-secondary rounded-full"
            >
              All
            </button>
            <button
              onClick={() => handleFilter("Article")}
              className="bg-white text-primary_text p-2 px-4 lg:p-4 lg:px-8 border border-secondary rounded-full"
            >
              Articles
            </button>
            <button
              onClick={() => handleFilter("Resource")}
              className="bg-white text-primary_text p-2 px-4 lg:p-4 lg:px-8 border border-secondary rounded-full"
            >
              Resources
            </button>
          </div>
        </div>
      </section>
      <section className="w-full grid lg:grid-cols-2 gap-8 p-4 lg:px-10 text-black">
        {filteredData.map((blog) => (
          <Link to={`/blog/${blog.slug}`} key={blog.slug}>
            <div className="w-full h-full mx-auto lg:w-[600px] lg:h-[600px] flex flex-col bg-white text-black rounded-[30px]">
              <div className="w-full h-[360px]">
                <img
                  src={blog.image}
                  alt={blog.alt}
                  className="w-full h-full rounded-t-3xl object-cover"
                />
              </div>
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
                  <span>|</span>
                  <p className="text-secondary font-medium text-lg">
                    {blog.date}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default BlogList;
