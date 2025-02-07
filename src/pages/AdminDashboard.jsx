import React from "react";
import DashSideBar from "../components/dashboard/DashSideBar";
import { Route, Routes } from "react-router-dom";
import DashHome from "./DashHome";
import DashFilter from "./DashFilter";

const AdminDashboard = () => {
  return (
    <main className="relative flex h-auto w-full overflow-hidden md:min-h-screen">
      <section className="block min-h-full w-auto bg-primary_text">
        <DashSideBar />
      </section>
      <section className="w-full">
        <DashHome />
      </section>
    </main>
  );
};

export default AdminDashboard;
