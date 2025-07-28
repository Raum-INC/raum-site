import React from "react";
import Navbar from "./Navbar";
import { useLocation, Link } from "react-router-dom";
import { Assets } from "../assets";
import SearchBar from "./SearchBar";

const Navigation = () => {
  const location = useLocation();
  const isAdminDashboard = location.pathname.startsWith("/admin-dashboard");

  return (
    <>
      {isAdminDashboard ? (
        <main className="flex h-[85px] w-full items-center justify-between gap-10 bg-primary_text p-4 px-5 text-white md:px-9">
          <nav className="flex h-auto w-full items-center justify-between gap-10">
            <div className="flex w-[120px] items-center md:w-[150px]">
              <Link to="/">
                <img src={Assets.raumLogo} alt="raum-logo" className="w-full" />
              </Link>
            </div>

            {/* SearchBar */}
            <SearchBar />
          </nav>
        </main>
      ) : (
        <Navbar />
      )}
    </>
  );
};

export default Navigation;
