import React from "react";
import { Assets } from "../assets";
import { Link } from "react-router-dom";
import { FadeIn } from "./Motion";

const InvestCTA = () => {
  return (
    <main
      itemScope
      itemType={`https://raum.africa/`}
      className="relative flex h-[400px] w-full flex-col gap-16 p-3 lg:h-[500px] lg:p-10"
    >
      <img
        src={Assets.building_bkg}
        alt="Invest CTA"
        className="absolute left-0 top-0 w-5/12 lg:-top-28 lg:w-auto"
      />
      <FadeIn>
        <div className="flex h-full w-full">
          <div className="invisible h-full w-1/3 lg:w-2/5"></div>
          <div className="flex h-full w-2/3 flex-col justify-center gap-5 text-left lg:w-3/5 lg:p-3 lg:px-12">
            <p className="p-2 text-xl font-semibold text-white md:text-5xl">
              Did you know that you can invest in high-yield Airbnb rentals and
              profit from them without the heavy lifting?
            </p>
            <Link
              className="fon w-fit rounded-full bg-white p-2 px-5 text-black lg:p-3"
              to="/invest"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Know more
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
};

export default InvestCTA;
