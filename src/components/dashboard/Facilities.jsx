import React from "react";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { CgGym } from "react-icons/cg";
import { GoShieldLock } from "react-icons/go";
import { MdPool } from "react-icons/md";
import { LuParkingSquare } from "react-icons/lu";
import { MdOutlineOutdoorGrill } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";

const Facilities = ({ metadata }) => {
  const facilitiesList = [
    {
      key: "wifi",
      label: "Free WI-FI",
      icon: <IoIosWifi size={25} className="text-white" />,
    },
    {
      key: "tv",
      label: "TV",
      icon: <PiTelevisionSimpleLight size={25} className="text-white" />,
    },
    {
      key: "gym",
      label: "Gym & fitness spot",
      icon: <CgGym size={25} className="text-white" />,
    },
    {
      key: "security",
      label: "Security",
      icon: <GoShieldLock size={25} className="text-white" />,
    },
    {
      key: "swimming",
      label: "Swimming pool",
      icon: <MdPool size={25} className="text-white" />,
    },
    {
      key: "parking",
      label: "Parking",
      icon: <LuParkingSquare size={25} className="text-white" />,
    },
    {
      key: "barbecue",
      label: "Barbecue grill",
      icon: <MdOutlineOutdoorGrill size={25} className="text-white" />,
    },
  ];

  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-3 justify-start items-start gap-2">
      {facilitiesList.map(
        (facility) =>
          metadata.facilities[facility.key] && (
            <div
              key={facility.key}
              className="p-3 whitespace-nowrap border border-white/60 rounded-md font-medium flex justify-start md:justify-center items-center gap-5 md:gap-10"
            >
              <p>{facility.icon}</p>
              <p>{facility.key === "gym" ? "Gym" : `${facility.label}`}</p>
            </div>
          )
      )}
    </div>
  );
};

export default Facilities;
