import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";

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
        setListings(limitedFeaturedListings);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <main className="w-full h-auto bg-white p-5">
      <h1 className="text-4xl text-black font-bold pb-5">Featured Listings</h1>
      <div className="w-full h-full overflow-x-auto no-scrollbar grid grid-flow-col gap-5 pr-32">
        {listings.map((listing, index) => (
          <Link
            key={index}
            to={`/admin-dashboard/product/${listing.id}`}
            className="first:w-[725px] w-[350px] h-[350px] rounded-xl relative overflow-hidden"
          >
            <div
              style={{
                backgroundImage: `url(${listing.thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-full h-full"
            >
              <div className="w-12 h-6 flex justify-center items-center gap-1 bg-black/40 absolute top-5 right-5 rounded-md text-white text-center">
                <IoIosStar className="text-yellow-400" />
                <p className="">4.8</p>
              </div>
              <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black/60 to-white/0"></div>
              <div className="w-full h-full relative z-30 flex justify-between items-end p-5">
                <div className="flex flex-col gap-2 ">
                  <h2
                    className={`${
                      index === 0 ? "text-xl" : "text-lg"
                    }  font-medium text-white`}
                  >
                    {listing.title}
                  </h2>
                  <p
                    className={`${
                      index === 0 ? "text-lg" : "text-base"
                    }  text-[#FF0000]`}
                  >
                    {/* Assuming there's a price property in your data */}N
                    {listing.variants[0].original_price.toLocaleString("en-NG")}
                  </p>
                </div>
                <div>
                  <p className="text-sm">{listing.generalAddressArea}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default FeaturedList;
