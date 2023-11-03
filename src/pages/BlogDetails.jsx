import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../lib/sanity";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";

const BlogDetails = () => {
  const [blogData, setBlogData] = useState(null);
  const { slug } = useParams(); // This will give you the slug from the URL

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
        'image': image.asset->url,
        'authorImage': image.asset->url,
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

  if (!blogData) {
    return <div>Loading...</div>;
  }

  const SampleImageComponent = ({ value }) => {
    // console.log(value);
    console.log("this is the value:  ", value.asset._ref);
    const sanityImg = value?.asset._ref;
    return (
      <img
        src={urlBuilder()
          .image(sanityImg)
          // .width(100)
          // .fit("max")
          // .auto("format")
          .url()}
        alt={value.alt || " "}
        className="w-[300px] aspect-auto block"
        // loading="lazy"
      />
    );
  };

  // console.log(SampleImageComponent);

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
    types: {
      image: SampleImageComponent,
      // Any other custom types you have in your content
      // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
  };

  return (
    <main className="w-full h-auto">
      <section className="space-y-10">
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
        <div className="p-8 w-full h-auto bg-white text-black relative">
          <div className="w-11/12 lg:p-8 lg:w-[1200px] lg:h-[700px]  aspe         ct-auto mx-auto absolute top-[-160px] md:top-[-360px] lg:top-[-440px] left-0 right-0">
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
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
