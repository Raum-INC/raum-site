import React from "react";
import { getStarted, raumHost } from "../data";
import { Motion } from "../Motion";

const RaumHost = () => {
  return (
    <Motion>
      <main
        itemScope
        itemType="https://raum.africa/host"
        className="w-full h-auto p-10"
      >
        <section className="w-full max-w-6xl mx-auto flex flex-col gap-10 my-10">
          <div className="space-y-5">
            <h1 itemProp="title" className="font-semibold text-2xl md:text-4xl">
              Why become a Raum Host?
            </h1>
            <p
              itemProp="description"
              className="text-base md:text-2xl font-normal"
            >
              Whether you want to host for a few days occasionally or want to
              earn money more frequently, with Raum Africa you can fit hosting
              around your schedule.
            </p>
          </div>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {raumHost.map((item, index) => (
              <div
                key={index}
                className="w-full flex md:flex-col justify-start items-start gap-5"
              >
                <img
                  itemProp="image"
                  src={item.image}
                  alt={item.title}
                  className="w-8 h-8 md:w-auto md:h-auto"
                />
                <div className="space-y-5 md:space-y-10">
                  <h3
                    itemProp="title"
                    className="font-semibold text-lg md:text-xl md:h-[55px]"
                  >
                    {item.title}
                  </h3>
                  <p itemProp="subtitle" className="text-base">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </section>
          <h2 className="font-semibold text-2xl md:text-4xl">Get Started</h2>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {getStarted.map((item, index) => (
              <div
                key={index}
                className="flex md:flex-col justify-start items-start gap-5"
              >
                <img itemProp="image" src={item.image} alt={item.title} />
                <div className="space-y-5 md:space-y-10">
                  <h3
                    itemProp="title"
                    className="font-semibold text-lg md:text-xl md:h-[55px]"
                  >
                    {item.title}
                  </h3>
                  <p itemProp="subtitle" className="text-base">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </section>
      </main>
    </Motion>
  );
};

export default RaumHost;
