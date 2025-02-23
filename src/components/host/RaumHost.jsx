import React from "react";
import { getStarted, raumHost, raumInvest } from "../data";
import { Motion } from "../Motion";
import { useLocation } from "react-router-dom";

const RaumHost = () => {
  const location = useLocation();
  const invest = location.pathname === "/invest";
  return (
    <Motion>
      <main
        itemScope
        itemType={
          invest ? "https://raum.africa/invest" : "https://raum.africa/host"
        }
        className="h-auto w-full p-10"
      >
        <section className="mx-auto my-10 flex w-full max-w-6xl flex-col gap-10">
          <div className="space-y-5">
            <h1 itemProp="title" className="text-2xl font-semibold md:text-4xl">
              {invest
                ? "Why Invest in Short-Term Rentals with Raum Africa?"
                : "Why become a Raum Host?"}
            </h1>
            <p
              itemProp="description"
              className="text-base font-normal md:text-2xl"
            >
              {invest
                ? `Africa's booming tourism and short-let industry create one of the most profitable real estate opportunities today. Here’s why you should invest:`
                : `Whether you want to host for a few days occasionally or want to
              earn money more frequently, with Raum Africa you can fit hosting
              around your schedule.`}
            </p>
          </div>
          <section className="grid grid-cols-1 gap-14 md:grid-cols-3">
            {invest ? (
              <>
                {raumInvest.map((item, index) => (
                  <div
                    key={index}
                    className="flex w-full items-start justify-start gap-5 md:flex-col"
                  >
                    <img
                      itemProp="image"
                      src={item.image}
                      alt={item.title}
                      className="h-8 w-8 md:h-auto md:w-auto"
                    />
                    <div className="space-y-5 md:space-y-10">
                      <h3
                        itemProp="title"
                        className="text-lg font-semibold md:h-[55px] md:text-xl"
                      >
                        {item.title}
                      </h3>
                      <p itemProp="subtitle" className="text-base">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {raumHost.map((item, index) => (
                  <div
                    key={index}
                    className="flex w-full items-start justify-start gap-5 md:flex-col"
                  >
                    <img
                      itemProp="image"
                      src={item.image}
                      alt={item.title}
                      className="h-8 w-8 md:h-auto md:w-auto"
                    />
                    <div className="space-y-5 md:space-y-10">
                      <h3
                        itemProp="title"
                        className="text-lg font-semibold md:h-[55px] md:text-xl"
                      >
                        {item.title}
                      </h3>
                      <p itemProp="subtitle" className="text-base">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </section>
          {invest ? null : (
            <>
              <h2 className="text-2xl font-semibold md:text-4xl">
                Get Started
              </h2>
              <section className="grid grid-cols-1 gap-14 md:grid-cols-3">
                {getStarted.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-start gap-5 md:flex-col"
                  >
                    <img itemProp="image" src={item.image} alt={item.title} />
                    <div className="space-y-5 md:space-y-10">
                      <h3
                        itemProp="title"
                        className="text-lg font-semibold md:h-[55px] md:text-xl"
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
            </>
          )}
        </section>
      </main>
    </Motion>
  );
};

export default RaumHost;
