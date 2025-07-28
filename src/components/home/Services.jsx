import React from "react";
import { services } from "../data";
import { motion } from "framer-motion";
import { Assets } from "../../assets";
import { Link } from "react-router-dom";

const Services = () => {
  const containerVariant = {
    hidden: {
      opacity: 0,
      translateY: -100,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.5,
        delay: 0.7,
      },
    },
  };

  return (
    <motion.main
      itemScope
      itemType="https://raum.africa/"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="h-auto w-full p-8"
    >
      <section className="mx-auto my-10 flex w-full max-w-6xl flex-col items-center justify-center gap-10">
        <h3 className="text-xl font-semibold xl:text-4xl">Our services</h3>
        <div className="grid h-auto w-full grid-cols-2 gap-5 xl:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex h-[150px] w-full flex-col items-start justify-center gap-2 overflow-hidden rounded-lg xl:h-[280px]"
            >
              {service.image && (
                <div
                  className={`${service.image === Assets.service_6 ? "flex h-full w-full flex-col items-start justify-end gap-3" : "h-full w-full"}`}
                >
                  <img
                    itemProp="image"
                    src={service.image}
                    alt={service.alt}
                    className={`${service.image === Assets.service_6 ? "h-auto w-[150px]" : "h-full w-full object-cover"}`}
                  />
                  {service.text && <p className="w-3/4">{service.text}</p>}
                </div>
              )}
              {service.title && (
                <div className="flex h-full w-full flex-col items-start justify-between gap-2 py-1">
                  <div className="h-auto w-[18px] xl:w-[75px]">
                    <img
                      itemProp="image"
                      src={service.icon}
                      alt={service.alt}
                      className="h-auto w-full"
                    />
                  </div>
                  <h2
                    itemProp="title"
                    className="text-sm font-bold md:text-2xl"
                  >
                    {service.title}
                  </h2>
                  <p
                    itemProp="description"
                    className="text-left text-[8px] font-normal md:text-base"
                  >
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="text-primary underline"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    More details
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </motion.main>
  );
};

export default Services;
