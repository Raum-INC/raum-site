import React, { useState } from "react";
import { Assets } from "../assets";
import { faqs } from "./data";

const Faqs = () => {
  const [icons, setIcons] = useState(true);

  const handleActive = (index) => {
    if (icons === index) {
      return setIcons(null);
    }
    setIcons(index);
  };
  const { plusicon, closeicon } = Assets;

  return (
    <main className="w-full h-auto p-8 py-12 md:px-12 flex flex-col gap-5">
      <div className="flex flex-col justify-center items-center gap-2 mb-10">
        <h3 className="font-semibold text-xl md:text-4xl">
          Frequently Asked Questions
        </h3>
        <p className="text-[#eaeaea] text-xs md:text-sm text-center">
          Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie
          <br />
          atole elementum eu facilisis faucibus interdum posuere.
        </p>
      </div>

      {faqs.map((faq, index) => (
        <div
          key={index}
          onClick={() => handleActive(index)}
          className={
            icons === index
              ? "w-full md:w-3/5 mx-auto flex gap-4 md:gap-10 p-5 md:p-10 border-transparent bg-primary text-white rounded-3xl transition-all ease-in-out duration-300"
              : "w-full md:w-3/5 mx-auto flex gap-4 md:gap-10 p-5 md:p-10 border-2 border-primary  text-white rounded-3xl transition-all ease-in-out duration-300"
          }
        >
          <div className="w-10">
            {icons === index ? (
              <img
                src={closeicon}
                alt="faq-icons"
                className="w-full transition-all ease-in-out duration-300"
              />
            ) : (
              <img
                src={plusicon}
                alt="faq-icons"
                className="w-full transition-all ease-in-out duration-300"
              />
            )}
          </div>
          <div className="w-full flex justify-start items-start flex-col gap-4">
            <h4 className="font-bold text-base text-justify">{faq.title}</h4>
            {icons === index ? (
              <div className="flex transition-all ease-in-out duration-300">
                <p className={"text-justify text-sm"}>{faq.description}</p>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </main>
  );
};

export default Faqs;
