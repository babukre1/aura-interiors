"use client";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Icons } from "./Icons";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="lg:hidden order-4">
      <button className="text-gray-700" onClick={toggleMenu}>
        <Menu />
      </button>
      {/* side bar */}
      <div
        className={`w-full h-full flex flex-col bg-white fixed top-0 md:px-8 px-4 left-0 z-50 transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex w-full items-center justify-between h-20 max-width border-b border-peach">
          <Link href={"/"}>
            <Icons.Logo className="h-14" />
          </Link>
          <button
            className="text-gray-700 hover:text-primary transition-colors "
            onClick={toggleMenu}
          >
            <X />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center flex-1 gap-10">
          <ul className="flex items-center flex-col gap-6">
            <li>
              <Link
                href="/about"
                className="text-2xl font-semibold capitalize text-custom-black-600 relative block
               after:block after:absolute after:left-0 after:h-1 after:bg-primary after:w-full
                after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300
                 after:origin-right after:hover:origin-left"
                onClick={toggleMenu}
              >
                about
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-2xl font-semibold capitalize text-custom-black-600 relative block
               after:block after:absolute after:left-0 after:h-1 after:bg-primary after:w-full
                after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300
                 after:origin-right after:hover:origin-left"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-2xl font-semibold capitalize text-custom-black-600 relative block
               after:block after:absolute after:left-0 after:h-1 after:bg-primary after:w-full
                after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300
                 after:origin-right after:hover:origin-left"
                onClick={toggleMenu}
              >
                Portfolio
              </Link>
            </li>
          </ul>
          <Link
            href={"/about"}
            className="relative md:hidden  px-10 py-4 overflow-hidden border border-secondary bg-primary rounded-3xl
           text-custom-black-100 font-bold  transition-all before:absolute before:bottom-0 before:left-0
            before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all
             before:duration-500 hover:text-black  hover:before:left-0 hover:before:w-full"
          >
            <span className="relative z-10">Contact Us</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
