import React, { useState } from "react";

const WebCard = (props) => {
  const [image, setImage] = useState("/Rate.png");

  const handleClick = () => {
    const imageList = ["/Rate.png", "/NewsLetter.png"];

    const currentIndex = imageList.indexOf(image);
    const nextIndex = (currentIndex + 1) % imageList.length;
    const newImage = imageList[nextIndex];
    setImage(newImage);
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 relative">
      <div className="relative max-w-full h-64 overflow-hidden rounded-lg shadow-lg bg-black">
        <div
          className="h-full bg-cover bg-center hover:opacity-80 border-b-2 border-blue-500"
          style={{ backgroundImage: `url(${image})` }}
          onClick={handleClick}
        ></div>
        <div className="absolute bottom-0 p-2 bg-white/70">
          <div className="mb-2">
            <h1 className="text-xl font-bold  hover:font-serif">
              <a href="/Developments" className="text-gray-900 hover:text-blue-600">
                {props.title} &rarr;
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebCard;


