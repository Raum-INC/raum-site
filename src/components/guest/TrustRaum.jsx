import React from "react";
import { MdSecurity } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { FadeIn } from "../Motion";

const TrustRaum = () => {
  const trustData = [
    {
      icon: (
        <MdSecurity
          size={40}
          className="rounded-md bg-[#2C2B30] p-2 text-[#B6B0CD]"
        />
      ),
      title: `Verified listings`,
      desc: `All properties verified and updated daily`,
    },
    {
      icon: (
        <FaClock
          size={40}
          className="rounded-md bg-[#2C2B30] p-2 text-[#B6B0CD]"
        />
      ),
      title: `24/7 Support`,
      desc: `Get help whenever you need it`,
    },
    {
      icon: (
        <MdPeopleAlt
          size={40}
          className="rounded-md bg-[#2C2B30] p-2 text-[#B6B0CD]"
        />
      ),
      title: `2k+ Happy Clients`,
      desc: `Trusted by homebuyers nationwide`,
    },
    {
      icon: (
        <IoMdLock
          size={40}
          className="rounded-md bg-[#2C2B30] p-2 text-[#B6B0CD]"
        />
      ),
      title: `Secure platform`,
      desc: `Your data is protected and private`,
    },
    {
      icon: (
        <IoCheckmarkCircle
          size={40}
          className="rounded-md bg-[#2C2B30] p-2 text-[#B6B0CD]"
        />
      ),
      title: `No Hidden Fees`,
      desc: `Transparent pricing, no surprises`,
    },
    {
      icon: (
        <BsGlobeEuropeAfrica
          size={40}
          className="rounded-md bg-[#2C2B30] p-2 text-[#B6B0CD]"
        />
      ),
      title: `Multi-region Availability`,
      desc: `We are available in multiple countries`,
    },
  ];

  return (
    <FadeIn>
      <main className="my-10 flex h-auto w-full flex-col items-center justify-center gap-10 p-8">
        <h4 className="text-xl font-semibold xl:text-4xl">Why trust Raum</h4>
        <p className="text-center text-lg xl:text-2xl">
          We're committed to providing a secure, transparent, and reliable
          platform
          <br /> for all your real estate needs.
        </p>
        <section className="mx-auto mt-10 grid h-auto w-full max-w-4xl grid-cols-1 items-center justify-center gap-20 gap-y-20 xl:grid-cols-2">
          {trustData.map((item, index) => (
            <div key={index} className="flex w-full gap-5">
              {item.icon}
              <p className="flex flex-col gap-2 text-lg xl:text-xl">
                {item.title}{" "}
                <span className="xl:tex-lg text-base text-[#B7B7B7]">
                  {item.desc}
                </span>
              </p>
            </div>
          ))}
        </section>
      </main>
    </FadeIn>
  );
};

export default TrustRaum;
