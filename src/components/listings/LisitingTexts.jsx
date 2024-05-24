import React from "react";
import ListingReserve from "./ListingReserve";
import { Assets } from "../../assets";

const LisitingTexts = ({ product }) => {
  const { description, metadata, owner, variants, thumbnail, title } = product;
  return (
    <>
      <div className="w-full h-full text-white divide-y-2 divide-white/30 p-5">
        <div className="w-full pb-5 flex justify-between items-center">
          <div>
            <h2 className="font-medium text-sm md:text-2xl">
              Entire rental unit hosted by{" "}
              <span className="capitalize">{owner.first_name}</span>
            </h2>
            <div className="w-full flex divide-x-2 text-xs">
              <p className="pr-2">{metadata.parameters.beds} Beds</p>
              <p className="px-2">{metadata.parameters.baths} Baths</p>
            </div>
          </div>
          <div>
            <img
              src={thumbnail}
              alt={title}
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center">
          <ul className=" py-10 flex flex-col gap-7">
            <li className="flex gap-5">
              <i>
                <img
                  className="text-white"
                  src={Assets.homeicon}
                  alt="home-icon"
                />
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
                <img src={Assets.dooricon} alt="home-icon" />
              </i>
              <p className="flex flex-col gap-1 text-lg font-medium">
                Self check-in{" "}
                <span className="text-base font-normal text-fade">
                  Check yourself in with the keypad.
                </span>
              </p>
            </li>
            <li className="flex gap-5 items-center text-lg font-medium">
              <i>
                <img
                  src={Assets.calendar}
                  alt="home-icon"
                  className="w-12 h-12"
                />
              </i>
              <p>Free cancellation before Feb before 48 hours of due date</p>
            </li>
          </ul>
          <ListingReserve variants={variants} />
        </div>

        <div className="w-full hyphens-auto py-10 text-base divide-y-2 divide-white/30">
          <p className="pb-10">{description}</p>
          <div className="w-full h-auto"></div>
        </div>
      </div>
    </>
  );
};

export default LisitingTexts;
