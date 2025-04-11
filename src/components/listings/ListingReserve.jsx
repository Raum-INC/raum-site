import React from "react";
import { PiFlag } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ListingReserve = ({ variants, metadata, productId, product }) => {
  return (
    <main className="my-10 h-full w-full text-white md:w-2/5">
      <div className="h-auto w-full rounded-md border border-white/30 bg-[#232323] p-5 shadow-xl">
        <div className="flex h-auto w-full items-center justify-between pb-4">
          <p className="text-xl font-medium">
            N{variants[0].original_price.toLocaleString("en-NG")}{" "}
            <span className="text-base"> / night</span>
          </p>
          <p className="flex items-center justify-start gap-2">
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
        <div className="mb-3 h-14 w-full rounded-md bg-primary">
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://api.whatsapp.com/send?phone=2348146072247&text=${encodeURI(`Hi, I'm interested in making a reservation for ${product.title}\n\nhttps://raum.africa/admin-dashboard/product/${productId}\n\n`)}`}
            className="flex h-full w-full items-center justify-center text-white"
          >
            Reserve
          </a> */}
          <Link
            to={`/admin-dashboard/product/reserve/${productId}`}
            className="flex h-full w-full items-center justify-center text-white"
          >
            Reserve
          </Link>
        </div>
        <p className="pb-3 text-center text-fade">You won't be charged yet</p>
        <div className="h-[0.5px] w-full bg-primary/10"></div>
      </div>
      <button className="flex w-full items-center justify-center gap-3 pt-3 text-center text-faded underline underline-offset-4">
        <PiFlag />
        Report this listing
      </button>
    </main>
  );
};

export default ListingReserve;
