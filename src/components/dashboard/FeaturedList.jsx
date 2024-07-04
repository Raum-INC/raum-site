// FeaturedList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import EmblaCarousel from "./EmblaCarousel";
import "../../embla.css"; // Ensure you include the CSS for Embla

const FeaturedList = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios
      .get("https://cp.raumhq.co/store/products?currency_code=ngn")
      .then((response) => {
        // Filter only the featured products
        const featuredListings = response.data.products.filter(
          (product) =>
            product.tags && product.tags.some((tag) => tag.value === "Featured")
        );
        // Limit the number of listings to 10
        const limitedFeaturedListings = featuredListings.slice(0, 10);
        // Format the price by dividing original_price by 100
        const formattedListings = limitedFeaturedListings.map((listing) => ({
          ...listing,
          variants: listing.variants.map((variant) => ({
            ...variant,
            original_price: variant.original_price / 100,
          })),
        }));
        setListings(formattedListings);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const renderSlides = () =>
    listings.map((listing, index) => (
      <Link
        key={index}
        to={`/admin-dashboard/product/${listing.id}`}
        className="block w-full h-[230px] md:h-[370px] rounded-xl relative overflow-hidden"
      >
        <div
          style={{
            backgroundImage: `url("${listing.thumbnail}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-full"
        >
          <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black/60 to-white/0"></div>
          <div className="w-full h-full relative z-30 flex justify-between items-end p-5">
            {listing.metadata.rating_summary?.rating ? (
              <div className="w-auto h-6 px-2 flex justify-center items-center gap-1 bg-black/40 absolute top-5 right-5 rounded-md text-white text-center">
                <IoIosStar className="text-yellow-400" />
                <p className="text-sm md:text-base">
                  {listing.metadata.rating_summary?.rating}
                </p>
              </div>
            ) : null}
            <div className="flex flex-col gap-2 ">
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
              <p className="text-xs flex gap-1 items-center whitespace-nowrap">
                <MdLocationPin /> {listing.generalAddressArea}
              </p>
            </div>
          </div>
        </div>
      </Link>
    ));

  return (
    <main className="w-full h-auto bg-primary_text p-5 md:px-9">
      <h1 className="text-4xl text-white font-bold pb-5">Featured Listings</h1>
      <EmblaCarousel slides={renderSlides()} />
    </main>
  );
};

export default FeaturedList;
