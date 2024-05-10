import React from "react";
import { PiFlag } from "react-icons/pi";

const ListingReserve = ({ variants }) => {
  return (
    <main className="w-2/5 h-full text-black">
      <div className="w-full h-[350px] rounded-md shadow-xl border border-primary/10 p-5">
        <div className="flex justify-between items-center pb-4">
          <p className="text-xl font-medium">
            N{variants[0].original_price.toLocaleString("en-NG")}{" "}
            <span className="text-base"> / night</span>
          </p>
          <p>
            5.0 <span className="pl-3 font-medium">7 reviews</span>
          </p>
        </div>
        <form action="" className="w-full h-auto grid grid-cols-2">
          <div className="h-20 p-2 flex flex-col border rounded-tl-md">
            <label htmlFor="" className="font-medium">
              Check-in
            </label>
            <input
              type="date"
              name="checkIn"
              id=""
              className="appearance-none"
              placeholder="05/28/2024"
            />
          </div>
          <div className="h-20 p-2 flex flex-col border rounded-tr-md">
            <label htmlFor="" className="font-medium">
              Check-out
            </label>
            <input
              type="date"
              name="checkOut"
              id=""
              className="appearance-none"
              placeholder="05/28/2024"
            />
          </div>
          <label
            htmlFor=""
            className="font-medium col-span-2 w-full h-20 p-2 border border-t-0 rounded-b-md"
          >
            Guests
            <select name="" id="" className="w-full h-10">
              <option value="" className="p-2 appearance-none h-10 w-full">
                1 guest
              </option>
              <option value="" className="p-2 appearance-none h-10 w-full">
                2 guests
              </option>
            </select>
          </label>
          <button
            type="submit"
            className="w-full h-10 bg-primary col-span-2 my-5 rounded-md text-white"
          >
            Reserve
          </button>
        </form>
        <p className="text-center pb-3 text-fade">You won't be charged yet</p>
        <div className="w-full h-[0.5px] bg-primary/10"></div>
      </div>
      <button className="w-full py-5 text-center text-faded underline underline-offset-4 flex justify-center items-center gap-3">
        <PiFlag />
        Report this listing
      </button>
    </main>
  );
};

export default ListingReserve;
