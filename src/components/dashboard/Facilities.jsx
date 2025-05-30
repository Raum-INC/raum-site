import React from "react";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { CgGym } from "react-icons/cg";
import { GoShieldLock } from "react-icons/go";
import { MdPool } from "react-icons/md";
import { LuSquareParking } from "react-icons/lu";
import { MdOutlineOutdoorGrill } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { TbDeviceComputerCamera } from "react-icons/tb";
import { PiWashingMachineLight } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { LiaHotTubSolid } from "react-icons/lia";
import { BiCameraMovie } from "react-icons/bi";

const Facilities = ({ metadata }) => {
  const facilitiesList = [
    {
      key: "wifi",
      label: "Free WI-FI",
      icon: <IoIosWifi size={20} className="text-white" />,
    },
    {
      key: "tv",
      label: "TV",
      icon: <PiTelevisionSimpleLight size={20} className="text-white" />,
    },
    {
      key: "washer",
      label: "Washing Machine",
      icon: <PiWashingMachineLight size={20} className="text-white" />,
    },
    {
      key: "gym",
      label: "Gym & fitness spot",
      icon: <CgGym size={20} className="text-white" />,
    },
    {
      key: "security-camera",
      label: "Security",
      icon: <GoShieldLock size={20} className="text-white" />,
    },
    {
      key: "pool",
      label: "Swimming pool",
      icon: <MdPool size={20} className="text-white" />,
    },
    {
      key: "parking",
      label: "Parking",
      icon: <LuSquareParking size={20} className="text-white" />,
    },
    {
      key: "bbq-grill",
      label: "Barbecue grill",
      icon: <MdOutlineOutdoorGrill size={20} className="text-white" />,
    },
    {
      key: "air-conditioning",
      label: "AC",
      icon: <TbAirConditioning size={20} className="text-white" />,
    },
    {
      key: "hot-tub",
      label: "Hot Tub",
      icon: <LiaHotTubSolid size={20} className="text-white" />,
    },
    {
      key: "cinema",
      label: "Cinema",
      icon: <BiCameraMovie size={20} className="text-white" />,
    },
  ];

  return (
    <div className="grid w-full grid-cols-2 items-start justify-start gap-2 lg:grid-cols-3">
      {facilitiesList.map(
        (facility) =>
          metadata.facilities[facility.key] && (
            <div
              key={facility.key}
              className="flex items-center justify-start gap-5 whitespace-nowrap rounded-md border border-white/60 p-3 font-medium md:justify-center"
            >
              <p>{facility.icon}</p>
              <p className="text-xs md:text-base">
                {facility.key === "gym" ? "Gym" : `${facility.label}`}
              </p>
            </div>
          ),
      )}
    </div>
  );
};

export default Facilities;
