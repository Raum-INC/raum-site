import React from "react";
import { Assets } from "../../assets";
import { howToHost, howToInvest } from "../data";
import { IphonePop } from "../Motion";
import { useLocation } from "react-router-dom";

const How = () => {
  const location = useLocation();

  const invest = location.pathname.includes("invest");
  return (
    <main
      itemScope
      itemType={
        invest ? "https://raum.africa/invest" : "https://raum.africa/host"
      }
      className="h-auto w-full p-10"
    >
      <section className="mx-auto my-10 flex w-full max-w-6xl flex-col items-start justify-center gap-5 overflow-hidden rounded-[20px] bg-[#252525] px-6 pt-12 md:gap-0 lg:h-[640px]">
        <div className="flex flex-col items-start justify-center gap-5 md:px-14">
          <h3 itemProp="title" className="text-2xl font-bold md:text-4xl">
            {invest
              ? "How the investment works"
              : "How the Raum Hosts app works"}
          </h3>
          <p itemProp="subtitle" className="text-base">
            {invest
              ? `How Raum Africa's Co-Hosting Investment Works`
              : `Reliable and user-friendly, with all the essentials for hosting and earning at your convenience.`}
          </p>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-10 lg:flex-row">
          <div className="flex h-full flex-col items-start justify-start gap-5 md:gap-10 md:p-14 lg:w-2/3">
            {invest ? (
              <>
                {howToInvest.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-start gap-3 md:gap-5"
                  >
                    <span
                      itemProp="mpn"
                      className="flex aspect-square h-8 w-8 items-center justify-center rounded-md bg-primary md:h-10 md:w-10"
                    >
                      {item.id}
                    </span>
                    <div>
                      <p
                        itemProp="title"
                        className="text-base font-semibold md:text-xl"
                      >
                        {item.title}
                      </p>
                      <p
                        itemProp="description"
                        className="pt-2 text-sm font-normal md:text-base"
                      >
                        {item.subtitle}
                        {item.link && (
                          <a
                            href={item?.link}
                            className="rounded-full bg-white p-1 px-3 text-[#252525]"
                          >
                            Here!
                          </a>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {howToHost.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-start gap-3 md:gap-5"
                  >
                    <span
                      itemProp="mpn"
                      className="flex aspect-square h-8 w-8 items-center justify-center bg-primary md:h-10 md:w-10"
                    >
                      {item.id}
                    </span>
                    <div>
                      <p
                        itemProp="title"
                        className="text-lg font-semibold md:text-2xl"
                      >
                        {item.title}
                      </p>
                      <p
                        itemProp="description"
                        className="pt-2 text-sm font-normal md:text-lg"
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          <div className="flex h-full items-end justify-center lg:w-1/3">
            <IphonePop>
              <img
                itemProp="image"
                className="w-[300px] md:w-full"
                src={invest ? Assets.invest_image : Assets.hostMockup}
                alt="raum-app"
              />
            </IphonePop>
          </div>
        </div>
      </section>
    </main>
  );
};

export default How;
