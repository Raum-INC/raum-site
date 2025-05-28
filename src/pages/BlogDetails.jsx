import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../lib/sanity";
import { PortableText } from "@portabletext/react";
import { AnimatePresence, motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ClipLoader } from "react-spinners";
import { useAttribution } from "../components/home/Download";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const BlogDetails = () => {
  const [blogData, setBlogData] = useState(null);
  const [data, setData] = useState(null);
  const { slug } = useParams(); // This will give you the slug from the URL
  const { appleAttribution, androidAttribution } = useAttribution();

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
        // appends attribution links to urls
        result[0].content.forEach((e) => {
          if (e.markDefs && e.markDefs.length > 0) {
            e.markDefs.forEach((md) => {
              if (md.href.indexOf("play.google.com") > -1)
                md.href = `https://play.google.com/store/apps/details?id=${new URL(md.href).searchParams.get("id")}${androidAttribution}`;
              else if (md.href.indexOf("apps.apple.com") > -1)
                md.href = `${md.href}${md.href.indexOf("?") > -1 ? `${appleAttribution}` : `?${appleAttribution}`}`;
            });
          }
        });
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
          className="flex h-screen w-full items-center justify-center"
        >
          <ClipLoader
            color="#00F"
            loading={true}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </motion.div>
      </AnimatePresence>
    );
  }

  const myPortableTextComponents = {
    block: {
      // Customizing common block types
      h1: ({ children }) => (
        <h1 itemProp="heading" className="py-4 text-4xl">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 itemProp="heading" className="py-4 text-left text-3xl">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 itemProp="heading" className="py-4 text-left text-2xl">
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h4 itemProp="heading" className="py-4 text-left text-xl">
          {children}
        </h4>
      ),
      blockquote: ({ children }) => (
        <blockquote className="rounded-md bg-primary_text p-12 text-white">
          {children}
        </blockquote>
      ),
      basic: ({ children }) => (
        <p itemProp="article" className="text-justify text-4xl">
          {children}
        </p>
      ),
    },
    list: {
      // Customizing common list types
      bullet: ({ children }) => (
        <ul itemProp="list" className="list-inside list-disc space-y-3 p-5">
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol itemProp="list" className="list-inside list-decimal space-y-3 p-5">
          {children}
        </ol>
      ),
    },
    types: {
      // Customizing image rendering
      image: ({ value }) => (
        <div className="my-8 flex justify-center">
          <img
            src={urlFor(value.asset).url()} // Use the URL builder here
            alt={value.alt || "Blog Image"}
            className="h-auto max-w-full rounded-lg shadow-lg"
          />
        </div>
      ),
    },
  };

  return (
    <>
      <Helmet>
        <title>{blogData.title} - Raum Africa</title>
        <meta name="description" content={blogData.description} />
        <meta
          property="og:site_name"
          content={`Raum Africa: ${blogData.title}`}
        />
        <meta
          property="og:title"
          content="Make money hosting with Raum in Nigeria - Raum Africa"
        />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={blogData.description} />
        <meta
          property="og:image"
          content="https://raum.africa/static/media/raum_favi.0d01f8c1fa4643d291b20d68809af99d.svg"
        />
        <meta property="og:url" content={`https://raum.africa/blog/${slug}`} />
        <link rel="canonical" href={`https://raum.africa/blog/${slug}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main
        itemScope
        itemType={`https://raum.africa/${slug}`}
        className="h-auto w-full pt-28"
      >
        <motion.section
          variants={componentVariant}
          initial="hidden"
          animate="visible"
          className="space-y-10 overflow-hidden"
        >
          <div className="h-[350px] space-y-5 p-4 md:h-[500px] lg:h-[700px] lg:p-12">
            <div className="flex w-full items-center justify-center gap-5">
              <p
                itemProp="blogCategory"
                className="flex items-center gap-5 text-center text-base font-normal text-white"
              >
                {blogData.category}
                <span className="h-[1px] w-7 bg-[#A3A3A3]"></span>
                <span itemProp="date">{blogData.date}</span>
              </p>
            </div>
            <div className="space-y-5 text-center">
              <h1
                itemProp="title"
                className="text-2xl font-bold text-white lg:text-6xl"
              >
                {blogData.title}
              </h1>
              <p
                itemProp="description"
                className="text-base font-medium text-secondary lg:text-lg"
              >
                {blogData.description}
              </p>
            </div>
          </div>
          <div className="relative z-10 h-auto w-full bg-white p-8 text-black">
            <div className="absolute left-0 right-0 top-[-160px] mx-auto aspect-auto w-11/12 md:top-[-360px] lg:top-[-440px] lg:h-[700px] lg:w-[1200px] lg:p-8">
              <img
                itemProp="image"
                src={blogData.image}
                alt={blogData.alt}
                className="h-full w-full rounded-3xl object-cover"
              />
            </div>
            <div className="blog-content mx-auto mt-16 w-full md:mt-28 lg:mt-[300px] lg:max-w-4xl">
              <PortableText
                value={blogData.content}
                components={myPortableTextComponents}
              />
              <div className="w-full space-y-3 p-4 lg:p-12">
                <p className="text-base font-bold uppercase text-[#BBC8D4]">
                  Written By
                </p>
                <h3 itemProp="author" className="text-2xl font-normal">
                  {blogData.author}
                </h3>
              </div>
            </div>

            {/* Related Posts */}
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="h-full w-full"
            >
              <div className="flex w-full items-center justify-between p-4 lg:p-12">
                <h4 className="text-lg font-bold text-primary_text lg:text-4xl">
                  Related posts
                </h4>
                <Link
                  to="/blog"
                  onClick={() => window.scrollTo(0, 0)}
                  className="rounded-full border border-secondary bg-white p-2 px-4 text-primary_text transition-all duration-500 ease-in-out hover:bg-primary_text hover:text-white lg:p-4 lg:px-8"
                >
                  Browse all post
                </Link>
              </div>
              <div className="mx-auto grid w-full gap-10 lg:grid-cols-2">
                {slicedData?.map((item) => (
                  <Link
                    to={`/blog/${item.slug}`}
                    key={item.slug}
                    className="mx-auto rounded-3xl shadow-xl transition-all duration-300 ease-in-out hover:scale-105 lg:h-[650px] lg:w-[600px]"
                  >
                    <section className="flex h-full w-full flex-col rounded-[30px] bg-white text-black">
                      <div className="h-[360px] w-full">
                        <img
                          itemProp="image"
                          src={item.image}
                          alt={item.alt}
                          className="h-full w-full rounded-t-3xl object-cover"
                        />
                      </div>
                      <div className="h-full w-full space-y-5 p-4 lg:p-8">
                        <p
                          itemProp="blogCategory"
                          className="flex items-center gap-5 text-base font-normal text-secondary"
                        >
                          {item.category}
                          <span className="h-[1px] w-7 bg-[#A3A3A3]"></span>
                          {item.date}
                        </p>
                        <h2
                          itemProp="title"
                          className="text-lg font-bold text-primary_text lg:text-2xl"
                        >
                          {item.title}
                        </h2>
                        <p
                          itemProp="description"
                          className="text-lg font-medium text-secondary"
                        >
                          {item.description}
                        </p>
                      </div>
                    </section>
                  </Link>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-[-1] h-[500px] w-full bg-[#F8F8F8]"></div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default BlogDetails;
