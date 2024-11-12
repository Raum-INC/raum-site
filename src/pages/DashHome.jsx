import React, { useState, useEffect } from "react";
import FeaturedList from "../components/dashboard/FeaturedList";
import DashCategory from "../components/dashboard/DashCategory";
import { Helmet } from "react-helmet-async";
import { FadeIn } from "../components/Motion";
import { motion, AnimatePresence } from "framer-motion";
import { ClipLoader } from "react-spinners";

const DashHome = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000); // 2-second delay

    return () => clearTimeout(timer); // Clear the timer on unmount
  }, []);

  const loadingVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  if (showContent === false) {
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
      <main className="relative flex h-auto w-full md:min-h-screen">
        {showContent ? (
          <section className="min-h-screen w-full overflow-hidden bg-primary_text">
            <FadeIn>
              <FeaturedList />
            </FadeIn>
            <FadeIn>
              <DashCategory />
            </FadeIn>
          </section>
        ) : null}
      </main>
    </>
  );
};

export default DashHome;
