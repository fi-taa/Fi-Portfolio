import React from "react";
import Tag from "../components/Tag";
import { FaReact, FaCss3, FaHtml5 } from "react-icons/fa";
import { SiNextDotJs, SiTailwindcss, siTailwindcss } from "react-icons/si";
import Image from "next/image";

export default function Detail() {
  return (
    <>
      <div>
        <div className="dark:bg-gray-900 py-5">
          <a
            href="./ProjectView"
            className="text-xl text-white m-3 hover:text-gray-500"
          >
            &larr; Back
          </a>
          <div className="mt-4 mx-auto container w-full flex items-center md:flex-row flex-col justify-between px-6 lg:px-0">
            <div className="flex flex-col justify-start items-start lg:w-2/5 px-2 lg:px-0">
              <div>
                <p className="lg:text-sm text-xs text-gray-600 dark:text-gray-300 font-medium leading-none">
                  Fi-Portfolio
                </p>
              </div>
              <div className="md:mt-3">
                <p className="text-gray-800 dark:text-white lg:text-4xl text-3xl font-extrabold leading-9">
                  Rating Component
                </p>
              </div>
              <div className="md:mt-3">
                <p className="lg:text-base text-sm leading-normal text-gray-600 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ornare ac eros congue ullamcorper. Fusce porta elementum
                </p>
              </div>
              <div className="flex gap-2 m-6">
                <Tag icon={<FaReact />} color="black" />
                <Tag icon={<SiTailwindcss />} color="blue" />
                <Image
                  src="/nextjs.svg"
                  width={30}
                  height={30}
                  className="bg-white rounded-full p-1"
                ></Image>
              </div>
            </div>
            <div className="flex justify-center items-center lg:w-2/5 mt-10 md:mt-0">
              <img className="w-full" src="/Rate.png" alt="laptops" />
            </div>
          </div>
          <div className="mx-auto container w-full flex xl:flex-row flex-col justify-between items-start mt-12 px-6 lg:px-0">
            <div className="flex flex-col justify-start items-start xl:w-2/4">
              <div>
                <h2 className="text-gray-800 dark:text-white lg:text-3xl text-2xl font-bold leading-7">
                  The details
                </h2>
              </div>
              <div className="mt-8">
                <p className="text-gray-800 dark:text-white lg:text-base text-sm leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ornare ac eros congue ullamcorper. Fusce porta elementum
                  euismod. Curabitur venenatis mollis bibendum. Proin porta
                  imperdiet nunc ac semper. Nullam in eros non tellus malesuada
                  lacinia sed id justo. Donec consectetur ut sapien dignissim
                  faucibus. Aliquam volutpat fringilla magna at varius.
                  Pellentesque tempor arcu quis ultricies auctor. Nam et
                  imperdiet ligula, vel laoreet lectus. Praesent vel dui velit.
                  Sed viverra scelerisque lacus nec dictum.
                </p>
              </div>
              <div className="mt-8 w-full">
                <img
                  className="w-full"
                  src="/Rate.png"
                  alt="rate"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
