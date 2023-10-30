import React, { useState, useEffect } from "react";
import { client } from "../../lib/sanity";

const FeaturedBlog = () => {
  const [data, setData] = useState([]);
  const [feature, setFeature] = useState([]);

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

  // Shuffle the data array
  const shuffledBlogs = data.sort(() => Math.floor(Math.random() - 0.5));

  // Take the first 3 elements
  const randomPosts = shuffledBlogs.slice(0, 3);

  return (
    <main className="w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-10">
      <section className="w-full h-full lg:w-[600px] lg:h-[600px] flex flex-col bg-white text-black rounded-[30px]">
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
      <section className="w-full h-auto lg:w-[600px] lg:h-[635px] flex flex-col justify-center items-center gap-7">
        {randomPosts.slice(0, 4).map((item) => (
          <div className="w-full lg:h-[200px] flex flex-col lg:flex-row justify-between gap-5">
            <div className="lg:w-2/5 flex justify-center items-center object-cover">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full aspect-auto rounded-3xl"
              />
            </div>
            <div className="lg:w-3/5 flex flex-col justify-center gap-5">
              <p className="flex items-center gap-5 font-normal text-base lg:text-lg text-secondary">
                {item.category}
                <span className="w-7 h-[1px] bg-[#A3A3A3]"></span>
                {item.date}
              </p>
              <h2 className="font-bold text-lg lg:text-2xl text-[#C7C7C7]">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default FeaturedBlog;
