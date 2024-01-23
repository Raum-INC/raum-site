import React from "react";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
} from "react-icons/bi";
import "../../index.css";
import { motion } from "framer-motion";

const ContactUs = () => {
  const containerVariant = {
    hidden: {
      opacity: 0,
      translateX: -50,
    },
    visible: {
      opacity: 1,
      translateX: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const contactVariant = {
    hidden: {
      opacity: 0,
      translateY: 50,
    },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <main className="w-full mx-auto h-auto lg:h-screen flex flex-col lg:flex-row justify-center items-center">
      <div className="w-full lg:w-3/5 h-[650px] lg:h-full">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-4/5 h-full flex flex-col justify-start items-start gap-5 p-8 lg:p-28"
        >
          <h1 className="text-2xl lg:text-5xl font-bold">Get in touch</h1>
          <p className="text-base lg:text-lg font-medium text-[#6c6c6c]">
            Do you have questions, comment, or a suggestion for us? Whether you
            need more information about our products or services, we would love
            to hear from you.
          </p>
          <div className="flex gap-3">
            <CiMail className="mt-1" />
            <p className="flex flex-col gap-1 text-base lg:text-lg">
              Email <span className="text-[#6c6c6c]">hello@raumhq.co</span>
            </p>
          </div>
          <div className="flex gap-3">
            <BsTelephone className="mt-1" />
            <p className="flex flex-col gap-1 text-base lg:text-lg">
              Phone <span className="text-[#6c6c6c]">+234 814 822 8901</span>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p>Follow us on social media </p>
            <div className="flex gap-3 justify-start items-center">
              <a href="https://www.facebook.com/raumincc">
                <BiLogoFacebook size={20} />
              </a>
              <a href="https://twitter.com/rauminc">
                <BiLogoTwitter size={20} />
              </a>
              <a href="https://www.instagram.com/rauminc.hq/">
                <BiLogoInstagramAlt size={20} />
              </a>
              <a href="https://www.linkedin.com/company/rauminc/">
                <BiLogoLinkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-full lg:w-2/5 h-[700px] lg:h-full bg-white lg:relative">
        <motion.div
          variants={contactVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute left-0 right-0 top-[550px] lg:top-10 lg:left-[-190px] w-11/12 h-[800px] mx-auto lg:w-[600px] lg:h-[90%] bg-white rounded-3xl drop-shadow-about"
        >
          <div className="w-full h-full flex flex-col justify-center items-center">
            <form
              action=""
              className="p-8 py-10 w-full flex flex-col lg:grid lg:grid-cols-2 gap-5"
            >
              <label
                htmlFor=""
                className="flex flex-col gap-3 text-primary_text font-bold"
              >
                Name
                <input
                  type="text"
                  name="FName"
                  placeholder="Full Name"
                  className="font-normal p-4 border-[1px] border-[##F1F1F1] text-[##F1F1F1] rounded-full outline-none"
                />
              </label>
              <label
                htmlFor=""
                className="flex flex-col gap-3 text-primary_text font-bold"
              >
                Email
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  className="font-normal p-4 border-[1px] border-[##F1F1F1] text-[##F1F1F1] rounded-full outline-none"
                />
              </label>
              <label
                htmlFor=""
                className="flex flex-col gap-3 text-primary_text font-bold"
              >
                Phone
                <input
                  type="tel"
                  name="Phone_Number"
                  placeholder="Phone"
                  className="font-normal p-4 border-[1px] border-[##F1F1F1] text-[##F1F1F1] rounded-full outline-none"
                />
              </label>
              <label
                htmlFor=""
                className="flex flex-col gap-3 text-primary_text font-bold"
              >
                Subject
                <input
                  type="text"
                  name="Subject"
                  placeholder="Subject"
                  className="font-normal p-4 border-[1px] border-[##F1F1F1] text-[##F1F1F1] rounded-full outline-none"
                />
              </label>
              <label htmlFor="" className="col-span-2 flex flex-col gap-2">
                Leave us a message input:
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="font-normal w-full h-28 p-2 border-[1px] border-[##F1F1F1] text-black rounded-xl outline-none resize-none overflow-hidden"
                ></textarea>
              </label>
              <input
                type="submit"
                value="Send message"
                name="send message"
                className="col-span-2 p-4 rounded-full bg-primary_text text-white font-semibold"
              />
            </form>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ContactUs;
