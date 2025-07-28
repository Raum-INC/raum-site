import React from "react";
import { Assets } from "../../assets";
import SearchBar from "../SearchBar";

const NewHero = () => {
  return (
    <main className="relative h-[500px] w-full text-center text-5xl text-black xl:h-screen">
      <div className="absolute h-full w-full bg-gradient-to-t from-black/85 from-60% to-white/0 to-95%"></div>

      <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center gap-8 p-4 text-white">
        <h1
          itemProp="Title"
          className="hero-title text-center text-2xl font-extrabold md:text-5xl lg:text-[72px] lg:leading-[87px]"
        >
          Find your Dream stay.
          <br /> Fast, Easy and Trusted
        </h1>
        <p
          itemType="description"
          className="hero-description text-bgFade w-4/5 text-center text-sm font-normal leading-[20px] md:text-xl"
        >
          Discover verified shortlets near you
          <br /> List your properties, fast, easy and efficiently
        </p>
        <div className="flex h-auto w-full items-center justify-center">
          <SearchBar />
        </div>
      </div>

      <div className="h-full w-full">
        <img src={Assets.hero_image} className="h-full w-full object-cover" />
      </div>
    </main>
  );
};

export default NewHero;
