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
    <div className="m-0 p-0 h-[12vh]">
      <nav className="flex justify-center items-center relative">
        <a href="/">
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
            isMenuOpen ? "block absolute top-0 right-0 m-2 bg-white cursor-pointer" : "hidden"
          } md:flex md:items-center md:w-auto cursor-pointer`}
        >
          <div className="text-black  md:flex-grow">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="block py-2 px-4 hover:scale-105 hover:text-black text-gray-400 rounded md:inline-block md:mt-0 md:ml-4"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="block py-2 px-4 hover:scale-105 hover:text-black text-gray-400 rounded md:inline-block md:mt-0 md:ml-4"
            >
              About
            </Link>
            <Link
              to="web-projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="block py-2 px-4 hover:scale-105 hover:text-black text-gray-400 rounded md:inline-block md:mt-0 md:ml-4"
            >
              Web Development
            </Link>
            <Link
              to="graphics-projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="block py-2 px-4 hover:scale-105 hover:text-black text-gray-400 rounded md:inline-block md:mt-0 md:ml-4"
            >
              Graphics Design
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="block py-2 px-4 hover:scale-105 hover:text-black text-gray-400 rounded md:inline-block md:mt-0 md:ml-4"
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
