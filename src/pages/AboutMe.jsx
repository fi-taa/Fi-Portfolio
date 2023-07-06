import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const AboutMe = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`font-sans antialiased leading-normal tracking-wider bg-cover h-screen ${
        darkMode ? "text-gray-100 bg-gray-900" : "text-gray-900"
      }`}
      style={{
        backgroundImage: "url('https://source.unsplash.com/1L71sPT5XKc')",
      }}
    >
      <div className="max-w-4xl flex items-center h-screen  flex-wrap mx-auto sm:p-20 py-16  lg:my-0">
        <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
          <div className="p-4 md:p-12 text-center lg:text-left">
            <div
              className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/pro.png')",
              }}
            ></div>
            <h1 className="text-3xl font-bold pt-8 lg:pt-0">Fita Wegene</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
            Frontend Developer and Graphics
              Designer
            </p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              <FiMoon className="mr-2" />
              Location - Addis Ababa,Ethiopia
            </p>
            <p className="pt-2 sm:pt-8 sm:text-sm text-xs">
              Welcome to my portfolio! I'm a frontend developer and graphics
              designer. I'm currently a computer science student, set to
              graduate in 2024. I combine my technical skills with a keen eye
              for aesthetics to create visually stunning and user-friendly
              digital experiences. Explore my portfolio to see my passion and
              expertise in action.
            </p>
            <div className=" ">
              <button className="bg-blue-700 mt-2 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full">
                Get In Touch
              </button>
            </div>
            <div className="mt-6 pb-2 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
              <a
                className="link"
                href="#"
                data-tippy-content="@facebook_handle"
              >
                <FiMoon className="mr-2" />
              </a>
              <a className="link" href="#" data-tippy-content="@twitter_handle">
                <FiMoon className="mr-2" />
              </a>
              <a className="link" href="#" data-tippy-content="@github_handle">
                <FiMoon className="mr-2" />
              </a>
              <a
                className="link"
                href="#"
                data-tippy-content="@unsplash_handle"
              >
                <FiMoon className="mr-2" />
              </a>
              <a className="link" href="#" data-tippy-content="@dribble_handle">
                <FiMoon className="mr-2" />
              </a>
              <a
                className="link"
                href="#"
                data-tippy-content="@instagram_handle"
              >
                <FiMoon className="mr-2" />
              </a>{" "}
              <a className="link" href="#" data-tippy-content="@youtube_handle">
                <FiMoon className="mr-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <img
            src='/pro-l.png'
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
          />
        </div>
        <div className="absolute top-0 right-0 h-12 w-18 p-4">
          <button
            className="js-change-theme focus:outline-none"
            onClick={toggleDarkMode}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
