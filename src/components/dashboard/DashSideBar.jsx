import React from "react";
import { GoHomeFill } from "react-icons/go";
import { IoCompass } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { FaUser } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { MdBookmarkAdded } from "react-icons/md";
import { Link } from "react-router-dom";
import useBearStore from "../../store/store";

const DashSideBar = () => {
  const { isAdminOpen, toggleAdminOpen, toggleFalseAdminOpen } = useBearStore();

  return (
    <main
      className={`${
        isAdminOpen === true ? "w-[100px] md:w-[200px]" : "w-[50px] md:w-[90px]"
      } item-center flex h-full flex-col overflow-hidden text-white transition-all duration-700 ease-in-out`}
    >
      <div className="flex w-full items-center justify-start gap-3 p-2 py-6 md:p-6 md:px-8">
        <button onClick={toggleAdminOpen} className={``}>
          <CiMenuBurger size={30} />
        </button>
        <p
          className={`${
            isAdminOpen ? "block opacity-100" : "hidden opacity-0"
          } transition-all delay-700 duration-700 ease-in-out`}
        >
          <div className=""></div>
          Menu
        </p>
      </div>
      <nav className="h-auto w-full text-fade">
        <ul className="flex h-auto w-full flex-col items-start justify-center gap-5 p-2 md:p-8">
          <Link to="/admin-dashboard">
            <li className="flex w-full items-center justify-start gap-3 py-2 text-primary">
              <button>
                <GoHomeFill size={30} />
              </button>
              <p
                className={`${
                  isAdminOpen ? "block opacity-100" : "hidden opacity-0"
                } transition-all delay-300 duration-700 ease-in-out`}
              >
                Home
              </p>
            </li>
          </Link>
          <Link to="/admin-dashboard/filter">
            <li className="flex w-full items-center justify-start gap-3 py-2">
              <button>
                <VscSettings size={30} />
              </button>
              <p
                className={`${
                  isAdminOpen ? "block opacity-100" : "hidden opacity-0"
                } transition-all delay-300 duration-700 ease-in-out`}
              >
                Filter
              </p>
            </li>
          </Link>
          {/* <li className="w-full flex justify-start items-center py-2 gap-3">
            <button>
              <IoCompass size={30} />
            </button>
            <p
              className={`${
                isAdminOpen ? "block opacity-100" : "hidden opacity-0"
              }  transition-all ease-in-out duration-700 delay-300`}
            >
              Explore
            </p>
          </li>
          <li className="w-full flex justify-start items-center py-2 gap-3">
            <button>
              <MdBookmarkAdded size={30} />
            </button>
            <p
              className={`${
                isAdminOpen ? "block opacity-100" : "hidden opacity-0"
              }  transition-all ease-in-out duration-700 delay-300`}
            >
              Bookings
            </p>
          </li>
          <li className="w-full flex justify-start items-center py-2 gap-3">
            <button>
              <FaUser size={30} />
            </button>
            <p
              className={`${
                isAdminOpen ? "block opacity-100" : "hidden opacity-0"
              }  transition-all ease-in-out duration-700 delay-300`}
            >
              Profile
            </p>
          </li>
          <li className="w-full flex justify-start items-center py-2 gap-3">
            <button>
              <AiOutlineMessage size={30} />
            </button>
            <p
              className={`${
                isAdminOpen === true ? "block opacity-100" : "hidden opacity-0"
              }  transition-all ease-in-out duration-700 delay-300`}
            >
              Text
            </p>
          </li> */}
        </ul>
      </nav>
    </main>
  );
};

export default DashSideBar;
