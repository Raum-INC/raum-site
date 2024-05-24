import React from "react";
import { GoHomeFill } from "react-icons/go";
import { IoCompass } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { FaUser } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";

const DashSideBar = () => {
  return (
    <main className="w-[100px] flex flex-col item-center h-full text-white">
      <div className="w-full flex justify-center items-center py-6">
        <button>
          <CiMenuBurger size={30} />
        </button>
      </div>
      <nav className="w-full pt-10 text-fade ">
        <ul className="w-full h-auto flex flex-col justify-start items-center gap-5">
          <li className="w-full p-2 flex justify-center items-center text-primary">
            <button>
              <GoHomeFill size={30} />
            </button>
          </li>
          <li className="w-full p-2 flex justify-center items-center">
            <button>
              <IoCompass size={30} />
            </button>
          </li>
          <li className="w-full p-2 flex justify-center items-center">
            <button>
              <AiOutlineMessage size={30} />
            </button>
          </li>
          <li className="w-full p-2 flex justify-center items-center">
            <button>
              <FaUser size={30} />
            </button>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default DashSideBar;
