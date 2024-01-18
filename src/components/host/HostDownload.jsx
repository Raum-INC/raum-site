import React from "react";
import { Assets } from "../../assets";
import { IphonePop, Motion } from "../Motion";

const HostDownload = () => {
  return (
    <Motion>
      <main id="host-section" className="w-full h-auto">
        <section className="w-full max-w-6xl mx-auto h-full p-8 xl:p-0 space-y-12 overflow-hidden">
          <div className="w-full h-auto md:h-[560px] flex flex-col md:flex-row justify-between items-center bg-primary rounded-3xl px-4 md:px-10">
            <div className="w-full h-full md:w-2/3 pt-20 py-10 space-y-10 ">
              <h3 className="font-semibold text-xl md:text-4xl">
                Be your own boss.
                <br className="hidden" /> Start hosting and
                <br className="hidden" /> earning!
              </h3>
              <p className="text-base font-normal">
                It takes just 2 minutes to submit your information.
              </p>
              <div className="w-full flex gap-10 justify-between md:justify-start items-center">
                <button className="p-4 px-8 md:px-12 font-semibold rounded-full bg-white text-primary">
                  Android
                </button>
                <button className="p-4 px-8 md:px-12 font-semibold rounded-full bg-white text-primary">
                  Apple
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 h-full overflow-hidden">
              <div className="w-full h-full flex justify-center items-end">
                <IphonePop>
                  <img
                    className="w-[335px]"
                    src={Assets.hostMockup}
                    alt="raum-app"
                  />
                </IphonePop>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Motion>
  );
};

export default HostDownload;
