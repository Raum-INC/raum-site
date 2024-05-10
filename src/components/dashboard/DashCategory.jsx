import React from "react";
import { Assets } from "../../assets";
import { CiHeart } from "react-icons/ci";

const DashCategory = () => {
  return (
    <main className="w-full h-auto bg-white p-5 pb-20 text-black">
      <h2 className="text-sm font-semibold py-5">Category</h2>
      <section className="flex flex-col gap-5">
        <div className="flex gap-5 justify-start items-center">
          {[1, 2, 3, 4].map((item, index) => (
            <button
              key={index}
              className="p-1 px-6 first:bg-primary first:text-white border border-primary rounded-full"
            >
              Popular
            </button>
          ))}
        </div>
        <div className="w-full h-full overflow-x-auto no-scrollbar grid grid-flow-col gap-5">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <div
              key={index}
              className="w-[260px] h-[315px] flex flex-col justify-center items-start gap-3 rounded-md p-3 border border-secondary/30"
            >
              <img
                src={Assets.sustainable}
                alt="Category"
                className="w-[230px] h-[175px] object-cover rounded-md"
              />
              <div className="w-full flex justify-between items-center">
                <div className="space-y-2">
                  <p className="text-base font-medium">Avengers Tower</p>
                  <p className="text-sm text-primary">N125,000</p>
                  <p className="text-xs text-fade">Lekki, Lagos</p>
                </div>
                <i className="w-10 h-10 bg-fade/30 rounded-md flex justify-center items-center">
                  <CiHeart size={25} className="text-[#FF0000]" />
                </i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default DashCategory;
