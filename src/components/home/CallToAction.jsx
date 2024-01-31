import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const CallToAction = () => {
  return (
    <main className="w-full my-10 px-8">
      <section className="w-full max-w-6xl mx-auto p-8 flex flex-col md:flex-row justify-center items-center gap-5 bg-primary md:h-[200px] rounded-3xl">
        <div className="md:w-2/3 w-full space-y-3">
          <h4 className="text-xl md:text-2xl font-bold">
            Struggling to find the perfect short-term rental?
          </h4>
          <p className="text-base">
            <br className="hidden" /> Connect with us on WhatsApp for
            personalized assistance.
            <br className="hidden" /> Let's make your shortlet search
            hassle-free.{" "}
          </p>
        </div>
        <div className="md:w-1/3 w-full flex justify-center items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="Chat with Raum on WhatsApp"
            className="w-[200px] h-[34px] md:w-[205px] md:h-[50px] text-sm rounded-full border-2 border-white text-white hover:bg-white hover:text-primary md:text-base font-bold flex justify-center items-center transition-all duration-300 ease-in-out"
            href="https://wa.me/message/ZVNY4C3AJ6F5I1"
          >
            <FaWhatsapp size={20} className="mr-2" />
            Chat with us!
          </a>
        </div>
      </section>
    </main>
  );
};

export default CallToAction;
