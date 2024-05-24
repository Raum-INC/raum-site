import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { Assets } from "../assets";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Navigation = () => {
  const location = useLocation();
  const isAdminDashboard = location.pathname.startsWith("/admin-dashboard");
  const isProductPage = location.pathname.startsWith(
    "/admin-dashboard/product/"
  );

  return (
    <>
      {isAdminDashboard ? (
        <main className="w-full h-auto bg-primary_text text-white p-4 px-8 md:px-9 flex justify-between items-center">
          <nav className="w-full h-auto flex justify-between items-center">
            <div className="w-[150px] flex items-center">
              <Link to="/">
                <img src={Assets.raumLogo} alt="raum-logo" />
              </Link>
            </div>
            <section
              className={`w-full h-auto flex justify-between items-center`}
            >
              {isProductPage ? (
                <div className="invisible w-full text-white"></div>
              ) : (
                <form
                  action=""
                  className="w-full h-auto flex items-center gap-10"
                >
                  <div className="w-full p-2 text-white/30 md:w-[540px] h-auto flex justify-center items-center bg-bkg rounded-full">
                    <input
                      type="search"
                      name=""
                      id=""
                      className="w-4/5 md:w-[540px] h-auto p-2 bg-transparent"
                    />
                    <button className="w-1/5 px-2 flex justify-center items-center border-l border-fade">
                      <CiSearch />
                    </button>
                  </div>
                  <div className="hidden md:w-[150px] h-auto relative md:flex justify-center items-center">
                    <input
                      type="search"
                      name=""
                      id=""
                      className="border border-fade rounded-full w-[150px] h-auto bg-bkg"
                    />
                    <button className="px-2 border-l border-fade text-white/30 absolute top-[20%] right-5">
                      filter
                    </button>
                  </div>
                </form>
              )}
              <div className="w-[300px] flex text-white justify-end items-center gap-5">
                <button className="hidden md:block">
                  <p className="text-nowrap font-semibold">Become a Host</p>
                </button>
                <div className="flex gap-2 p-2 border border-fade rounded-full">
                  <button className="w-10 flex justify-center items-center">
                    <CiMenuBurger size={25} />
                  </button>
                  <div className="w-10 h-10">
                    <img
                      src={Assets.earn}
                      alt=""
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
          </nav>
        </main>
      ) : (
        <Navbar />
      )}
    </>
  );
};

export default Navigation;
