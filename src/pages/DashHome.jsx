import React from "react";
import DashSideBar from "../components/dashboard/DashSideBar";
import FeaturedList from "../components/dashboard/FeaturedList";
import DashCategory from "../components/dashboard/DashCategory";
import { FadeIn } from "../components/Motion";
import { Helmet } from "react-helmet-async";

const DashHome = () => {
  return (
    <>
    <Helmet>
       {/* app-argument isn't available to app clips*/}
       <meta
          name="apple-itunes-app"
          content={`app-id=6514297891, app-argument=raum://raum.app.link, app-clip-bundle-id=com.raumhq.raum.Clip, app-clip-display=card`}
          data-rh="true"
        />
    </Helmet>
    <main className="w-full h-auto md:min-h-screen flex relative">
      {/* <section className="hidden md:block w-auto min-h-full bg-primary_text">
        <DashSideBar />
      </section> */}
      <section className="w-full min-h-screen overflow-hidden bg-primary_text">
        <FadeIn>
          <FeaturedList />
        </FadeIn>
        <FadeIn>
          <DashCategory />
        </FadeIn>
      </section>
    </main>
    </>
  );
};

export default DashHome;
