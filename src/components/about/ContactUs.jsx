import React from "react";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiLogoYoutube,
} from "react-icons/bi";
import "../../index.css";

const ContactUs = () => {
  return (
    <main className="w-full mx-auto h-auto md:h-screen flex flex-col md:flex-row items-center border-none">
      <div className="w-full md:w-3/5 h-full">
        <div className="w-full md:w-5/6 h-full flex flex-col justify-center items-start gap-5 p-8 md:p-28">
          <h1 className="text-2xl md:text-5xl font-bold">Get in touch</h1>
          <p className="text-base md:text-lg font-medium text-[#6c6c6c]">
            Do you have questions, comment, or a suggestion for us? Whether you
            need more information about our products or services, we would love
            to hear from you
          </p>
          <div className="flex gap-3">
            <CiMail />
            <p className="flex flex-col gap-1 text-base md:text-lg">
              Email <span className="text-[#6c6c6c]">info@raumgroup.io</span>
            </p>
          </div>
          <div className="flex gap-3">
            <BsTelephone />
            <p className="flex flex-col gap-1 text-base md:text-lg">
              Phone <span className="text-[#6c6c6c]">+234 814 822 8901</span>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p>Follow us on social media </p>
            <div className="flex gap-3 justify-start items-center">
              <BiLogoFacebook size={20} />
              <BiLogoTwitter size={20} />
              <BiLogoInstagramAlt size={20} />
              <BiLogoLinkedin size={20} />
              <BiLogoYoutube size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/5 h-full flex p-8 bg-white text-black relative">
        <div className="md:absolute top-10 left-[-190px] w-full h-full mx-auto md:w-[600px] md:h-[90%] bg-white rounded-3xl drop-shadow-about">
          <div className="p-8 py-10 w-full h-full flex flex-col justify-center items-center">
            <form
              action=""
              className="w-full flex flex-col md:grid md:grid-cols-2 gap-5"
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
                  className="p-4 border-[1px] border-[#6C6C6C] text-[#6c6c6c] rounded-full outline-none"
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
                  className="p-4 border-[1px] border-[#6C6C6C] text-[#6c6c6c] rounded-full outline-none"
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
                  className="p-4 border-[1px] border-[#6C6C6C] text-[#6c6c6c] rounded-full outline-none"
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
                  className="p-4 border-[1px] border-[#6C6C6C] text-[#6c6c6c] rounded-full outline-none"
                />
              </label>
              <label htmlFor="" className="col-span-2 flex flex-col gap-2">
                Leave us a message input:
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="w-full h-28 p-2 border-[1px] border-[#6C6C6C] text-[#6c6c6c] rounded-xl outline-none resize-none overflow-hidden"
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
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
