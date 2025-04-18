import React from "react";
import { developmentGoalsData } from "../data";

const DevelopmentGoals = () => {
  return (
    <main
      itemScope
      itemType={"https://raum.africa/host"}
      className="h-auto w-full p-10"
    >
      <section className="mx-auto my-10 flex w-full max-w-6xl flex-col items-start justify-center gap-5">
        <h4 itemProp="title" className="text-2xl font-bold md:text-4xl">
          Our sustainable development goals
        </h4>
        <p className="text-base font-normal md:text-lg">
          RAUM INC is committed to empowering shortlet businesses to become
          sustainable leaders in the hospitality industry. By focusing on
          environmental sustainability, social responsibility, and economic
          viability, we aim to help shortlet businesses:
        </p>
      </section>
      <section>
        {developmentGoalsData.map((goal, index) => (
          <section className="mx-auto my-10 flex h-auto w-full max-w-6xl flex-col items-start justify-start gap-5 overflow-hidden rounded-[20px] bg-[#252525] p-6 md:gap-0 lg:h-[520px]">
            <img
              src={goal.icon}
              alt={goal.title}
              className="size-12 lg:size-20"
            />
            <h5 className="my-3 text-xl font-bold md:text-2xl">{goal.title}</h5>
            <ul className="ml-10 list-disc text-base font-normal md:text-lg">
              {goal.list.map((item, idx) => (
                <li key={idx} className="my-2 leading-[25px] lg:leading-[50px]">
                  <p>{item}</p>
                </li>
              ))}
            </ul>
            {goal.cta ? (
              <p className="my-5 ml-10 leading-[25px] lg:leading-[50px]">
                {/* {goal.cta}{" "}
                <a
                  href={goal.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white p-1 px-3 text-[#252525]"
                >
                  Click here to join the program
                </a> */}
              </p>
            ) : null}
          </section>
        ))}
      </section>
    </main>
  );
};

export default DevelopmentGoals;
