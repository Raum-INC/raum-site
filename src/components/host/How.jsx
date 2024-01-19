import React from "react";
import { Assets } from "../../assets";
import { howToHost } from "../data";
import { IphonePop } from "../Motion";

const How = () => {
  return (
    <main className="w-full h-auto p-10">
      <section className="w-full max-w-6xl lg:h-[640px] bg-bgFade mx-auto flex flex-col justify-center items-start gap-5 md:gap-0 rounded-[20px] pt-6 px-6 overflow-hidden">
        <div className="md:p-14">
          <h3 className="font-bold text-2xl md:text-5xl">
            How the Raum Hosts app works
          </h3>
          <p className="">
            Reliable and user-friendly, with all the essentials for hosting and
            earning at your convenience.
          </p>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center gap-10">
          <div className="lg:w-2/3 h-full flex flex-col justify-center items-start gap-5 md:gap-10 md:p-14">
            {howToHost.map((item, index) => (
              <div
                key={index}
                className="flex justify-start items-start gap-3 md:gap-5"
              >
                <span className="w-8 h-8 md:w-10 md:h-10 aspect-square flex justify-center items-center bg-primary">
                  {item.id}
                </span>
                <div>
                  <p className="font-semibold text-base">{item.title}</p>
                  <p className="font-normal text-base">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:w-1/3 h-full flex justify-center items-end">
            <IphonePop>
              <img
                className="w-[335px] md:w-full"
                src={Assets.hostMockup}
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