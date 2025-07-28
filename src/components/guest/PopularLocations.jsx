import React from "react";
import { Link } from "react-router-dom";
import { Assets } from "../../assets";
import { FadeIn } from "../Motion";

const PopularLocations = () => {
  const locations = [
    {
      name: "Lekki, Lagos",
      image: Assets.popular_locations_1,
      properties: "120+",
    },
    {
      name: "Ikeja, Lagos",
      image: Assets.popular_locations_2,
      properties: "120+",
    },
    {
      name: "Ikoyi, Lagos",
      image: Assets.popular_locations_3,
      properties: "120+",
    },
    {
      name: "Victoria Island, Lagos",
      image: Assets.popular_locations_4,
      properties: "120+",
    },
  ];
  return (
    <FadeIn>
      <main className="flex h-auto w-full flex-col items-center justify-center gap-10 p-4">
        <h3 className="text-xl font-semibold xl:text-4xl">Popular locations</h3>
        <p className="text-center text-lg xl:text-2xl">
          Explore the most sought-after neighborhoods with the highest demand
          and
          <br />
          best investment potential.
        </p>
        <section className="mx-auto grid h-auto w-full max-w-7xl grid-cols-1 gap-10 p-4 xl:grid-cols-2">
          {locations.map((location, index) => (
            <div
              key={index}
              className="flex h-[500px] w-full flex-col rounded-xl border border-[rgb(58,58,58)]"
            >
              <div className="h-4/5 w-full">
                <img
                  src={location.image}
                  alt={location.name}
                  className="h-full w-full rounded-t-xl object-cover"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-center gap-4 p-5">
                <p className="text-lg font-medium xl:text-2xl">
                  {location.name}
                </p>
                <p className="flex w-full items-center justify-between text-base text-[#acacac]">
                  Properties{" "}
                  <span className="text-white">{location.properties}</span>
                </p>
              </div>
            </div>
          ))}
        </section>
        {/* <Link
          to="/admin-dashboard"
          className="rounded-full border border-[rgb(58,58,58)] bg-transparent p-4 px-10"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          View all locations
        </Link> */}
      </main>
    </FadeIn>
  );
};

export default PopularLocations;
