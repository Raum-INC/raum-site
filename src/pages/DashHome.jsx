import React from "react";
import DashSideBar from "../components/dashboard/DashSideBar";
import FeaturedList from "../components/dashboard/FeaturedList";
import DashCategory from "../components/dashboard/DashCategory";

const DashHome = () => {
  return (
    <main className="w-full min-h-screen flex relative overflow-hidden">
      <section className="w-auto min-h-full bg-white">
        <DashSideBar />
      </section>
      <section className="w-full min-h-screen bg-fixed">
        <FeaturedList />
        <DashCategory />
      </section>
    </main>
  );
};

export default DashHome;
