import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../lib/sanity";
import { PortableText } from "@portabletext/react";
import { AnimatePresence, motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ClipLoader } from "react-spinners";
import { useAttribution } from "../components/home/Download";
import imageUrlBuilder from "@sanity/image-url";
import { FiCalendar, FiHome } from "react-icons/fi";
import { MdOutlineDoorFront } from "react-icons/md";
import { myPortableTextComponents } from "./BlogDetails";
import { investDetailsData } from "../components/data";
import InvestCalculator from "../components/InvestCalculator";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const InvestDetails = () => {
  const [data, setData] = useState(null);
  const [mainImage, setMainImage] = useState(null);
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
    const getInvestData = async () => {
      const query = `*[_type == 'foreignListings' && slug.current == $slug]{
        _createdAt,
        author,
        title,
        category,
        description,
        location,
        date,
        availability,
        'moreImages': moreImages[]{asset->{url, _id}, alt},
        'slug': slug.current,
        'authorImage': image.asset->url,
        'image': image.asset->url,
        'alt': image.alt,
        content,
        guests,
        bedroom,
        bed,
        bath
      }`;
      try {
        const result = await client.fetch(query, { slug });
        // setData(result);
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
        setData(result[0]); // Assuming the slug is unique and only one blog post matches
        // Set main image to the default image or first moreImage if available
        if (result[0]?.moreImages?.length > 0) {
          setMainImage(result[0].moreImages[0]);
        } else {
          setMainImage({ asset: { url: result[0].image }, alt: result[0].alt });
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    getInvestData();
  }, [slug]);

  // If data changes (e.g., navigating to a new slug), update mainImage
  useEffect(() => {
    if (data) {
      if (data.moreImages && data.moreImages.length > 0) {
        setMainImage(data.moreImages[0]);
      } else {
        setMainImage({ asset: { url: data.image }, alt: data.alt });
      }
    }
  }, [data]);

  if (!data) {
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

  // console.table("fetched moreImages: ", data.moreImages);

  // if (data.moreImages && data.moreImages.length > 0) {
  //   console.log("First moreImage:", data.moreImages[0]);
  // }

  return (
    <>
      <Helmet>
        <title>{data.title} - Raum Africa</title>
        <meta name="description" content={data.description} />
        <meta property="og:site_name" content={`Raum Africa: ${data.title}`} />
        <meta
          property="og:title"
          content="Make money hosting with Raum in Nigeria - Raum Africa"
        />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={data.description} />
        <meta
          property="og:image"
          content="https://raum.africa/static/media/raum_favi.0d01f8c1fa4643d291b20d68809af99d.svg"
        />
        <meta property="og:url" content={`https://raum.africa/blog/${slug}`} />
        <link rel="canonical" href={`https://raum.africa/blog/${slug}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main className="h-auto w-full overflow-hidden pt-24">
        <section className="relative flex h-[600px] w-full lg:h-[calc(650px-85px)]">
          <div className="absolute h-full w-full bg-black/10"></div>
          {/* main image */}
          <img
            src={mainImage.asset?.url || mainImage.url || data.image}
            alt={mainImage.alt || data.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute z-10 flex h-full w-full flex-col items-start justify-end gap-5 p-5 xl:p-10">
            <h1 className="text-lg font-bold drop-shadow-md md:text-5xl">
              {data.title}
            </h1>
            <p className="font-medium underline">{data.location}</p>
            {/* thumbnails */}
            <div className="flex items-center gap-2">
              {data.moreImages &&
                data.moreImages.length > 0 &&
                data.moreImages.map((img, index) => (
                  <img
                    key={index}
                    src={img.asset?.url || urlFor(img).url()}
                    alt={img.alt || `Image ${index + 1}`}
                    className={`h-[100px] w-[125px] cursor-pointer rounded-[10px] border-[3px] object-cover ${
                      (mainImage.asset?.url || mainImage.url) ===
                      (img.asset?.url || urlFor(img).url())
                        ? "border-primary"
                        : "border-[#FFFFFF4D]"
                    }`}
                    onClick={() => setMainImage(img)}
                  />
                ))}
            </div>
          </div>
        </section>

        <section className="mx-auto my-10 h-auto w-full max-w-7xl divide-y-2 divide-[#2C2C2C] p-5 xl:p-0">
          <div className="mb-10 flex flex-col gap-5">
            <h2 className="text-lg font-medium xl:text-3xl">{data.title}</h2>
            <div className="flex items-center gap-3">
              <p>{data.guests} guests</p>
              <span className="h-1 w-1 rounded-full bg-white"></span>
              <p>{data.bedroom} bedroom</p>
              <span className="h-1 w-1 rounded-full bg-white"></span>
              <p>{data.bed} bed</p>
              <span className="h-1 w-1 rounded-full bg-white"></span>
              <p>{data.bath} bath</p>
            </div>
          </div>

          <ul className="flex h-auto w-full flex-col gap-7 py-10">
            <li className="flex gap-5">
              <i>
                <FiHome className="h-12 w-12 text-primary" />
              </i>
              <p className="flex flex-col gap-1 text-lg font-medium">
                Entire home{" "}
                <span className="text-base font-normal text-fade">
                  You'll have the apartment to yourself
                </span>
              </p>
            </li>
            <li className="flex gap-5">
              <i>
                <MdOutlineDoorFront className="h-12 w-12 text-primary" />
              </i>
              <p className="flex flex-col gap-1 text-lg font-medium">
                Self check-in
                <span className="text-base font-normal text-fade">
                  Check yourself in with the keypad.
                </span>
              </p>
            </li>
          </ul>

          <div className="py-10 text-justify">
            <PortableText
              value={data.content}
              components={myPortableTextComponents}
            />
          </div>

          <div className="flex h-auto w-full flex-col items-center justify-center gap-5">
            <h3 className="my-10 flex flex-col text-center text-xl font-bold xl:text-6xl">
              Your Investment. <span className="text-primary">Your Terms!</span>
            </h3>
            <p className="text-center">
              Flexible Exit. Compounding Returns. We understand investor
              flexibility is key.
              <br /> With our plan and offers, you can:
            </p>

            <div className="grid h-auto w-full grid-cols-1 justify-center gap-10 xl:grid-cols-3">
              {investDetailsData.map((item, index) => (
                <div
                  key={index}
                  className="col-span-1 flex h-[300px] w-full flex-col items-start justify-center gap-5 rounded-[20px] bg-[#252525] p-7 xl:h-[260px] xl:first:col-span-2 xl:last:col-span-2"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="aspect-square h-auto w-[50px]"
                  />
                  <p className="text-lg font-semibold xl:text-2xl">
                    {item.title}
                  </p>
                  <div className="flex h-auto w-full items-start justify-start gap-3">
                    <div className="mt-2 flex h-2 w-2 rounded-full bg-white"></div>
                    <p className="w-full">
                      <span>{item.description}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex h-auto w-full flex-col items-start justify-center gap-5">
              <p className="text-lg font-semibold xl:text-2xl">
                Slots remaining
              </p>
              <div className="flex w-full items-center justify-between">
                <p className="">7 slots total</p>
                <span className="h-8 w-px bg-white/50"></span>
                <p className="">7 slots taken</p>
                <span className="h-8 w-px bg-white/50"></span>
                <p className="">7 slots remaining</p>
              </div>
            </div>

            <InvestCalculator />
          </div>
        </section>
      </main>
    </>
  );
};

export default InvestDetails;
