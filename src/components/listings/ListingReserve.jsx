import React from "react";
import { PiFlag } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";

const ListingReserve = ({ variants, metadata, productId }) => {
  return (
    <main className="w-full md:w-2/5 h-full text-white my-10">
      <div className="w-full h-auto rounded-md shadow-xl border border-white/30 bg-[#232323] p-5">
        <div className="w-full h-auto flex justify-between items-center pb-4">
          <p className="text-xl font-medium">
            N{variants[0].original_price.toLocaleString("en-NG")}{" "}
            <span className="text-base"> / night</span>
          </p>
          <p className="flex justify-start items-center gap-2">
            {metadata.rating_summary?.rating ? (
              <>
                <FaRegStar className="text-primary" />
                <span>{metadata.rating_summary?.rating} .</span>
              </>
            ) : null}{" "}
            {/* <span className="font-medium underline underline-offset-0">
              7 reviews
            </span> */}
          </p>
        </div>
        <div className="w-full h-14 mb-3 rounded-md bg-primary">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/message/ZVNY4C3AJ6F5I1"
            className="text-white w-full h-full flex justify-center items-center"
          >
            Reserve
          </a>
        </div>
        <p className="text-center pb-3 text-fade">You won't be charged yet</p>
        <div className="w-full h-[0.5px] bg-primary/10"></div>
      </div>
      <button className="w-full pt-3 text-center text-faded underline underline-offset-4 flex justify-center items-center gap-3">
        <PiFlag />
        Report this listing
      </button>
    </main>
  );
};

export default ListingReserve;
