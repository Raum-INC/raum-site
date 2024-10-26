import React, { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { IoCompass } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { FaUser } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { MdBookmarkAdded } from "react-icons/md";
import { Link } from "react-router-dom";

const DashSideBar = () => {
  const [sideBar, setSideBar] = useState(false);

  const handleSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <main
      className={`${
        sideBar === true ? "w-[200px]" : "w-[100px] "
      } flex flex-col item-center h-full text-white transition-all ease-in-out duration-700`}
    >
      <div className="w-full flex justify-start items-center p-6 px-8 gap-3">
        <button onClick={handleSideBar} className={``}>
          <CiMenuBurger size={30} />
        </button>
        <p
          className={`${
            sideBar ? "block opacity-100" : "hidden opacity-0"
          }  transition-all ease-in-out duration-700 delay-700`}
        >
          Menu
        </p>
      </div>
      <nav className="w-full h-auto pt-10 text-fade ">
        <ul className="w-full h-auto flex flex-col justify-center items-start p-8 gap-5">
          <Link to="/admin-dashboard">
            <li className="w-full flex justify-start items-center text-primary py-2 gap-3">
              <button>
                <GoHomeFill size={30} />
              </button>
              <p
                className={`${
                  sideBar ? "block opacity-100" : "hidden opacity-0"
                }  transition-all ease-in-out duration-700 delay-300`}
              >
                Home
              </p>
            </li>
          </Link>
          <Link to="/admin-dashboard/filter">
            <li className="w-full flex justify-start items-center py-2 gap-3">
              <button>
                <VscSettings size={30} />
              </button>
              <p
                className={`${
                  sideBar ? "block opacity-100" : "hidden opacity-0"
                }  transition-all ease-in-out duration-700 delay-300`}
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
                sideBar ? "block opacity-100" : "hidden opacity-0"
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
                sideBar ? "block opacity-100" : "hidden opacity-0"
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
                sideBar ? "block opacity-100" : "hidden opacity-0"
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
                sideBar === true ? "block opacity-100" : "hidden opacity-0"
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
