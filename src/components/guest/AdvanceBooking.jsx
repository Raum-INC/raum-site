import React from "react";
import { Assets } from "../../assets";
import { FadeIn } from "../Motion";

const AdvanceBooking = () => {
  return (
    <FadeIn>
      <main className="my-20 flex h-auto w-full flex-col items-center justify-center gap-10">
        <div className="flex h-auto w-full flex-col items-center justify-center gap-10 p-8">
          <h5 className="text-xl font-semibold xl:text-4xl">
            Book an apartment in Advance
          </h5>
          <p className="w-full text-center text-lg xl:w-2/3 xl:text-2xl">
            Reserve your next apartment ahead of time and avoid last-minute
            stress. With just a few clicks, you can secure a comfortable,
            well-located space that fits your lifestyle — before someone else
            gets it. Planning ahead has never been this easy.
          </p>
        </div>
        <section className="h-[500px] w-full xl:h-screen">
          <img
            src={Assets.advanceBooking}
            alt="Book in Advance with Raum Africa"
            className="h-full w-full object-cover"
          />
        </section>
      </main>
    </FadeIn>
  );
};

export default AdvanceBooking;
