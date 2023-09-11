import React, { useState } from "react";
import { motion } from "framer-motion";
import { Assets } from "../assets";

const Waitlist = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const waitlistVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={waitlistVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full flex flex-col justify-center items-center mx-auto p-8 lg:py-20 gap-16"
    >
      <div className="flex flex-col gap-6 md:gap-11">
        <h1
          className="font-semibold text-3xl  lg:text-6xl md:leading-[108px] text-center"
          style={{ lineHeight: "1" }}
        >
          Join us in creating sustainable spaces
          <br /> for life, not just living
        </h1>
        <p className="font-[400] text-sm text-center md:text-lg leading-6 p-4">
          Join our waitlist and be part of the dawn of a new era in Health.
        </p>
      </div>
      <div className="w-full" id="mc_embed_signup">
        <form
          action="https://gmail.us13.list-manage.com/subscribe/post?u=946cfc9cb47b3cdfcec580292&amp;id=e2b8a86ef0&amp;f_id=00228ae5f0"
          method="post"
          target="_blank"
          className="max-w-[1129px] mx-auto flex flex-col outline-none"
        >
          <div className="flex flex-col gap-5 md:gap-14">
            <div className="flex flex-col md:flex-row gap-5 md:gap-16">
              <input
                type="text"
                name="FNAME"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                id="mce-FNAME"
                className="bg-transparent placeholder:text-[#666] outline-none text-lg font-normal text-white p-2 border-b-[1px] border-b-[#777] md:w-[532px]"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="LNAME"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                id="mce-LNAME"
                className="bg-transparent placeholder:text-[#666] outline-none text-lg font-normal text-white p-2 border-b-[1px] border-b-[#777] md:w-[532px]"
              />
            </div>
            <input
              type="email"
              name="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="mce-EMAIL"
              required=""
              placeholder="Email"
              className="bg-transparent placeholder:text-[#666] outline-none w-full text-lg font-normal text-white p-2 border-b-[1px] border-b-[#777]"
            />
          </div>
          <input
            type="submit"
            value="Submit"
            name="submit"
            id="mc-embedded-subscribe"
            className="mt-[60px] bg-[#0000FF] rounded-full p-2 md:p-4 w-full md:w-[715px] mx-auto"
          />
        </form>
      </div>

      <div className="p-5 flex flex-col justify-center items-center gap-5">
        <h1 className="font-bold text-3xl">Want to join our Beta Testers?</h1>
        <div className="flex justify-center items-center gap-5">
          <button className="bg-[#1D2025] flex justify-between items-center gap-6 p-4 rounded-lg">
            <img src={Assets.appleicon} alt="apple-icon" />
            <p className="flex flex-col items-end">
              Download<span className="font-bold">For IOS</span>
            </p>
          </button>
          <button className="bg-[#1D2025] flex justify-between items-center gap-6 p-4 rounded-lg">
            <img src={Assets.playstoreicon} alt="playstore-icon" />
            <p className="flex flex-col items-end">
              Download<span className="font-bold">For Android</span>
            </p>
          </button>
        </div>
      </div>

      {/* Move the script tags outside of the component */}
      <script
        type="text/javascript"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
      ></script>
    </motion.div>
  );
};

export default Waitlist;
