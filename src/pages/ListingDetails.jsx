import axios from "axios";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FadeIn, LoaderMotion } from "../components/Motion";
import { ClipLoader } from "react-spinners";
import LisitingTexts from "../components/listings/LisitingTexts";
import Facilities from "../components/dashboard/Facilities";
import ListingHero from "../components/listings/ListingHero";
import ListingRules from "../components/listings/ListingRules";
import { Assets } from "../assets";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { IoIosStar } from "react-icons/io";
// import VideoDisplay from "../components/listings/VideoDisplay";
import { Helmet } from "react-helmet-async";
// import { useAttribution } from "../home/Download";

const ListingDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  // const {appleAttribution} = useAttribution();

  // const videoUrl = "https://www.youtube.com/watch?v=PnojSH4yDOk";
  // const videoTitle = "Your Video Title";

  useEffect(() => {
    // Fetch product data using the product ID from URL params
    setLoading(true);
    axios
      .get(
        `https://staging-cp.raum.africa/store/products/${productId}?currency_code=ngn`,
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
      .get(`https://staging-cp.raum.africa/store/products/${productId}/reviews`)
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
        {/* app-argument isn't available to app clips*/}
        <meta
          name="apple-itunes-app"
          content={`app-id=6514297891, app-argument=raum://raum.app.link/admin-dashboard/product/${productId}, app-clip-bundle-id=com.raumhq.raum.Clip, app-clip-display=card`}
          data-rh="true"
        />
      </Helmet>
      <main
        onClick={() => (isFullScreen ? setIsFullScreen(false) : null)}
        className="relative flex min-h-screen w-full flex-col gap-5 overflow-hidden bg-primary_text text-white"
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
          <section className="mx-auto flex h-auto w-full max-w-7xl flex-wrap items-center justify-center gap-5 p-5 py-5">
            <Facilities metadata={metadata} />
          </section>
        </FadeIn>
        {/* <FadeIn>
          <VideoDisplay videoUrl={videoUrl} videoTitle={videoTitle} />
        </FadeIn> */}
        <FadeIn>
          <section className="mx-auto flex h-auto w-full max-w-7xl items-start justify-between gap-10">
            <LisitingTexts product={product} productId={productId} />
          </section>
        </FadeIn>
        <FadeIn>
          <section className="h-auto w-full border-b border-t border-[#2C2C2C]">
            <div className="mx-auto flex h-auto w-full max-w-7xl flex-col items-start justify-between gap-5 p-5">
              <h3 className="text-base font-semibold md:text-3xl">
                House Rules
              </h3>
              <ListingRules product={product} />
            </div>
          </section>
        </FadeIn>
        <FadeIn>
          <section className="h-auto w-full">
            <div className="mx-auto flex h-auto w-full max-w-7xl flex-col items-start justify-between gap-5 p-5">
              <h3 className="text-base font-semibold md:text-3xl">Reviews</h3>
              <div className="flex items-center justify-start gap-5">
                <p className="flex items-center justify-start gap-2">
                  <IoIosStar size={20} className="text-primary" />
                  {reviews[0]?.rating}
                </p>
                |
                <p className="text-sm">
                  {reviews?.length} review{reviews.length > 1 ? "s" : ""}
                </p>
              </div>
              <div className="grid h-auto w-full grid-flow-col gap-5 overflow-x-auto">
                {reviews?.length > 0 ? (
                  reviews?.map((review) => (
                    <div
                      key={review.id}
                      className="md h-[200px] w-[280px] rounded bg-[#1E1E1E] p-5 md:w-[400px]"
                    >
                      <div className="flex items-center justify-start gap-5">
                        <img
                          src={Assets.raumFavi}
                          alt="logo"
                          className="h-10 w-10 rounded-full"
                        />
                        <div>
                          <p className="text-sm capitalize">
                            {review?.customer.first_name}{" "}
                            {review.customer.last_name}
                          </p>
                          <p className="text-xs text-gray-400">
                            {formatDate(review?.created_at)}
                          </p>
                        </div>
                      </div>
                      <p className="py-3 text-sm">{review?.content}</p>
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
          <section className="h-auto w-full border-b border-t border-[#2C2C2C]">
            <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 p-5">
              <h3 className="text-base font-semibold md:text-3xl">
                {owner.last_name} {owner.first_name}
              </h3>
              <div className="flex items-center justify-start gap-10">
                <div className="w-[60px]">
                  <img
                    src={thumbnail}
                    alt="raum logo"
                    className="aspect-square rounded-full object-cover"
                  />
                </div>
                <div className="item flex justify-start gap-5 text-primary">
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
