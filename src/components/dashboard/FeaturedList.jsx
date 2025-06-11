// FeaturedList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import EmblaCarousel from "./EmblaCarousel";
import "../../embla.css"; // Ensure you include the CSS for Embla

const FeaturedList = ({ listings }) => {
  const renderSlides = () =>
    listings.map((listing, index) => (
      <Link
        key={index}
        to={`/admin-dashboard/product/${listing.id}`}
        className="relative block h-[230px] w-full overflow-hidden rounded-xl md:h-[370px]"
      >
        <div
          style={{
            backgroundImage: `url("${listing.thumbnail}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-full w-full"
        >
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/60 to-white/0"></div>
          <div className="relative z-30 flex h-full w-full items-end justify-between p-5">
            {listing.metadata.rating_summary?.rating ? (
              <div className="absolute right-5 top-5 flex h-6 w-auto items-center justify-center gap-1 rounded-md bg-black/40 px-2 text-center text-white">
                <IoIosStar className="text-yellow-400" />
                <p className="text-sm md:text-base">
                  {listing.metadata.rating_summary?.rating}
                </p>
              </div>
            ) : null}
            <div className="flex flex-col gap-2">
              <h2
                className={`${
                  index === 0 ? "md:text-xl" : "md:text-lg"
                } text-base font-medium text-white`}
              >
                {listing.title}
              </h2>
              <p className={`text-xs text-[#1D88FE]`}>
                N{listing.variants[0].original_price.toLocaleString("en-NG")}
              </p>
            </div>
            <div>
              <p className="flex items-center gap-1 whitespace-nowrap text-xs">
                <MdLocationPin /> {listing.generalAddressArea}
              </p>
            </div>
          </div>
        </div>
      </Link>
    ));

  return (
    <main className="h-auto w-full bg-primary_text p-5 md:px-9">
      <h1 className="pb-5 text-4xl font-bold text-white">Featured Listings</h1>
      <EmblaCarousel slides={renderSlides()} />
    </main>
  );
};

export default FeaturedList;
