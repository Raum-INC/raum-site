import React, { useState } from "react";
import { hostGuideData, userGuideData } from "../data";

const Hero = () => {
  const [toggle, setToggle] = useState("user");

  const handleUser = () => setToggle("user");
  const handleHost = () => setToggle("host");

  return (
    <div className="w-full h-auto pt-8 flex justify-center items-center">
      <div className="w-full md:w-10/12 flex flex-col gap-5 m-4 md:m-8 border-2 border-primary rounded-md">
        <div className="w-full flex">
          <button
            onClick={handleUser}
            className={
              toggle === "user"
                ? "w-full text-lg md:text-3xl font-medium bg-primary p-2 md:p-4 rounded-l-sm border-2 border-primary"
                : "w-full text-lg md:text-3xl font-medium border-2 border-primary p-2 md:p-4 rounded-l-sm"
            }
          >
            User App
          </button>
          <button
            onClick={handleHost}
            className={
              toggle === "host"
                ? "w-full text-lg md:text-3xl font-medium bg-primary p-2 md:p-4 rounded-r-sm border-2 border-primary"
                : "w-full text-lg md:text-3xl font-medium border-2 border-primary p-2 md:p-4 rounded-r-sm"
            }
          >
            Host App
          </button>
        </div>
        <div className="w-full flex flex-col justify-center p-8">
          {userGuideData.map((user, index) => (
            <div>
              {toggle === "user" ? (
                <ul
                  key={index}
                  className="w-full h-auto md:h-screen flex flex-col justify-center gap-2 md:gap-5 p-3 md:p-8"
                >
                  <li className="list-image-checkmark font-semibold text-lg md:text-4xl">
                    {user.title}
                  </li>
                  <li className="font-medium text-base md:text-3xl">
                    {user.description}
                  </li>
                  <li className="w-full">
                    <img
                      src={user.image}
                      alt="user-app-guide"
                      className="w-[220px] pt-8 mx-auto"
                    />
                  </li>
                </ul>
              ) : null}
            </div>
          ))}

          {hostGuideData.map((user, index) => (
            <div>
              {toggle === "host" ? (
                <ul
                  key={index}
                  className="w-full h-auto md:h-screen flex flex-col justify-center gap-2 md:gap-5 p-3 md:p-8"
                >
                  <li className="list-image-checkmark font-semibold text-lg md:text-4xl">
                    {user.title}
                  </li>
                  <li className="font-medium text-base md:text-3xl">
                    {user.description}
                  </li>
                  <li className="w-full">
                    <img
                      src={user.image}
                      alt="user-app-guide"
                      className="w-[220px] pt-8 mx-auto"
                    />
                  </li>
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
