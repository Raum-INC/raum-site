import React, { useState } from "react";
import { IoIosStar, IoMdShare } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";

const ListingHero = ({
  product,
  isFullScreen,
  setIsFullScreen,
  currentImage,
  setCurrentImage,
  thumbnail,
}) => {
  const { title, generalAddressArea, metadata } = product;
  const currentUrl = window.location.href;
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: "Check out this listing!",
          url: currentUrl,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset text after 2s
    }
  };

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
        <div className="flex items-center gap-4">
          <p className="my-3 flex items-center justify-start gap-3 text-sm">
            {metadata.rating_summary?.rating ? (
              <>
                <IoIosStar size={20} className="text-white" />
                <span>{metadata.rating_summary?.rating} .</span>
              </>
            ) : null}{" "}
            <span className="rounded-full bg-white p-1 px-3 text-black">
              {generalAddressArea}
            </span>
          </p>
          {/* Share Button */}
          <button
            onClick={handleShare}
            className={`flex items-center gap-2 rounded-full bg-white p-1 px-3 text-black shadow-md transition-all duration-300 hover:bg-primary hover:text-white ${
              copied ? "bg-primary text-black" : ""
            }`}
          >
            <MdContentCopy size={18} />
            <span className="hidden md:inline">
              {copied ? "Link Copied!" : "Share Listing"}
            </span>
          </button>
        </div>
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
                onClick={() => setCurrentImage(image.url)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListingHero;
