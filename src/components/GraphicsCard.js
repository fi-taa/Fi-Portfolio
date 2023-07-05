import React, { useState } from "react";

const GraphicsCard = (props) => {
  const [image, setImage] = useState("/h2.jpg");

  const handleClick = () => {
    const imageList = ["/h2.jpg", "/JavaBlend.png"];
    const currentIndex = imageList.indexOf(image);
    const nextIndex = (currentIndex + 1) % imageList.length;
    const newImage = imageList[nextIndex];
    setImage(newImage);
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 relative">
      <div className="relative max-w-full h-64 overflow-hidden rounded-lg shadow-lg">
        <div
          className="h-full bg-cover bg-center hover:opacity-80"
          style={{ backgroundImage: `url(${image})` }}
          onClick={handleClick}
        ></div>
        <div className="absolute bottom-0 p-2 bg-white/70">
          <div className="mb-2">
            <h1 className="text-xl font-bold hover:font-serif">
              <a href="/GraphicsProjects" className="text-gray-900 hover:text-blue-600">
                {props.title} &rarr;

              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicsCard;