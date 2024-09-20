import React from "react";
import { Icons } from "./Icons";
import Container from "./Container";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <Container>
      <header className="fixed top-0 left-0 w-full  lg:py-3 lg:px-16 py-3 md:px-8 px-4 z-40 bg-white">
        <div className=" flex justify-between items-center  max-w-screen-2xl mx-auto">
          <a href="/" className="lg:order-1 order-2 ">
            <Icons.Logo className="h-14" />
          </a>

          <div className="hidden lg:flex gap-8 order-2">
            {" "}
            {/* Nav Links*/}
            <Link
              href="/"
              className="text-lg font-semibold capitalize text-custom-black-600 relative block
               after:block after:absolute after:left-0 after:h-1 after:bg-primary after:w-full
                after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300
                 after:origin-right after:hover:origin-left"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg font-semibold capitalize text-custom-black-600 relative block
               after:block after:absolute after:left-0 after:h-1 after:bg-primary after:w-full
                after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300
                 after:origin-right after:hover:origin-left"
            >
              about
            </Link>
            <Link
              href="/contact"
              className="text-lg font-semibold capitalize text-custom-black-600 relative block
               after:block after:absolute after:left-0 after:h-1 after:bg-primary after:w-full
                after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300
                 after:origin-right after:hover:origin-left"
            >
              contact
            </Link>
          </div>
          <Link
            href={"/contact"}
            className="relative md:block hidden lg:order-3 order-1 lg:px-10 lg:py-4 px-8 py-3.5 text-base overflow-hidden border border-secondary bg-primary rounded-3xl
           text-custom-black-100 font-bold  transition-all before:absolute before:bottom-0 before:left-0
            before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all
             before:duration-500 hover:text-black  hover:before:left-0 hover:before:w-full"
          >
            <span className="relative z-10">Contact Us</span>
          </Link>
          <MobileMenu />
        </div>
      </header>
    </Container>
  );
};

export default Navbar;
