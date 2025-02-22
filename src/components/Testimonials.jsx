import React from "react";
import { testimonialsData } from "./data";

const Testimonials = () => {
  return (
    <main
      itemScope
      itemType={`https://raum.africa/testimonials`}
      className="mx-auto flex h-auto w-full max-w-6xl flex-col gap-16 p-10"
    >
      <h4
        itemProp="title"
        className="text-center text-xl font-semibold md:text-4xl"
      >
        Testimonials from our investors
      </h4>

      <section className="grid h-auto w-full grid-cols-1 items-center justify-center gap-10 md:grid-cols-3">
        {testimonialsData.map((testimonial, index) => (
          <div
            className="flex h-full w-fit flex-col items-center justify-start gap-5"
            key={index}
          >
            <div className="flex h-[120px] w-[120px] items-center justify-start">
              <img src={testimonial.img} alt={testimonial.name} />
            </div>
            <div className="flex h-[170px] flex-col items-start justify-between rounded-lg bg-[#25242A] p-5">
              <p className="line-clamp-4">{testimonial.test}</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Testimonials;
