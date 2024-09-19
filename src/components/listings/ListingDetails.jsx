import axios from "axios";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FadeIn, LoaderMotion } from "../Motion";
import { ClipLoader } from "react-spinners";
import LisitingTexts from "./LisitingTexts";
import Facilities from "../dashboard/Facilities";
import ListingHero from "./ListingHero";
import ListingRules from "./ListingRules";
import { Assets } from "../../assets";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { IoIosStar } from "react-icons/io";
import VideoDisplay from "./VideoDisplay";
import { Helmet } from "react-helmet-async";

const ListingDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const videoUrl = "https://www.youtube.com/watch?v=PnojSH4yDOk";
  const videoTitle = "Your Video Title";

  useEffect(() => {
    // Fetch product data using the product ID from URL params
    setLoading(true);
    axios
      .get(
        `https://cp.raum.africa/store/products/${productId}?currency_code=ngn`
      )
      .then((response) => {
        // Format the price by dividing original_price within variants by 100
        const formattedProduct = {
          ...response.data.product,
          variants: response.data.product.variants.map((variant) => ({
            ...variant,
            original_price: variant.original_price / 100,
          })),
        };
        setProduct(formattedProduct);
        setCurrentImage(formattedProduct.metadata.images[0].url); // Set initial full-width image
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setLoading(false);
      });

    // Fetch reviews data for the product
    axios
      .get(`https://cp.raum.africa/store/products/${productId}/reviews`)
      .then((response) => {
        setReviews(response.data.reviews);
      })
      .catch((error) => {
        console.error("Error fetching reviews data:", error);
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

  const formatDate = (isoString) => {
    const options = { year: "numeric", month: "long" };
    return new Date(isoString).toLocaleDateString(undefined, options);
  };

  const { thumbnail, title, description, metadata, owner } = product;

  return (
    <>
      <Helmet>
        <title>{title} - Raum Africa Listed Shortlets</title>
        <meta name="description" content={description} />
        <meta
          property="og:site_name"
          content={`Raum Africa Listed Shortlets: ${title}`}
        />
        <meta
          property="og:title"
          content="Make money hosting with Raum in Nigeria - Raum Africa Listed Shortlets"
        />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://raum.africa/static/media/raum_favi.0d01f8c1fa4643d291b20d68809af99d.svg"
        />
        <meta
          property="og:url"
          content={`https://raum.africa/admin-dashboard/product/${productId}`}
        />
        <link
          rel="canonical"
          href={`https://raum.africa/admin-dashboard/product/${productId}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="apple-itunes-app"
          content={`app-id=6514297891, app-argument=raum://raum.app.link/`}
          data-rh="true"
        />
      </Helmet>
      <main
        onClick={() => (isFullScreen ? setIsFullScreen(false) : null)}
        className="w-full min-h-screen flex flex-col gap-5 bg-primary_text text-white overflow-hidden relative"
      >
        <FadeIn>
          <ListingHero
            product={product}
            isFullScreen={isFullScreen}
            setIsFullScreen={setIsFullScreen}
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
            thumbnail={thumbnail}
          />
        </FadeIn>
        <FadeIn>
          <section className="w-full max-w-7xl mx-auto h-auto py-5 flex flex-wrap justify-center items-center gap-5 p-5">
            <Facilities metadata={metadata} />
          </section>
        </FadeIn>
        {/* <FadeIn>
          <VideoDisplay videoUrl={videoUrl} videoTitle={videoTitle} />
        </FadeIn> */}
        <FadeIn>
          <section className="w-full h-auto max-w-7xl mx-auto flex justify-between items-start gap-10">
            <LisitingTexts product={product} productId={productId} />
          </section>
        </FadeIn>
        <FadeIn>
          <section className="w-full h-auto border-t border-b border-[#2C2C2C]">
            <div className="w-full h-auto max-w-7xl mx-auto flex flex-col justify-between items-start gap-5 p-5">
              <h3 className="text-base md:text-3xl font-semibold">
                House Rules
              </h3>
              <ListingRules product={product} />
            </div>
          </section>
        </FadeIn>
        <FadeIn>
          <section className="w-full h-auto">
            <div className="w-full h-auto max-w-7xl mx-auto flex flex-col justify-between items-start gap-5 p-5">
              <h3 className="text-base md:text-3xl font-semibold">Reviews</h3>
              <div className="flex gap-5 justify-start items-center">
                <p className="flex gap-2 items-center justify-start">
                  <IoIosStar size={20} className="text-primary" />
                  {reviews[0]?.rating}
                </p>
                |
                <p className="text-sm">
                  {reviews?.length} review{reviews.length > 1 ? "s" : ""}
                </p>
              </div>
              <div className="w-full h-auto grid grid-flow-col gap-5 overflow-x-auto">
                {reviews?.length > 0 ? (
                  reviews?.map((review) => (
                    <div
                      key={review.id}
                      className="w-[280px] md:w-[400px] h-[200px] bg-[#1E1E1E] p-5 rounded md"
                    >
                      <div className="flex gap-5 justify-start items-center">
                        <img
                          src={Assets.raumFavi}
                          alt="logo"
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="text-sm  capitalize">
                            {review?.customer.first_name}{" "}
                            {review.customer.last_name}
                          </p>
                          <p className="text-xs text-gray-400">
                            {formatDate(review?.created_at)}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm py-3">{review?.content}</p>
                    </div>
                  ))
                ) : (
                  <p>No reviews yet.</p>
                )}
              </div>
            </div>
          </section>
        </FadeIn>
        <FadeIn>
          <section className="w-full h-auto border-t border-b border-[#2C2C2C]">
            <div className="max-w-7xl mx-auto flex flex-col justify-between items-start gap-5 p-5">
              <h3 className="text-base md:text-3xl font-semibold">
                {owner.last_name} {owner.first_name}
              </h3>
              <div className="flex gap-10 justify-start items-center">
                <div className="w-[60px]">
                  <img
                    src={thumbnail}
                    alt="raum logo"
                    className="aspect-square object-cover rounded-full"
                  />
                </div>
                <div className="flex gap-5 justify-start item text-primary">
                  <a href="tel:+2348148228901">
                    <FaPhoneAlt size={18} />
                  </a>
                  <a href="mailto:Info@raumgroup.io">
                    <LuMail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
      </main>
    </>
  );
};

export default ListingDetails;
