import React from "react";
import { GoHomeFill } from "react-icons/go";
import { VscSettings } from "react-icons/vsc";
import { CiMenuBurger } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import useBearStore from "../../store/store";

const DashSideBar = () => {
  const { isAdminOpen, toggleAdminOpen } = useBearStore();
  const location = useLocation();

  // Menu Items
  const menuItems = [
    { name: "Home", path: "/admin-dashboard", icon: <GoHomeFill size={30} /> },
    {
      name: "Filter",
      path: "/admin-dashboard/filter",
      icon: <VscSettings size={30} />,
    },
  ];

  return (
    <main
      className={`${
        isAdminOpen ? "w-[100px] md:w-[200px]" : "w-[50px] md:w-[90px]"
      } flex h-full flex-col overflow-hidden text-white transition-all duration-500 ease-in-out`}
    >
      {/* Sidebar Header */}
      <div className="flex w-full items-center justify-start gap-3 p-2 py-6 md:p-6 md:px-8">
        <button onClick={toggleAdminOpen}>
          <CiMenuBurger size={30} />
        </button>
        <p
          className={`transition-all duration-500 ease-in-out ${
            isAdminOpen ? "block opacity-100" : "hidden opacity-0"
          }`}
        >
          Menu
        </p>
      </div>

      {/* Navigation Menu */}
      <nav className="h-auto w-full text-fade">
        <ul className="flex h-auto w-full flex-col items-start justify-center gap-5">
          {menuItems.map((item) => (
            <Link to={item.path} key={item.name} className="w-full">
              <li
                className={`flex h-auto w-full items-center justify-start gap-5 p-2 transition-all duration-500 ease-in-out md:px-8 ${
                  location.pathname === item.path
                    ? "bg-white text-primary transition-colors duration-500 ease-in-out"
                    : "text-white"
                }`}
              >
                {item.icon}
                <p
                  className={`w-full transition-all duration-500 ease-in-out ${
                    isAdminOpen ? "block opacity-100" : "hidden opacity-0"
                  }`}
                >
                  {item.name}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </main>
  );
};

export default DashSideBar;
