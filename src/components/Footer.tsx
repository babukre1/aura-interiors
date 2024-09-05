import React from "react";
import { Icons } from "./Icons";
import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <section className="lg:mt-48 md:mt-32 mt-24 lg:px-16 md:px-8 px-4 pb-4 pt-8 bg-bg2 w-full">
      <div className="flex justify-center items-center flex-col w-full max-w-screen-2xl mx-auto">
        {/* CTA and Logo Wrapper */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-start items-center w-full lg:px-16 px-4">
          <div className="flex flex-col  gap-4  lg:w-1/2  lg:items-start items-center">
            <Icons.Logo width={100} />
            <p className="text-base text-custom-black-500 max-w-80 lg:text-left text-center ">
              Creating elegant interiors that reflect your unique style and
              personality, with exceptional service and attention to detail
            </p>
          </div>
          <div className="flex flex-col gap-4  lg:w-1/2 sm:w-[336px] w-[300px]  ">
            <h6 className="larken text-xl font-bold text-center">
              Sign up for the Newsletter
            </h6>
            <div className="max-w-[360px]">
              <input
                className="px-6 py-3 w-2/3"
                placeholder="user@example.com"
                type="email"
              />
              <button className=" w-1/3 px-6 py-3 bg-primary text-custom-black-100 capitalize text-base font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* social Links, copyright and prifacy policy wrapper */}
        <div
          className="flex xl:flex-row flex-col lg:justify-between
         justify-center items-center mt-16 pt-4 w-full lg:gap-0 gap-8"
        >
          {/* Actual social links and prifacy policy */}
          <div className="hidden xl:flex justify-between gap-4 ">
            <a
              href="https://www.instagram.com/bkr_bednow/#"
              className="group border-2 p-3 border-black rounded-full  bg-secondary hover:bg-transparent cursor-pointer"
            >
              <Instagram
                strokeWidth={1.3}
                size={20}
                className="stroke-white group-hover:stroke-black "
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61555123894999"
              className="group border-2 p-3 border-black rounded-full  bg-secondary hover:bg-transparent cursor-pointer"
            >
              <Facebook
                strokeWidth={1.3}
                size={20}
                className="stroke-white group-hover:stroke-black "
              />
            </a>
            <a
              href="https://www.linkedin.com/in/abubakr-ali-665aa031a/"
              className="group border-2 p-3 border-black rounded-full  bg-secondary hover:bg-transparent cursor-pointer"
            >
              <Linkedin
                strokeWidth={1.3}
                size={20}
                className="stroke-white group-hover:stroke-black "
              />
            </a>
            <a
              href="https://x.com/babubkre"
              className="group border-2 p-3 border-black rounded-full  bg-secondary hover:bg-transparent cursor-pointer"
            >
              <Twitter
                strokeWidth={1.3}
                size={20}
                className="stroke-white group-hover:stroke-black "
              />
            </a>
          </div>
          <div className="hidden xl:flex items-center gap-8">
            <a
              href="#"
              className="larken text-base font-bold text-custom-black-600"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="larken text-base font-bold text-custom-black-600"
            >
              Terms & Conditions
            </a>
          </div>

          {/* Footer links Mobile and tablet */}
          <div className="xl:hidden w-full flex justify-between md:items-start items-center md:flex-row flex-col gap-8">
            <div className="flex items-center gap-8">
              <a
                href="#"
                className="larken text-base font-bold text-custom-black-600"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="larken text-base font-bold text-custom-black-600"
              >
                Terms & Conditions
              </a>
            </div>
            <div className="flex justify-center gap-8">
              <a
                href="https://www.instagram.com/bkr_bednow/"
                className="group border-2 p-3 border-black rounded-full  bg-secondary hover:bg-transparent cursor-pointer"
              >
                <Instagram
                  strokeWidth={1.3}
                  size={20}
                  className="stroke-white group-hover:stroke-black "
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61555123894999"
                className="group border-2 p-3 border-black rounded-full  bg-secondary hover:bg-transparent cursor-pointer"
              >
                <Facebook
                  strokeWidth={1.3}
                  size={20}
                  className="stroke-white group-hover:stroke-black "
                />
              </a>
              <a
                href="https://www.linkedin.com/in/abubakr-ali-665aa031a/"
                className="group border-2 p-3 border-black rounded-full  bg-secondary hover:bg-transparent cursor-pointer"
              >
                <Linkedin
                  strokeWidth={1.3}
                  size={20}
                  className="stroke-white group-hover:stroke-black "
                />
              </a>
              <a
                href="https://x.com/babubkre"
                className="group border-2 p-3 border-black rounded-full  bg-secondary hover:bg-transparent cursor-pointer"
              >
                <Twitter
                  strokeWidth={1.3}
                  size={20}
                  className="stroke-white group-hover:stroke-black "
                />
              </a>
            </div>
          </div>
          <p className="text-base text-custom-black-400 lg:order-1 order-3">
            © Copyright Robert Fox 2022. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
