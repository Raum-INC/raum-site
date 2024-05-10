import axios from "axios";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoaderMotion } from "../Motion";
import { ClipLoader } from "react-spinners";
import { ListingCarousel } from "./ListingCarousel";
import LisitingTexts from "./LisitingTexts";
import { IoIosWifi } from "react-icons/io";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { CgGym } from "react-icons/cg";
import { GoShieldLock } from "react-icons/go";
import { MdPool } from "react-icons/md";
import { LuParkingSquare } from "react-icons/lu";
import { MdOutlineOutdoorGrill } from "react-icons/md";

const ListingDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch product data using the product ID from URL params
    setLoading(true);
    axios
      .get(`https://cp.raumhq.co/store/products/${productId}?currency_code=ngn`)
      .then((response) => {
        setProduct(response.data.product);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setLoading(false);
      });
  }, [productId]);

  if (!product) {
    return (
      <AnimatePresence>
        {loading && (
          <LoaderMotion>
            <ClipLoader
              color="#00F"
              loading={true}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </LoaderMotion>
        )}
      </AnimatePresence>
    );
  }

  const { thumbnail, title, generalAddressArea, images, metadata } = product;

  return (
    <main className="w-full min-h-screen flex flex-col gap-5 bg-white text-black">
      <section className="w-full h-auto max-w-7xl mx-auto  py-5">
        <h1 className="text-3xl font-medium">{title}</h1>
        <div className="w-full h-auto py-3 flex justify-between items-center">
          <div className="flex gap-3">
            <p>5.0</p>
            <p>7 reviews</p>
            <p>{generalAddressArea}</p>
          </div>
          <div className="flex gap-3">
            <p>Share</p>
            <p>Save</p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl h-[600px] mx-auto ">
        <ListingCarousel carousel={images} />
      </section>
      <main className="w-full max-w-7xl mx-auto h-auto py-5 grid grid-flow-col gap-5">
        {metadata.facilities.wifi && (
          <div className="p-3 text-center border border-primary/20 font-medium flex justify-center items-center gap-4">
            <IoIosWifi size={25} className="text-primary" /> Free WI-FI
          </div>
        )}
        {metadata.facilities.tv && (
          <div className="p-3 text-center border border-primary/20 font-medium flex justify-center items-center gap-4">
            <PiTelevisionSimpleLight size={25} className="text-primary" /> TV
          </div>
        )}
        {metadata.facilities.gym && (
          <div className="p-3 text-center border border-primary/20 font-medium flex justify-center items-center gap-4">
            <CgGym size={25} className="text-primary" /> Gym & fitness spot
          </div>
        )}
        {metadata.facilities.security && (
          <div className="p-3 text-center border border-primary/20 font-medium flex justify-center items-center gap-4">
            <GoShieldLock size={25} className="text-primary" /> Security
          </div>
        )}
        {metadata.facilities.swimming && (
          <div className="p-3 text-center border border-primary/20 font-medium flex justify-center items-center gap-4">
            <MdPool size={25} className="text-primary" /> Swimming pool
          </div>
        )}
        {metadata.facilities.parking && (
          <div className="p-3 text-center border border-primary/20 font-medium flex justify-center items-center gap-4">
            <LuParkingSquare size={25} className="text-primary" /> Parking
          </div>
        )}
        {metadata.facilities.barbecue && (
          <div className="p-3 text-center border border-primary/20 font-medium flex justify-center items-center gap-4">
            <MdOutlineOutdoorGrill size={25} className="text-primary" />{" "}
            Barbecue grill
          </div>
        )}
      </main>

      <section className="w-full h-auto max-w-7xl mx-auto flex justify-between items-start gap-10">
        <LisitingTexts product={product} />
      </section>

      <section className="w-full max-w-7xl h-[600px] mx-auto ">
        <h3 className="py-5 text-2xl font-medium">Your personal space</h3>
        <div className="w-1/2">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <p className="pt-2">Bedroom</p>
        <p>1 King size bed</p>
      </section>
    </main>
  );
};

export default ListingDetails;
