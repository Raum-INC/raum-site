// ...existing imports...
import React, { useState, useEffect } from "react";
import FeaturedList from "../components/dashboard/FeaturedList";
import DashCategory from "../components/dashboard/DashCategory";
import { Helmet } from "react-helmet-async";
import PageWrapper, { FadeIn } from "../components/Motion";
import { motion, AnimatePresence } from "framer-motion";
import { ClipLoader } from "react-spinners";
import axios from "axios";

const DashHome = () => {
  const [showContent, setShowContent] = useState(false);
  const [listings, setListings] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          axios.get("https://cp.raum.africa/store/products?currency_code=ngn"),
          axios.get("https://cp.raum.africa/store/product-categories"),
        ]);

        // Featured Listings
        const featuredListings = productsRes.data.products.filter(
          (product) =>
            product.tags &&
            product.tags.some((tag) => tag.value === "Featured"),
        );
        const limitedFeaturedListings = featuredListings.slice(0, 10);
        const formattedListings = limitedFeaturedListings.map((listing) => ({
          ...listing,
          variants: listing.variants.map((variant) => ({
            ...variant,
            original_price: variant.original_price / 100,
          })),
        }));
        setListings(formattedListings);

        // All Products
        const formattedProducts = productsRes.data.products.map((product) => ({
          ...product,
          variants: product.variants.map((variant) => ({
            ...variant,
            original_price: variant.original_price / 100,
          })),
        }));
        setProducts(formattedProducts);

        // Categories
        setCategories(categoriesRes.data.product_categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const loadingVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7 } },
  };

  if (showContent === false || loading) {
    return (
      <AnimatePresence>
        <motion.div
          variants={loadingVariant}
          initial="hidden"
          animate="visible"
          className="flex h-screen w-full items-center justify-center"
        >
          <ClipLoader
            color="#00F"
            loading={true}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <>
      <Helmet>
        <meta
          name="apple-itunes-app"
          content="app-id=6514297891, app-argument=raum://raum.app.link, app-clip-bundle-id=com.raumhq.raum.Clip, app-clip-display=card"
          data-rh="true"
        />
      </Helmet>
      <FadeIn>
        <main className="relative flex h-auto w-full md:min-h-screen">
          {showContent ? (
            <section className="min-h-screen w-full overflow-hidden bg-primary_text">
              <FadeIn>
                <FeaturedList listings={listings} />
              </FadeIn>
              <FadeIn>
                <DashCategory categories={categories} products={products} />
              </FadeIn>
            </section>
          ) : null}
        </main>
      </FadeIn>
    </>
  );
};

export default DashHome;
