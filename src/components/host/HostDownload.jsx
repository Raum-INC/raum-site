import React from "react";
import { Assets } from "../../assets";
import { IphonePop, Motion } from "../Motion";

const HostDownload = () => {
  return (
    <Motion>
      <main id="host-section" className="w-full h-auto p-10">
        <section className="w-full max-w-6xl mx-auto h-full space-y-12 overflow-hidden my-10">
          <div className="w-full min-w-full h-auto md:h-[560px] flex flex-col lg:flex-row justify-between items-center bg-primary rounded-3xl">
            <div className="w-full h-full flex flex-col justify-start items-start gap-5 p-6 md:pt-20 md:p-10">
              <h3 className="font-semibold text-xl md:text-4xl">
                Be your own boss.
                <br className="hidden" /> Start hosting and
                <br className="hidden" /> earning!
              </h3>
              <p className="text-white text-base font-normal leading-tight">
                It takes just 2 minutes to submit your information.
              </p>
              <div className="w-full flex gap-10 justify-between items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Download on Android!"
                  href="https://play.google.com/store/apps/details?id=com.raumhq.raum_mobile_host&pcampaignid=web_share"
                  className="w-[110px] h-[34px] md:w-[205px] md:h-[50px] font-semibold rounded-full bg-white text-primary text-base flex justify-center items-center"
                >
                  Android
                </a>
                {/* <button className="w-[110px] h-[34px] md:w-[205px] md:h-[50px] font-semibold rounded-full bg-white text-primary text-base flex justify-center items-center">
                  Apple
                </button> */}
              </div>
            </div>

            <div className="w-full h-full">
              <div
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="w-full h-full flex justify-center items-end"
              >
                <IphonePop>
                  <img
                    className="w-[250px] md:w-[335px] px-4 pt-8 md:pt-4"
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
