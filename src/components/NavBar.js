import Image from "next/image";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="m-0 p-0 h-[12vh]">
      <nav className="flex justify-center items-center relative">
          <a href="/" >
            <Image src="/logo-icon.svg" width={100} height={100} />
          </a>
        <div className="ml-auto mr-4">
          {isMenuOpen ? (
            <IoCloseOutline
              className="h-6 w-6 cursor-pointer md:hidden absolute top-0 right-0 m-2 z-10 hover:text-red-500 hover:scale-125"
              onClick={toggleMenu}
            />
          ) : (
            <GiHamburgerMenu
              className="h-6 w-6 cursor-pointer md:hidden"
              onClick={toggleMenu}
            />
          )}
        </div>
        <div
          className={`${
            isMenuOpen ? "block absolute top-0 right-0 m-2 bg-white" : "hidden"
          } md:flex md:items-center md:w-auto`}
        >
          <div className="text-black  md:flex-grow">
            <a
              href="/"
              className="block py-2 px-4 hover:scale-105 hover:text-black text-gray-400 rounded md:inline-block md:mt-0 md:ml-4"
            >
              Home
            </a>
            <a
              href="/about"
              className="block py-2 px-4 hover:scale-105 hover:text-black text-gray-400 rounded md:inline-block md:mt-0 md:ml-4"
            >
              About
            </a>
            <a
              href="/#webDev"
              className="block py-2 px-4 hover:scale-105 hover:text-black text-gray-400 rounded md:inline-block md:mt-0 md:ml-4"
            >
              Web Development
            </a>
            <a
              href="#graphics"
              className="block py-2 px-4 hover:scale-105 hover:text-black text-gray-400 rounded md:inline-block md:mt-0 md:ml-4"
            >
              Graphics Design
            </a>
            <a
              href="/#contact"
              className="block py-2 px-4 hover:scale-105 hover:text-black text-gray-400 rounded md:inline-block md:mt-0 md:ml-4"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
