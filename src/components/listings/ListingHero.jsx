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
    <section className="relative h-[600px] w-full lg:h-[calc(100vh-85px)]">
      <img
        src={currentImage}
        alt={title}
        className="h-full w-full object-cover"
      />
      <Link
        to="/admin-dashboard"
        className="absolute right-5 top-5 z-50 flex items-center justify-start gap-2 rounded-full bg-white p-2 text-black underline underline-offset-1 shadow-2xl md:right-10 md:top-10"
      >
        <IoIosArrowRoundBack size={28} />
      </Link>
      <div className="absolute inset-0 z-10 flex h-full w-full flex-col items-start justify-end bg-gradient-to-b from-white/0 from-50% to-black/70 to-90% p-5 md:p-10">
        <h1 className="text-lg font-bold drop-shadow-md md:text-5xl">
          {title}
        </h1>
        <p className="w-[250px] truncate text-base font-normal md:text-lg">
          {product.description}
        </p>
        <div className="w-full overflow-hidden">
          <p className="my-3 flex items-center justify-start gap-3 text-sm">
            {metadata.rating_summary?.rating ? (
              <>
                <IoIosStar size={20} className="text-white" />
                <span>{metadata.rating_summary?.rating} .</span>
              </>
            ) : null}{" "}
            <span className="rounded-full bg-white p-1 px-3 text-black">
              {" "}
              {generalAddressArea}
            </span>
          </p>
          <div className="no-scrollbar flex h-auto w-2/3 gap-3 overflow-x-auto">
            {metadata.images.map((image, index) => (
              <div
                key={index}
                className="h-[40px] w-[50px] cursor-pointer rounded-md md:h-[100px] md:w-[150px]"
              >
                <img
                  src={image.url}
                  alt={title}
                  className="h-full w-full rounded-lg object-cover"
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
