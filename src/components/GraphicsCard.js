import React, { useState } from "react";

const Card = (props) => {
  const [image, setImage] = useState("/h2.jpg");

  const handleClick = () => {
    const imageList = ["/h2.jpg", "/JavaBlend.png"];

    const currentIndex = imageList.indexOf(image);
    const nextIndex = (currentIndex + 1) % imageList.length;
    const newImage = imageList[nextIndex];
    setImage(newImage);
  };

  return (
    <div
      id="graphics"
      className="flex items-center justify-center min-h-screen bg-white px-3"
    >
      <div className="relative my-16 max-w-4xl sm:h-[70vh]   w-full rounded-lg overflow-hidden shadow-2xl border-2 border-black">
        <div
          className="bg-cover bg-center h-96 sm:h-[60vh] hover:opacity-80 border-b-2 border-blue-500"
          style={{ backgroundImage: `url(${image})` }}
          onClick={handleClick}
        ></div>
        <div className="px-6 py-4 bg-white ">
          <div className="mb-2">
            <h1 className="text-2xl cursor-pointer font-bold text-blue-700 hover:font-serif">
              <a href="/GraphicsProjects">{props.title} &rarr;</a>
            </h1>
          </div>
          {/* <p className="text-gray-700">Card Description</p> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
