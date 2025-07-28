import React from "react";
import useDashboardData from "../../hooks/useDashboardData";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FadeIn } from "../Motion";

const HomeFeaturedListings = () => {
  const { listings } = useDashboardData();
  return (
    <FadeIn>
      <main className="my-10 flex h-auto w-full flex-col items-start justify-center gap-5 p-4 px-8 md:p-4 md:px-12">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-xl font-semibold xl:text-4xl">
            Featured properties
          </h2>
          <Link
            to="/admin-dashboard"
            className="text-base font-bold text-primary underline underline-offset-4 xl:text-2xl"
          >
            See all
          </Link>
        </div>
        <div className="no-scrollbar grid h-full w-full grid-cols-2 gap-5 md:flex md:overflow-x-auto">
          {listings.map((product, index) => (
            <Link
              to={`/admin-dashboard/product/${product.id}`}
              key={index}
              className="flex h-[240px] flex-shrink-0 flex-col items-start justify-start gap-5 rounded-2xl border border-secondary/10 bg-bkg p-3 md:h-[315px] md:w-[260px] md:gap-3"
            >
              <img
                src={product.thumbnail}
                alt="Category"
                className="aspect-video h-full w-full rounded-md object-cover"
              />
              <div className="flex w-full items-center justify-between text-white">
                <div className="space-y-2">
                  <h3 className="md:text-md line-clamp-2 w-4/5 text-xs font-bold md:w-auto">
                    {product.title}
                  </h3>
                  <p className="text-sm font-semibold md:text-lg">
                    N
                    {product.variants[0].original_price.toLocaleString("en-NG")}
                  </p>
                  <p className="flex items-center justify-start gap-2 text-xs text-fade">
                    <MdLocationPin />
                    Lekki, Lagos
                  </p>
                </div>
                <div>
                  <i className="flex h-10 w-10 items-center justify-center rounded-md bg-[#0000FF0A]">
                    <CiHeart size={25} className="text-[#FF0000]" />
                  </i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </FadeIn>
  );
};

export default HomeFeaturedListings;
