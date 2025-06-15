import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "../../index.css";

const CallToAction = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  return (
    <main
      itemScope
      itemType={
        currentRoute === "/host"
          ? "https://raum.africa/host"
            ? currentRoute === "/invest"
            : "https://raum.africa/invest"
          : "https://raum.africa"
      }
      className="my-10 w-full px-8"
    >
      <section
        className={`custom-bounce mx-auto flex w-full max-w-6xl animate-bounce flex-col items-center justify-center gap-5 rounded-3xl bg-primary p-8 md:h-auto md:flex-row`}
      >
        {currentRoute === "/host" ? (
          <>
            <div className="w-full space-y-3 md:w-2/3">
              <h4 itemProp="title" className="text-xl font-bold md:text-2xl">
                Not a Registered Business? That won't do!
              </h4>
              <p itemProp="description" className="text-base">
                Let's get you registered in 10 business working days. Just fill
                out our form and we'll be right with you.
              </p>
              <ul className="list-outside list-disc pl-5 text-base">
                <li>Gain access to a business account</li>
                <li>
                  Create a safe environment for your customers to transact with
                  your business.
                </li>
                <li>
                  Gain access to all the services Raum Africa has to offer you.
                </li>
              </ul>
            </div>
            <div className="flex w-full items-center justify-end md:w-1/3">
              <a
                itemProp="form"
                target="_blank"
                rel="noopener noreferrer"
                title="Fill the form!"
                className="flex h-[34px] w-[200px] items-center justify-center rounded-full border-2 border-white text-sm font-bold text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-primary md:h-[50px] md:w-[205px] md:text-base"
                href="https://forms.gle/nGqvBQTDqCT9SyaX6"
              >
                <FaWpforms size={20} className="mr-2" />
                Fill the form!
              </a>
            </div>
          </>
        ) : currentRoute === "/" ? (
          <>
            <div className="w-full space-y-3 md:w-2/3">
              <h4 itemProp="title" className="text-xl font-bold md:text-2xl">
                Struggling to find the perfect short-term rental?
              </h4>
              <p itemProp="description" className="text-base">
                <br className="hidden" /> Connect with us on WhatsApp for
                personalized assistance.
                <br className="hidden" /> Let's make your shortlet search
                hassle-free.{" "}
              </p>
            </div>
            <div className="flex w-full items-center justify-end md:w-1/3">
              <a
                itemProp="form"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat with Raum Africa on WhatsApp"
                className="flex h-[34px] w-[200px] items-center justify-center rounded-full border-2 border-white text-sm font-bold text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-primary md:h-[50px] md:w-[205px] md:text-base"
                href="https://wa.me/message/ZVNY4C3AJ6F5I1"
              >
                <FaWhatsapp size={20} className="mr-2" />
                Chat with us!
              </a>
            </div>
          </>
        ) : null}

        {currentRoute === "/invest" ? (
          <>
            <div className="flex w-full justify-center space-y-3 md:w-2/3 md:justify-start">
              <div className="flex flex-col gap-5">
                <h4 itemProp="title" className="text-xl font-bold md:text-2xl">
                  Ready to Join the Co-Hosting Revolution?
                </h4>
                <p>
                  Contact our{" "}
                  <a
                    href="https://wa.me/message/ZVNY4C3AJ6F5I1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Support Line
                  </a>
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center md:w-1/3 md:flex-row md:justify-end">
              <a
                itemProp="form"
                target="_blank"
                rel="noopener noreferrer"
                title="Invest with Raum Africa"
                className="flex h-[34px] w-auto items-center justify-center text-nowrap rounded-full border-2 border-white px-5 text-sm font-bold text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-primary md:h-[50px] md:w-auto md:text-base"
                href="https://forms.gle/oMTy5GNUyS7k4Ub76"
              >
                Click Here to See If You Qualify to Invest!
              </a>
            </div>
          </>
        ) : null}
      </section>
    </main>
  );
};

export default CallToAction;
