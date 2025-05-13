import React from "react";
import ListingReserve from "./ListingReserve";
import { Assets } from "../../assets";
import { FiHome } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";

const LisitingTexts = ({ product, productId }) => {
  const { description, metadata, owner, variants, thumbnail, title } = product;
  return (
    <>
      <div className="h-full w-full divide-y-2 divide-white/30 p-5 text-white">
        <div className="flex w-full items-center justify-between pb-5">
          <div>
            <h2 className="text-sm font-medium md:text-2xl">
              Entire rental unit hosted by{" "}
              <span className="capitalize">
                {owner.last_name} {owner.first_name}
              </span>
            </h2>
            <ul className="flex w-full list-disc gap-3 text-xs">
              {Object.entries(metadata.parameters)
                .filter(([_, value]) => value > 0)
                .map(([key, value]) => (
                  <li
                    key={key}
                    className="px-2 capitalize first:ml-3 first:appearance-none"
                  >
                    {key}: {value}
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <img
              src={thumbnail}
              alt={title}
              className="h-10 w-10 rounded-full"
            />
          </div>
        </div>

        <div className="flex h-auto w-full flex-col items-center justify-between md:flex-row">
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

            <li className="flex items-center gap-5 text-lg font-medium">
              <i>
                <FiCalendar className="h-12 w-12 text-primary" />
              </i>
              <p>Free cancellation before Feb before 48 hours of due date</p>
            </li>
          </ul>
          <ListingReserve
            product={product}
            productId={productId}
            metadata={metadata}
            variants={variants}
          />
        </div>

        <div className="w-full divide-y-2 divide-white/30 hyphens-auto py-10 text-base">
          <p className="pb-10">{description}</p>
          <div className="h-auto w-full"></div>
        </div>
      </div>
    </>
  );
};

export default LisitingTexts;
