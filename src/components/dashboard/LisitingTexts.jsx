import React from "react";
import ListingReserve from "./ListingReserve";
import { Assets } from "../../assets";

const LisitingTexts = ({ product }) => {
  const { description, metadata, owner, variants } = product;
  return (
    <>
      <div className="w-3/5 h-full text-black divide-y-2">
        <div className="w-full pb-5">
          <div>
            <h2 className="font-medium text-2xl">
              Entire rental unit hosted by{" "}
              <span className="capitalize">{owner.first_name}</span>
            </h2>
            <div className="w-full flex divide-x-2">
              <p className="pr-2">{metadata.parameters.beds} Beds</p>
              <p className="px-2">{metadata.parameters.baths} Baths</p>
            </div>
          </div>
        </div>
        <ul className=" py-10 flex flex-col gap-2">
          <li className="flex gap-5">
            <i>
              <img src={Assets.homeicon} alt="home-icon" />
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
              <img src={Assets.calendar} alt="home-icon" />
            </i>
            Free cancellation before Feb before 48 hours of due date
          </li>
        </ul>
        <div className="w-9/12 text-balance py-10">{description}</div>
      </div>
      <ListingReserve variants={variants} />
    </>
  );
};

export default LisitingTexts;
