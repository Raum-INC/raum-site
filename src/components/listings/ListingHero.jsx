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
  thumbnail,
}) => {
  const { title, generalAddressArea, metadata } = product;
  return (
    <section className="w-full h-[calc(100vh-85px)] relative">
      <img
        src={currentImage}
        alt={title}
        className="w-full h-full object-cover"
      />
      <Link
        to="/admin-dashboard"
        className="absolute top-3 md:top-10 right-3 md:right-10 z-50 bg-white text-black rounded-full p-2 underline underline-offset-1 flex gap-2 justify-start items-center shadow-2xl"
      >
        <IoIosArrowRoundBack size={40} />
      </Link>
      <div className="w-full h-full absolute inset-0 z-10 bg-gradient-to-b from-50% from-white/0 to-90% to-black/70 p-5 md:p-10 flex flex-col justify-end items-start">
        <h1 className="font-bold text-lg md:text-5xl drop-shadow-md">
          {title}
        </h1>
        <p className="text-base md:text-lg font-normal w-[250px] truncate">
          {product.description}
        </p>
        <div className="w-full overflow-hidden">
          <p className="text-sm flex gap-3 my-3 justify-start items-center">
            {metadata.rating_summary?.rating ? (
              <>
                <IoIosStar size={20} className="text-white" />
                <span>{metadata.rating_summary?.rating} .</span>
              </>
            ) : null}{" "}
            <span className="bg-white text-black p-1 px-3 rounded-full">
              {" "}
              {generalAddressArea}
            </span>
          </p>
          <div className="w-2/3 h-auto overflow-x-auto no-scrollbar flex gap-3">
            {metadata.images.map((image, index) => (
              <div
                key={index}
                className="w-[50px] md:w-[150px] h-[40px] md:h-[100px] rounded-md cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={title}
                  className="w-full h-full object-cover rounded-lg"
                  onClick={(e) => {
                    setCurrentImage(image.url);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingHero;
