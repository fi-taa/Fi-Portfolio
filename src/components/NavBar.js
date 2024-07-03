import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { Link, animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (section) => {
    scroll.scrollTo(section, {
      duration: 1000,
      smooth: "easeInOutQuart",
    });
    toggleMenu();
  };

  return (
    <div className="m-0 p-0 h-[12vh] bg-black">
      <nav className="flex justify-center items-center relative">
        <a href="/">
          <div className="text-white m-5 font-medium text-3xl overline">Fitaa</div>
        </a>
        {/* Hamburger menu icon */}
        <div className="ml-auto mr-4 md:hidden">
          {isMenuOpen ? (
            <IoCloseOutline
              className="text-white h-6 w-6 cursor-pointer hover:text-red-500 hover:scale-125"
              onClick={toggleMenu}
            />
          ) : (
            <GiHamburgerMenu
              className="fill-white h-6 w-6 cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
        {/* Menu items */}
        <div
          className={`${
            isMenuOpen ? "block absolute top-0 right-0 m-2  cursor-pointer" : "hidden"
          } md:flex md:items-center md:w-auto cursor-pointer`}
        >
          <div className="text-black md:flex-grow">
            <a
              href="/"
              className="block py-2 px-4 hover:scale-105 hover:text-white text-gray-400 rounded md:inline-block md:mt-0 md:ml-4"
            >
              Home
            </a>
            <a
              href="/AboutMe"
              className="block py-2 px-4 hover:scale-105 hover:text-white text-gray-400 rounded md:inline-block md:mt-0 md:ml-4"
            >
              About
            </a>
            <a
              href="/Developments"
              className="block py-2 px-4 hover:scale-105 hover:text-white text-gray-400 rounded md:inline-block md:mt-0 md:ml-4"
            >
              Software Development
            </a>
            <a
              href="/GraphicsProjects"
              className="block py-2 px-4 hover:scale-105 hover:text-white text-gray-400 rounded md:inline-block md:mt-0 md:ml-4"
            >
              Graphics Design
            </a>
            <a
              href="/MachineLearningProjects"
              className="block py-2 px-4 hover:scale-105 hover:text-white text-gray-400 rounded md:inline-block md:mt-0 md:ml-4"
            >
              Machine Learning
            </a>
            <a
              href="/UIDesignProjects"
              className="block py-2 px-4 hover:scale-105 hover:text-white text-gray-400 rounded md:inline-block md:mt-0 md:ml-4"
            >
              UI/UX Design
            </a>
            <Link
              href="#contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="block py-2 px-4 hover:scale-105 hover:text-white text-gray-400 rounded md:inline-block md:mt-0 md:ml-4"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
