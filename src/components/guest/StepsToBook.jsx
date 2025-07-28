import React from "react";
import { Assets } from "../../assets";
import { earn } from "../data";
import { Link } from "react-router-dom";

const StepsToBook = () => {
  return (
    <main className="h-auto w-full px-8 py-0 lg:p-4">
      <section className="my-10 flex h-full w-full flex-col justify-center gap-10 lg:items-center">
        <h2 itemProp="title" className="text-2xl font-semibold md:text-5xl">
          Earn money with Raum Africa
        </h2>
        <section className="mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20">
          <div className="w-full lg:h-full lg:w-1/2">
            <img
              itemProp="image"
              src={Assets.reserveSteps}
              alt="fine-looking-man-raum"
              className="hidden rounded-3xl object-cover object-center lg:block lg:h-[570px] lg:w-[645px]"
            />
            <img
              itemProp="image"
              src={Assets.reserveSteps}
              alt="fine-looking-raum-man"
              className="block h-[340px] w-full rounded-3xl object-cover lg:hidden"
            />
          </div>
          <div className="flex w-full flex-col items-start justify-between gap-5 md:h-[570px] md:w-[645px] lg:py-5">
            <ul className="flex w-full flex-col items-start justify-between gap-5 lg:h-[70%]">
              {earn.map((data, index) => (
                <li itemProp="list" key={index} className="flex w-full gap-10">
                  <div className="w-full space-y-3 border-l-2 border-primary pl-5">
                    <p
                      itemProp="subtitle"
                      className="text-sm font-semibold md:text-xl"
                    >
                      {data.title}
                    </p>
                    <p itemProp="description" className="text-xs md:text-base">
                      {data.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              itemProp="hostLink"
              itemScope
              itemType="https://raum.africa/admin-dashboard"
              to="/admin-dashboard"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <button className="h-[34px] w-[140px] rounded-full border-2 border-primary text-base font-bold transition-all duration-300 ease-in-out hover:bg-primary hover:text-white md:h-[50px] md:w-[205px]">
                Reserve Now
              </button>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
};

export default StepsToBook;
