import React from "react";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const ListingHero = ({
  product,
  isFullScreen,
  setIsFullScreen,
  currentImage,
  setCurrentImage,
}) => {
  const { title, generalAddressArea, images } = product;
  return (
    <section
      id="fullwidth-image"
      className={`w-full mx-auto relative p-5 ${
        isFullScreen ? "full-screen" : "h-[300px] md:h-[650px]"
      }`}
      style={{
        backgroundImage: `url(${currentImage})`, // Use currentImage state for the URL
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={() => setIsFullScreen(!isFullScreen)} // Toggle full-screen mode
    >
      <Link
        to="/admin-dashboard"
        className="absolute top-3 md:top-10 right-3 md:right-10 z-50 p-5 underline underline-offset-1 flex gap-2 justify-start items-center"
      >
        <IoIosArrowRoundBack size={20} />
        back
      </Link>
      <div className="w-full h-full absolute inset-0 bg-black/20"></div>
      <div className="relative w-full h-full max-w-7xl mx-auto flex flex-col gap-2 justify-end items-start">
        <h1 className="font-bold text-base md:text-4xl drop-shadow-md">
          {title}
        </h1>
        <div>
          <p className="text-xs flex gap-1 justify-center items-center">
            <IoIosStar size={18} className="text-yellow-400" />
            5.0 <span className="underline pl-2">7 reviews</span>
            <span className="underline pl-2"> {generalAddressArea}</span>
          </p>
        </div>
        <div className="flex gap-5 overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[50px] md:w-[150px] h-[40px] md:h-[150px] border-4 border-white/40 rounded-md cursor-pointer"
              style={{
                backgroundImage: `url(${image.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the full-width image click event
                setCurrentImage(image.url); // Set clicked image as full-width image
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListingHero;
