import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { Assets } from "../assets";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isAdminDashboard = location.pathname.startsWith("/admin-dashboard");
  const isProductPage = location.pathname.startsWith(
    "/admin-dashboard/product/"
  );

  return (
    <>
      {isAdminDashboard ? (
        <main className="w-full h-auto bg-white p-4 px-8 md:px-9 flex justify-between items-center">
          <nav className="w-full h-auto flex justify-between items-center gap-8 ">
            <div className="flex items-center">
              <Link to="/">
                <img src={Assets.logo} alt="raum-logo" />
              </Link>
            </div>
            <section
              className={`w-full h-auto flex ${
                isAdminDashboard ? "justify-between" : "justify-end items-end"
              } items-center`}
            >
              {isProductPage ? (
                <div className="invisible w-full"></div>
              ) : (
                <form
                  action=""
                  className="w-full h-auto flex items-center px-5 gap-10"
                >
                  <div className="w-[540px] h-[40px] relative flex justify-center items-center">
                    <input
                      type="search"
                      name=""
                      id=""
                      className="border border-fade rounded-full w-[540px] h-[40px]"
                    />
                    <button className="px-2 border-l border-fade text-primary absolute top-[20%] right-5">
                      Search
                    </button>
                  </div>
                  <div className="w-[150px] h-[40px] relative flex justify-center items-center">
                    <input
                      type="search"
                      name=""
                      id=""
                      className="border border-fade rounded-full w-[150px] h-[40px]"
                    />
                    <button className="px-2 border-l border-fade text-primary absolute top-[20%] right-5">
                      filter
                    </button>
                  </div>
                </form>
              )}
              <div className="w-[300px] flex text-black justify-end items-center gap-5">
                <button>
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
